import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "A full-featured e-commerce platform with modern design and functionality."
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Collaborative task management with real-time updates and team features."
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      description: "Beautiful weather dashboard with detailed forecasts and visualizations."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Creative Developer &
              <span className="text-primary block">Digital Innovator</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I craft exceptional digital experiences through clean code, 
              innovative design, and cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                View My Work <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/projects" 
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:bg-secondary/80 transition-colors inline-flex items-center gap-2"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
