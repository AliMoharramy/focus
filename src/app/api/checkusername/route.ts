import { checkusername } from "../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const body = await req.json();
  const { username } = body;
  try {
    const data = await checkusername(username);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
