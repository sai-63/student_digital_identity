export const runtime = 'nodejs';

import { NextResponse } from 'next/server'
import webpush from 'web-push';

// Configure VAPID details using environment variables
webpush.setVapidDetails(
  `mailto:admin@example.com`,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || process.env.VAPID_PUBLIC_KEY || '',
  process.env.VAPID_PRIVATE_KEY || ''
)

// Simple in-memory subscription storage for demo purposes
let subscription: any = null

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { action, subscription: sub, message } = body || {}

    if (action === 'subscribe') {
      subscription = sub
      return NextResponse.json({ success: true })
    }

    if (action === 'unsubscribe') {
      subscription = null
      return NextResponse.json({ success: true })
    }

    if (action === 'send') {
      if (!subscription) {
        return NextResponse.json({ success: false, error: 'No subscription available' }, { status: 400 })
      }

      await webpush.sendNotification(
        subscription,
        JSON.stringify({ title: 'Test Notification', body: message })
      )

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 })
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
