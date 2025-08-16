import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { planId, planName, price } = await request.json()

    if (!planId || !planName || !price) {
      return NextResponse.json(
        { error: 'Missing required fields: planId, planName, price' },
        { status: 400 }
      )
    }

    // Create checkout session with Creem
    const response = await fetch('https://api.creem.io/v1/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CREEM_API_KEY || '',
      },
      body: JSON.stringify({
        product_id: planId,
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/success?plan=${planName}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/cancel`,
        metadata: {
          plan_name: planName,
          plan_price: price.toString(),
          source: 'nano-banana-pricing'
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Creem API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    if (data.error) {
      return NextResponse.json(
        { error: data.error },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      checkout_url: data.checkout_url || data.url,
      session_id: data.id
    })

  } catch (error) {
    console.error('Create checkout API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}