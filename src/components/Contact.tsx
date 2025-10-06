// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
// import emailjs from "emailjs-com";
// import { useState } from "react";

// const ContactForm=() =>{
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_ftiq2vr",
//         "template_y75llkw",
//         formData,
//         "Ve8e3thKDsImiGqp9"
//       )
//       .then(
//         () => {
//           alert("✅ Message sent successfully!");
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("Error:", error);
//           alert("❌ Failed to send message. Try again!");
//         }
//       );
//   };

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "satvashil@example.com",
//       link: "mailto:satvashil@example.com",
//       color: "neon-blue"
//     },
//     {
//       icon: Github,
//       label: "GitHub",
//       value: "github.com/satvashil",
//       link: "https://github.com/satvashil",
//       color: "neon-purple"
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       value: "linkedin.com/in/satvashil",
//       link: "https://linkedin.com/in/satvashil",
//       color: "neon-cyan"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 px-4">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 fade-in-up">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
//             Let's Connect
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Ready to collaborate on exciting projects? Let's discuss how we can work together
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <Card className="card-glow p-8 fade-in-up">
//             <h3 className="text-2xl font-bold text-neon-blue mb-6">Send a Message</h3>
//             <form className="space-y-6" onSubmit={handleSubmit}>
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="name">Name</Label>
//           <Input
//             id="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="your@email.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="subject">Subject</Label>
//         <Input
//           id="subject"
//           placeholder="Project Discussion"
//           value={formData.subject}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="message">Message</Label>
//         <Textarea
//           id="message"
//           rows={6}
//           placeholder="Tell me about your project or how we can collaborate..."
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <Button
//         type="submit"
//         className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 btn-ripple glow-primary"
//         size="lg"
//       >
//         <Send className="mr-2 h-5 w-5" />
//         Send Message
//       </Button>
//     </form>
//           </Card>

//           {/* Contact Information */}
//           <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
//             <Card className="card-glow p-8">
//               <h3 className="text-2xl font-bold text-neon-purple mb-6">Get in Touch</h3>
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 I'm always open to discussing new opportunities, interesting projects, 
//                 or just having a chat about technology and innovation. Feel free to reach out!
//               </p>

//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <a
//                     key={index}
//                     href={info.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 glow-primary"
//                   >
//                     <div className={`p-3 rounded-full bg-${info.color}/20`}>
//                       <info.icon className={`h-6 w-6 text-${info.color}`} />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-foreground">{info.label}</p>
//                       <p className="text-muted-foreground text-sm">{info.value}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </Card>

//             {/* Quick Stats */}
//             <Card className="card-glow p-6">
//               <h4 className="text-lg font-bold text-neon-cyan mb-4">Quick Stats</h4>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-neon-blue">15+</div>
//                   <div className="text-sm text-muted-foreground">Projects</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-neon-purple">9.05</div>
//                   <div className="text-sm text-muted-foreground">CGPA</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-neon-cyan">3+</div>
//                   <div className="text-sm text-muted-foreground">Years Learning</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-400">10+</div>
//                   <div className="text-sm text-muted-foreground">Technologies</div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          () => {
            alert("✅ Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            console.error("Error:", error);
            alert("❌ Failed to send message. Try again!");
          }
        );
    };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satvashil@example.com",
      link: "mailto:satvashil@example.com",
      color: "neon-blue",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/satvashil",
      link: "https://github.com/satvashil",
      color: "neon-purple",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/satvashil",
      link: "https://linkedin.com/in/satvashil",
      color: "neon-cyan",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-glow p-8 fade-in-up">
            <h3 className="text-2xl font-bold text-neon-blue mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project or how we can collaborate..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 btn-ripple glow-primary"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="card-glow p-8">
              <h3 className="text-2xl font-bold text-neon-purple mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 glow-primary"
                  >
                    <div className={`p-3 rounded-full bg-${info.color}/20`}>
                      <info.icon className={`h-6 w-6 text-${info.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="card-glow p-6">
              <h4 className="text-lg font-bold text-neon-cyan mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">9.05</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan">3+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
