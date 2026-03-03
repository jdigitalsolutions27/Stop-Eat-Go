import { NextResponse } from "next/server";

const inquiries: Array<Record<string, unknown>> = [];

function createId(prefix: string) {
  return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function POST(request: Request) {
  const body = await request.json();

  if (body.website) {
    return NextResponse.json({ success: false, error: "Spam rejected." }, { status: 400 });
  }

  if (!body.name || !body.contact || !body.message) {
    return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
  }

  const id = createId("SEG-I");
  inquiries.push({ id, ...body, createdAt: new Date().toISOString() });

  return NextResponse.json({ success: true, id });
}
