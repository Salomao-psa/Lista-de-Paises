import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de Paises',
  description: 'Uma lista de Paises detalhada com seu continente e população',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=' w-full h-18 flex items-center justify-center '>
          <section className='container flex items-center justify-center gap-3 border-b-4'>
             <Image src='/icon.jpg' height={120} width={150}/>
          </section>
        </main>
        
        {children}
       
        </body>
    </html>
  )
}
