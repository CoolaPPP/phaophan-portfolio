import Navbar from "@/components/Navbar";

const Projects = () => {
  const featuredProject = {
    title: "โครงงานการศึกษาอิสระ",
    description: "เว็บไซต์สำหรับการขายกาแฟที่ครอบคลุมการทำงานทั้งการขายและการจัดการสินค้า โดยโครงงานนี้ถูกจัดทำขึ้นจากการออกแบบ Responsive website พัฒนาเว็บไซต์ด้วยภาษา PHP (ใช้ Laravel เป็น Framework), JavaScript ใช้ Bootstrap และใช้ mySQL Database เว็บไซต์นี้รองรับการขายสินค้าที่เป็นกาแฟ และสินค้าอื่น ๆ ได้ สามารถเรียกดูสินค้า โดยแยกตามประเภทของสินค้าได้ รองรับการใช้โปรโมชันเป็นส่วนลดในการซื้อสินค้า รองรับการชำระเงิน รวมไปถึงการยกเลิกการสั่งซื้อสินค้า และเว็บไซต์ยังมีฝั่งหลังบ้าน เพื่อไว้ใช้สำหรับเพิ่มหรือแก้ไขข้อมูลต่าง ๆ ได้ เรียกดูข้อมูลและรายงานการขายได้",
    technologies: ["PHP", "Laravel", "Bootstrap", "JavaScript", "mySQL"],
    mainImage: "/images/1987-main.png",
    galleryImages: [
      {
        url: "/images/1987-shop.png",
        caption: "หน้าสำหรับแสดงสินค้า ที่มีการจัดเรียงตามประเภทของสินค้า"
      },
      {
        url: "/images/1987-dashboard.png",
        caption: "หลังบ้านสำหรับจัดการสินค้าและดูรายงานการขาย"
      },
      {
        url: "/images/1987-admin.png",
        caption: "การจัดการข้อมูลสินค้าและการสั่งซื้อ"
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
            <h2 className="text-2xl font-bold text-espresso mb-6">รายละเอียดของโครงงาน</h2>
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
            <h2 className="text-2xl font-bold text-espresso mb-8 text-center"></h2>
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