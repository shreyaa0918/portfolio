export const profile = {
  name: "Shreya Sagar",
  title: "Software Engineer",
  subtitle: "Backend Systems · Distributed Systems · Cloud Infrastructure",
  email: "shreyasagar0918@gmail.com",
  phone: "(260) 220-5534",
  location: "Fort Wayne, IN",
  linkedin: "https://linkedin.com/in/shreya-sagar-011563262",
  github: "https://github.com/shreyaa0918",
  summary:
    "Software Engineer with experience building distributed systems, cloud-native applications, and scalable backend services. Previously interned at Amazon and Deutsche Bank, delivering production software across AWS infrastructure, CI/CD platforms, automation systems, and full-stack applications. Strong foundation in data structures, algorithms, system design, and software engineering principles. Currently pursuing an M.S. in Computer Science at Purdue University Fort Wayne.",
  available: "Available May 2027",
};

export const experience = [
  {
    id: "amazon",
    company: "Amazon",
    website: "https://www.amazon.com",
    role: "Software Development Engineer Intern",
    period: "Jan 2025 – Jun 2025",
    location: "Gurugram, Haryana, India",
    logo: "/logos/amazon_logo.jpg",
    highlights: [
      "Designed and implemented a distributed error management framework for AI-powered invoice automation workflows spanning AWS Lambda, Step Functions, Fargate, SQS, SNS, and DynamoDB services.",

      "Built intelligent retry mechanisms with exponential backoff, failure classification, and cross-service monitoring, significantly improving workflow resiliency and failure recovery.",

      "Migrated two production CI/CD pipelines from JDK 11 to JDK 17 across Java and Kotlin services, ensuring compatibility with long-term JVM support and reducing technical debt.",

      "Implemented observability solutions using CloudWatch metrics, alarms, dashboards, and custom monitoring pipelines across distributed AWS services.",

      "Developed automated invoice trend-analysis workflows that leveraged historical invoice patterns to improve operational efficiency and reduce manual intervention.",

      "Contributed to operational readiness initiatives by implementing backups, secret management, alerting infrastructure, deployment procedures, and production support tooling.",

      "Authored Low-Level Design documents (LLDs), SOPs, deployment plans, and technical documentation to support production releases and long-term maintainability."
    ],
    tech: [
      "Java",
      "Python",
      "AWS Lambda",
      "Step Functions",
      "Fargate",
      "DynamoDB",
      "SQS",
      "SNS",
      "CloudWatch",
      "CI/CD",
      "Kotlin"
    ]
  },
  {
    id: "deutsche",
    company: "Deutsche Bank",
    website: "https://www.db.com",
    role: "Software Engineer Intern",
    period: "May 2024 – Jul 2024",
    location: "Pune District, Maharashtra, India",
    logo: "/logos/db_logo.jpg",
    highlights: [
      "Modernized legacy financial applications by migrating UI components from Adobe Flex to Angular, improving maintainability and user experience.",

      "Developed reusable Angular components and TypeScript services to streamline front-end development and reduce code duplication.",

      "Implemented comprehensive unit tests using Jasmine and Karma, increasing code coverage to over 85% and improving release confidence.",

      "Optimized application performance through efficient rendering strategies and API integration improvements, reducing server load by approximately 30%.",

      "Collaborated with senior engineers and business stakeholders in an Agile environment to deliver production-ready features and bug fixes.",

      "Participated in code reviews, debugging sessions, and sprint planning activities while following enterprise software engineering best practices."
    ],
    tech: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Jasmine",
      "Karma",
      "REST APIs"
    ]
  },
  {
    id: "edu",
    company: "Edu-versity",
    role: "Full Stack Web Developer Intern",
    period: "May 2023 – Jun 2023",
    location: "New Delhi, India",
    logo: "/logos/edu_versity_logo.jpg",
    highlights: [
      "Developed a full-stack student management platform enabling course enrollment, academic tracking, and user management.",

      "Built RESTful APIs using Node.js and Express.js to support dynamic student and course data operations.",

      "Designed responsive React-based user interfaces, improving usability and reducing page load times by 40%.",

      "Integrated MongoDB for efficient data storage and retrieval while implementing validation and error handling mechanisms.",

      "Collaborated with product stakeholders to gather requirements, translate business needs into technical solutions, and deliver features on schedule."
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript"
    ]
  }
];

export const skills = {
  "Programming Languages": [
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "SQL"
  ],

  "Backend Engineering": [
    "REST APIs",
    "Microservices",
    "Distributed Systems",
    "Spring Boot",
    "Node.js",
    "Express.js",
    "Flask"
  ],

  "Cloud & Infrastructure": [
    "AWS Lambda",
    "AWS Fargate",
    "Step Functions",
    "SQS",
    "SNS",
    "DynamoDB",
    "CloudWatch",
    "S3"
  ],

  "Frontend": [
    "React",
    "Next.js",
    "Angular",
    "HTML",
    "CSS",
    "Tailwind CSS"
  ],

  "Databases": [
    "MySQL",
    "MongoDB",
    "DynamoDB",
    "PostgreSQL"
  ],

  "DevOps & Tools": [
    "Git",
    "GitHub",
    "CI/CD",
    "Docker",
    "Linux",
    "JUnit",
    "Jasmine",
    "Karma"
  ],

  "Core CS": [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Design",
    "System Design",
    "Database Design",
    "Concurrency"
  ]
};

export const education = [
  {
    school: "Purdue University Fort Wayne",
    degree: "Master of Science in Computer Science",
    period: "Aug 2025 – May 2027",
    gpa: "4.0 / 4.0",
    location: "Fort Wayne, Indiana, USA",
    logo: "/logos/purdue_university_logo.jpg",
  },
  {
    school: "Maulana Azad National Institute of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Dec 2021 – May 2025",
    gpa: "8.6 / 10",
    location: "Bhopal, Madhya Pradesh, India",
    logo: "/logos/manit_logo.jpg",
  },
];

export const projects = [
  {
    title: "Mythila",
    type: "Freelance Project",
    description:
      "Developed a production-ready full-stack web platform with responsive UI, backend APIs, authentication, and client-driven feature development.",
    tech: ["React", "Node.js", "MongoDB"]
  },

  {
    title: "Distributed URL Shortener",
    type: "Personal Project",
    description:
      "Designed a scalable URL shortening service supporting millions of requests with caching, database indexing, and rate limiting.",
    tech: ["Java", "Spring Boot", "Redis", "MySQL"]
  },

  {
    title: "AI Workflow Automation Platform",
    type: "Academic Project",
    description:
      "Built an LLM-powered workflow automation system integrating document processing, retrieval, and intelligent task orchestration.",
    tech: ["Python", "FastAPI", "OpenAI", "AWS"]
  }
];

export const certifications = [
  {
    title: "Microsoft Full-Stack Developer Professional Certificate",
    issuer: "Microsoft",
    date: "Sep 2025",
    logo: "/logos/microsoft_logo.jpg",
  },
];

export const targetCompanies = ["Google", "Microsoft", "Amazon"];
