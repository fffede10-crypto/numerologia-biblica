import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = 'Numerología Bíblica <noreply@numerologiabiblica.com>'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://numerologiabiblica.com'

export async function sendWelcomeEmail(email: string, tempPassword: string): Promise<void> {
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Tu acceso a Numerología Bíblica está listo',
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#0F0A1E;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0F0A1E;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1A1035;border-radius:12px;border:1px solid #7C3AED;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#7C3AED,#4C1D95);padding:40px;text-align:center;">
            <h1 style="color:#F59E0B;font-size:28px;margin:0;letter-spacing:2px;">✦ NUMEROLOGÍA BÍBLICA ✦</h1>
            <p style="color:#C4B5FD;margin:8px 0 0;">Tu camino de descubrimiento comienza hoy</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="color:#E2E8F0;font-size:16px;line-height:1.6;">
              Gracias por tu compra. Tu cuenta ha sido creada y estás listo para explorar el significado profundo de los números en la Escritura.
            </p>
            <div style="background:#0F0A1E;border:1px solid #7C3AED;border-radius:8px;padding:24px;margin:24px 0;">
              <p style="color:#A78BFA;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 12px;">Tus credenciales de acceso</p>
              <p style="color:#E2E8F0;margin:4px 0;"><strong style="color:#F59E0B;">Email:</strong> ${email}</p>
              <p style="color:#E2E8F0;margin:4px 0;"><strong style="color:#F59E0B;">Contraseña temporal:</strong> <code style="background:#1A1035;padding:2px 8px;border-radius:4px;font-size:16px;color:#A78BFA;">${tempPassword}</code></p>
            </div>
            <div style="text-align:center;margin:32px 0;">
              <a href="${APP_URL}/login" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:16px;font-weight:600;display:inline-block;">
                Iniciar sesión →
              </a>
            </div>
            <p style="color:#94A3B8;font-size:13px;line-height:1.6;">
              Por seguridad, te recomendamos cambiar tu contraseña después del primer inicio de sesión.
            </p>
            <hr style="border:none;border-top:1px solid #2D1B69;margin:24px 0;">
            <p style="color:#64748B;font-size:12px;text-align:center;margin:0;">
              "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." — Salmo 119:105
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })
}

export async function sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
  const resetUrl = `${APP_URL}/login?reset=${resetToken}`

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Restablecer contraseña — Numerología Bíblica',
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#0F0A1E;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0F0A1E;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1A1035;border-radius:12px;border:1px solid #7C3AED;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#7C3AED,#4C1D95);padding:32px;text-align:center;">
            <h1 style="color:#F59E0B;font-size:24px;margin:0;">Restablecer contraseña</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="color:#E2E8F0;font-size:16px;">Recibimos una solicitud para restablecer la contraseña de tu cuenta.</p>
            <div style="text-align:center;margin:32px 0;">
              <a href="${resetUrl}" style="background:linear-gradient(135deg,#7C3AED,#6D28D9);color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:16px;font-weight:600;display:inline-block;">
                Restablecer contraseña
              </a>
            </div>
            <p style="color:#94A3B8;font-size:13px;">Este enlace expira en 1 hora. Si no solicitaste este cambio, ignora este email.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })
}
