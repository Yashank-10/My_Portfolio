import { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef(null)

  const visible = showAll ? projects : projects.slice(0, 4)

  // Scroll reveal for section heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Scroll reveal for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        }),
      { threshold: 0.08 },
    )
    document.querySelectorAll('.project-card').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [showAll])

  return (
    <section className="pt-16 pb-20 px-4 sm:px-8 max-w-5xl mx-auto" id="projects">
      <div className="w-full h-px bg-gray-100 mb-12" />

      <div ref={sectionRef} className="reveal mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
        <p className="text-gray-500">Check out some of my work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visible.map((project) => (
          <div className="project-card" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {projects.length > 4 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform"
          >
            {showAll ? 'Show Less' : 'See All Projects'}
          </button>
        </div>
      )}
    </section>
  )
}
