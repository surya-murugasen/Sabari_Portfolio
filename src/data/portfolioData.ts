export interface Project {
  id: string;
  title: string;
  client?: string;
  category: 'enterprise' | 'academic';
  year?: string;
  technologies: string[];
  summary: string;
  scopePoints: string[];
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: 'Microsoft' | 'Udemy' | 'AWS' | 'Wipro' | 'Oracle';
  year?: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrType: string;
  score: string;
  year: string;
  isPrimary?: boolean;
}

export interface InternshipItem {
  company: string;
  location: string;
  role: string;
  duration: string;
}

export const portfolioData = {
  personal: {
    name: 'Sabari Venkatesh Daniel',
    initials: 'SVD',
    title: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    experienceYears: '2+ Years',
    phone: '+91-8754291057',
    email: 'sabarivenkatesh.daniel@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sabari-venkatesh-978931251/',
    resumePdfUrl: '/resume.pdf',
    tagline: 'Enterprise IT Operations • Endpoint Management • Power BI • Azure',
    heroDescription:
      'Software professional with 2+ years of experience in developing and optimizing scalable solutions. Focused on IT infrastructure operations, device management and data-driven reporting.',
    aboutBio:
      'I am a Programmer Analyst at Cognizant Technology Solutions with 2+ years of experience in enterprise IT operations, endpoint management and analytics. I enjoy solving operational challenges, automating routine tasks and building clear, data-driven reports.',
    objective:
      'Software professional with 2+ years of experience in developing and optimizing scalable solutions. Skilled in troubleshooting, performance tuning, and collaborating across teams to deliver projects on time. Committed to continuous learning and adopting emerging technologies.',
  },

  stats: [
    { label: '2+ Years', sublabel: 'Experience', icon: 'Clock' },
    { label: 'Cognizant', sublabel: 'Technology Solutions', icon: 'Building2' },
    { label: 'Power BI & SQL', sublabel: 'Reporting & Dashboards', icon: 'BarChart3' },
    { label: 'Intune & SCCM', sublabel: 'Endpoint Management', icon: 'Laptop' },
  ],

  experience: [
    {
      role: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      period: '2+ Years',
      bulletPoints: [
        'Worked on enterprise IT operations and endpoint management.',
        'Developed Power BI dashboards and SQL reports.',
        'Managed device lifecycle using Intune, SCCM and Active Directory.',
        'Automated operational tasks using PowerShell.',
      ],
      skills: ['Power BI', 'SQL', 'Intune', 'SCCM', 'Active Directory', 'PowerShell', 'Azure'],
    },
  ],

  enterpriseProjects: [
    {
      id: 'nyu-patching',
      title: 'New York – IT Core Patching Operations',
      client: 'New York University Langone Health',
      category: 'enterprise',
      technologies: ['Power BI Desktop', 'Power BI Service', 'SQL'],
      summary:
        'Developed and maintained enterprise Power BI dashboards for IT infrastructure, tracking server patching compliance, device status, network performance, database health and storage utilization.',
      scopePoints: [
        'Developed and maintained enterprise Power BI dashboards to provide centralized visibility into IT infrastructure, enabling proactive monitoring and reporting across various technology domains.',
        'Designed interactive reports and dashboards to track server patching compliance, end-user device status, network performance, database health, and storage utilization, ensuring accurate and real-time operational insights.',
        'Collaborated with infrastructure and leadership teams to deliver actionable analytics, support health checks, identify trends and potential risks, and facilitate data-driven decision-making for improved operational efficiency and service reliability.',
      ],
      featured: true,
    },
    {
      id: 'hays-win11',
      title: 'Hays Windows 11 Transformation',
      client: 'Hays',
      category: 'enterprise',
      technologies: ['Intune', 'SCCM', 'AD', 'PowerShell', 'SQL'],
      summary:
        'Successfully migrated enterprise devices from Windows 10 to Windows 11, managed endpoints using Intune and SCCM, performed SCCM SQL reporting and automated operational tasks with PowerShell.',
      scopePoints: [
        'Successfully migrated enterprise devices from Windows 10 to Windows 11, troubleshooting OS and application issues throughout the migration lifecycle.',
        'Managed endpoint administration using Intune and SCCM, performed SCCM SQL reporting, administered Active Directory environments, and automated operational tasks using PowerShell to improve deployment efficiency and user experience.',
      ],
      featured: true,
    },
  ] as Project[],

  academicProjects: [
    {
      id: 'attendance-system',
      title: 'Integrated Facial Recognition-Based Attendance System',
      category: 'academic',
      year: '2024',
      technologies: ['Android (Kotlin)', 'Java', 'MySQL', 'ML Kit'],
      summary:
        'Built an Android app for attendance management using facial recognition during check-in and check-out.',
      scopePoints: [
        'Built an Android app for attendance management using facial recognition during check-in and check-out.',
        'Integrated Java backend with MySQL database for secure data storage and validation.',
        'Implemented real-time attendance reporting for participants in a specific area.',
      ],
    },
    {
      id: 'blood-bank',
      title: 'Smart IoT-Based Blood Bank System',
      category: 'academic',
      year: '2022',
      technologies: ['HTML', 'Java', 'MySQL', 'ESP8266', 'Arduino UNO'],
      summary:
        'Designed a web-based system to send messages to blood requesters and list nearby blood donors and blood banks.',
      scopePoints: [
        'Designed a web-based system to send messages to blood requesters.',
        'Messages include details about the nearest blood donor and a list of nearby blood banks.',
        'Integrated hardware components (ESP8266 and Arduino UNO) for real-time communication.',
      ],
    },
  ] as Project[],

  skillCategories: [
    {
      name: 'Device & Endpoint Management',
      iconName: 'Laptop',
      skills: ['Intune', 'SCCM', 'Active Directory (AD)'],
    },
    {
      name: 'Analytics & Reporting',
      iconName: 'BarChart2',
      skills: ['Power BI Desktop', 'Power BI Service', 'SQL'],
    },
    {
      name: 'Cloud Services',
      iconName: 'Cloud',
      skills: ['Azure'],
    },
    {
      name: 'Programming',
      iconName: 'Code2',
      skills: ['Python', 'Java'],
    },
    {
      name: 'Automation',
      iconName: 'Terminal',
      skills: ['PowerShell'],
    },
    {
      name: 'Database',
      iconName: 'Database',
      skills: ['MySQL'],
    },
    {
      name: 'Networking',
      iconName: 'Network',
      skills: ['General Networking Concepts'],
    },
  ] as SkillCategory[],

  certifications: [
    {
      name: 'Microsoft Azure Fundamental AZ-900 Certification',
      issuer: 'Microsoft',
      badge: 'AZ-900',
      year: '2025',
    },
    {
      name: 'Microsoft Azure AI-900 Certification',
      issuer: 'Microsoft',
      badge: 'AI-900',
      year: '2026',
    },
    {
      name: 'Microsoft AB-900 Certification',
      issuer: 'Microsoft',
      badge: 'AB-900',
      year: '2026',
    },
    {
      name: 'Power BI Fundamentals Course',
      issuer: 'Udemy',
    },
    {
      name: 'Intune Microsoft Training Course',
      issuer: 'Udemy',
    },
    {
      name: 'SQL Boot Camp Course',
      issuer: 'Udemy',
    },
    {
      name: 'AWS Fundamental',
      issuer: 'Udemy',
    },
    {
      name: 'Wipro Future skills nasscom - Artificial Intelligence',
      issuer: 'Wipro',
      year: '2022',
    },
    {
      name: 'Oracle - Java Fundamental Certification',
      issuer: 'Oracle',
      year: '2023',
    },
  ] as Certification[],

  education: [
    {
      degree: 'B.E. – Computer Science and Engineering (CSE)',
      institution: 'K. Ramakrishnan College of Engineering, Trichy',
      boardOrType: 'Autonomous',
      score: '83%',
      year: '2024',
      isPrimary: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'AKKV Aarunadu Matric Higher Secondary School, Trichy',
      boardOrType: 'State Board',
      score: '68.83%',
      year: '2020',
      isPrimary: false,
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Mahatma Gandhi Centenary Vidyalaya School, Trichy',
      boardOrType: 'CBSE',
      score: '67.80%',
      year: '2018',
      isPrimary: false,
    },
  ] as EducationItem[],

  internships: [
    {
      company: 'Galwin Technology',
      location: 'Trichy',
      role: 'Internet of Things (IoT) Intern',
      duration: '15 days',
    },
    {
      company: 'Movidu Technology',
      location: 'Hyderabad',
      role: 'Business Development Intern',
      duration: '2 months',
    },
  ] as InternshipItem[],
};

