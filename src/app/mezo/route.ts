import { NextResponse } from "next/server";

let data = 1;

export async function GET(request: Request) {
  data++;
  return NextResponse.json({ hello: data });
}
