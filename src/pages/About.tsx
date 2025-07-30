import Navbar from "@/components/Navbar";

const About = () => {
  const skills = [
    "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Python",
    "JavaScript", "Vue.js", "MongoDB", "PostgreSQL", "Git", "Docker"
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Profile Picture */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">👨‍💻</span>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Hello, I'm a Creative Developer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate full-stack developer with over 5 years of experience creating 
                    innovative web applications and digital solutions. I specialize in modern web 
                    technologies and love bringing creative ideas to life through clean, efficient code.
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in web development started with curiosity about how websites work, 
                    and it has evolved into a career focused on creating user-centric applications 
                    that solve real-world problems. I enjoy working with teams to deliver high-quality 
                    software that makes a difference.
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community through 
                    blog posts and mentoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Skills & Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="bg-card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <p className="text-center font-medium text-card-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;