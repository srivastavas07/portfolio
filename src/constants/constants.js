import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    amity,
    hastags,
    gsoc,
    samsung,
    aicte,
    weatherApplication,
    universityWebsite,
    spotify,
    e_commerce,
    chatApplication,
    notes,
    threejs,
    wordPress,
    dada,
    Kwitter07
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
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI / ML Enthusiast",
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "UG Student B.Tech CSE",
      company_name: "Amity University",
      icon: amity,
      iconBg: "#383E56",
      date: "March 2020 - August 2024",
      points: [
      "Studying and applying principles of computer science and engineering at Amity University.",
      "Engaging in coursework focused on web development, including React.js and related technologies.",
      "Collaborating with peers and professors on projects to enhance understanding and practical skills.",
      "Participating in extracurricular activities to broaden knowledge and experience in the field.",
      ],
      },
      {
        title: "OS Contributor",
        company_name: "GirlScript Summer of Code",
        icon: gsoc,
        iconBg: "#E6DEDD",
        date: "Feb 2023 - March 2023",
        points: [
          "Contributed to open-source projects focused on web development using React.js and related technologies.",
          "Collaborated with a diverse community of developers to enhance existing projects.",
          "Ensured responsive design and cross-browser compatibility for improved user experience.",
          "Participated in code reviews and provided valuable feedback to fellow contributors.",
          ],
      },
    {
      title: "Web Developer",
      company_name: "Knothastags",
      icon: hastags,
      iconBg: "#E6DEDD",
      date: "March 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "AICTE / IBM",
      icon: aicte,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Engaging in machine learning projects and research initiatives at AICTE / IBM.",
        "Collaborating with interdisciplinary teams to develop innovative solutions leveraging machine learning techniques.",
        "Implemented a Mental Fitness Tracker project to monitor and analyze mental well-being using machine learning algorithms.",
        "Participating in online meetings and training sessions to enhance skills and knowledge in machine learning.",
        ]
    },
    {
      title: "R&D Intern",
      company_name: "Samsung",
      icon: samsung,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Contributed to R&D projects aimed at advancing technology at Samsung Prism.",
        "Focused on developing anomaly and outlier detection algorithms for application and system metrics.",
        "Collaborated with experienced professionals to implement innovative solutions.",
        "Gained hands-on experience in real-world applications of computer science and engineering principles.",
        ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as my blogs, but Kunal proved me wrong.",
      name: "Vijaishree",
      designation: "Past",
      company: "client",
      image: "https://thehealgrowtribe.com/wp-content/uploads/2023/08/IMG_20230824_173034.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their client's vision like Kunal does.",
      name: "Shivam Srivastava",
      designation: "Past",
      company: "client",
      image: dada,
    },
    {
      testimonial:
        "Seen him developing sites for a long time. He is really passionate and creative about it.",
      name: "Kajal Chandra",
      designation: "Past",
      company: "client",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Kwitter07",
      description:
        "A MERN stack social media app with posting, liking, commenting, and following features. Includes AI-based sentiment analysis for tweets, user profile management, and notifications. Developed entirely from scratch.",
      tags: [
        {
          name: "MERN-stack",
          color: "blue-text-gradient",
        },
        {
          name: "api-Creation",
          color: "green-text-gradient",
        },
        {
          name: "fully-func",
          color: "pink-text-gradient",
        },
      ],
      image: Kwitter07 ,
      source_code_link: "https://github.com/srivastavas07/Kwitter",
    },
    {
      name: "kEmotify",
      description:
        "Utilized facial recognition to detect user emotions, enhancing personalization by suggesting mood-specific music and playlists. Achieved a seamless blend of technology and user experience for an engaging music discovery journey",
      tags: [
        {
          name: "Spotify_Api",
          color: "blue-text-gradient",
        },
        {
          name: "face-api.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/srivastavas07",
    },
    {
      name: "Live Weather App",
      description:
      "Real-time weather updates from cities worldwide with our Live Weather Info app, meticulously crafted using React.js, Rapid API, and Open Weather API. Stay informed about current weather conditions effortlessly!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "weatherAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weatherApplication,
      source_code_link: "https://github.com/srivastavas07/weather-app",
    },
    {
      name: "k7Store",
      description:
        "Dynamic E-commerce site with React, Redux, and Tailwind.css. Effortless navigation, plus seamless cart and checkout functions for a superior online shopping experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: e_commerce,
      source_code_link: "https://github.com/srivastavas07/kStore07",
    },
    {
      name: "kChat07",
      description:
        "A real-time messaging application developed with Firebase, React.js, and Tailwind CSS, allowing users to engage in live conversations, demonstrating proficiency in frontend development, database integration, and user interface design.",
      tags: [
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
      ],
      image: chatApplication,
      source_code_link: "https://github.com/srivastavas07/React-chat-app",
    },
    {
      name: "Academy Site",
      description:
        "Elegant academic website, blending simplicity with sophistication. Created using HTML, JavaScript, and CSS, it offers a seamless user experience. With its clean design and classy feel, it sets the standard for online elegance.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: universityWebsite,
      source_code_link: "https://github.com/srivastavas07/University-Website",
    },
    {
      name: "k7Notes",
      description:
        "User-friendly note-taking application. Seamlessly edit notes, mark important items, and check off completed tasks with just a click.Smooth experience as you effortlessly manage your notes.",
      tags: [
        {
          name: "javaScript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "react.js",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_code_link: "https://github.com/srivastavas07/notes-app",
    },
    {
      name: "heal&Grow",
      description:
        "Welcome to a vibrant blog site, powered by WordPress and Neve themes. Dive into a world of health and lifestyle blogs. Seamlessly navigate through the sleek design. Leave feedback, connect via comments .Join us on a journey of discovery and inspiration.",
      tags: [
        {
          name: "wordPress",
          color: "blue-text-gradient",
        },
        {
          name: "blueHost",
          color: "green-text-gradient",
        },
        {
          name: "neve",
          color: "pink-text-gradient",
        },
      ],
      image: wordPress,
      source_code_link: "https://github.com/srivastavas07",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };