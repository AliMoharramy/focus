import { message } from "telegraf/filters";
import { selectAll } from "../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  try {
    const data = await selectAll();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
