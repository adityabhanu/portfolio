import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const coreSkills = [
    "Javascript",
    "React Architecture",
    "Micro-Frontends",
    "Azure & AWS",
    ".NET Core",
    "Node.js",
  ];

  const skillGroups = [
    {
      title: "Programming",
      icon: <Code2 size={18} />,
      skills: ["JavaScript", "TypeScript", "C#", "Python"],
    },
    {
      title: "Frontend",
      icon: <Layout size={18} />,
      skills: [
        "React",
        "Redux",
        "Web Components",
        "Storybook",
        "Material UI",
        "Webpack",
        "Vite",
        "WebSocket",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={18} />,
      skills: [
        "Node.js",
        "Express",
        ".NET Core",
        "ASP.NET MVC",
        "Flask",
        "REST APIs",
      ],
    },
    {
      title: "Databases",
      icon: <Database size={18} />,
      skills: ["SQL Server", "MySQL"],
    },
    {
      title: "Cloud",
      icon: <Cloud size={18} />,
      skills: [
        "Azure",
        "Azure Functions",
        "Azure AD",
        "API Management",
        "AWS Lambda",
        "S3",
        "CloudFront",
        "Route 53",
        "CloudWatch",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={18} />,
      skills: [
        "Datadog",
        "Git",
        "Jenkins",
        "Terraform",
        "JFrog",
        "JIRA",
        "Splunk",
        "Pendo",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold text-center mb-6">
        Technical Expertise
      </h3>

      {/* 🔥 Core Expertise Highlight */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {coreSkills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 transition duration-300"
          >
            <Sparkles size={14} />
            {skill}
          </span>
        ))}
      </div>

      {/* 🔥 Grouped Skills */}
      <div className="space-y-14">
        {skillGroups.map((group, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-6">
              {group.icon}
              <h4 className="text-lg font-semibold tracking-wide">
                {group.title}
              </h4>
              <div className="flex-1 h-px bg-white/20 ml-4"></div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {group.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="px-4 py-1.5 text-sm rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-purple-400 transition-all duration-300 hover:shadow-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
