import {
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    expressjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    ssoc,
    gssoc,
    infixra,
    geet,
    farmhub,
    infixrra,
    cafe,
    ws,
    threejs,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Graphic Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Express JS",
        icon: expressjs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Open Source",
        company_name: "Social Summer Of Code Season 2",
        icon: ssoc,
        iconBg: "#383E56",
        date: "June 1 2023 - July 31 2023",
        points: [
            "Developed a web applications using React.js nmaed 'Magic Notes' used to  create notes for the Project named 'Future.WebNet (Issue no. #400 and P.r. no. #415).'",
            "Developed a web Game using HTML, CSS and JavaScript nmaed 'Snake Game' for the Project named 'Future.WebNet (Issue no. #346 and P.r. no. #373).'",
            
            
        ],
    },
    {
        title: "Open Source",
        company_name: "GirlScript Summer of Code",
        icon: gssoc,
        iconBg: "#E6DEDD",
        date: "May 2023 - Aug 2023",
        points: [
            "Made Data Science named Website responsive for diffrent device sizes (Issue no. #703  and P.r. no. #716).",
            "Fixed a bug in Games-and-Go website (Issue no. #668  and P.r. no. #719)"
        ],
    },
    {
        title: "Freelance Full Stack Developer",
        company_name: "Infixra",
        icon: infixra, 
        iconBg: "#E6DEDD",
        date: "Oct 2023 - present",
        points: [
            "Developed and implemented a comprehensive full-stack website for Infixra, specializing in construction, architecture, and interior design.",
            "Designed and implemented user-friendly interfaces for seamless navigation and optimal user experience.",
            "Utilized a full stack of technologies, including HTML, CSS, JavaScript, Node.js, Express.js, React.js, and MongoDB, to create a dynamic and responsive web application.",
            "Implemented secure authentication and authorization features to protect user data and ensure a safe online environment.",
            "Collaborated with the Infixra team to understand project requirements and deliver solutions that align with the company's vision and goals.",
            "Regularly updated and maintained the website to ensure its functionality and compatibility with the latest web standards.",
        ],
    }
    
];

const testimonials = [
    {
        testimonial:
            "I've never met a designer who truly cares about their clients' success like Aditya does.",
        name: "Aman Sharma",
        designation: "owner",
        company: "Wedding stories",
        image: "https://randomuser.me/api/portraits/lego/4.jpg",
    },
    
];

const projects = [
    {
        name: "FarmHub",
        description:
            "Web-based platform that allows farmers to search crop information according to seasons, buy fertilizers,pestisides,crop tonic etc.from various providers, providing a convenient and efficient solution for agriculture needs.It's a amazon for FARMERS",
        tags: [
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "text-red-700",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
        ],
        image: farmhub,
        source_code_link: "https://github.com/FarmHubb/FarmHub",
    },
    {
        name: "Infixra",
        description: "Infixra is a comprehensive online platform at the intersection of construction, architecture, and interior design. It serves as a one-stop solution, offering a diverse range of services and information. From project insights to industry trends, Infixra is your go-to source for everything related to the built environment.",
        tags: [
            {
                name: "html",
                color: "orange-text",
            },
            {
                name: "css",
                color: "blue-text",
            },
            {
                name: "javascript",
                color: "yellow-text",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "tailwind css",
                color: "text-yellow-300",
            },
            
        ],
        image: infixrra, 
        site_link: "https://infixra.in/", 
    },
    {
        name: "Geet",
        description:
            "Web application that enables users to listen and musics, it contains limited songs . ",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "text-yellow-300",
            },
        ],
        image: geet,
        source_code_link: "https://github.com/adityakmrmishra/Geet",
    },
    {
        name: "The Freinds Zone Cafe banner",
        description:
        "It is a cafe opening banner designed for  a client. ",
        tags: [
            {
                name: "Adobe express",
                color: "text-red-700",
            },
        ],
        image: cafe,
        source_code_link: "https://github.com/adityakmrmishra/graphic-designing-work/blob/main/Banners/cafe.png",
    },
    {
        name: "Business Card",
        description:
        "It is a wedding stories named company business card designed for a client. ",
        tags: [
            {
                name: "Adobe express",
                color: "text-red-700",
            },
            {
                name: "Canva",
                color: "blue-text-gradient",
            },
        ],
        image: ws,
        source_code_link: "https://github.com/adityakmrmishra/graphic-designing-work/tree/main/Business%20cards/Wedding%20Stories",
    },
];

export { services, technologies, experiences, testimonials, projects };