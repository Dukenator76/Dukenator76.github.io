import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'process-metrix',
    title: 'Process Metrix',
    description: 'Process Metrix, Vesuvius is a leader in 3D laser scanning technology for the steel industry',
    tags: ['Automation', 'Robotics', 'CAD', 'PLC', 'Manufacturing', 'CSA', 'CSA Electrical', 'Solid Edge' ],
    sections: [
      {
        title: 'Robotic Arm System',
        description: 'I Collaborated with multiple vendors to design and build a custom robotic arm for to fit the Process Metrix Anteris 360 scanner. The robotic arm is used to place the scanner into a furnace or ladle where a 3D scan can be taken. The scan needs to be taken within 2 minutes and at mm accuracy.',
        image: '/images/PMRoboticArm.JPG',
        challenges: 'Integrations of multiple vendors components. Ensureing that all components adhered to CSA electrical requirements.',
        results: 'The Project has been successfully completed. We have achieved the target requirementsof mm accuracy and completing the cycle within 2 minutes.'
      },
      {
        title: 'Control System',
        description: 'I Designed and implemented a sophisticated PLC control system to manage the laser scanner. This replaced the previous control scheme that utilized a PCB board arrangement. This also allows for the laser systems to be integrated faster and allows for easier setup within the plant.',
        image: '/images/Process Metrix PLC.jpeg',
        challenges: 'The laser system runs on a windows based computer software. I had to create a Modbus interface within the PLC in order to communicate with the scanner.',
        results: 'Successfully designed and tested. It is currently being implemented in current projects. This new control scheme is 20.42% cheaper and more efficient to manufacture.'
      },
      {
        title: 'Environmental Control',
        description: 'This is an air filtration system. Plant air can be very dirty and causes many problems with our laser scanner. I was tasked with designing and implementing a system that would filter the air and ensure that it was clean enough for the scanner to function properly.',
        image: '/images/Air Filter Cabinet.JPG',
        challenges: 'Ensureing that this system would be protected on the plant floor. Keeping this simple to build while staying cost effective.',
        results: 'The comapny approved of the design and implemented it into all of the systems moving forward. This is currently installed in many plants and is currently being offered as an upgrade.'
      }
    ]
  },
  {
    id: 'formula-sae',
    title: 'Nevada Electric Racing',
    description: 'A Global competition to design and build a Formula SAE car',
    tags: ['Formula SAE', 'Mechanical Design', 'CAD', 'FEA', 'Solidworks', 'Manufacturing'],
    additionalPhotos: [
      '/images/Brake Assembly.jpg',
      '/images/UNR FSAE 1.jpg',
    ],
    sections: [
      {
        title: 'Rear Suspension Design',
        description: 'During college I competed in a world wide Formula SAE competition. The team in Nevada was just forming and had never previosuly competed. I joined and took on a lead design role forcusing on the rear suspension and the driver controls.',
        image: '/images/Front Suspension Render.jpg',
        challenges: 'Designing a lightweight yet robust suspension system that could handle the high torque output of the electric motors while maintaining optimal handling characteristics.',
        results: 'Successfully designed and manufactured the rear suspension system, which performed reliably during testing and competition.'
      },
      {
        title: 'Driver Controls Integration',
        description: 'Developed the driver control systems including steering wheel, pedal assembly, and dashboard interface. Focused on ergonomics and quick response time for optimal driver performance.',
        image: '/images/Driver Controls.jpg',
        challenges: 'Integrating multiple electronic systems while ensuring driver comfort and safety. Meeting strict Formula SAE regulations for control systems.',
        results: 'Created an intuitive control system that received positive feedback from drivers and passed all technical inspections at competition.'
      },
      {
        title: 'Brake Rotor and Rear Upright Design',
        description: 'I used solidworks to design both the rear upright and the brake rotors. Brake rotor cooling was a critical focus for this competitions tight autocross track. With its numerous sharp corners, maintaining optimal brake temperatures was essential for both safety and performance. The upright design presented a unique manufacturing challenge due to our CNC machine axis limitations. We resolved this by engineering the uprights as a three-piece assembly, optimizing for manufacturability while maintaining precise tolerances to ensure seamless component integration.',
        image: '/images/Rear Upright.jpg',
        challenges: 'Keeping the brake rotors cool. This competition uses a tight autocross track that has many sharp corners. Keeping the rotors cool is essential for safety and performance. The uprights presented their own challenge as our CNC machine did not have enough axis to cut the uprights in one piece. We decided to make them 3 pieces as that was easist to machine. We needed to keep the design simple as we knew we would use tig welding so we kept spacing around each bar to allow the torch access to the cirtical bars. ',
        results: 'We were successful in maching the rear uprights and assembling the uprights. The car is currently using these designs for compention.'
      }
    ],
    videos: [
      {
        url: '/videos/Autocross.mp4',  
        title: 'Autocross Run',
        thumbnail: '/images/Car and Driver.jpg'
      }
    ]
  },
  {
    id: 'Capstone Project',
    title: 'Robotic Trailer Mover',
    description: 'A robotic trailer mover for moving trailers remotely',
    tags: ['Robotics', 'CAD', 'Python', 'Manufacturing', 'Solidworks Design', 'Solidworks FEA' ],
    additionalPhotos:['/images/Robot Trailer Mover.png'],
    sections: [
      {
        title: 'Robotic Trailer Mover',      
        description: 'Engineered an innovative remote-controlled robotic system for precision trailer manipulation. The solution incorporates Bluetooth technology for wireless control, enabling operators to maintain optimal situational awareness while maneuvering trailers in confined spaces. This design significantly enhances safety and operational efficiency by providing users with complete visibility of their surroundings during the positioning process.',
        image: '/images/Completed Trailer Mover.jpg',
        challenges: 'Navigated significant resource constraints including an accelerated development timeline of one academic semester and a strict $1,000 budget allocation. Key challenges involved optimizing component selection to maintain system safety and reliability while managing cost-effectiveness, particularly in the implementation of critical electronic safety circuits.',
        results: 'Successfully delivered a fully operational prototype within stringent time and budget constraints. The system demonstrated exceptional performance, achieving a 5,000-pound payload capacity for large-scale trailer manipulation, meeting all initial design specifications and safety requirements.'
      },
      {
        title: 'Gearbox Design',      
        description: 'Engineered a high-efficiency transmission system integrating three 12V motors to achieve optimal torque output. The custom-designed gearboxes deliver 350 ft-lbs of torque individually, culminating in a combined system output of 700 ft-lbs. This sophisticated power distribution enables precise control and maneuverability for the trailer positioning system.',
        image: '/images/UNR Capstone Gearbox.png',
        challenges: 'Faced complex design constraints in maximizing torque multiplication while maintaining compact form factor. Critical considerations included gear ratio optimization, material selection for durability, and thermal management under high-load conditions.',
        results: 'Achieved exceptional mechanical advantage through innovative gearbox design, successfully delivering 350 ft-lbs of torque per unit. The system demonstrated reliable performance under load testing, with optimal heat dissipation and minimal power loss across the drivetrain.'
      },
      {
        title: 'Frame Analysis',      
        description: 'Implemented comprehensive structural analysis utilizing SolidWorks Finite Element Analysis (FEA) to validate the frames multi-directional load capacity. The design methodology prioritized structural integrity while optimizing for lightweight construction and manufacturability, incorporating key considerations for weld accessibility and overall system durability.',
        image: '/images/Frame Analysis.jpg',
        challenges: 'Conducted extensive material analysis to achieve optimal balance between structural performance and mass reduction requirements. The implementation of aluminum alloy presented unique engineering challenges in maintaining frame rigidity. Strategic design considerations were required to ensure manufacturability through TIG welding processes, necessitating precise geometric tolerancing and weld joint accessibility.',
        results: 'Delivered an optimized structural framework that surpassed mechanical load specifications while achieving a 40% mass reduction compared to conventional steel designs. Comprehensive FEA simulations validated the structural performance across multiple load cases, with stress concentrations remaining well within material limits. The final design successfully integrated manufacturability considerations while meeting ergonomic requirements for manual manipulation.'
      }
      
    ],
    videos: [
      {
        url: 'https://youtu.be/eUXGzE8xQ0k',  
        title: 'Pushing a Trailer into a parking spot',
        thumbnail: '',
      },
      {
        url: 'https://youtu.be/qsrwc_hcMJU',
        title: 'Another Video Title',
        thumbnail: '',
      }
    ]
  },
];