
export default function Projects() {
  const projects = [
    {
      title: "Hydration Tracker",
      description: "An app to help users track their daily water intake",
      technologies: ["React", "TypeScript", "Firebase"],
    },
    {
      title: "Cello Fingering Generator",
      description: "Reinforcement Learning system for optimal cello fingerings",
      technologies: ["Python", "TensorFlow", "Music21"],
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2 text-gray-700">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}