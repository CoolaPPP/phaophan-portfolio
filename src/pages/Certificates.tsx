import { useState } from "react";
import Navbar from "@/components/Navbar";
import CertificateCard from "@/components/CertificateCard";
import Modal from "@/components/Modal";

interface Certificate {
  id: number;
  name: string;
  image: string;
  description: string;
  issuer: string;
  date: string;
}

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      name: "AWS Certified Developer",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop",
      description: "This certification validates expertise in developing and maintaining applications on the Amazon Web Services platform.",
      issuer: "Amazon Web Services",
      date: "March 2024"
    },
    {
      id: 2,
      name: "React Professional Certificate",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description: "Advanced certification demonstrating proficiency in React development, including hooks, context, and performance optimization.",
      issuer: "Meta",
      date: "January 2024"
    },
    {
      id: 3,
      name: "TypeScript Fundamentals",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      description: "Comprehensive certification covering TypeScript fundamentals, advanced types, and best practices for large-scale applications.",
      issuer: "Microsoft",
      date: "November 2023"
    },
    {
      id: 4,
      name: "Full Stack Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      description: "Complete full-stack development certification covering front-end and back-end technologies, databases, and deployment.",
      issuer: "freeCodeCamp",
      date: "September 2023"
    },
    {
      id: 5,
      name: "Google Cloud Platform",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      description: "Certification in Google Cloud Platform services, including compute, storage, networking, and machine learning APIs.",
      issuer: "Google",
      date: "July 2023"
    },
    {
      id: 6,
      name: "UI/UX Design Principles",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
      description: "Certificate in user interface and user experience design principles, including wireframing, prototyping, and user research.",
      issuer: "Adobe",
      date: "May 2023"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-ivory">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-espresso">การฝึกอบรมและประกาศนียบัตร</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onClick={setSelectedCertificate}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedCertificate} 
        onClose={() => setSelectedCertificate(null)}
      >
        {selectedCertificate && (
          <div className="p-8">
            <div className="aspect-[4/3] bg-sage/10 rounded-lg mb-6 overflow-hidden">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-espresso mb-4">{selectedCertificate.name}</h2>
            <div className="mb-4">
              <p className="text-olive font-semibold text-lg">{selectedCertificate.issuer}</p>
              <p className="text-olive/70">{selectedCertificate.date}</p>
            </div>
            <p className="text-olive leading-relaxed">{selectedCertificate.description}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Certificates;