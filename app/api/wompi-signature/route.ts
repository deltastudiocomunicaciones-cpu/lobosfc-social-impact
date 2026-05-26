import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      amountInCents,
      currency,
      reference,
    } = body;

    const integritySecret =
      process.env.WOMPI_INTEGRITY_SECRET;

    if (!integritySecret) {
      return NextResponse.json(
        { error: "Missing integrity secret" },
        { status: 500 }
      );
    }

    const signatureString =
      `${reference}${amountInCents}${currency}${integritySecret}`;

    const signature = crypto
      .createHash("sha256")
      .update(signatureString)
      .digest("hex");

    return NextResponse.json({
      signature,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Signature generation failed" },
      { status: 500 }
    );
  }
}