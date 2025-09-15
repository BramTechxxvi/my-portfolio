

export async function handler(event, context) {
    if(event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed"})
        };
    }

    try{
        const { name, email, message } = JSON.stringify(event.body)
    }
}