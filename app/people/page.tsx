"use client"

import type React from "react"

import Link from "next/link"
import toast, { Toaster } from "react-hot-toast";

export default function PeoplePage() {
  

  const mainWarriors = [
    {
      id: "ankur",
      name: "Ankur Mishra",
      title: "The Strategist",
      description:
        "The creative mind and strategist behind many of the group's groundbreaking ideas. Ankur's vision shapes the direction of GIDA Warriors.",
      image: "/1.jpeg",
      hasProfile: true,
    },
    {
      id: "pratham",
      name: "Pratham Mishra",
      title: "The Powerhouse",
      description:
        "The energetic powerhouse driving innovation and vision. Pratham's relentless energy and passion keep the legacy moving forward.",
      image: "/p1.jpeg",
      hasProfile: true,
    },
    {
      id: "tanay",
      name: "Tanay Singh",
      title: "The Adventurer",
      description:
        "The adventurous spirit and core team player. Tanay keeps the team's fire alive with daring ideas and unwavering commitment.",
      image: "/t1.jpeg",
      hasProfile: true,
    },
  ]

  const moreMembers = [
    {
      id: "animesh",
      name: "animesh",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      hasProfile: false,
    },
    {
      id: "sameer",
      name: "sameer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      hasProfile: false,
    },
    {
      id: "arnav",
      name: "arnav",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      hasProfile: false,
    },
    {
      id: "ranya",
      name: "ranya",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      hasProfile: false,
    },
    {
      id: "sarthak",
      name: "sarthak",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      hasProfile: false,
    },
    {
      id: "amit",
      name: "amit",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      hasProfile: false,
    },
    {
      id: "shivam",
      name: "shivam",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      hasProfile: false,
    },
  ]

  const handleViewProfile = (e: React.MouseEvent, warrior: any) => {
    if (!warrior.hasProfile) {
      e.preventDefault()
     toast("🚧 This profile is coming soon!", {
        icon: "🔥",
      });
    }
  }

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
           
            <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition">
              Contact-Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Meet the Warriors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The warriors who built GIDA Warriors from passion and turned it into a legacy of entertainment and
            brotherhood.
          </p>
        </div>
      </section>

      {/* Main Warriors Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {mainWarriors.map((warrior) => (
              <div key={warrior.id} className="group">
                <div className="relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-card/50">
                    <img
                      src={warrior.image || "/placeholder.svg"}
                      alt={warrior.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{warrior.name}</h3>
                    <p className="text-primary font-semibold mb-4 text-sm">{warrior.title}</p>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">{warrior.description}</p>

                    {/* View Profile Button */}
                    <Link href={`/people/${warrior.id}`}>
                      <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-md transition-colors">
                        View Profile →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Members Section */}
          <div className="border-t border-border/30 pt-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">More Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moreMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-card/50">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-foreground mb-3 capitalize text-center">{member.name}</h3>

                      {/* View Profile Button */}
                      <button
                        onClick={(e) => handleViewProfile(e, member)}
                        className="w-full bg-primary/30 hover:bg-primary/40 text-primary font-semibold py-2 px-3 rounded-md transition-colors text-sm"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
