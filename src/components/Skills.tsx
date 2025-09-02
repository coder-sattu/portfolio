import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL"],
      color: "neon-blue"
    },
    {
      title: "AI/ML & Data Science",
      skills: ["Machine Learning", "Deep Learning", "OpenCV", "YOLO", "TensorFlow", "Data Analysis"],
      color: "neon-purple"
    },
    {
      title: "Web Development",
      skills: ["React", "Flask", "Streamlit", "HTML/CSS", "Node.js"],
      color: "neon-cyan"
    },
    {
      title: "Tools & Platforms",
      skills: ["Power BI", "Excel", "Git", "GitHub"],
      color: "green-400"
    }
  ];

  const getSkillClasses = (color: string) => {
    switch (color) {
      case "neon-blue":
        return "bg-neon-blue/20 text-neon-blue border-neon-blue/30 glow-primary hover:bg-neon-blue/30";
      case "neon-purple":
        return "bg-neon-purple/20 text-neon-purple border-neon-purple/30 glow-secondary hover:bg-neon-purple/30";
      case "neon-cyan":
        return "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/30";
      case "green-400":
        return "bg-green-400/20 text-green-400 border-green-400/30 hover:bg-green-400/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent and scalable solutions
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`
                      px-4 py-2 text-sm font-medium border transition-all duration-300
                      hover:scale-105 hover:shadow-lg cursor-default
                      ${getSkillClasses(category.color)}
                    `}
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Visualization */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { skill: "Python", level: 90, color: "neon-blue" },
            { skill: "Machine Learning", level: 85, color: "neon-purple" },
            { skill: "JavaScript", level: 80, color: "neon-cyan" },
            { skill: "Data Analysis", level: 88, color: "green-400" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted opacity-20"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={`${item.level}, 100`}
                    className={`text-${item.color} transition-all duration-1000 ease-out`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">{item.level}%</span>
                </div>
              </div>
              <h4 className="text-sm font-medium text-foreground">{item.skill}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;