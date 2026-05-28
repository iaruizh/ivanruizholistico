import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, type, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Option 1: Resend (recommended - add RESEND_API_KEY to .env.local)
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'sitio@ivanruizholistico.com',
          to: ['iaruizh@gmail.com'],
          subject: `Nuevo mensaje de ${name} — ${type || 'Consulta general'}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0E9A4C;">Nuevo contacto desde ivanruizholistico.com</h2>
              <table style="width:100%; border-collapse: collapse;">
                <tr><td style="padding:8px; font-weight:bold;">Nombre:</td><td style="padding:8px;">${name}</td></tr>
                <tr><td style="padding:8px; font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
                <tr><td style="padding:8px; font-weight:bold;">WhatsApp:</td><td style="padding:8px;">${phone || '—'}</td></tr>
                <tr><td style="padding:8px; font-weight:bold;">Tipo:</td><td style="padding:8px;">${type || '—'}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Mensaje:</td><td style="padding:8px;">${message}</td></tr>
              </table>
              <hr style="border-color: #0E9A4C; margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">Iván Alejandro Ruiz · ivanruizholistico.com</p>
            </div>
          `,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error('Resend error:', err)
        return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
      }
    } else {
      // Fallback: log to console (dev mode)
      console.log('Contact form submission:', { name, email, phone, type, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
