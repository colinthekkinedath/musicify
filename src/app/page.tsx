import Image from 'next/image'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
export default function Home() {
  return (
    <main className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Hero />
        <div className='grid lg:grid-cols-3 gap-x-7 gap-y-14 sm:grid-cols-1 md:grid-cols-2'>
          <Card image={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"} title ={"title"} artist={"artist"} album={"album"} genre={"genre"} />
          <Card image={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"} title ={"title"} artist={"artist"} album={"album"} genre={"genre"} />
          <Card image={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"} title ={"title"} artist={"artist"} album={"album"} genre={"genre"} />
          <Card image={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"} title ={"title"} artist={"artist"} album={"album"} genre={"genre"} />
          <Card image={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"} title ={"title"} artist={"artist"} album={"album"} genre={"genre"} />
          <Card image={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"} title ={"title"} artist={"artist"} album={"album"} genre={"genre"} />
        </div>
        <Footer/>
    </main>
  )
}
