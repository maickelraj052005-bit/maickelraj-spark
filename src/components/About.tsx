import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Award, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code, label: "Projects", value: "3" },
    { icon: Award, label: "Certifications", value: "6" },
    { icon: Wrench, label: "Technologies", value: "10+" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar and bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative glass rounded-2xl p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                  <img 
                    src={profilePhoto} 
                    alt="Maickelraj Profile" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed space-y-3">
                  <span className="block">Hi there! 👋 I'm Maickelraj, a passionate Frontend Developer from Salem.</span>
                  <span className="block">I enjoy creating beautiful, responsive, and user-friendly websites using HTML, CSS, and JavaScript.</span>
                  <span className="block">I'm currently pursuing my B.E. in Computer Science and Engineering at Sri Shanmugha College of Engineering and Technology.</span>
                  <span className="block">I love bringing creative ideas to life through clean code and smooth animations that make every webpage more interactive and alive.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="glass p-6 hover:glow-primary transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
