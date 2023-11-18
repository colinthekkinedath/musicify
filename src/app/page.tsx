import Image from 'next/image'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Hero />
    </main>

  )
}
