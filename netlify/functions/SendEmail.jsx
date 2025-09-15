

export async function handler(event, context) {
    if(event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({})
        }
}