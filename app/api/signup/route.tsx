import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    console.log("formData of signup : ", formData);

    const response = await fetch(`${process.env.BACKEND_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Handle success
      return NextResponse.json(
        { message: "OK", ...(await response.json()) },
        { status: response.status }
      );
    } else {
      // Handle error
      return NextResponse.json(await response.json(), {
        status: response.status,
      });
    }
  } catch (error) {
    // Handle fetch error
    console.error("error occurred in next/signup", error);
  }
}
