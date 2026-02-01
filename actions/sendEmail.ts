"use server";

import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email');
  const message = formData.get('message');

  if (!validateString(email, 500)) {
    return { error: 'Invalid sender email' };
  }
  if (!validateString(message, 500)) {
    return { error: 'Invalid message' };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'chetanvekariya0110@gmail.com',
      subject: 'Message from contact form',
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, { senderEmail: email as string, message: message as string }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
}