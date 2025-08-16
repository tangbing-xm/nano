# Creem Payment Integration Guide

## Overview

This project now includes Creem payment integration for the pricing section. Users can click on "Upgrade to Basic" or "Upgrade to Pro" buttons to be redirected to Creem's secure checkout page.

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Creem Payment API
CREEM_API_KEY=your_creem_api_key_here

# Base URL for your application (used for payment redirects)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Creem Dashboard Setup

1. **Create a Creem Account**: Sign up at [creem.io](https://creem.io)

2. **Create Products**: In your Creem dashboard, create two products:
   - Basic Plan ($9.9/month)
   - Pro Plan ($19.9/month)

3. **Update Product IDs**: Replace the placeholder product IDs in `src/components/pricing-section.tsx`:
   ```typescript
   const PRICING_TIERS: PricingTier[] = [
     {
       id: 'prod_your_actual_basic_product_id', // Replace this
       name: 'Basic Plan',
       // ... rest of config
     },
     {
       id: 'prod_your_actual_pro_product_id', // Replace this
       name: 'Pro Plan',
       // ... rest of config
     }
   ]
   ```

4. **Get API Key**: Copy your API key from the Creem dashboard and add it to your `.env.local` file.

## How It Works

### Payment Flow

1. **User clicks upgrade button** → Triggers `handlePlanSelect()` function
2. **Create checkout session** → Calls `/api/create-checkout` endpoint
3. **Creem API call** → Creates a checkout session with Creem
4. **Redirect to payment** → User is redirected to Creem's secure checkout page
5. **Payment completion** → User is redirected back to success/cancel pages

### API Endpoints

- **POST `/api/create-checkout`**: Creates a Creem checkout session
- **GET `/payment/success`**: Payment success page
- **GET `/payment/cancel`**: Payment cancellation page

### Key Features

- **Loading states**: Buttons show loading spinner during checkout creation
- **Error handling**: Graceful error handling with user feedback
- **Metadata tracking**: Includes plan information in checkout metadata
- **Responsive design**: Works on all device sizes

## Testing

### Test Mode

Creem supports test mode for development. Make sure to:

1. Use test API keys during development
2. Test both success and cancel flows
3. Verify metadata is passed correctly

### Production Deployment

Before going live:

1. Replace test API keys with production keys
2. Update `NEXT_PUBLIC_BASE_URL` to your production domain
3. Test the complete payment flow
4. Set up webhooks for payment notifications (optional)

## Customization

### Styling

The payment components use the existing design system:
- Consistent with the dark theme
- Orange/red primary color (#FF4400)
- Responsive design patterns

### Adding More Plans

To add additional pricing tiers:

1. Create the product in Creem dashboard
2. Add the tier to `PRICING_TIERS` array
3. The system will automatically handle the new plan

## Security Notes

- API keys are server-side only (not exposed to client)
- Payment processing is handled entirely by Creem
- No sensitive payment data is stored locally
- HTTPS is required for production

## Support

For Creem-specific issues, refer to:
- [Creem Documentation](https://docs.creem.io)
- [Creem Support](https://creem.io/support)

For integration issues, check the browser console and server logs for detailed error messages.