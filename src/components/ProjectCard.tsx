interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
      onClick={() => onClick(project)}
    >
      <div className="aspect-video bg-secondary">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-card-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;