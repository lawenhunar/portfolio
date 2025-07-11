"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      title: "Data Analyst / Software Developer",
      company: "MEED Foundation",
      location: "Slemani",
      period: "August 2024 - Present",
      type: "Full-time",
      achievements: [
        "Cleaning and processing large datasets to ensure accuracy and consistency",
        "Developed interactive and fast dashboards to be deployed publicly using Apache ECharts",
        "Developed MEED Foundation's website using Node.JS, MongoDB, and TailwindCSS",
      ],
      technologies: ["Node.JS", "MongoDB", "TailwindCSS", "Apache ECharts", "Data Analysis"],
    },
    {
      title: "Full-Stack Developer",
      company: "Pure Platform",
      location: "Baghdad (Remote)",
      period: "June - September 2024",
      type: "Internship",
      achievements: [
        "Developed responsive websites using Node.JS (Express), SQLite, Bootstrap, and PHP",
        "Collaborated remotely with a team to implement website features",
      ],
      technologies: ["Node.JS", "Express", "SQLite", "Bootstrap", "PHP"],
    },
    {
      title: "Web Developer",
      company: "Sayara App",
      location: "Slemani (Remote)",
      period: "November 2023 - February 2024",
      type: "Internship",
      achievements: [
        "Assisted with uploading and managing vehicle parts listings for a website built using Shopify",
        "Handled basic development tasks including bug fixes and UI improvements",
      ],
      technologies: ["Shopify", "Web Development", "UI/UX"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            My professional journey in software development and data analysis
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mt-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
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
    </section>
  )
}
