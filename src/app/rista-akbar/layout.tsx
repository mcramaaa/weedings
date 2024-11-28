import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding of Rista and Akbar",
  description: "Wedding of Rista and Akbar",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
