"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ProjectGalleryModal } from "./project-gallery-modal"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "South Indian Bank-Actyv.ai",
      description:
        "Integrated South Indian Bank with Actyv.ai's platform, enabling seamless financial transactions and data exchange. Developed and maintained React.js components, Node.js APIs, and MongoDB database interactions.",
      images: [],
      technologies: ["ReactJS", "Node.js", "MongoDB", "JavaScript", "Redux"],
      liveUrl: "#",
      achievements: ["Successful integration of banking services", "Improved transaction efficiency"],
      challenges:
        "Ensuring secure and reliable data transfer between systems while adhering to strict banking regulations.",
      features: ["Real-time transaction processing", "Secure data encryption", "User authentication and authorization"],
    },
     {
      title: "Ezlivingtrust - Attorney Services",
      description:
        "Developed comprehensive estate planning packages tailored to client needs, achieving 95% client satisfaction rate and 40% increase in referrals within the first year.",
      images: [
        "/projects/easylivingtrust/01.png",
        "/projects/easylivingtrust/02.png",
      ],
      technologies: [
        "Next.js",
        "Nest.js",
        "PostgreSQL",
        "Docker",
        "Amazon ECS",
      ],
      githubUrl: "#",
      liveUrl: "https://ezlivingtrust.com/",
      achievements: [
        "95% client satisfaction",
        "40% increase in referrals",
        "Scalable architecture",
      ],
      challenges:
        "Orchestrated the migration of WordPress data to a Laravel database, including Stripe subscription data for 2,000+ users with zero data loss.",
      features: [
        "Estate planning tools",
        "Document generation",
        "Client portal",
        "Appointment scheduling",
      ],
    },
    {
      title: "SkimAI - Professional AI Service",
      description:
        "Developed AI-driven solutions to enhance employee productivity by streamlining tasks and improving operational efficiency. Conducted R&D on Strapi CRM customization for unique client requirements.",
      images: ["/projects/skimai/01.png", "/projects/skimai/02.png"],
      technologies: ["ReactJS", "React Toolkit", "Strapi CRM", "Stripe", "MUI"],
      liveUrl: "https://app.skimai.com",
      achievements: [
        "Enhanced productivity",
        "Custom CRM solutions",
        "Process automation",
      ],
      challenges:
        "Conducted research and development (R&D) on Strapi CRM, focusing on customization to meet unique client requirements.",
      features: [
        "AI-powered task automation",
        "Custom CRM integration",
        "Employee productivity tracking",
        "Workflow optimization",
      ],
    },
    {
      title: "Money In The Pot (MITP)",
      description:
        "Developed Money In The Pot (MITP), a React.js application for collaborative savings and investment. Focused on creating a user-friendly interface and secure transaction processing.",
      images: [],
      technologies: ["ReactJS", "JavaScript", "Node.js", "Express.js"],
      githubUrl: "#",
      liveUrl: "#",
      achievements: [
        "Created a secure and user-friendly platform for collaborative savings",
        "Implemented real-time transaction tracking",
      ],
      challenges: "Ensuring secure and reliable transaction processing while maintaining a user-friendly interface.",
      features: ["Collaborative savings goals", "Secure transaction processing", "Real-time progress tracking"],
    },
  ]

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work across healthcare, AI, marketing, and cloud storage domains, demonstrating
            expertise in full-stack development and modern technologies.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group border-2 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => openProjectModal(project)}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                    {project.title}
                    {project.liveUrl && (
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openProjectModal(project)}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectGalleryModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </section>
  )
}
