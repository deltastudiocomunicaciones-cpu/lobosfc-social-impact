import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Transparencia | Corporación Deportiva Lobos FC", template: "%s | Corporación Deportiva Lobos FC" },
  description: "Información institucional, financiera y tributaria de la Corporación Deportiva Lobos Fútbol Club.",
};

export default function TransparencyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
