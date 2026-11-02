import "./globals.css";

export const metadata = {
  title: "Qass AI Editor",
  description: "Open-source AI editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
