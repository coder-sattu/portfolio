import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Project thumbnail imports
import driverDrowsinessImg from "@/assets/projects/driver-drowsiness.jpg";
import blinkitAnalysisImg from "@/assets/projects/blinkit-analysis.jpg";
import globalFoodProductionImg from "@/assets/projects/global-food-production.jpg";
import stockPredictionImg from "@/assets/projects/stock-prediction.jpg";
import attendanceSystemImg from "@/assets/projects/attendance-system.jpg";
import humanDetectionImg from "@/assets/projects/human-detection.jpg";
import hotelReservationImg from "@/assets/projects/hotel-reservation.jpg";
import simonSaysImg from "@/assets/projects/simon-says.jpg";
import todoAppImg from "@/assets/projects/todo-app.jpg";
import audioToTextImg from "@/assets/projects/audio-to-text.jpg";
import qrGeneratorImg from "@/assets/projects/qr-generator.jpg";
import zomatoCloneImg from "@/assets/projects/zomato-clone.jpg";
import amazonCloneImg from "@/assets/projects/amazon-clone.jpg";
import spotifyCloneImg from "@/assets/projects/spotify-clone.jpg";


const Projects = () => {
  const projects = [
    {
      title: "Driver Drowsiness Detection",
      description: "AI-powered system using computer vision to detect driver fatigue and prevent accidents",
      tech: ["Python", "OpenCV", "Machine Learning"],
      category: "AI/ML",
      image: driverDrowsinessImg,
      github: "https://github.com/coder-sattu/driver-drowsiness-detection-project.git"
    },
    {
      title: "Blinkit Data Analysis",
      description: "Comprehensive data analysis and visualization of delivery platform metrics",
      tech: ["Python", "Pandas", "Matplotlib"],
      category: "Data Science",
      image: blinkitAnalysisImg,
      github: "https://github.com/coder-sattu/Blinkit-Analysis.git"
    },
    {
      title: "Global Food Production Analysis",
      description: "Power BI dashboard analyzing worldwide food production trends and patterns",
      tech: ["Power BI", "Excel", "Data Visualization"],
      category: "Analytics",
      image: globalFoodProductionImg,
      github: "https://github.com/coder-sattu/Global-Food-Production-Analysis.git"
    },
    {
      title: "Stock Market Price Prediction",
      description: "ML model for predicting stock prices using historical data and technical indicators",
      tech: ["Python", "TensorFlow", "Machine Learning"],
      category: "AI/ML",
      image: stockPredictionImg,
      github: "https://github.com/coder-sattu/Stock-Market-Prediction.git"
    },
    {
      title: "Online Attendance System",
      description: "Face recognition-based attendance system with real-time tracking",
      tech: ["Python", "OpenCV", "YOLO", "Flask"],
      category: "Computer Vision",
      image: attendanceSystemImg,
      github: "https://github.com/coder-sattu/Online-Attendance-System"
    },
    {
      title: "Human Detection & Counting",
      description: "Computer vision system for accurate human detection and crowd counting",
      tech: ["Python", "YOLO", "OpenCV"],
      category: "Computer Vision",
      image: humanDetectionImg,
      github: "https://github.com/coder-sattu/Human-Detection-and-Counting"
    },
    {
      title: "Hotel Reservation System",
      description: "Full-stack web application for hotel booking and management",
      tech: ["JavaScript", "Node.js", "Database"],
      category: "Web Development",
      image: hotelReservationImg,
      github: "https://github.com/coder-sattu/Hotel-Reservation-System"
    },
    {
      title: "Simon Says Game",
      description: "Interactive memory game with colorful sequence patterns",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "Web Development",
      image: simonSaysImg,
      github: "https://github.com/coder-sattu/Simon-Says-Game"
    },
    {
      title: "Todo App",
      description: "Task management application with intuitive interface",
      tech: ["JavaScript", "React", "CSS"],
      category: "Web Development",
      image: todoAppImg,
      github: "https://github.com/coder-sattu/Todo-App"
    },
    {
      title: "Audio-to-Text Converter",
      description: "Python application for converting audio files to text using speech recognition",
      tech: ["Python", "Speech Recognition"],
      category: "Automation",
      image: audioToTextImg,
      github: "https://github.com/coder-sattu/Audio-to-Text"
    },
    {
      title: "QR Code Generator",
      description: "Simple tool for generating custom QR codes with various data types",
      tech: ["Python", "Libraries"],
      category: "Utility",
      image: qrGeneratorImg,
      github: "https://github.com/coder-sattu/QR-Code-Generator"
    },
    {
      title: "Zomato Clone",
      description: "Food delivery platform replica with modern UI and functionality",
      tech: ["React", "JavaScript", "CSS"],
      category: "Web Development",
      image: zomatoCloneImg,
      github: "https://github.com/coder-sattu/Zomato-Clone"
    },
    {
      title: "Amazon Clone",
      description: "E-commerce platform with shopping cart and payment integration",
      tech: ["React", "JavaScript", "API"],
      category: "Web Development",
      image: amazonCloneImg,
      github: "https://github.com/coder-sattu/Amazon-Clone"
    },
    {
      title: "Spotify Clone",
      description: "Music streaming application with playlist and player functionality",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "Web Development",
      image: spotifyCloneImg,
      github: "https://github.com/coder-sattu/Spotify-Clone"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "text-neon-blue border-neon-blue";
      case "Data Science":
        return "text-neon-purple border-neon-purple";
      case "Computer Vision":
        return "text-neon-cyan border-neon-cyan";
      case "Web Development":
        return "text-green-400 border-green-400";
      case "Analytics":
        return "text-yellow-400 border-yellow-400";
      default:
        return "text-gray-400 border-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Projects Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my work spanning AI/ML, data science, computer vision, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glow p-0 h-full flex flex-col scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Thumbnail */}
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {/* ✅ Code button links to GitHub */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10 btn-ripple"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>

                  {/* Demo button (optional, you can add links later) */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-neon-purple text-neon-purple hover:bg-neon-purple/10 btn-ripple"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
