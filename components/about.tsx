"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Globe, Code, Users } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "International Education",
      description:
        "Software Engineering degree from American University of Iraq, with exchange experience at Ca' Foscari University, Venice",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual",
      description: "Fluent in Kurdish, English, Arabic, Italian, and German - enabling global collaboration",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Expertise",
      description: "Proficient in modern web technologies, mobile development, and game development with Godot",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Remote Collaboration",
      description: "Experienced in remote work environments with teams across different time zones",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm a passionate software engineer with a diverse background in full-stack development, data analysis, and
            international collaboration. My journey has taken me from Kurdistan to Italy and back, enriching my
            perspective on technology and global teamwork.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
