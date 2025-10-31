"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast";
import { use } from "react"
const profiles = {
  ankur: {
    name: "Ankur Mishra",
    title: "The Strategist",
    subtitle: "Creative Visionary & Strategic Mind",
    instagram: "https://www.instagram.com/ankurmishra_8?igsh=OHN0Mjk3eTJrMjV3",
    bio: "Ankur Mishra is the creative powerhouse and strategic mind behind many of GIDA Warriors' most innovative ideas. His vision and forward-thinking approach have been instrumental in shaping the group's direction and success.",
    about: [
      "Known for his meticulous planning and creative execution",
      "Drives innovation within the GIDA Warriors community",
      "Passionate about gaming, entertainment, and storytelling",
      "The bridge between concept and reality for major projects",
    ],
    achievements: [
      "Pioneered GIDA Warriors' expansion into content creation",
      "Developed strategies that grew the community significantly",
      "Created memorable gaming moments and entertainment experiences",
      "Led multiple successful gaming campaigns and events",
    ],
    image: "/2.jpeg",
    gallery: [
      "/1.jpeg",
      "/gaming-streamer-setup-ankur.jpg",
      "/gaming-tournament-ankur.jpg",
      "/gaming-community-ankur.jpg",
    ],
  },
  pratham: {
    name: "Pratham Mishra",
    title: "The Powerhouse",
    subtitle: "Energy & Innovation Leader",
     instagram: "https://www.instagram.com/prathammishra99013?igsh=MTlmOTh4NnBwenE0NA==",
    bio: "Pratham Mishra is the relentless powerhouse of GIDA Warriors, driven by boundless energy and a passion for innovation. His vision and determination continue to propel the legacy forward, inspiring everyone around him.",
    about: [
      "Brings infectious energy to every project and initiative",
      "Visionary thinker with a focus on growth and expansion",
      "Deeply committed to the core values of brotherhood",
      "Inspirational leader who motivates the entire community",
    ],
    achievements: [
      "Spearheaded GIDA Warriors' YouTube channel growth",
      "Organized landmark gaming events and tournaments",
      "Built and maintained the strong community culture",
      "Innovated new content formats that engaged millions",
    ],
    image: "/p2.jpeg",
    gallery: [
      "/p1.jpeg",
      "/gaming-event-pratham.jpg",
      "/gaming-tournament-pratham.jpg",
      "/community-gathering-pratham.jpg",
    ],
  },
  tanay: {
    name: "Tanay Singh",
    title: "The Adventurer",
    subtitle: "Spirit & Core Team Player",
     instagram: "https://www.instagram.com/_shapsin_?igsh=bWU3bzhuZmRrenR1",
    bio: "Tanay Singh embodies the adventurous spirit of GIDA Warriors. As a core team player, he keeps the fire alive through daring ideas, unwavering commitment, and a genuine love for the gaming community.",
    about: [
      "Adventure-seeker with a passion for new experiences",
      "Reliable and dedicated core team member",
      "Brings authentic enthusiasm to every endeavor",
      "Bridges ideas between team members and community",
    ],
    achievements: [
      "Key player in numerous gaming tournaments and events",
      "Created viral gaming moments and entertaining content",
      "Maintained strong bonds within the Warriors family",
      "Inspired a generation of gaming enthusiasts",
    ],
    image: "/t2.jpeg",
    gallery: [
      "/t1.jpeg",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
}

export default function ProfilePage() {
  const router = useRouter()
   const params = useParams() 

  const id = params?.id as string
  const profile = profiles[id as keyof typeof profiles]

  useEffect(() => {
    if (!profile) {
      toast("🚧 This profile is coming soon!", {
        icon: "🔥",
      });
      router.push("/people")
    }
  }, [profile, router, toast])

  if (!profile) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ... existing navigation code ... */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            GIDA Warriors
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/people" className="text-foreground hover:text-primary transition">
              People
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition">
              More Coming
            </a>
          </div>
        </div>
      </nav>

      {/* ... existing rest of profile page code ... */}
      <section className="pt-28 pb-12 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <Link href="/people" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Back to Warriors
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-border">
              <img
                src={profile.image || "/placeholder.svg"}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            {/* Profile Info */}
            <div>
              <p className="text-primary font-semibold text-sm mb-2">{profile.title}</p>
              <h1 className="text-5xl font-bold text-foreground mb-2">{profile.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{profile.subtitle}</p>
              <p className="text-foreground leading-relaxed text-lg mb-8">{profile.bio}</p>

              {/* Social Links Placeholder */}
              <div className="flex gap-4">
                <a
                  href ={profile.instagram}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="bg-primary/20 hover:bg-primary/30 text-primary px-6 py-2 rounded-md transition border border-primary"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground">About {profile.name.split(" ")[0]}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Key Traits</h3>
              <ul className="space-y-4">
                {profile.about.map((trait, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Achievements</h3>
              <ul className="space-y-4">
                {profile.achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden border border-border hover:border-primary transition group"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Coming soon`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Warriors CTA */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Meet Other Warriors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(profiles).map(
              ([id, profile]) =>
                params.id !== id && (
                  <Link
                    key={id}
                    href={`/people/${id}`}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition"
                  >
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition mb-2">
                      {profile.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-3">{profile.title}</p>
                    <p className="text-muted-foreground text-sm">Explore {profile.name.split(" ")[0]}'s profile →</p>
                  </Link>
                ),
            )}
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
