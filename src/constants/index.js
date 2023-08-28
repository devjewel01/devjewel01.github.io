import {
    backend,
    creator,
    robot_icon,
    python_dev,

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
    github,
    figma,
    docker,
    threejs,
    c,
    cpp,
    python,
    vscode,

    CZS,
    BAPGHS,
    quanta_robotics,
    SoRC,

    niko,
    blueberry,
    sheena,
    picar,
    arduino_project,

    kamrul_sir,
    saifur_sir,
    sanjitmondal,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "lab",
      title: "Jewel-Code-Lab",
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
      title: "Robotics Developer",
      icon: robot_icon,
    },
    {
      title: "Python Developer",
      icon: python_dev,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  

  const technologies = [
    {
      name: "C Programming",
      icon: c,
    },
    {
      name: "C++ Programming",
      icon: cpp,
    },
    {
      name: "Python Programming",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "VS Code",
      icon: vscode,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Programming Trainer",
      company_name: "Burichang Ananda Pilot Govt. High School",
      icon: BAPGHS,
      iconBg: "#383E56",
      date: "March 2021 - August 2023",
      points: [
        "Empower students with essential programming skills in C and C++",
        "Fostering problem-solving abilities through programming.",
        "Guiding aspiring programmers for National High School Programming Contest.",
        "I strive to inspire and equip them for future success in the programming world"
      ],
    },
    {
      title: "NSHPC Instructor",
      company_name: "Cumilla Zilla School",
      icon: CZS,
      iconBg: "#E6DEDD",
      date: "May 2022 - November 2022",
      points: [
        "I had the privilege of teaching programming to students, conducting two classes per week",
        "Through engaging lessons, I aimed to inspire young minds in the fascinating realms of programming and robotics, fostering creativity and critical thinking among the next generation of tech enthusiasts.",
        "and make their ready for National High School Programming Contest (NHSPC)"
      ],
    },
    {
      title: "Robotics Trainer",
      company_name: "School of Robotics, Cumilla",
      icon: SoRC,
      iconBg: "#383E56",
      date: "July 2022 - December 2022",
      points: [
        "In collaboration with the Deputy Commissioner of Comilla, I conducted many robotics sessions across various upazilas in Cumilla.",
        "I played a pivotal role in establishing the Comilla Robotics and Programming Club, imparting valuable knowledge to aspiring learners",
        "My dedication led to recognition as a popular trainer at the School of Robotics, leaving a lasting impact on the robotics community in the region.",
      ],
    },
    {
      title: "Robotics Programmer",
      company_name: "Quanta Robotics",
      icon: quanta_robotics,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "As a co-founder of Quanta Robotics, I took the lead in establishing the startup in 2022.",
        "In my role as a programmer, I am deeply involved in the development and execution of various robotics projects",
        "Robot Sheena marked our initial success—a basic humanoid robot built with Arduino. It laid the foundation for more ambitious projects, sparking our team's passion for robotics",
        "Robot Blueberry was a significant leap, integrating Raspberry Pi for enhanced capabilities. Its versatility and advanced features propelled our team's pursuit of cutting-edge robotics",
        "Robot Niko, crafted using 3D printing and the inmoov open-source model, showcased our team's innovation. Armed with a camera and machine learning, Niko represented our dedication to pushing boundaries in robotics."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A highly dedicated and proactive student, consistently excelling in various projects. Impressive work ethic.",
      name: "Dr. Md. Saifur Rahman",
      designation: "Associate Professor",
      company: "Comilla University",
      image: saifur_sir,
    },
    {
      testimonial:
        "I thought it was impossible to make a Robot as beautiful as our govt. dream, but they proved me wrong.",
      name: "Kamrul Hasan",
      designation: "Deputy Commissioner(former)",
      company: "Cumilla",
      image: kamrul_sir,
    },
    {
      testimonial:
        "Displaying exceptional dedication in every project. A proactive and reliable individual, contributing significantly to team success.",
      name: "Sanjit Mondal",
      designation: "CEO",
      company: "Quanta Robotics",
      image: sanjitmondal,
    },
  ];
  
  const projects = [
    {
      name: "Robot Niko",
      description:
        'Robot Niko is a humanoid robot project leveraging Raspberry Pi and Python.Powered by AI, Niko offers seamless interaction and performs tasks from entertainment to household assistance. It exemplifies the future of human-robot collaboration.',
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Raspberry Pi",
          color: "green-text-gradient",
        },
        {
          name: "ROS",
          color: "pink-text-gradient",
        },
        {
          name: "Camera and Sensors",
          color: "blue-text-gradient",
        },
      ],
      image: niko,
      source_code_link: "https://github.com/devjewel01/Robot-Niko",
    },
    {
      name: "Robot Bluberry",
      description:
        "Robot Blueberry is a remarkable humanoid robot crafted with Python, Raspberry Pi, Arduino. With its versatile design, Blueberry engages in a plethora of tasks and interactions. Powered by cutting-edge technology, it embodies the future of robotics",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Raspberry Pi",
          color: "green-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
        {
          name: "Ultrasonic, IR, Gyro sensor etc.",
          color: "pink-text-gradient",
        },
      ],
      image: blueberry,
      source_code_link: "https://github.com/devjewel01/Robot-Blueberry",
    },
    {
      name: "Robot Sheena",
      description:
        "Robot Sheena is an impressive simple humanoid robot created with Arduino and various sensors. Despite its simplicity, Sheena showcases remarkable capabilities, performing tasks and responding to its environment with sensor-driven precision.",
      tags: [
        {
          name: "Arduino",
          color: "blue-text-gradient",
        },
        {
          name: "Sensor",
          color: "green-text-gradient",
        },
        {
          name: "Flame, IR, Ultrasonic, Gas etc. Sensors",
          color: "pink-text-gradient",
        },
      ],
      image: sheena,
      source_code_link: "https://github.com/devjewel01/Robot-Sheena",
    },
    {
      name: "Pi Car",
      description:
        "Pi Car is a versatile and multifunctional vehicle powered by Raspberry Pi. Equipped with advanced features like line following, track following using a camera, obstacle avoidance, human tracking, and remote control mode, it represents a perfect fusion of robotics and AI",
      tags: [
        {
          name: "Raspberry Pi",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Camera, IR & Ultrasonic Sensor",
          color: "pink-text-gradient",
        },
      ],
      image: picar,
      source_code_link: "https://github.com/devjewel01/piCar",
    },
    {
      name: "Arduino Project",
      description:
        "An array of Arduino projects, including Mobile Control Car, Line Following Car, Avoid Obstacle robot, Fire Fighter robot, Security Alarm, and Smart Dustbin. Combining innovation with Arduino's versatility, I explore diverse technologies, showcasing creative engineering in solving real-world challenges.",
      tags: [
        {
          name: "Raspberry Pi",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Camera, IR & Ultrasonic Sensor",
          color: "pink-text-gradient",
        },
      ],
      image: arduino_project,
      source_code_link: "https://github.com/devjewel01/robotics-with-arduino",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };