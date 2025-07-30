import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Modal from "@/components/Modal";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"]
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "A responsive portfolio website showcasing projects and skills, built with modern web technologies and optimized for performance.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      description: "A weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS Grid"]
    },
    {
      id: 5,
      title: "Social Media Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "An analytics dashboard for social media metrics with data visualization, trend analysis, and reporting features.",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"]
    },
    {
      id: 6,
      title: "Recipe Sharing App",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      description: "A recipe sharing platform where users can discover, save, and share their favorite recipes with a community of food enthusiasts.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="p-8">
            <div className="aspect-video bg-secondary rounded-lg mb-6 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-card-foreground mb-4">{selectedProject.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.description}</p>
            
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Projects;