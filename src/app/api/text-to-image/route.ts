import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt, aspectRatio = "1:1", outputFormat = "webp" } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait'
      },
      body: JSON.stringify({
        input: {
          prompt: prompt,
          go_fast: true,
          megapixels: "1",
          num_outputs: 1,
          aspect_ratio: aspectRatio,
          output_format: outputFormat,
          output_quality: 80,
          num_inference_steps: 4
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Replicate API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to generate image' },
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
      data: {
        id: data.id,
        status: data.status,
        output: data.output,
        created_at: data.created_at,
        completed_at: data.completed_at
      }
    })

  } catch (error) {
    console.error('Text-to-image API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 