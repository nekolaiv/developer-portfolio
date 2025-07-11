"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight">Nekolaiv</h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light">Junior Software Developer</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I craft digital experiences with clean code and thoughtful design. Passionate about creating solutions
              that make a difference.
            </p>

            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          <div className="pt-8">
            <Button variant="ghost" onClick={scrollToProjects} className="group">
              <span className="mr-2">View My Work</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
