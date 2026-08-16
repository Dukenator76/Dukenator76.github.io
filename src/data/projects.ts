import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'mobile-manipulator',
    title: 'Mobile Collaborative Robotic Platform',
    description:
      'A custom mobile manipulator pairing an autonomous mobile robot with a collaborative arm — carried from mechanical concept through fabrication, integration, and commissioning.',
    summary:
      'Sole engineer on a mobile manipulator pairing an autonomous mobile robot with a collaborative arm — from SolidWorks design through vendor fabrication, electrical integration, controls, and commissioning.',
    role: 'Primary Engineer — Concept to Commissioning',
    // Mechanical tags lead, controls tags follow.
    tags: [
      'SolidWorks',
      'Mechanical Design',
      'Sheet Metal Design',
      'Design for Manufacturing',
      'Robotics',
      'System Integration',
      'Electrical Design',
      'Omron LD250',
      'Omron TM14S',
      'Allen-Bradley',
      'Ignition SCADA',
      'Python',
      'SQL',
      'PostgreSQL',
      'EtherNet/IP',
    ],
    heroImage: '/images/mobile-manipulator/hero.jpg',
    heroAlt:
      'Completed mobile manipulator: an Omron collaborative robot arm mounted on a custom white sheet-metal platform above an autonomous mobile robot',
    facts: [
      {
        label: 'Objective',
        value:
          'A general-purpose mobile automation platform — built to be redeployed across future applications rather than dedicated to a single task.',
      },
      {
        label: 'My role',
        value:
          'Primary engineer across every discipline: mechanical, electrical, controls, software, vendor coordination, and commissioning.',
      },
      {
        label: 'Design constraints',
        value:
          'One structure carrying the loads of a moving robotic arm while also serving as the electrical enclosure. The AMR was modified to accommodate wireless charging.',
      },
      {
        label: 'Outcome',
        value: 'Commissioned as a single working platform.',
      },
    ],
    highlights: [
      'Designed the complete platform above the autonomous mobile robot in SolidWorks, including the robot mounting structure and an integrated electrical enclosure.',
      'Released custom sheet-metal, machined, and welded components across three fabrication trades, coordinating vendors through to final assembly.',
      'Designed the platform’s electrical architecture and integrated it into the enclosure base.',
      'Developed controls and software integration across the mobile base, collaborative arm, PLC, and supervisory system — including configurable task and recipe handling that lets operators reconfigure operations without touching the robot program.',
      'Commissioned the completed platform as a working system.',
    ],
    toolGroups: [
      {
        label: 'Mechanical',
        items: ['SolidWorks', 'Mechanical Design', 'Sheet Metal Design', 'Machined Components', 'Weldments', 'Design for Manufacturing'],
      },
      {
        label: 'Robotics & Electrical',
        items: ['Omron LD250 AMR', 'Omron TM14S Cobot', 'Electrical Design', 'Allen-Bradley PLC', 'EtherNet/IP'],
      },
      {
        label: 'Software & Controls',
        items: ['Ignition SCADA', 'Python', 'SQL', 'PostgreSQL', 'Ladder Logic'],
      },
    ],
    sections: [
      {
        title: 'Mechanical Design',
        description:
          'The structure above the autonomous mobile robot was designed from scratch — the interface that locates and carries the collaborative arm, and an enclosure base housing the system’s electrical hardware rather than a separate cabinet stacked on top. Built from custom sheet-metal, machined, and welded components.',
        image: '/images/mobile-manipulator/mounting-detail.jpg',
        imageAlt:
          'Close view of the collaborative robot mounting flange bolted to the custom sheet-metal enclosure, with operator touchscreen and emergency stops',
        caption: 'Robot mounting structure and integrated sheet-metal enclosure base',
      },
    ],
    videos: [
      {
        url: '/videos/mobile-manipulator.mp4',
        title: 'Full system walkthrough',
        thumbnail: '/images/mobile-manipulator/video-poster.jpg',
        caption:
          'Full-length walkthrough — the platform navigating between work areas and the collaborative robot running a task sequence',
      },
    ],
    // TODO: add fabrication and enclosure-interior photos to fill the two remaining
    // placeholder sections, and add gallery photos via `additionalPhotos`.
  },
  {
    id: 'formula-sae',
    title: 'Nevada Electric Racing — Formula SAE',
    description:
      'Rear suspension and driver controls for a Formula SAE electric race car, designed and validated in SolidWorks.',
    summary:
      'Led the rear suspension and driver controls for a new Formula SAE team, taking designs from SolidWorks and FEA through machining, welding, and competition.',
    role: 'Driver Controls & Rear Suspension Lead',
    tags: ['SolidWorks', 'Mechanical Design', 'FEA', 'Thermal Analysis', 'Design for Manufacturing', 'CNC Machining', 'Formula SAE'],
    facts: [
      {
        label: 'Objective',
        value:
          'Design the rear suspension and driver controls for a Formula SAE electric race car built by a brand-new university team with no prior competition history.',
      },
      {
        label: 'My role',
        value:
          'Lead designer for rear suspension and driver controls, coordinating work across technical teams and mentoring junior engineers through design and validation.',
      },
      {
        label: 'Design constraints',
        value:
          'Formula SAE regulations for control systems, the torque output of the electric powertrain, aggressive braking duty on a tight autocross course, and the axis limitations of the team CNC machine.',
      },
      {
        label: 'Fabrication',
        value:
          'CNC machining and TIG welding in-house — uprights were split into a three-piece assembly to suit the available machine, with clearance designed around each joint for torch access.',
      },
      {
        label: 'Outcome',
        value:
          'The suspension system was manufactured and ran reliably through testing and competition; the car still uses these designs.',
      },
    ],
    toolGroups: [
      { label: 'Design', items: ['SolidWorks', 'MATLAB', 'GD&T'] },
      { label: 'Analysis', items: ['SolidWorks Simulation', 'Structural FEA', 'Thermal Analysis'] },
      { label: 'Manufacturing', items: ['CNC Machining', 'TIG Welding', 'Design for Manufacturing'] },
    ],
    additionalPhotos: [
      { src: '/images/Brake Assembly.jpg', alt: 'Rear brake assembly on the Formula SAE car', caption: 'Rear brake assembly' },
      { src: '/images/UNR FSAE 1.jpg', alt: 'Nevada Electric Racing Formula SAE car', caption: 'Completed car at competition' },
    ],
    sections: [
      {
        title: 'Rear Suspension Design',
        description:
          'I joined Nevada Electric Racing as the team was forming and took a lead design role covering the rear suspension and driver controls. The suspension package was developed in SolidWorks and validated with simulation before anything was cut.',
        image: '/images/Front Suspension Render.jpg',
        imageAlt: 'SolidWorks render of the Formula SAE suspension assembly',
        caption: 'Suspension assembly modeled in SolidWorks',
        challenges:
          'Designing a lightweight but robust suspension that could handle the torque output of the electric motors while maintaining the handling characteristics the team wanted.',
        results:
          'Designed and manufactured the rear suspension system, which performed reliably through testing and competition.',
      },
      {
        title: 'Driver Controls Integration',
        description:
          'Developed the driver control systems — steering wheel, pedal assembly, and dashboard interface — with a focus on ergonomics and response time.',
        image: '/images/Driver Controls.jpg',
        imageAlt: 'Formula SAE driver controls: steering wheel, pedal assembly, and dashboard',
        caption: 'Driver controls package',
        challenges:
          'Integrating several electronic systems while keeping the driver comfortable and safe, and meeting Formula SAE regulations for control systems.',
        results:
          'Produced a control system that drivers responded well to and that passed technical inspection at competition.',
      },
      {
        title: 'Brake Rotor & Rear Upright Design',
        description:
          'Designed both the rear uprights and the brake rotors in SolidWorks. Rotor cooling drove the design — the competition autocross course is tight with many sharp corners, so brake temperature is a safety and performance constraint. The uprights presented a manufacturing problem: the team CNC machine did not have enough axes to cut them in one piece.',
        image: '/images/Rear Upright.jpg',
        imageAlt: 'Machined three-piece rear upright assembly',
        caption: 'Three-piece rear upright, designed for the available CNC machine',
        challenges:
          'Keeping rotor temperatures down through a corner-heavy autocross course, and splitting the uprights into a three-piece assembly that was easy to machine. Because the pieces would be TIG welded, spacing was designed around each critical bar to give the torch access.',
        results:
          'The uprights were machined and assembled successfully, and the car is still competing with these designs.',
      },
    ],
    videos: [
      {
        url: '/videos/Autocross.mp4',
        title: 'Autocross Run',
        thumbnail: '/images/Car and Driver.jpg',
        caption: 'Autocross run at competition',
      },
    ],
  },
  {
    id: 'Capstone Project',
    title: 'Robotic Trailer Mover',
    description:
      'A remote-controlled robotic trailer mover — frame, gearboxes, and drivetrain designed in SolidWorks and validated with FEA.',
    summary:
      'Designed a remote-controlled robot for positioning trailers, covering frame design and FEA, custom gearbox development, and fabrication within a one-semester, $1,000 budget.',
    role: 'Mechanical design — senior capstone',
    tags: ['SolidWorks', 'Mechanical Design', 'FEA', 'Gearbox Design', 'Robotics', 'Design for Manufacturing', 'Python'],
    facts: [
      {
        label: 'Objective',
        value:
          'Build a remote-controlled robotic system for precision trailer positioning, letting an operator keep full visibility of their surroundings while maneuvering a trailer in a confined space.',
      },
      { label: 'My role', value: 'Mechanical design — frame, gearboxes, drivetrain, structural analysis, and fabrication.' },
      {
        label: 'Design constraints',
        value:
          'One academic semester and a $1,000 budget, with component selection balanced against safety and reliability requirements — particularly for the electronic safety circuits.',
      },
      {
        label: 'Fabrication',
        value:
          'Aluminum frame designed for TIG welding, with geometry and joint accessibility worked out so the welds could actually be made.',
      },
      {
        label: 'Outcome',
        value:
          'A fully operational prototype delivered within the time and budget constraints, with a 5,000-pound payload capacity meeting the initial design specification.',
      },
    ],
    toolGroups: [
      { label: 'Design', items: ['SolidWorks', 'Gearbox Design', 'Drivetrain Design'] },
      { label: 'Analysis', items: ['SolidWorks FEA', 'Structural Analysis', 'Material Selection'] },
      { label: 'Build', items: ['TIG Welding', 'Python', 'Bluetooth Control'] },
    ],
    additionalPhotos: [
      {
        src: '/images/Robot Trailer Mover.png',
        alt: 'CAD model of the robotic trailer mover',
        caption: 'Full CAD assembly',
      },
    ],
    sections: [
      {
        title: 'System Design',
        description:
          'Designed a remote-controlled robotic system for trailer positioning. Bluetooth control lets the operator stand clear and keep full visibility of the surroundings while maneuvering a trailer into position, rather than working blind from a tow vehicle.',
        image: '/images/Completed Trailer Mover.jpg',
        imageAlt: 'Completed robotic trailer mover prototype',
        caption: 'Completed prototype',
        challenges:
          'A one-semester development timeline and a $1,000 budget. Component selection had to balance cost against safety and reliability, particularly for the electronic safety circuits.',
        results:
          'Delivered a fully operational prototype within the time and budget constraints, achieving the 5,000-pound payload capacity called for in the design specification.',
      },
      {
        title: 'Gearbox Design',
        description:
          'Designed a transmission system driving three 12V motors to produce the required output torque. Each custom gearbox delivers 350 ft-lbs, for a combined system output of 700 ft-lbs.',
        image: '/images/UNR Capstone Gearbox.png',
        imageAlt: 'CAD model of the custom gearbox assembly',
        caption: 'Custom gearbox assembly',
        challenges:
          'Maximizing torque multiplication while keeping the package compact — gear ratio selection, material choice for durability, and heat under sustained load.',
        results:
          'Each gearbox delivered 350 ft-lbs as designed, and the drivetrain performed reliably under load testing.',
      },
      {
        title: 'Frame Analysis',
        description:
          'Used SolidWorks FEA to validate the frame under multi-directional loading. The design targeted structural integrity alongside low mass and manufacturability, with weld accessibility treated as a design input rather than an afterthought.',
        image: '/images/Frame Analysis.jpg',
        imageAlt: 'SolidWorks FEA stress plot of the trailer mover frame',
        caption: 'FEA stress plot used to validate the frame',
        challenges:
          'Balancing structural performance against mass reduction. Aluminum kept weight down but made frame rigidity harder to hold, and the design had to stay TIG-weldable — which meant controlling geometry and keeping weld joints accessible.',
        results:
          'The frame exceeded its mechanical load specification while achieving a 40% mass reduction against a conventional steel design. FEA across multiple load cases kept stress concentrations well inside material limits, and the final design met the ergonomic requirements for manual handling.',
      },
    ],
    videos: [
      {
        url: 'https://youtu.be/eUXGzE8xQ0k',
        title: 'Pushing a Trailer into a Parking Spot',
        caption: 'Positioning a trailer under remote control',
      },
      {
        url: 'https://youtu.be/qsrwc_hcMJU',
        title: 'Trailer Mover Demonstration',
        caption: 'General operation demonstration',
      },
    ],
  },
  {
    id: 'process-metrix',
    title: 'Industrial Laser Scanning Systems',
    description:
      'Mechanical and electrical engineering for 3D laser scanning systems used in steel plants — robotic manipulators, enclosures, and control architecture.',
    summary:
      'Designed the robotic manipulator, air filtration, and control architecture for 3D laser scanning systems deployed in heavy industrial environments.',
    role: 'Project Engineer (Mechanical & Electrical) — Vesuvius USA',
    tags: ['Mechanical Design', 'Robotics', 'Design for Manufacturing', 'Electrical Design', 'Solid Edge', 'EPLAN', 'PLC', 'System Integration'],
    facts: [
      {
        label: 'Objective',
        value:
          'Engineer scanning systems that survive the steel plant floor — placing a laser scanner into a furnace or ladle, capturing a scan at millimetre accuracy, and doing it inside a two-minute window.',
      },
      {
        label: 'My role',
        value:
          'Mechanical and electrical design, vendor coordination, and control system development across the product line.',
      },
      {
        label: 'Design constraints',
        value:
          'Extreme heat and dirty plant air, CSA electrical requirements, components from multiple independent vendors, and equipment that has to be serviceable in the field.',
      },
      {
        label: 'Outcome',
        value:
          'Systems met the millimetre accuracy and two-minute cycle targets; the filtration design was adopted across the product line and is offered as an upgrade.',
      },
    ],
    toolGroups: [
      { label: 'Mechanical', items: ['Solid Edge', 'Mechanical Design', 'Enclosure Design', 'Design for Manufacturing'] },
      { label: 'Electrical', items: ['EPLAN', 'Electrical Schematics', 'CSA Compliance', 'Control Panel Design'] },
      { label: 'Controls', items: ['Siemens PLC', 'Rockwell PLC', 'Modbus'] },
    ],
    sections: [
      {
        title: 'Robotic Manipulator System',
        description:
          'Collaborated with multiple vendors to design and build a custom robotic arm carrying the Anteris 360 scanner. The arm places the scanner into a furnace or ladle where a 3D scan is taken — the scan has to complete within two minutes and at millimetre accuracy.',
        image: '/images/PMRoboticArm.JPG',
        imageAlt: 'Custom robotic manipulator arm carrying a 3D laser scanner',
        caption: 'Custom robotic manipulator for furnace and ladle scanning',
        challenges:
          'Integrating components from several independent vendors while ensuring every part met CSA electrical requirements.',
        results:
          'Completed and deployed, meeting both the millimetre accuracy and two-minute cycle time targets.',
      },
      {
        title: 'Control System Architecture',
        description:
          'Designed and implemented a PLC control system to manage the laser scanner, replacing a previous scheme built around a custom PCB arrangement. The PLC architecture lets the laser systems be integrated faster and simplifies setup inside the plant.',
        image: '/images/Process Metrix PLC.jpeg',
        imageAlt: 'PLC control panel for the laser scanning system',
        caption: 'PLC control architecture replacing a custom PCB I/O board',
        challenges:
          'The laser system runs on Windows-based software, so a Modbus interface had to be built within the PLC to communicate with the scanner.',
        results:
          'Designed, tested, and rolled into current projects. The architecture is roughly 20% cheaper to manufacture than the PCB-based system it replaced.',
      },
      {
        title: 'Air Filtration System',
        description:
          'Plant air is dirty and caused recurring problems with the laser scanner. I designed and implemented a filtration system to clean the air enough for the scanner to operate reliably.',
        image: '/images/Air Filter Cabinet.JPG',
        imageAlt: 'Air filtration cabinet designed for plant-floor installation',
        caption: 'Air filtration cabinet designed for plant-floor durability',
        challenges:
          'Protecting the system on the plant floor while keeping it simple to build and cost effective.',
        results:
          'Adopted into all systems going forward. It is installed in many plants and is offered as an upgrade to existing installations.',
      },
    ],
  },
];
