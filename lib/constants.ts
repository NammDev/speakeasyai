export const plansMap = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Get started with SpeakEasy!',
    price: '10',
    items: ['3 Blog Posts', '3 Transcription'],
    paymentLink: 'https://buy.stripe.com/test_eVa7tVdl1cM474I7ss',
    priceId: process.env.NODE_ENV === 'development' ? 'price_1PztMoBV3an9eDVdJet0Dim5' : '',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'All Blog Posts, let’s go!',
    price: '19.99',
    items: ['Unlimited Blog Posts', 'Unlimited Transcriptions'],
    paymentLink: 'https://buy.stripe.com/test_dR63dF0yf5jC1KoeUV',
    priceId: process.env.NODE_ENV === 'development' ? 'price_1PztNjBV3an9eDVdBrTyOtRJ' : '',
  },
]

export const ORIGIN_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://speakeasyai-demo.vercel.app'
