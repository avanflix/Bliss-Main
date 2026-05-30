import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import fs from 'fs';
// import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message, project, location } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    console.log('name', process.env.EMAIL_USER, process.env.EMAIL_PASS);
    // // Handle brochure attachment
    // const attachments = [];
    // let brochureFilename = '';

    // if (project === 'Bliss Bilva') brochureFilename = 'BB_FLYER.pdf';
    // else if (project === 'Sri Bliss') brochureFilename = 'SB_FLYER.pdf';
    // else if (project === 'Bliss One') brochureFilename = 'BO_Brochure.pdf';

    // if (brochureFilename) {
    //   try {
    //     const brochurePath = path.join(process.cwd(), 'public', brochureFilename);
    //     if (fs.existsSync(brochurePath)) {
    //       const brochureBuffer = fs.readFileSync(brochurePath);
    //       attachments.push({
    //         filename: brochureFilename,
    //         content: brochureBuffer,
    //         contentType: 'application/pdf'
    //       });
    //     }
    //   } catch (error) {
    //     console.error('Error reading brochure file:', error);
    //     // Continue without attachment if file reading fails
    //   }
    // }

    const origin =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://blissventures.co';

    let brochureLink = '';

    if (project === 'Bliss Bilva') {
      brochureLink = `${origin}/BB_FLYER.pdf`;
    } else if (project === 'Sri Bliss') {
      brochureLink = `${origin}/SB_FLYER.pdf`;
    } else if (project === 'Bliss One') {
      brochureLink = `${origin}/BO_Brochure.pdf`;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: user,
        pass: pass
      }
    });

    // Email to business (yourself)
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Poppins', 'Times New Roman', Times, serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #8b2727; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #8b2727; }
            .value { background-color: white; padding: 8px; border-radius: 4px; border: 1px solid #ddd; }
          </style>
          <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet">
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>Bliss Ventures Contact Form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              ${project ? `<div class="field">
                <div class="label">Project:</div>
                <div class="value">${project}</div>
              </div>` : ''}
              ${location ? `<div class="field">
                <div class="label">Location:</div>
                <div class="value">${location}</div>
              </div>` : ''}
              ${brochureLink ? `<div class="field">
                <div class="label">Brochure:</div>
                <div class="value">
                  <a href="${brochureLink}">Download Brochure</a>
                </div>
              </div>` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">Received:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const businessEmailOptions = {
      from: user,
      to: user,
      subject: `New Contact Form: ${subject}`,
      html: businessEmailHtml
    };

    // Email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Poppins', 'Times New Roman', Times, serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #8b2727; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .thank-you { font-size: 18px; color:rgb(0, 0, 0); font-weight:bold; margin-bottom: 15px; }
            .contact-info { background-color: white; padding: 15px; border-radius: 8px; margin-top: 20px; }
            .contact-item { margin-bottom: 10px; }
            .label { font-weight: bold; }
          </style>
          <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet">
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Bliss Ventures</h2>
            </div>
            <div class="content">
              <div class="thank-you">Dear ${name},</div>
              <p>Thank you for reaching out to us! We have received your message and appreciate your interest in Bliss Ventures.</p>

              <p>Our team will review your inquiry about "<strong>${project || subject}</strong>" and get back to you within 24-72 hours.</p>

              ${brochureLink ? `
              <p>
                Download Project Brochure:
                <a href="${brochureLink}">
                  Click Here
                </a>
              </p>
              ` : ''}
              <p>In the meantime, feel free to explore our website to learn more about our projects and services.</p>

              <div class="contact-info">
                <h3 style="color:rgb(0, 0, 0); margin-bottom: 15px; font-weight:bold ">Contact Information</h3>
                <div class="contact-item">
                  <span class="label">Phone:</span> +91-8374339608
                </div>
                <div class="contact-item">
                  <span class="label">Email:</span> info@blissventures.co
                </div>
                <div class="contact-item">
                  <span class="label">Website:</span> blissventures.co
                </div>
                <div class="contact-item">
                  <span class="label">Business Hours:</span> Monday - Saturday: 9:00 AM - 7:00 PM
                </div>
              </div>

              <p style="margin-top: 20px;">Best regards,<br>The Bliss Ventures Team</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const customerEmailOptions = {
      from: user,
      to: email,
      subject: 'Thank you for contacting Bliss Ventures',
      html: customerEmailHtml
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmailOptions),
      transporter.sendMail(customerEmailOptions)
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
