import Navbar from "@/components/Navbar";

const Projects = () => {
  const featuredProject = {
    title: "Independent Study Project",
    description: "A comprehensive e-commerce platform that revolutionizes online shopping experiences. This project was built from the ground up using modern web technologies, featuring a complete user authentication system, secure payment processing through Stripe integration, and a robust admin dashboard for inventory management. The platform supports real-time notifications, advanced product filtering, shopping cart persistence, and responsive design across all devices. My role involved architecting the entire frontend application, implementing state management solutions, and ensuring optimal performance through code splitting and lazy loading techniques.",
    technologies: ["PHP", "Laravel", "Bootstrap", "JavaScript", "mySQL"],
    mainImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        caption: "Clean and intuitive product listing page with advanced filtering options"
      },
      {
        url: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop",
        caption: "Streamlined checkout process with multiple payment options"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        caption: "Comprehensive admin dashboard for inventory and order management"
      }
    ]
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-ivory">
        <div className="container mx-auto px-4 py-12">
          {/* Project Title */}
          <h1 className="text-5xl font-bold text-center mb-8 text-espresso">{featuredProject.title}</h1>
          
          {/* Main Project Image */}
          <div className="mb-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src={featuredProject.mainImage} 
                alt={featuredProject.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-espresso mb-6">Coffee Shop E-Commerce Project </h2>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-espresso mb-6">Project Overview</h2>
            <p className="text-olive leading-relaxed text-lg">
              {featuredProject.description}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-espresso mb-6">Languages & Frameworks</h2>
            <div className="flex flex-wrap gap-3">
              {featuredProject.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="bg-sage text-ivory px-4 py-2 rounded-full font-medium hover:bg-olive transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-espresso mb-8 text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProject.galleryImages.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={image.url} 
                      alt={`${featuredProject.title} - ${image.caption}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-olive text-sm leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;