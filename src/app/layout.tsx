import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VKTarget - Таргетированная реклама ВКонтакте',
  description: 'Профессиональные услуги таргетированной рекламы во ВКонтакте',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
