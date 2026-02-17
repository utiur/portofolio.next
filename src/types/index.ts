export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  createdAt: Date
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  date: Date
  readingTime: number
  tags: string[]
  author: string
}