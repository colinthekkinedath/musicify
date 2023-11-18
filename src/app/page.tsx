import Image from 'next/image'
import Hero from './components/Hero'
import Card from './components/Card'
export default function Home() {
  return (
    <main className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Hero />
        <Card image={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"} title ={"title"} artist={"artist"} album={"album"} genre={"genre"} />
    </main>

  )
}
