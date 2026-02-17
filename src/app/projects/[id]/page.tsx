"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react"
import { projects } from "@/data/projects"

export default function ProjectDetailPage() {
  const params = useParams()
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="aspect-video bg-linear-to-br from-primary/20 to-cyan-500/20 rounded-xl mb-8 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Tag className="h-24 w-24 text-primary/30" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-all hover:scale-105"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">About this project</h2>
            <p className="text-muted-foreground mb-6">
              {project.longDescription || project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Created</span>
                </div>
                <p className="text-muted-foreground">
                  {new Date(project.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Tag className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Technologies</span>
                </div>
                <p className="text-muted-foreground">
                  {project.tags.join(", ")}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Modern and responsive design</li>
              <li>Optimized performance and accessibility</li>
              <li>Clean and maintainable code</li>
              <li>Comprehensive documentation</li>
              <li>Best practices and industry standards</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}