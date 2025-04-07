// app/layout.tsx
import './globals.css';
export const metadata = {
    title: 'Champeta Online',
    description: 'A modern gallery of champeta albums.',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  