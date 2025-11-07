"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
export default function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

 

  const backgroundGifs = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Destiny%202%20Explosion%20GIF%20by%20DestinyTheGame-rgeiXHhFe1uv9SsfXvqWpon0u2Exbo.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eXJjeHd6cXpra3RjZ21tcGhvZXdjanM4NTZhd201eGVidXl1Mm8waiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JzFAA0A4UTfdecIKIo/giphy.gif',
     'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTQ2dzl4dWxtMmR5N2pkY2MyNHBqeXFydGZjM3doN2M2N2swMmp1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qKcalQazZEnLJFnOQ3/giphy.gif',
     'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTQ2dzl4dWxtMmR5N2pkY2MyNHBqeXFydGZjM3doN2M2N2swMmp1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/K93WflKs836lqy2bN1/giphy.gif',
     'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTQ2dzl4dWxtMmR5N2pkY2MyNHBqeXFydGZjM3doN2M2N2swMmp1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qs9FriWwyK48q9gJz0/giphy.gif',
     
  ];
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundGifs.length);
    }, 3000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundGifs.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
     <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/WhatsApp Image 2025-10-31 at 21.00.05.jpeg" 
              alt="GIDA Warriors Logo" 
              className="w-10 h-10 rounded-lg object-cover border border-blue-500"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              GIDA Warriors
            </span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-gray-300 hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/people" className="text-gray-300 hover:text-blue-500 transition">
              People
            </Link>
            <Link href="/pratham-vs-ankur" className="text-gray-300 hover:text-blue-500 transition">
              Pratham VS Ankur
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition">
              Contact-Us
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
       <section className="min-h-screen pt-20 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background with fade transition */}
      <div className="absolute inset-0 z-0">
        {backgroundGifs.map((gif, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url("${gif}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: currentBgIndex === index ? 0.4 : 0,
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            GIDA Warriors
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            The Legacy of Passion, Brotherhood, and Adventure
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <a href="/people">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-colors">
              Meet the Warriors
            </button>
          </a>
          <a href="#about">
            <button className="px-8 py-6 text-lg border-2 border-blue-600 text-blue-500 hover:bg-blue-600/10 bg-transparent rounded-lg transition-colors">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>

      {/* About Section */}
    {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/WhatsApp Image 2025-10-31 at 21.00.05.jpeg" 
                  alt="GIDA Warriors Logo" 
                  className="w-16 h-16 rounded-lg object-cover border-2 border-primary shadow-lg"
                />
                <h2 className="text-4xl font-bold text-foreground">What is GIDA Warriors?</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                Gida Warriors is not just a group — it's a legacy born out of passion, adventure, and an unbreakable
                bond among highly motivated individuals from GIDA Sector 5, Gorakhpur. Known for their fearless attitude
                and strong camaraderie, the Gida Warriors represent a spirit of unity, resilience, and fun.
              </p>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                From a humble gaming clan to a vibrant entertainment brand, Gida Warriors continues to inspire people to
                chase fun, embrace adventure, and build bonds that last a lifetime.
              </p>
              <a href="https://youtube.com/@gidawarriors" target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube Channel
                </Button>
              </a>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
                <h3 className="text-xl font-bold text-primary mb-3">Our History</h3>
                <p className="text-muted-foreground">
                  The roots trace back to 2018, when the name emerged from a Clash of Clans clan. What began as
                  enthusiastic gamers transformed into a cultural identity embodying teamwork, creativity, and
                  entertainment.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
                <h3 className="text-xl font-bold text-primary mb-3">Our Legacy</h3>
                <p className="text-muted-foreground">
                  With an 8-year-old legacy, Gida Warriors evolved beyond gaming into a YouTube channel and
                  entertainment platform. The community continues to grow with humor, creativity, and authentic madness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <p className="text-muted-foreground">Years of Legacy</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <p className="text-muted-foreground">Founding Warriors</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition">
              <div className="text-4xl font-bold text-primary mb-2">2018</div>
              <p className="text-muted-foreground">Clan Genesis</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <p className="text-muted-foreground">Forever Growing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 GIDA Warriors. All rights reserved.</p>
          <p className="mt-2 text-sm">Passion • Brotherhood • Adventure</p>
        </div>
      </footer>
    </div>
  )
}
