
import { NextResponse } from "next/server";

export async function PATCH(req:Request) {

      return NextResponse.json({message: 'OK',status : true})
}
