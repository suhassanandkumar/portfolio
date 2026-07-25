export const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Angular", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "REST APIs", "AWS Lambda", "API Gateway"],
  },
  {
    category: "Cloud & Serverless",
    items: ["AWS S3", "CloudFront", "IAM", "Secrets Manager", "Serverless Architecture"],
  },
  {
    category: "Data & Storage",
    items: ["IndexedDB", "Local File System Access API", "PDF/CSV Parsing", "JSON Data Pipelines"],
  },
  {
    category: "Tooling",
    items: ["Git", "CI/CD", "Framer Motion", "Vite / Webpack"],
  },
];

export const architectureHighlights = [
  {
    title: "Local-first browser storage",
    description:
      "Designing apps that keep sensitive user data on-device by default — using IndexedDB and the Local File System Access API instead of a server database.",
  },
  {
    title: "In-browser document parsing",
    description:
      "Building parsing pipelines (pdfjs-dist, papaparse) that extract structured data from PDF/CSV statements entirely client-side, with no upload step.",
  },
  {
    title: "Serverless AWS deployment",
    description:
      "Shipping static SPAs and APIs on S3, CloudFront, Lambda, and API Gateway, with IAM-scoped roles and Secrets Manager for credential handling.",
  },
  {
    title: "Secure cloud delivery pipelines",
    description:
      "Configuring CDN-backed distribution and least-privilege IAM policies so deployments stay fast, cacheable, and locked down by default.",
  },
];
