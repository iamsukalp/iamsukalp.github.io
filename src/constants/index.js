import {
    adobexd,
    android,
    aws,
    car,
    contact,
    css,
    estate,
    firebase,
    github,
    html,
    java,
    javascript,
    linkedin,
    llama,
    mysql,
    nodejs,
    openai,
    powerbi,
    pricewise,
    python,
    r,
    react,
    snapgram,
    streamlit,
    summiz,
    threads
} from "../assets/icons";
import { divami, drreddy, exl, icici, tcs } from "../assets/images";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Analytics",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: android,
        name: "Android",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: adobexd,
        name: "AdobeXD",
        type: "Design",
    },
    {
        imageUrl: powerbi,
        name: "Power Bi",
        type: "Analytics",
    },
    {
        imageUrl: r,
        name: "R Programming",
        type: "Analytics",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: streamlit,
        name: "Streamlit",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Backend",
    },
    {
        imageUrl: openai,
        name: "Open Ai",
        type: "GenAI",
    },
    {
        imageUrl: llama,
        name: "Meta Llama",
        type: "GenAI",
    }
];

export const experiences = [
    {
        title: "System Engineer",
    company_name: "Tata Consultancy Services",
        icon: tcs,
        iconBg: "#000000",
        date: "October 2016 - April 2020",
        points: [
            "Served as Acting Team Lead for Online Content Management Systems (Documentum & OpenText)",
            "Administered and maintained Windows applications, ensuring optimal performance, security, and reliability",
            "Managed Microsoft Exchange environments, overseeing email system configuration, user management, and troubleshooting to ensure seamless communication",
            "Automated, created and streamlined various internal applications using PowerShell scripting"
        ],
    },
    {
        title: "Freelance Mobile Application Developer",
        company_name: "Dr. Reddy's Foundation",
        icon: drreddy,
        iconBg: "#512f90",
        date: "July 2020 - January 2021",
        points: [
            "Independently developed the Chhota Book Android application, providing a solution tailored to client needs, and designed and implemented the back-end architecture to ensure robust performance, scalability, and security",
            "Created an intuitive and visually appealing user interface to enhance user experience and engagement",
            "Conducted user research and implemented feedback to optimize the application's usability and functionality",
            "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
        ],
    },
    {
        title: "Digital Transformation Intern",
        company_name: "ICICI Foundation",
        icon: icici,
        iconBg: "#b7e4c7",
        date: "September 2021 - December 2021",
        points: [
            "Served as a Digital Transformation Consultant Intern",
            "Digitized the recruitment process for ICICI Foundation",
            "Developed process flows to analyze and compare the current and future state processes",
            "Created a proof-of-concept (POC) website to demonstrate the future state process to the leadership team"
        ],
    },
    {
        title: "Digital Transformation Intern",
        company_name: "Divami Design Labs",
        icon: divami,
        iconBg: "#ff1501",
        date: "April 2022 - June 2022",
        points: [
            "Streamlined employee management and timesheet tracking processes, enhancing efficiency and accuracy in record-keeping",
            "Implemented automation solutions for the employee management system, reducing manual workload and minimizing errors",
            "Improved and automated the Compliance Management System, ensuring adherence to regulatory standards and reducing compliance risks",
            "Enhanced the Learning Management System by integrating automation, which facilitated better tracking of employee training and development activities"
        ],
    },
    {
        title: "Assistant Manager (Decision Management)",
        company_name: "EXL Service",
        icon: exl,
        iconBg: "#ffffff",
        date: "May 2023 - Present",
        points: [
            "Digital Transformation Consultant: Lead digital transformation initiatives, driving organizational change and process improvement",
            "Generative AI Solutions: Develop and implement tailored generative AI solutions to enhance client innovation and productivity",
            "Client-Centric Problem Solving: Collaborate closely with clients to deliver customized, scalable solutions addressing specific business challenges",
            "Expertise in OpenAI and Meta LLMs: Leverage advanced technologies like OpenAI and Meta LLMs to create intelligent, value-driven AI applications",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/iamsukalp',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sukalptripathi/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];