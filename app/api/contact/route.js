const TO_EMAIL = 'subhannadeem06@gmail.com';
const RESEND_API_URL = 'https://api.resend.com/emails';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return Response.json(
        { error: 'Email service not configured.' },
        { status: 500 },
      );
    }

    const payload = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      reply_to: email.trim(),
      subject: `New portfolio inquiry from ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\\n/g, '<br />')}</p>
        </div>
      `,
    };

    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.json().catch(() => ({}));
      console.error('Resend API error', errorBody);
      return Response.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error handling contact request', error);
    return Response.json(
      { error: 'Unable to send your message. Please try again.' },
      { status: 500 },
    );
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
