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
      title: "Software Engineer (.NET)",
      company_name: "Orbitax",
      icon: backend,
      iconBg: "#05BFDB",
      date: "May 2024 - Present",
      points: [
        "Developing and maintaining .NET-based enterprise solutions for tax compliance and regulatory software",
        "Collaborating with cross-functional teams to enhance software performance and scalability",
        "Working with modern .NET technologies and best practices to deliver robust applications",
        "Contributing to code reviews and technical documentation"
      ],
    },
    {
      title: "Founder & Chief Mentor",
      company_name: "RoboICT",
      icon: robot_icon,
      iconBg: "#161B22",
      date: "2024 - Present",
      points: [
        "Founded an educational startup focused on teaching robotics and programming to school and college students",
        "Designed hands-on courses combining Arduino, IoT, and basic AI concepts",
        "Mentoring students in robotics competitions and project development",
        "Building a community of young robotics enthusiasts and innovators"
      ],
    },
    {
      title: "Programming & Robotics Trainer",
      company_name: "Comilla District Commissioner's Office",
      icon: SoRC,
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        "Delivered robotics and programming workshops across 10 upazilas in Cumilla district",
        "Trained students from 30 schools and colleges in robotics fundamentals",
        "Conducted hands-on sessions on Arduino, sensors, and basic robotics concepts",
        "Collaborated with the Deputy Commissioner's office to promote STEM education"
      ],
    },
    {
      title: "Co-Founder & Robotics Programmer",
      company_name: "Quanta Robotics",
      icon: quanta_robotics,
      iconBg: "#E6DEDD",
      date: "2021 - 2023",
      points: [
        "Led development of three humanoid robotics projects: Robot Niko, Robot Sheena, and Robot Blueberry",
        "Worked with ROS2, URDF, Gazebo simulation, and MoveIt for robot planning and control",
        "Developed IoT and embedded-systems projects focused on automation and smart devices",
        "Implemented computer vision and machine learning algorithms for autonomous robot behavior",
        "Managed hardware integration including Arduino, Raspberry Pi, and various sensors"
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