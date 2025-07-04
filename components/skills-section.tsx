"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "React Redux", level: 80 },
        { name: "React Hooks", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "REST API", level: 90 },
        { name: "API Integration", level: 88 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 77 },
        { name: "AWS Services", level: 82 },
        { name: "Docker", level: 70 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub/GitLab", level: 95 },
        { name: "Bitbucket", level: 90 },
        { name: "Razorpay", level: 85 },
        { name: "AWS EC2/S3", level: 82 },

      ],
    },
  ]

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: (value: number) => `${value}%`,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies, cloud services, and development tools with proven
            experience in building scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
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
