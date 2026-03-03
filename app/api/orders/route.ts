import { NextResponse } from "next/server";

const orders: Array<Record<string, unknown>> = [];

function createId(prefix: string) {
  return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function POST(request: Request) {
  const body = await request.json();

  if (body.website) {
    return NextResponse.json({ success: false, error: "Spam rejected." }, { status: 400 });
  }

  if (!body.name || !body.phone || !Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ success: false, error: "Order details are incomplete." }, { status: 400 });
  }

  const id = createId("SEG-O");
  orders.push({ id, ...body, createdAt: new Date().toISOString() });

  return NextResponse.json({ success: true, id });
}
