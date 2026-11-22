export const IMG = {
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop",
  employers: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop",
};

export const services = [
  { icon: "Users", t: "IT Recruitment", d: "Permanent, contract and contract-to-hire staffing across every technology stack." },
  { icon: "GraduationCap", t: "IT Training", d: "Instructor-led, project-based programs designed with hiring managers." },
  { icon: "Compass", t: "Career Guidance", d: "1:1 mentoring to map your skills to the roles where you'll thrive." },
  { icon: "FileText", t: "Resume Building", d: "ATS-friendly resumes and LinkedIn profiles that get callbacks." },
  { icon: "MessageSquare", t: "Interview Preparation", d: "Mock technical and behavioral interviews with real feedback." },
  { icon: "Briefcase", t: "Placement Assistance", d: "Direct introductions to our network of 150+ hiring partners." },
] as const;

export const stats = [
  { v: 12000, s: "+", l: "Candidates trained" },
  { v: 4500, s: "+", l: "Successful placements" },
  { v: 35, s: "+", l: "Courses offered" },
  { v: 94, s: "%", l: "Placement success rate" },
];

export const clients = ["Accenture", "Deloitte", "Infosys", "Capgemini", "Cognizant", "Wipro", "TCS", "IBM"];

export const jobs = [
  { role: "Java Full Stack Developer", loc: "Dallas, TX · Hybrid", tech: "Java, Spring Boot, React", exp: "3–5 yrs" },
  { role: "Data Scientist", loc: "Remote", tech: "Python, ML, SQL", exp: "2–4 yrs" },
  { role: "Cloud Engineer", loc: "Chicago, IL", tech: "AWS, Terraform", exp: "4–6 yrs" },
  { role: "DevOps Engineer", loc: "Austin, TX · Remote", tech: "Kubernetes, CI/CD", exp: "3–6 yrs" },
  { role: "Cybersecurity Analyst", loc: "Atlanta, GA", tech: "SIEM, SOC, NIST", exp: "2–5 yrs" },
  { role: "Business Analyst", loc: "New York, NY · Hybrid", tech: "Agile, JIRA, SQL", exp: "3–5 yrs" },
];

export const courses = [
  { slug: "java-full-stack", t: "Java Full Stack", weeks: 16, level: "Beginner → Advanced", img: "photo-1517694712202-14dd9538aa97", d: "Build production web apps with Java, Spring Boot, React and SQL.", topics: ["Core Java & OOP", "Spring Boot & REST APIs", "React front-end", "SQL & Hibernate", "Microservices", "Capstone project"] },
  { slug: "data-science", t: "Data Science", weeks: 20, level: "Intermediate", img: "photo-1551288049-bebda4e38f71", d: "Python, statistics, machine learning and data visualization.", topics: ["Python & Pandas", "Statistics", "Machine learning", "Deep learning basics", "Power BI / Tableau", "Capstone project"] },
  { slug: "cybersecurity", t: "Cybersecurity", weeks: 14, level: "Beginner → Intermediate", img: "photo-1550751827-4bd374c3f58b", d: "Network security, SOC operations, ethical hacking and compliance.", topics: ["Networking fundamentals", "Threat analysis", "SIEM tools", "Ethical hacking", "Compliance frameworks", "Security+ prep"] },
  { slug: "cloud", t: "Cloud Computing", weeks: 12, level: "Intermediate", img: "photo-1451187580459-43490279c0fa", d: "Design and deploy scalable systems on AWS and Azure.", topics: ["AWS core services", "Azure fundamentals", "Networking & IAM", "Serverless", "Cost optimization", "Certification prep"] },
  { slug: "devops", t: "DevOps", weeks: 12, level: "Intermediate", img: "photo-1667372393119-3d4c48d07fc9", d: "CI/CD, containers, Kubernetes and infrastructure as code.", topics: ["Linux & Git", "Docker", "Kubernetes", "Jenkins & GitHub Actions", "Terraform", "Monitoring"] },
  { slug: "business-analysis", t: "Business Analysis", weeks: 10, level: "Beginner", img: "photo-1552664730-d307ca884978", d: "Requirements, Agile delivery, process modelling and stakeholder management.", topics: ["BA fundamentals", "Agile & Scrum", "Requirements gathering", "UML & BPMN", "JIRA & Confluence", "SQL for BAs"] },
];
export const courseImg = (id: string) => `https://images.unsplash.com/${id}?w=800&q=75&auto=format&fit=crop`;

export const testimonials = [
  { q: "The Java program and mock interviews were game-changers. I landed a full stack role within six weeks of finishing.", n: "Priya S.", r: "Full Stack Developer, placed at a Fortune 500" },
  { q: "Mirrar consistently sends us pre-vetted engineers who are productive from day one. They're our go-to staffing partner.", n: "Michael R.", r: "Director of Engineering, FinTech company" },
  { q: "I switched careers from accounting to data science. The mentors genuinely cared about my success.", n: "Daniel K.", r: "Data Analyst" },
];
