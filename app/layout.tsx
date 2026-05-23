import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Sagar — Software Engineer",
  description: "Software Engineer specializing in backend systems, cloud infrastructure, and full-stack development. Internships at Amazon and Deutsche Bank. MS CS at Purdue Fort Wayne.",
  keywords: ["Shreya Sagar", "Software Engineer", "SDE-1", "Amazon", "AWS", "React", "Full Stack"],
  authors: [{ name: "Shreya Sagar" }],
  openGraph: {
    title: "Shreya Sagar — Software Engineer",
    description: "Backend · Cloud · Full-Stack Engineer seeking SDE-1 roles in 2027.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
