

export async function handler(event, context) {
    if(event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed"})
        };
    }

    try{
        const { name, email, message } = JSON.stringify(event.body);
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: "Your Name <
    }
}