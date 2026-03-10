import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { 
      name, 
      email, 
      telefon, 
      unternehmen, 
      nachricht,
      // Felder vom mehrstufigen Formular
      kategorien,
      technologien,
      gebaeudetyp,
      bundesland,
      montageort,
      flaeche,
      energieverbrauch,
      installationszeitpunkt,
      energieVerkauf,
      optionen,
      installationsadresse,
      hausnummer,
      plz,
      datenschutzZustimmung,
      // CV-Datei für Bewerbungen
      cvFile,
      cvFileName
    } = data

    // Validate required fields (unterschiedlich je nach Formular-Typ)
    const isContactForm = !!nachricht // Kontaktformular hat "nachricht"
    const isOfferForm = !!kategorien || !!technologien // Angebotsformular hat "kategorien" oder "technologien"

    if (isContactForm) {
      // Kontaktformular Validierung
      if (!name || !email || !nachricht) {
        return NextResponse.json(
          { success: false, error: 'Name, E-Mail und Nachricht sind erforderlich' },
          { status: 400 }
        )
      }
    } else if (isOfferForm) {
      // Angebotsformular Validierung
      if (!name || !email || !telefon || !datenschutzZustimmung) {
        return NextResponse.json(
          { success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus und akzeptieren Sie die Datenschutzerklärung' },
          { status: 400 }
        )
      }
    } else {
      return NextResponse.json(
        { success: false, error: 'Ungültige Formulardaten' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { success: false, error: 'E-Mail-Service nicht konfiguriert. Bitte kontaktieren Sie den Administrator.' },
        { status: 500 }
      )
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify connection
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError)
      return NextResponse.json(
        { success: false, error: 'E-Mail-Server-Verbindung fehlgeschlagen. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      )
    }

    // Determine email subject and content based on form type
    const isApplication = nachricht && nachricht.includes('Bewerbung für:')
    const subject = isApplication
      ? `Neue Bewerbung von ${name}${cvFileName ? ` - ${cvFileName}` : ''}`
      : isOfferForm 
        ? `Neues Angebotsformular von ${name}` 
        : `Neue Kontaktanfrage von ${name}`

    // Build HTML content (escape all user input to prevent XSS)
    let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
          ${isOfferForm ? 'Neues Angebotsformular' : 'Neue Kontaktanfrage'} von der Website
        </h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Kontaktdaten</h3>
          <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #111827;">${escapeHtml(name)}</span></p>
          <p style="margin: 10px 0;"><strong style="color: #374151;">E-Mail:</strong> <span style="color: #111827;">${escapeHtml(email)}</span></p>
          ${telefon ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Telefon:</strong> <span style="color: #111827;">${escapeHtml(telefon)}</span></p>` : ''}
          ${unternehmen ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Unternehmen:</strong> <span style="color: #111827;">${escapeHtml(unternehmen)}</span></p>` : ''}
        </div>
    `

    // Add offer form specific fields
    if (isOfferForm) {
      htmlContent += `
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #1e40af;">
          <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Angebotsdetails</h3>
          ${kategorien && kategorien.length > 0 ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Kategorie:</strong> <span style="color: #111827;">${escapeHtml(Array.isArray(kategorien) ? kategorien.join(', ') : kategorien)}</span></p>` : ''}
          ${technologien && technologien.length > 0 ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Technologie:</strong> <span style="color: #111827;">${escapeHtml(Array.isArray(technologien) ? technologien.join(', ') : technologien)}</span></p>` : ''}
          ${gebaeudetyp ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Gebäudetyp:</strong> <span style="color: #111827;">${escapeHtml(gebaeudetyp)}</span></p>` : ''}
          ${bundesland ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Bundesland:</strong> <span style="color: #111827;">${escapeHtml(bundesland)}</span></p>` : ''}
          ${montageort ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Montageort:</strong> <span style="color: #111827;">${escapeHtml(montageort)}</span></p>` : ''}
          ${flaeche ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Fläche:</strong> <span style="color: #111827;">${escapeHtml(String(flaeche))} m²</span></p>` : ''}
          ${energieverbrauch ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Energieverbrauch:</strong> <span style="color: #111827;">${escapeHtml(String(energieverbrauch))} kWh/Jahr</span></p>` : ''}
          ${installationszeitpunkt ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Installationszeitpunkt:</strong> <span style="color: #111827;">${escapeHtml(installationszeitpunkt)}</span></p>` : ''}
          ${energieVerkauf ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Energieverkauf:</strong> <span style="color: #111827;">${escapeHtml(energieVerkauf)}</span></p>` : ''}
          ${optionen && optionen.length > 0 ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Optionen:</strong> <span style="color: #111827;">${escapeHtml(Array.isArray(optionen) ? optionen.join(', ') : optionen)}</span></p>` : ''}
        </div>
      `
      
      if (installationsadresse || hausnummer || plz) {
        htmlContent += `
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-top: 15px;">
            <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Installationsadresse</h3>
            ${installationsadresse ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Adresse:</strong> <span style="color: #111827;">${escapeHtml(installationsadresse)}</span></p>` : ''}
            ${hausnummer ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Hausnummer:</strong> <span style="color: #111827;">${escapeHtml(hausnummer)}</span></p>` : ''}
            ${plz ? `<p style="margin: 10px 0;"><strong style="color: #374151;">PLZ:</strong> <span style="color: #111827;">${escapeHtml(plz)}</span></p>` : ''}
          </div>
        `
      }
    }

    // Add message if contact form
    if (nachricht) {
      htmlContent += `
        <div style="margin-top: 20px;">
          <p style="margin: 10px 0;"><strong style="color: #374151;">Nachricht:</strong></p>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #1e40af; margin-top: 10px;">
            <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(nachricht)}</p>
          </div>
        </div>
      `
    }

    htmlContent += `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Diese E-Mail wurde automatisch von der KlimaPro Website gesendet.</p>
          <p>Antworten Sie direkt auf diese E-Mail, um ${escapeHtml(name)} zu kontaktieren.</p>
        </div>
      </div>
    `

    // Email content
    const mailOptions: any = {
      from: `"KlimaPro Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: subject,
      html: htmlContent,
      replyTo: email,
    }

    // Add CV attachment if provided
    if (cvFile && cvFileName) {
      mailOptions.attachments = [
        {
          filename: cvFileName,
          content: cvFile,
          encoding: 'base64'
        }
      ]
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error('Error sending email:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'E-Mail-Authentifizierung fehlgeschlagen. Bitte überprüfen Sie die SMTP-Anmeldedaten.'
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Verbindung zum E-Mail-Server fehlgeschlagen. Bitte überprüfen Sie die SMTP-Einstellungen.'
    } else if (error.response) {
      errorMessage = `E-Mail-Server-Fehler: ${error.response}`
    }
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  }
}
