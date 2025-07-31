import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

const Index = () => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto bg-sage rounded-full flex items-center justify-center mb-6">
              <div className="w-40 h-40 bg-olive rounded-full flex items-center justify-center">
                <span className="text-6xl text-ivory">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-6">
            เผ่าพันธ์ โพธิ์ธรรม
          </h1>

          {/* Description */}
          <p className="text-xl text-olive mb-8 leading-relaxed">
            นักศึกษาสาขาเทคโนโลยีสารสนเทศ มีความสนใจในด้าน Software Developer และ Software Tester
          </p>

          {/* CTA Button */}
          <Link 
            to="/about" 
            className="bg-sage text-olive px-8 py-3 rounded-lg font-semibold  hover:bg-olive hover:text-sage transition-colors inline-flex items-center gap-2"
          >
            เกี่ยวกับฉัน <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
