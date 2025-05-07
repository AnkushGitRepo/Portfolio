'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useThemeColor, getColorClasses } from '@/components/theme-color-context'
import SpotifyLogo from '@/components/spotify-logo'
import {
  Github,
  Music,
  BookOpen,
  MapPin,
  Code,
  ExternalLink,
  ArrowRight,
  Headphones,
  Heart
} from 'lucide-react'

export default function InfoCards() {
  const { currentColor } = useThemeColor()
  const colors = getColorClasses(currentColor)

  const myProjects = [
    {
      id: 1,
      title: "Pharmacy Management System",
      description: "A console-based system using Java and PostgreSQL for managing drug inventory and transactions.",
      image: "/images/projects/pharmacy-system.jpg",
      link: "/projects/pharmacy-management-system",
      githubUrl: "https://github.com/AnkushGitRepo/Pharmacy-Management-System",
      tags: ["Java", "PostgreSQL", "Console App"]
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "Java console application allowing users to view, convert, and update exchange rates.",
      image: "/images/projects/currency-converter.jpg",
      link: "/projects/currency-converter",
      githubUrl: "https://github.com/AnkushGitRepo/Currency_Converter_Using_Core_Java",
      tags: ["Java", "Console App"]
    },
    {
      id: 3,
      title: "Cashflow Compass",
      description: "Python-based CLI Expense Tracker for managing and analyzing expenses.",
      image: "/images/projects/cashflow-compass.jpg",
      link: "/projects/cashflow-compass",
      githubUrl: "https://github.com/AnkushGitRepo/Cashflow-Compass",
      tags: ["Python", "CLI", "Finance"]
    }
  ]

  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: "/images/skills/icons8-java.svg" },
        { name: "Python", icon: "/images/skills/icons8-python.svg" },
        { name: "JavaScript", icon: "/images/skills/icons8-javascript.svg" },
        { name: "HTML", icon: "/images/skills/icons8-html5.svg" },
        { name: "CSS", icon: "/images/skills/icons8-css.svg" },
        { name: "TypeScript", icon: "/images/skills/icons8-typescript.svg" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: "/images/skills/icons8-react.svg" },
        { name: "Node.js", icon: "/images/skills/icons8-nodejs.svg" },
        { name: "Express.js", icon: "/images/skills/icons8-express-js.svg" },
        { name: "Bootstrap", icon: "/images/skills/icons8-bootstrap.svg" },
        { name: "Tailwind CSS", icon: "/images/skills/icons8-tailwind-css.svg" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: "/images/skills/icons8-mysql.svg" },
        { name: "PostgreSQL", icon: "/images/skills/icons8-postgres.svg" },
        { name: "MongoDB", icon: "/images/skills/MongoDB.svg" },
        { name: "Redis", icon: "/images/skills/icons8-redis.svg" }
      ]
    },
    {
      category: "Tools & IDEs",
      items: [
        { name: "Git", icon: "/images/skills/icons8-git.svg" },
        { name: "GitHub", icon: "/images/skills/icons8-github.svg" },
        { name: "VS Code", icon: "/images/skills/icons8-visual-studio.svg" },
        { name: "IntelliJ IDEA", icon: "/images/skills/icons8-intellij-idea.svg" },
        { name: "PyCharm", icon: "/images/skills/icons8-pycharm.svg" },
        { name: "WebStorm", icon: "/images/skills/icons8-webstorm.svg" },
        { name: "Jupyter", icon: "/images/skills/icons8-jupyter.svg" },
        { name: "Figma", icon: "/images/skills/icons8-figma.svg" }
      ]
    }
  ]

  const spotifyProfile = {
    username: "Ankush Gupta",
    profileUrl: "https://open.spotify.com/user/31f5prtw67zjqv4zpavyh3qsxbwu",
    playlists: [
      {
        id: "2IXKMbLDM5RWnm4q2PC2vK",
        title: "💖It's a Time To Fall In Love 🌌",
        image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c63b7cfc1f2698c31c606c3a",
        description: "A collection of heartfelt songs celebrating romance and connection."
      },
      {
        id: "0rtPduclzhKrKzJFztW6r2",
        title: "💖 Punjabi Emotions 🥰",
        image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845ebe6ea4e9de12dcf82652d1",
        description: "Feel the love with passionate Punjabi songs that capture every beautiful moment."
      },
      {
        id: "0TAm0EgPYdYxgre0PpXOhV",
        title: "🍂 Onesided Love ❤️‍🔥",
        image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847d3f8ef9caa55764488902ce",
        description: "Songs that express the bittersweet feelings of unreciprocated love."
      },
      {
        id: "07bjeQyRjkzC52nV0uWcHI",
        title: "🌃Angreji_Vibes🫠",
        image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848695a8cb551c94f4b3d168a7",
        description: "A mix of trendy English songs that bring good vibes and energy."
      },
      {
        id: "7hiHyqLVZhhAQRPqqKDIXr",
        title: "❤️Nostalgic Love🩶",
        image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da842301e0928a95fb2b568c074a",
        description: "Classic love songs that bring back beautiful memories."
      },
      {
        id: "7Mlu2mdG5954hZvWTDy7pz",
        title: "🌃Blessed🏞️",
        image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ffd11716c4ee502c32c56dde",
        description: "Uplifting songs that celebrate gratitude and joy in life."
      },
      {
        id: "1g4WFwUI5oNnLOefZYEAII",
        title: "💔Broked🌕",
        image: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da8427018c14c90330d0427847e7",
        description: "Heartbreaking songs that capture the pain of lost love."
      },
      {
        id: "2iLzRbjO9z6h6NSMoOBLjU",
        title: "💕Feel_Love🥺",
        image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da842b69979864b614cb94e6cadf",
        description: "Songs that celebrate love and bring warmth to your heart."
      }
    ]
  }

  const books = {
    title: "What I'm Reading",
    description: "Explore my collection of book reviews and recommendations.",
    link: "/books",
    image: "/placeholder.svg"
  }

  const location = {
    title: "Ahmedabad, India",
    description: "Currently based in the vibrant city of Ahmedabad, Gujarat.",
    coordinates: "23.0225° N, 72.5714° E",
    mapLink: "https://maps.google.com/?q=Ahmedabad,Gujarat,India"
  }

  return (
    <section id="about" className="py-10 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 transition-colors duration-500 ${colors.light}`}>
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">Get to Know Me Better</h2>
          <div className={`w-20 h-1 rounded-full mb-4 transition-colors duration-500 ${colors.bg}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[calc(100vh-180px)] overflow-y-auto pr-1 pb-2 custom-scrollbar">
          {/* My Projects Card */}
          <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl h-[min(400px,65vh)] flex flex-col">
            <CardHeader className={`transition-colors duration-500 ${colors.bg}`}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-white">My Projects</CardTitle>
                <Code className="h-6 w-6 text-white/80" />
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex-grow overflow-y-auto custom-scrollbar">
              <div className="space-y-4">
                {myProjects.map((project) => (
                  <div key={project.id} className="border-b border-slate-100 dark:border-slate-700 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3 flex-wrap sm:flex-nowrap">
                      <Link href={project.link} className="block relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden group mx-auto sm:mx-0 mb-2 sm:mb-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={64}
                          height={64}
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link href={project.link} className="group">
                          <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                        </Link>
                        <p className="text-sm text-slate-500 mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className={`bg-${currentColor}-100 text-${currentColor}-700 border-${currentColor}-200 font-medium shadow-sm`}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className={`w-full justify-between group text-${currentColor}-700 hover:text-${currentColor}-800 font-medium`}>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Music Playlist Card */}
          <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl h-[min(400px,65vh)] flex flex-col">
            <CardHeader className={`transition-colors duration-500 ${colors.bg}`}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-white">My Music</CardTitle>
                <SpotifyLogo className="h-6 w-6 text-white/80" />
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-0 flex-grow overflow-hidden">
              <div className="flex items-center gap-3 mb-4 flex-wrap sm:flex-nowrap">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden mx-auto sm:mx-0 mb-2 sm:mb-0">
                  <SpotifyLogo className="h-6 w-6 text-white" />
                </div>
                <div className="text-center sm:text-left w-full sm:w-auto">
                  <h3 className="font-medium text-slate-900">{spotifyProfile.username}</h3>
                  <p className="text-sm text-slate-500">Spotify Playlists</p>
                </div>
              </div>

              <div className="h-[calc(100%-60px)] overflow-y-auto pr-2 space-y-2 playlist-scrollbar">
                {spotifyProfile.playlists.map((playlist) => (
                  <Link
                    key={playlist.id}
                    href={`https://open.spotify.com/playlist/${playlist.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors flex-wrap sm:flex-nowrap">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden mx-auto sm:mx-0 mb-1 sm:mb-0">
                        <Image
                          src={playlist.image}
                          alt={playlist.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <h4 className="font-medium text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                          {playlist.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {playlist.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className={`w-full justify-between group text-${currentColor}-700 hover:text-${currentColor}-800 font-medium`}>
                <Link href={spotifyProfile.profileUrl} target="_blank" rel="noopener noreferrer">
                  View Spotify Profile
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Skills Card */}
          <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl h-[min(400px,65vh)] flex flex-col">
            <CardHeader className={`transition-colors duration-500 ${colors.bg}`}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-white">Skills & Technologies</CardTitle>
                <Code className="h-6 w-6 text-white/80" />
              </div>
            </CardHeader>
            <CardContent className="pt-4 relative flex-grow overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
              <div className="space-y-3 h-[calc(100%-20px)] overflow-y-auto pr-2 pb-2 custom-scrollbar">
                {skills.map((category, index) => (
                  <div key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <h3 className={`font-semibold text-${currentColor}-600 mb-3 flex items-center`}>
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${currentColor}-500 mr-2`}></span>
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, i) => (
                        <div key={i} className={`flex flex-col items-center justify-center gap-1 w-14 sm:w-16 group opacity-0 animate-fadeIn`} style={{ animationDelay: `${i * 50}ms` }}>
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 p-1.5 flex items-center justify-center transition-all duration-300 group-hover:bg-${currentColor}-50 group-hover:shadow-md`}>
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={24}
                              height={24}
                              className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <span className={`text-xs text-center text-slate-700 truncate w-full transition-colors duration-300 group-hover:text-${currentColor}-600 font-medium`}>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className={`w-full justify-between group text-${currentColor}-700 hover:text-${currentColor}-800 font-medium`}>
                <Link href="https://github.com/AnkushGitRepo">
                  View GitHub Profile
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Books Card */}
          <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl h-[min(400px,65vh)] md:col-span-2 lg:col-span-1 flex flex-col">
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Books placeholder"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <Badge className="bg-white/20 text-white border-none backdrop-blur-sm mb-2">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Reading List
                  </Badge>
                  <h3 className="text-xl font-bold text-white">{books.title}</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-4 flex-grow overflow-y-auto custom-scrollbar">
              <p className="text-sm text-slate-500">{books.description}</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <h4 className="font-medium text-slate-900 text-sm">Fiction</h4>
                  <p className="text-xs text-slate-500">Novels, short stories, and literary works</p>
                </div>
                <div className="bg-slate-100 p-3 rounded-lg">
                  <h4 className="font-medium text-slate-900 text-sm">Technology</h4>
                  <p className="text-xs text-slate-500">Programming, AI, and tech trends</p>
                </div>
                <div className="bg-slate-100 p-3 rounded-lg">
                  <h4 className="font-medium text-slate-900 text-sm">Science</h4>
                  <p className="text-xs text-slate-500">Physics, astronomy, and discoveries</p>
                </div>
                <div className="bg-slate-100 p-3 rounded-lg">
                  <h4 className="font-medium text-slate-900 text-sm">Philosophy</h4>
                  <p className="text-xs text-slate-500">Ideas, concepts, and thought experiments</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className={`w-full justify-between group text-${currentColor}-700 hover:text-${currentColor}-800 font-medium`}>
                <Link href="/books">
                  Explore My Bookshelf
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Location Card */}
          <Card className="overflow-hidden border-none bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl h-[min(400px,65vh)] md:col-span-2 lg:col-span-2 flex flex-col">
            <div className="relative h-40 w-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717963153!2d72.43965535!3d23.0201716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  Current Location
                </Badge>
                <h3 className="text-xl font-bold text-white">{location.title}</h3>
              </div>
            </div>
            <CardContent className="pt-4 flex-grow overflow-y-auto custom-scrollbar">
              <p className="text-sm text-slate-500">{location.description}</p>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <Badge variant="outline" className="mr-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  {location.coordinates}
                </Badge>
                <Badge variant="outline">
                  LJ University
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className={`w-full justify-between group text-${currentColor}-700 hover:text-${currentColor}-800 font-medium`}>
                <Link href={location.mapLink} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
