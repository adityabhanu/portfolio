export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white/20 rounded-xl">Micro-Frontend Platform</div>
        <div className="p-6 bg-white/20 rounded-xl">Design Language System</div>
        <div className="p-6 bg-white/20 rounded-xl">Serverless Reporting App</div>
      </div>
    </section>
  );
}