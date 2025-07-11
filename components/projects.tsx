"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Gamepad2, Code, Globe } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Dodge AI Game",
      description:
        "An AI-based game developed using the Godot game engine. Features intelligent enemy behavior and dynamic gameplay mechanics.",
      icon: <Gamepad2 className="w-6 h-6" />,
      technologies: ["Godot Engine", "GDScript", "AI", "Game Development"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "ASCII/Morse Code Converter",
      description:
        "A Java application that converts text between ASCII and Morse code formats. Includes both GUI and command-line interfaces.",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Java", "Swing", "Algorithm Design"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Movie Listing Website",
      description:
        "A full-stack web application for browsing and managing movie listings. Features user authentication and responsive design.",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Node.JS", "SQLite3", "Bootstrap", "Express"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "MEED Foundation Dashboard",
      description:
        "Interactive data visualization dashboard for the MEED Foundation, featuring real-time analytics and public deployment.",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Node.JS", "MongoDB", "Apache ECharts", "TailwindCSS"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Vehicle Parts Platform",
      description:
        "E-commerce platform for vehicle parts built on Shopify, with custom features for inventory management.",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Shopify", "JavaScript", "CSS", "E-commerce"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A showcase of my technical projects and contributions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {project.icon}
                      </div>
                      <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400">
                          {project.icon}
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{project.title}</h4>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
