export type RteProcess = "calificacion" | "actualizacion" | "readmision";
export type RteStatus = "preparacion" | "presentada" | "en-tramite" | "calificada" | "negada";
export type DocumentStatus = "available" | "pending" | "not-applicable";

export type RteDocument = {
  id: string;
  year: number;
  process: RteProcess;
  title: string;
  description: string;
  category: string;
  status: DocumentStatus;
  fileUrl?: string;
  publishedAt?: string;
  fileSize?: string;
};

export const rteConfig = {
  rteQualified: false,
  year: 2026,
  process: "calificacion" as RteProcess,
  status: "preparacion" as RteStatus,
  legalName: "CORPORACIÓN DEPORTIVA LOBOS FÚTBOL CLUB",
  nit: "901696551",
};

export const rteDocuments: RteDocument[] = [
  { id: "01", year: 2026, process: "calificacion", title: "Estados financieros", description: "Estados financieros del año inmediatamente anterior aprobados por el máximo órgano competente, conforme resulte aplicable.", category: "Financiero", status: "pending" },
  { id: "02", year: 2026, process: "calificacion", title: "Certificación de cumplimiento de requisitos", description: "Certificación del representante legal, revisor fiscal o quien corresponda de acuerdo con el caso.", category: "Certificación", status: "pending" },
  { id: "03", year: 2026, process: "calificacion", title: "Documento de constitución", description: "Documento en el que consta la constitución legal de la entidad.", category: "Institucional", status: "pending" },
  { id: "04", year: 2026, process: "calificacion", title: "Certificado de existencia y representación legal", description: "Documento vigente expedido por la autoridad competente.", category: "Institucional", status: "pending" },
  { id: "05", year: 2026, process: "calificacion", title: "Acta del máximo órgano", description: "Acta que contiene la autorización al representante legal para solicitar la calificación al RTE.", category: "Institucional", status: "pending" },
  { id: "06", year: 2026, process: "calificacion", title: "Estatutos", description: "Estatutos vigentes de la Corporación con las disposiciones aplicables al proceso.", category: "Institucional", status: "pending" },
  { id: "07", year: 2026, process: "calificacion", title: "Certificación de antecedentes", description: "Certificación referente a los antecedentes contemplados por la normativa aplicable.", category: "Certificación", status: "pending" },
  { id: "08", year: 2026, process: "calificacion", title: "Información de cargos directivos y gerenciales", description: "Información reportada y publicada según las condiciones aplicables a la entidad.", category: "Información reportada", status: "pending" },
  { id: "09", year: 2026, process: "calificacion", title: "Formulario 5245 presentado", description: "Formulario definitivo con evidencia de presentación ante la DIAN.", category: "Solicitud", status: "pending" },
  { id: "10", year: 2026, process: "calificacion", title: "Reinversión del beneficio o excedente", description: "No constituye requisito del proceso inicial de calificación 2026.", category: "Registro Web", status: "not-applicable" },
  { id: "11", year: 2026, process: "calificacion", title: "Informe anual de resultados", description: "No aplica a entidades que realizan una solicitud inicial de calificación.", category: "Registro Web", status: "not-applicable" },
];
