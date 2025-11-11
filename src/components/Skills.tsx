import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-emerald-600" },
        { name: "Express.js", level: 82, color: "from-gray-600 to-gray-800" },
        { name: "MongoDB", level: 75, color: "from-green-600 to-green-800" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 85, color: "from-orange-600 to-red-600" },
        { name: "GitHub Actions", level: 70, color: "from-purple-500 to-purple-700" },
        { name: "Docker", level: 65, color: "from-blue-400 to-blue-600" },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass p-6 h-full hover:glow-primary transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
