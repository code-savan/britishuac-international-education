import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/FloatingChat'
import { Open_Sans, Rubik, Merriweather } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900'],
})

export const metadata = {
    title: "British AUC",
    description: "British AUC",
    icons: {
      icon: "/logoicon.png",
      shortcut: "/logoicon.png",
      apple: "/logoicon.png",
    },
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.variable} ${rubik.variable} ${merriweather.variable} font-sans antialiased bg-[#FAFAFA] text-[#0A1628]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
