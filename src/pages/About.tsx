import Navbar from "@/components/Navbar";


const About = () => {
  const skills = [
    "TypeScript", "Next.js", "PHP", "Laravel", "Bootstrap", "Tailwind CSS",
    "JavaScript", "Flutter", "Firebase", "mySQL", "DrawIO", "GitHub",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-ivory">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 text-espresso">เกี่ยวกับฉัน</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Profile Picture */}
              <div className="flex justify-center">
                <div className="w-auto h-auto bg-sage rounded-2xl flex items-center justify-center">
                  <div className="w-auto h-auto bg-olive rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/profile.jpg" 
                      alt="Profile"
                      width={240}
                      height={240}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-espresso mb-4">เผ่าพันธ์ โพธิ์ธรรม</h2>
                  <p className="text-olive leading-relaxed">
                      ผมเป็นนักศึกษาสาขาเทคโนโลยีสารสนเทศ มีความสามารถในการพัฒนาเว็บไซต์ ด้วยใช้ TypeScript (Next.js) / PHP (Laravel)
                      สามารถพัฒนาแอปพลิเคชันด้วย Flutter และยังสามารถทำ Test Case / Test Scenario 
                      โดยมีประสบการณ์จากการเรียน การทำโครงงานการศึกษาอิสระ รวมไปถึงการอบรมเชิงปฏิบัติจากหน่วยงานภายในและภายนอกมหาวิทยาลัย
                  </p>
                </div>

                <div>
                  <p className="text-olive leading-relaxed">
                    ผมมีความสนใจในการพัฒนาเว็บไซต์และแอปพลิเคชันที่ใช้งานง่ายและมีประสิทธิภาพ 
                    เว็บไซต์หรือแอปพลิเคชันนั้น ๆ จะต้องมีความสมบูรณ์ ปลอดภัย ซึ่งจะต้องมาจากการวางแผนและออกแบบที่ดี 
                    มีการตรวจสอบและทดสอบอย่างละเอียด
                    ผมยังมีความมุ่งมั่นที่จะเรียนรู้เทคโนโลยีใหม่ ๆ และพัฒนาทักษะของตัวเองอย่างต่อเนื่อง 
                  </p>
                </div>

                <div>
                  <p className="text-olive leading-relaxed">
                    เป้าหมายของผมคือการพัฒนาความรู้และทักษะผ่านการลงมือปฏิบัติงานจริง และนำความสามารถไปใช้สร้างประโยชน์ให้แก่องค์กร
                    ด้วยทักษะการทำงานเป็นทีม ความกระตือรือร้น และความคิดสร้างสรรค์
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-espresso">Languages - Frameworks - Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="bg-sage/20 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <p className="text-center font-medium text-olive">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-espresso">ที่อยู่ปัจจุบัน</h2>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-olive" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-olive text-lg font-medium">อำเภอสันทราย จังหวัดเชียงใหม่</p>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-espresso">ประวัติการศึกษา</h2>
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-sage/20 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-espresso mb-2">ระดับปริญญาตรี</h3>
                  <p className="text-olive text-lg font-bold">คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ</p>
                  <p className="text-olive font-medium">มหาวิทยาลัยราชภัฏเชียงใหม่</p>
                  <p className="text-olive/70">2565 - ปัจจุบัน</p>
                </div>
                <div className="bg-sage/20 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-espresso mb-2">ระดับมัธยมศึกษาตอนปลาย</h3>
                  <p className="text-olive font-medium">โรงเรียนถ้ำปินวิทยาคม</p>
                  <p className="text-olive/70">2559 - 2562</p>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-espresso">สิ่งที่สนใจ</h2>
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {["Games", "IoT", "Specialty Coffee", "Animation", "Generative AI"].map((interest) => (
                  <span key={interest} className="bg-olive text-ivory px-4 py-2 rounded-full text-sm font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact & Socials Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-espresso">Contact</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://github.com/CoolaPPP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-olive text-ivory px-6 py-3 rounded-lg font-medium hover:bg-espresso transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                
                
                
                <a 
                  href="https://www.instagram.com/coola.p/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-olive text-ivory px-6 py-3 rounded-lg font-medium hover:bg-espresso transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;