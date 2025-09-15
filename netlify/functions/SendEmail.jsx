// import { Resend } from "resend";

// export async function handler(event) {
//     if(event.httpMethod !== "POST") {
//         return {
//             statusCode: 405,
//             body: JSON.stringify({ error: "Method not allowed"})
//         };
//     }

//     try{
//         const { name, email, message } = JSON.parse(event.body);
//         // const resend = new Resend (process.env.RESEND_API_KEY);

//         await resend.emails.send({
//             from: "onboarding@resend.dev",
//             to: "ibrahim.ib.babs21@gmail.com",
//             subject: `New message from ${name}`,
//             text: `From: ${name} (${email})\n\n${message}`,
//         });

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ success: true, message: "Email sent!"}),
//         };
//     }   catch (error) {
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ success: false, error: error.message}),
//             };
//         }
// }