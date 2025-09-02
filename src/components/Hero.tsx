import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

// ✅ Use image from public folder
const profileImage = "/port_img.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative particle-bg px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gradient">
              Hi, I'm Satvashil Bhosale 👋
            </h1>
            <h2 className="text-xl lg:text-2xl text-neon-cyan font-semibold">
              AI/ML Engineer | Full Stack Developer | Open Source Contributor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I build intelligent solutions that combine data, creativity, and technology.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 btn-ripple glow-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 btn-ripple glow-secondary"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 btn-ripple glow-secondary"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end fade-in-up">
          <div className="relative">
            <div className="profile-glow w-80 h-80 lg:w-96 lg:h-96">
              <img
                src={profileImage}
                alt="Satvashil Bhosale"
                className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-lg animate-pulse"
              />
            </div>
            {/* Floating Particles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-neon-blue rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-neon-purple rounded-full opacity-70 animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-neon-cyan rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
