import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')

    
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=  ` },
  });
}
