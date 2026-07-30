import './globals.css'

export const metadata = {
  title: "Access Denied",
  description: "",
  icons: { icon: "/logoicon.png" },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
