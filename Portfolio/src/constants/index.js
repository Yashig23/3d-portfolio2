import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    Samagra,
    html,
    css,
    c4gt,
    Freelancer,
    pageup,
    bluestock,
    reactjs,
    blog,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    firebase,
    AngularJs,
    threejs,
    ecommerce,
    EmployeeManagement,
    restaruntWeb
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "UI/UX",
      icon: backend,
    },
    {
      title: "Backend Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Angular Js",
      icon: AngularJs,
    },
    {
      name: "FireBase",
      icon: firebase,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "C4GT",
      icon: c4gt,
      iconBg: "#383E56",
      date: "July 2023 - September 2023",
      points: [
        "Developing and maintaining web application (Quml Player) using Angular Js and other related technologies.",
        "Developing functionality for Quml Player",
        "Implementing responsive design and ensuring ",
        "Participating in code reviews and working on constructive feedback by mentor.",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "Samagra",
      icon: Samagra,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Jan 2024",
      points: [
        "Contributed to the QuML Player project, adding new question types and enhancing user experience." ,
        "Worked with AngularJS, Angular CLI, and TypeScript.",
        "Implementing responsive design and ensuring ",
        "Participating in code reviews and working on constructive feedback by mentor."
      ],
    },
    {
      title: "Freelancer",
      company_name: "Restraunt Chain",
      icon: Freelancer,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Apr 2024",
      points: [
        "Created a responsive website with menu display, order tracking, and payment integration.", 
        "Used ReactJS, Tailwind for frontend, and Node.js, MongoDB for backend."

      ],
    },
    {
      title: "SDE Intern",
      company_name: "BlueStock Fintech",
      icon: bluestock,
      iconBg: "#E6DEDD",
      date: "July 2024 - Sep 2024",
      points: [
        "Developed frontend for a stock market information platform using HTML, CSS, and JS.", 
        "Backend builds by using Django and Python, and managed PostgreSQL database.",
        "Created efficient, reusable components, reducing development time by 15%"
      ],
    },
    {
      title: "SDE Intern",
      company_name: "PageUp",
      icon: pageup,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Contributed to employee management project using Angular and API integrations.",
"Analysed and improved database access times, optimizing API calls for better performance and efficiency in employee ",
"data management.",
"Learned product management and software development lifecycle.",
"Collaborated with cross-functional teams to implement features and resolve technical issues."
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce",
      description:
        "Web-based platform that allows users to search, add, delete and buy regional or local arts, craft, clothes which tells the story of their region and thus help in promoting India's craft / art.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Yashig23",
    },
    {
      name: "Blog Web App",
      description:
        "Web application that enables users to post their blogs and pictures and they can edit them when needed, with feature of seeing, reviewing, liking and saving others blog's too.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "apprwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/Yashig23",
    },
    {
      name: "Employee Management",
      description:
        "Azure-inspired platform for employee, department, project, and task management with role-based access. Built using Angular CLI and APIs. ",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "angular cli",
          color: "green-text-gradient",
        },
        {
          name: "angular material",
          color: "pink-text-gradient",
        },
        {
          name: ".Net",
          color: "blue-text-gradient",
        }
      ],
      image: EmployeeManagement,
      source_code_link: "https://github.com/Yashig23",
    },
    {
      name: "Restraunt Web App",
      description:
        ": Fully responsive online restaurant platform with authentication, payment gateway, and order tracking. Tech stack: ReactJS, Tailwind, Node.js, MongoDB, Firebase.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: restaruntWeb,
      source_code_link: "https://github.com/Yashig23",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };