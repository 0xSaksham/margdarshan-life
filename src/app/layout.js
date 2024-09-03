import { Montserrat } from "next/font/google"
import "./globals.css"
import { AppThemeProvider } from "@/context/theme"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Margdarshan",
  description: "An AI driven smart montor connect platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  )
}
