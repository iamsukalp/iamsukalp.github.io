import {
    admission,
    adobexd,
    analytics,
    android,
    aws,
    contact,
    conversation,
    css,
    delivery,
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
    planner,
    powerbi,
    python,
    r,
    react,
    recruitment,
    social,
    streamlit,
    summiz
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
        iconUrl: conversation,
        theme: 'btn-back-red',
        name: 'Conversational BI',
        description: 'Developed a Text2SQL application using ChatGPT-3.5, demonstrating how a large language model can be integrated with a database. This application allows business users to generate insights directly from datasets through natural language queries.',
        link: 'https://conversationalbi.streamlit.app/',
        type: 'live'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Report Translator',
        description: 'Developed a translator application for the medical value tourism industry. This project addresses real-life challenges by enabling the translation of patient reports into English, making them accessible and useful for cross-country diagnosis.',
        link: 'https://b1c-report-translator.streamlit.app/',
        type: 'live'
    },
    {
        iconUrl: planner,
        theme: 'btn-back-cyan',
        name: 'Trip planner',
        description: "Implemented Crew-AI with GPT-3.5 to showcase the chain-of-thought model. This application plans trips based on current news, weather, and users' hobbies and interests.",
        link: 'https://tripplanner-crewai.streamlit.app/',
        type: 'live'
    },
    {
        iconUrl: analytics,
        theme: 'btn-back-green',
        name: 'Deck',
        description: "Developed an interactive analytical dashboard for business users to make data-driven decisions. The dashboard provides real-time insights, visualizes key performance indicators, and enables efficient data exploration and analysis.",
        link: 'https://github.com/iamsukalp/supermarket_analysis',
        type: 'repository'
    },
    
    {
        iconUrl: delivery,
        theme: 'btn-back-blue',
        name: 'Byer',
        description: "Developed a package for the client application (Android) ecosystem of the hyper-local delivery platform 'Byer'. This package includes all necessary components to support seamless delivery operations and enhance user experience.",
        link: 'https://github.com/iamsukalp/Byer',
        type: 'repository'
    },
    {
        iconUrl: recruitment,
        theme: 'btn-back-pink',
        name: 'iRecruit',
        description: "Designed an Angular application as a proof of concept to digitize the recruitment process for ICICI Foundation, streamlining operations and improving efficiency.",
        link: 'https://github.com/iamsukalp/iRecruit',
        type: 'repository'
    },
    {
        iconUrl: social,
        theme: 'btn-back-black',
        name: 'Solutions',
        description: "Solution is an android application created to solve the communication gap for the new entrants coming to NMIMS, to facilitate dialog between students, build communities, share notes and collaborate.",
        link: 'https://github.com/iamsukalp/Solution',
        type: 'repository'
    },
    
    {
        iconUrl: admission,
        theme: 'btn-back-seagreen',
        name: 'Disha',
        description: "Disha is a platform to streamline and improve the admission process of NMIMS (Narsee Monjee Institute of Management Studies). This repo contains both the admin console made in react js and the android client application.",
        link: 'https://github.com/iamsukalp/Disha',
        type: 'repository'
    }
   
];