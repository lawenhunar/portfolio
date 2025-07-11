"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              LH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">Lawen Hunar</h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2">Software Engineer</p>
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 mb-8">
              <MapPin className="w-4 h-4" />
              <span>Nawroz City, Slemani, Kurdistan</span>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer with international experience, passionate about creating innovative solutions and
            building scalable applications. Currently working as a Data Analyst & Software Developer at MEED Foundation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/lawenhunar" className="text-slate-600 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/lawenhunar"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:lawenhunar22@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
