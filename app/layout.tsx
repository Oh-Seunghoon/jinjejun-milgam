import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "서귀포 노지감귤 직거래 | 진제준 밀감농장",
  description:
    "서귀포에서 정성껏 재배한 노지감귤을 산지에서 직접 보내드립니다. 신선한 감귤, 전국 무료배송.",
  keywords: [
    "진제준 밀감농장",
    "서귀포 노지감귤",
    "노지감귤",
    "감귤 직거래",
    "제주 감귤",
    "감귤 10kg",
  ],
  authors: [{ name: "진제준 밀감농장" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}