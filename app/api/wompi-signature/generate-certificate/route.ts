import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      company,
      document,
      amount,
      reference,
      date,
    } = body;

    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFillColor(8, 8, 8);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    doc.setDrawColor(190, 30, 45);
    doc.setLineWidth(1.2);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.5);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

    doc.setTextColor(212, 175, 55);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("CORPORACIÓN LOBOS FC", pageWidth / 2, 36, {
      align: "center",
    });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(34);
    doc.text("CERTIFICADO DE DONACIÓN", pageWidth / 2, 58, {
      align: "center",
    });

    doc.setTextColor(180, 180, 180);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(
      "Documento institucional de soporte preliminar para registro y trazabilidad de la contribución.",
      pageWidth / 2,
      72,
      { align: "center" }
    );

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);

    doc.text("Se certifica que:", pageWidth / 2, 95, {
      align: "center",
    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text(fullName || "Donante", pageWidth / 2, 112, {
      align: "center",
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text(
      company ? `Empresa / Razón social: ${company}` : "Persona natural",
      pageWidth / 2,
      125,
      { align: "center" }
    );

    doc.text(
      document ? `Documento / NIT: ${document}` : "",
      pageWidth / 2,
      135,
      { align: "center" }
    );

    doc.setTextColor(212, 175, 55);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(`Aporte registrado: $${amount} COP`, pageWidth / 2, 156, {
      align: "center",
    });

    doc.setTextColor(220, 220, 220);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Referencia: ${reference || "N/A"}`, 30, 178);
    doc.text(`Fecha: ${date || new Date().toLocaleDateString("es-CO")}`, 30, 188);

    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(
      "Este documento es un soporte institucional preliminar. La validez tributaria estará sujeta al cumplimiento de la normatividad aplicable, la verificación contable y la calificación vigente dentro del Régimen Tributario Especial cuando corresponda.",
      pageWidth / 2,
      205,
      {
        align: "center",
        maxWidth: 240,
      }
    );

    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certificado-donacion-${reference || "lobosfc"}.pdf"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "No se pudo generar el certificado." },
      { status: 500 }
    );
  }
}