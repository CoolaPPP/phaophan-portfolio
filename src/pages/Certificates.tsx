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
      name: "การอบรมเชิงปฏิบัติการ เรื่อง การพัฒนา Web Application ด้วย Next.js  Framework และ mySQL",
      image : "/images/cer1.png",
      description: "การอบรมเชิงปฏิบัติการเกี่ยวกับการพัฒนา Web Application ด้วย Next.js Framework และ mySQL Database ที่ครอบคลุมการสร้างแอปพลิเคชันที่มีประสิทธิภาพและปลอดภัย มีการตกแต่ง UI ด้วย Tailwind CSS และ Deploy Website ผ่าน Vercel", 
      issuer: "มหาวิทยาลัยราชภัฏเชียงใหม่",
      date: "มีนาคม 2568"
    },
    {
      id: 2,
      name: "การอบรมเชิงปฏิบัติการ เรื่อง การพัฒนา Application ด้วย Flutter และ Firebase",
      image: "/images/cer2.png",
      description: "การอบรมเชิงปฏิบัติการเกี่ยวกับการพัฒนา Application ด้วย Flutter และ Firebase เพื่อสร้างแอปพลิเคชันให้มีประสิทธิภาพ และมีความสวยงาม ง่ายต่อการใช้งาน",
      issuer: "มหาวิทยาลัยราชภัฏเชียงใหม่",
      date: "มีนาคม 2568"
    },
    {
      id: 3,
      name: "การอบรมเชิงปฏิบัติการ CTF BOOTCAMP",
      image: "/images/cer3.png",
      description: "การอบรมเชิงปฏิบัติการ CTF BOOTCAMP เพื่อพัฒนาทักษะด้านความปลอดภัยไซเบอร์ และการแนวอาชีพทางด้านการรักษาความปลอดภัยไซเบอร์",
      issuer: "สถาบันวิชาการความมั่นคงทางไซเบอร์แห่งชาติ (THNCA)",
      date: "พฤษภาคม 2568"
    },
    {
      id: 4,
      name: "การฝึกอบรม Azure AI Zero to Hero",
      image: "/images/cer4.png",
      description: "การฝึกอบรม Azure AI Zero to Hero เพื่อพัฒนาความรู้และทักษะในการใช้เทคโนโลยีปัญญาประดิษฐ์ (AI) บนแพลตฟอร์ม Microsoft Azure",
      issuer: "มหาวิทยาลัยราชภัฏเชียงใหม่",
      date: "กรกฎาคม 2568"
    },
    {
      id: 5,
      name: "การฝึกอบรมทักษะเอไอระดับพื้นฐาน (Basic AI)",
      image: "/images/cer5.png",
      description: "การฝึกอบรมทักษะเอไอระดับพื้นฐาน เพื่อพัฒนาความรู้และทักษะในการใช้เทคโนโลยีปัญญาประดิษฐ์ (AI) ในด้านต่าง ๆ เช่น การวิเคราะห์ข้อมูล การใช้งาน AI ในชีวิตประจําวัน หรือการประยุกต์ใช้ AI ในงานต่าง ๆ",
      issuer: "มหาวิทยาลัยราชภัฏเชียงใหม่",
      date: "สิงหาคม 2568"
    },
    {
      id: 6,
      name: "LINK Certified Network Cabling for Engineering",
      image: "/images/cer6.jpg",
      description: "ประกาศนียบัตรรับรองการเดินสายเครือข่ายสำหรับงานวิศวกรรมจากบริษัท อินเตอร์ลิงค์ คอมมิวนิเคชัน จำกัด (มหาชน)",
      issuer: "Interlink Communication",
      date: "กันยายน 2567"
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