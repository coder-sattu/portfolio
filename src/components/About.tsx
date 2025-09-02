import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Code } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "RIT Hackathon Phase 2",
      description: "Selected for prestigious hackathon competition"
    },
    {
      icon: Award,
      title: "Abdul Kalam Fellowship",
      description: "Research fellowship recipient"
    },
    {
      icon: Code,
      title: "Open Source Contributor",
      description: "Active contributor to various projects"
    },
    {
      icon: Star,
      title: "9.52 CGPA",
      description: "Academic excellence in AI/ML"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aspiring AI/ML specialist skilled in developing ML models, analyzing data, and delivering intelligent solutions. 
            I'm passionate about creating technology that makes a meaningful impact on people's lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="card-glow p-6 text-center scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 glow-primary">
                  <highlight.icon className="h-8 w-8 text-neon-blue" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Bio Section */}
        <div className="mt-16 fade-in-up">
          <Card className="card-glow p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neon-purple mb-4">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently pursuing B.Tech in AI/ML at D. Y. Patil University with a CGPA of 9.05. 
                  I specialize in machine learning, data analysis, and full-stack development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in bridging the gap between complex AI concepts and practical applications 
                  that solve real-world problems. I believe in continuous learning and contributing to the 
                  open-source community.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                  <span className="text-foreground">Machine Learning Enthusiast</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse delay-300"></div>
                  <span className="text-foreground">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse delay-500"></div>
                  <span className="text-foreground">Data Analysis Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse delay-700"></div>
                  <span className="text-foreground">Problem Solver</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;