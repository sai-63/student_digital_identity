'use client'

// Client-side wrapper: forward requests to the server API that uses `web-push`.
export async function subscribeUser(sub: PushSubscription) {
  const res = await fetch('/api/push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'subscribe', subscription: sub }),
  })
  return res.json()
}

export async function unsubscribeUser() {
  const res = await fetch('/api/push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'unsubscribe' }),
  })
  return res.json()
}

export async function sendNotification(message: string) {
  const res = await fetch('/api/push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'send', message }),
  })
  return res.json()
}