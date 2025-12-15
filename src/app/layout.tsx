import type { Metadata } from "next"
import { TRPCReactProvider } from "~/trpc/react"
import "~/styles/globals.css"

export const metadata: Metadata = {
  title: "Taposi's Design Portfolio",
  description: "A modern design portfolio showcasing creative work and technical expertise",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  )
}