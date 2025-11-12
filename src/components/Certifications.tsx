import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Certifications = () => {
  const certifications = [
    {
      title: "Frontend Development Certification",
      issuer: "freeCodeCamp",
      date: "2024",
      description: "Comprehensive frontend development course covering HTML, CSS, JavaScript, and responsive design.",
      link: "#"
    },
    {
      title: "React Developer Certification",
      issuer: "Udemy",
      date: "2024",
      description: "Advanced React concepts including hooks, context API, and modern React patterns.",
      link: "#"
    },
    {
      title: "Web Design Fundamentals",
      issuer: "Coursera",
      date: "2023",
      description: "Core principles of web design, UI/UX basics, and design thinking.",
      link: "#"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "HackerRank",
      date: "2023",
      description: "Problem solving and algorithmic thinking with JavaScript.",
      link: "#"
    },
    {
      title: "CSS Animation & Effects",
      issuer: "Udemy",
      date: "2023",
      description: "Advanced CSS animations, transitions, and visual effects.",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-6 hover:glow-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {cert.description}
              </p>

              <Button
                variant="outline"
                size="sm"
                className="w-full glass hover:glow-secondary"
                onClick={() => window.open(cert.link, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
