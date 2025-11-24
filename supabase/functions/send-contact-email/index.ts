import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", email, "Subject:", subject);

    // Send notification email to you
    const notificationResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["maickelraj052005@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Maickelraj Sakthivel <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out!",
      html: `
        <h2>Thank you for contacting me, ${name}!</h2>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <h3>Your message:</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Best regards,<br>Maickelraj Sakthivel</p>
      `,
    });

    console.log("Emails sent successfully:", notificationResponse, confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        notification: notificationResponse.data,
        confirmation: confirmationResponse.data 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
