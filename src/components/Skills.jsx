export default function Skills() {
  const skills = [
    "React / Redux / Micro-Frontends",
    ".NET Core / Node.js",
    "Azure & AWS",
    "CI/CD & DevOps",
    "Storybook Design Systems",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold text-center mb-10">Technical Skills</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="p-6 bg-white/20 backdrop-blur-md rounded-2xl text-center hover:scale-105 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}