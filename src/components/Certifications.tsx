import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Certifications = () => {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Jan - Apr 2025",
      description: "Completed the NPTEL Cloud Computing certification, gaining strong fundamentals in cloud models, virtualization, storage, and cloud security with hands-on understanding of scalable cloud architectures.",
      link: "https://drive.google.com/file/d/1dbnUngM6wWrO6lFZwGHYhhEA1LwqVvHE/view?usp=sharing"
    },
    {
      title: "Building Website using AI",
      issuer: "JUNO",
      date: "20 May 2025",
      description: "Completed Juno's 'Building Websites Using AI' course, learning to create responsive websites efficiently using AI-based design and development tools.",
      link: "https://drive.google.com/file/d/1FDcesXgFzE-e-nqnuvT4wUhgRD5c62Ch/view?usp=sharing"
    },
    {
      title: "Student's Chapter",
      issuer: "The Institution of Engineers (India)",
      date: "Valid upto 2027",
      description: "Received the Institution of Engineers (India) – Students' Chapter Membership, recognizing active participation in engineering-related professional activities, technical events, and skill-building initiatives conducted by IEI.",
      link: "https://drive.google.com/file/d/1-DnIrpXZqtxK7vzpdKwXZ7LX9uAkQ9dl/view?usp=sharing"
    },
    {
      title: "Job Readiness Through Web Technologies",
      issuer: "Study Comrade",
      date: "26 May 2025",
      description: "Completed a webinar focused on job readiness, understanding web technologies, industry needs, and how to prepare for web-based roles.",
      link: "https://drive.google.com/file/d/10xKmGpCVdLsyxZ9kRCNd-92asUznLCi0/view?usp=sharing"
    },
    {
      title: "Career Guidance Webinar",
      issuer: "SkillDunia (in collaboration with E-Cell IIT Hyderabad)",
      date: "4 April 2025",
      description: "Participated in a career guidance session covering opportunities, required skills, and strategies to build a successful career path.",
      link: "#"
    },
    {
      title: "Professional Career Counselling",
      issuer: "Elewayte",
      date: "15 April 2025",
      description: "Attended an interactive webinar on career counselling, gaining clarity on career planning, skill development, and industry expectations.",
      link: "https://drive.google.com/file/d/1HnlMmj-j7adBmegpEdDU2Zs953q-X5KY/view?usp=sharing"
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
