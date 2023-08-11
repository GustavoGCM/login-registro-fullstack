import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginForm from '@/components/LoginForm/loginForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`body flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <LoginForm/>
    </main>
  )
}
