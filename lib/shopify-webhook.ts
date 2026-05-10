import crypto from 'crypto'

export function verifyShopifyWebhook(rawBody: string, hmacHeader: string): boolean {
  const secret = process.env.SHOPIFY_WEBHOOK_SECRET
  if (!secret) return false

  const hash = crypto
    .createHmac('sha256', secret)
    .update(rawBody, 'utf8')
    .digest('base64')

  try {
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hmacHeader))
  } catch {
    return false
  }
}

export interface ShopifyOrder {
  id: number
  order_number: number
  email: string
  contact_email?: string
  financial_status: string
}
