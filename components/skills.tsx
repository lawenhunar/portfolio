"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Gamepad2, Users } from "lucide-react"
import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "Arduino"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-5 h-5" />,
      skills: ["Node.JS", "Flutter", "Bootstrap", "TailwindCSS", "Express"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MySQL", "MongoDB", "SQLite3"],
    },
    {
      title: "Tools & Platforms",
      icon: <Smartphone className="w-5 h-5" />,
      skills: ["Shopify", "Apache ECharts", "Git", "GitHub"],
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-5 h-5" />,
      skills: ["Godot Engine", "GDScript", "Game Design", "AI Implementation"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: ["Teamwork", "Management", "Remote Collaboration", "Quick Learner"],
    },
  ]

  const languages = [
    { name: "Kurdish", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "Arabic", level: "Intermediate" },
    { name: "Italian", level: "Basic" },
    { name: "German", level: "Basic" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Technical skills and languages that power my development work
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-900 dark:text-white">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-slate-900 dark:text-white">
                <Globe className="w-6 h-6" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <div className="font-medium text-slate-900 dark:text-white">{lang.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{lang.level}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
