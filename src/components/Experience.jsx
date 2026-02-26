import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold text-center mb-12">Professional Experience</h3>

      <div className="space-y-10">
        {/* CNH Industrial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl"
        >
          <h4 className="text-2xl font-semibold mb-2">CNH Industrial</h4>
          <p className="text-sm opacity-80 mb-4">Software Engineer 2 | Gurugram, India | Aug 2022 – Present</p>

          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>Leading frontend delivery for CNH FieldOps and MyBrand portals (NewHolland, CaseIH, Steyr), mentoring a team of 5 engineers.</li>
            <li>Architected scalable Micro‑Frontend solutions using Web Components to enable modular cross-application integration.</li>
            <li>Designed and built a centralized Design Language System (React + Storybook) published via private npm registry.</li>
            <li>Developed REST APIs using Node.js & Express with unit testing via Jest and React Testing Library.</li>
            <li>Implemented CI/CD pipelines for static apps using Azure Blob Storage & CDN automation.</li>
            <li>Integrated analytics & tracking (GTM, Pendo) and managed HTML email templating solutions.</li>
          </ul>

          <p className="mt-4 text-xs opacity-70">
            Tech Stack: React, Redux, Web Components, Micro‑Frontends, Storybook, Node.js, WebSocket, Webpack, Vite, Gulp, Azure CDN
          </p>
        </motion.div>

        {/* Gartner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl"
        >
          <h4 className="text-2xl font-semibold mb-2">Gartner</h4>
          <p className="text-sm opacity-80 mb-4">Software Engineer | Gurugram, India | Jun 2021 – Aug 2022</p>

          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>Built a cloud-based serverless reporting platform using ReactJS, Python, MySQL & AWS.</li>
            <li>Deployed frontend via S3, CloudFront & Route 53 with optimized performance delivery.</li>
            <li>Developed AWS Lambda APIs and automated infrastructure provisioning with Terraform.</li>
            <li>Integrated Okta authentication and resolved SAST/DAST security findings.</li>
            <li>Configured monitoring using Splunk and Catchpoint for performance observability.</li>
            <li>Created POCs using Power Platform (Power Apps, Power Automate, Power BI Embedded).</li>
          </ul>

          <p className="mt-4 text-xs opacity-70">
            Tech Stack: React, Redux, Material UI, Python, AWS Lambda, S3, CloudFront, Terraform, Jenkins, Okta
          </p>
        </motion.div>

        {/* Accenture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl"
        >
          <h4 className="text-2xl font-semibold mb-2">Accenture</h4>
          <p className="text-sm opacity-80 mb-4">Software Engineer | Noida, India | Oct 2018 – Jun 2021</p>

          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>Delivered enterprise audit & reporting platform using .NET Core, React & SQL Server.</li>
            <li>Built REST APIs and implemented Azure AD authentication (ADAL/MSAL).</li>
            <li>Developed responsive UI using React, Redux, Bootstrap & JavaScript.</li>
            <li>Optimized SQL queries, stored procedures & improved database performance.</li>
            <li>Integrated Power BI reports and collaborated with security/performance teams.</li>
          </ul>

          <p className="mt-4 text-xs opacity-70">
            Tech Stack: .NET Core, ASP.NET MVC, React, Redux, SQL Server, Azure AD, Power BI
          </p>
        </motion.div>
      </div>
    </section>
  );
}
