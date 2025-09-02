import { Card } from "@/components/ui/card";
import { Trophy, Award, FileText, GraduationCap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "RIT Hackathon Phase 2",
      description: "Selected for the second phase of prestigious hackathon competition",
      type: "Competition",
      color: "neon-blue"
    },
    {
      icon: Award,
      title: "Abdul Kalam Research Fellowship",
      description: "Prestigious research fellowship for outstanding academic performance",
      type: "Fellowship",
      color: "neon-purple"
    }
  ];

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Professional Certification",
      year: "2024"
    },
    {
      title: "Power BI Data Analysis",
      issuer: "Microsoft Certified",
      year: "2023"
    },
    {
      title: "Data Analysis & Visualization",
      issuer: "Industry Certification",
      year: "2023"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Development Bootcamp",
      year: "2022"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "D. Y. Patil Agriculture And Technical University",
      cgpa: "9.52",
      status: "Pursuing"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      percentage: "70%",
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board",
      percentage: "90.40%",
      status: "Completed"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Achievements & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition, certifications, and educational milestones that shape my journey
          </p>
        </div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neon-cyan mb-8 text-center">Major Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="card-glow p-6 scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-${achievement.color}/20 glow-primary`}>
                    <achievement.icon className={`h-8 w-8 text-${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-foreground">{achievement.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full border border-${achievement.color} text-${achievement.color}`}>
                        {achievement.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neon-purple mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="card-glow p-4 text-center scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3 flex justify-center">
                  <div className="p-2 rounded-full bg-neon-purple/20">
                    <FileText className="h-6 w-6 text-neon-purple" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">{cert.title}</h4>
                <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                <span className="text-xs text-neon-purple">{cert.year}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-neon-blue mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="card-glow p-6 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-neon-blue/20">
                    <GraduationCap className="h-8 w-8 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        edu.status === 'Pursuing' 
                          ? 'bg-green-400/20 text-green-400 border border-green-400' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <div className="flex items-center space-x-4">
                      {edu.cgpa && (
                        <span className="text-neon-cyan font-semibold">CGPA: {edu.cgpa}</span>
                      )}
                      {edu.percentage && (
                        <span className="text-neon-cyan font-semibold">Score: {edu.percentage}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;