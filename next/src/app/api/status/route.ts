import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  return NextResponse.json({ message: "OK" });
}
