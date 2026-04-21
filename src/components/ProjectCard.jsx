export default function ProjectCard({ project }) {
  const technologies = project.technologies ?? project.tech ?? []
  const liveUrl = project.liveUrl ?? project.link

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {project.image && (
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((t) => (
            <span key={t} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm font-medium">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">
              View Project 
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
