export interface ExperienceEntry {
  title: string;
  company: string;
  /**
   * Employment period. Left empty where the exact dates could not be sourced from
   * the existing site or resume — the UI omits the badge rather than showing a guess.
   */
  period: string;
  /** 'featured' entries get full visual weight; 'standard' entries are condensed. */
  tier: 'featured' | 'standard';
  summary?: string;
  bullets: string[];
}

/** All periods below match the current resume (Ducati_Mondani_Resume.pdf). */
export const experience: ExperienceEntry[] = [
  {
    title: 'Systems Engineer',
    company: 'Calcon Systems',
    period: 'February 2025 – Present',
    tier: 'featured',
    summary:
      'Design and integrate custom automation systems spanning mechanical design, robotics, electrical controls, PLCs, and SCADA.',
    bullets: [
      'Design and integrate custom automation systems involving PLCs, robotics, SCADA, electrical controls, and mechanical systems.',
      'Led development of a mobile collaborative robotic platform from concept through fabrication, controls and software integration, and commissioning.',
      'Troubleshoot, repair, and modernize industrial electrical and automation equipment at customer facilities.',
      'Develop and modify Ignition SCADA systems for machine control, data acquisition, test configuration, and reporting.',
      'Program and integrate Omron and Universal Robots with Allen-Bradley PLC-controlled automation systems using Python, SQL, Ladder Logic, and industrial communication protocols.',
    ],
  },
  {
    title: 'Project Engineer (Mechanical & Electrical)',
    company: 'Vesuvius USA',
    period: 'June 2022 – December 2024',
    tier: 'featured',
    summary:
      'Owned engineering projects for high-value industrial laser systems from design through commissioning and Site Acceptance Testing.',
    bullets: [
      'Managed engineering projects from design through commissioning and Site Acceptance Testing (SAT) for high-value industrial laser systems.',
      'Designed mechanical components for manufacturability, serviceability, and field installation using CAD.',
      'Migrated a custom PCB-based I/O system to an off-the-shelf PLC architecture, reducing system cost by approximately 20%.',
      'Developed standardized PLC logic for communication between industrial controls and Windows-based software.',
      'Designed complex electrical schematics and control systems using EPLAN, while supporting robotic, machine-vision, and laser-based automation projects.',
    ],
  },
  {
    title: 'Driver Controls & Rear Suspension Lead',
    company: 'Nevada Electric Racing — Formula SAE',
    period: 'August 2020 – May 2022',
    tier: 'standard',
    bullets: [
      'Led engineering teams responsible for rear suspension and driver controls for a Formula SAE electric race car.',
      'Developed and analyzed mechanical designs using SolidWorks and MATLAB, including structural and thermal simulations.',
      'Coordinated engineering work across multiple technical teams and mentored junior engineers through design and validation.',
      'Used simulation and iterative design to optimize suspension geometry and validate critical vehicle components.',
    ],
  },
  {
    title: 'Manufacturing Support Specialist',
    company: 'Vesuvius USA',
    period: 'January 2017 – August 2019',
    tier: 'standard',
    bullets: [
      'Supported manufacturing and integration of complex electromechanical laser systems.',
      'Troubleshot mechanical and electrical issues with field technicians and supported one-off engineering projects.',
      'Managed procurement and supply-chain activities for high-value production systems.',
      'Developed electrical diagrams, assembly documentation, and field installation instructions for newly developed equipment.',
    ],
  },
  {
    title: 'Manufacturing Intern',
    company: 'Inverse Solutions',
    period: 'June 2014 – August 2015',
    tier: 'standard',
    bullets: [
      'Inspected and assembled precision CNC-machined components using technical drawings, GD&T, and precision measurement equipment.',
      'Performed quality-control inspections and supported manufacturing of complex mechanical assemblies.',
    ],
  },
  {
    title: 'Lead CAD Designer & Club President',
    company: 'FIRST Robotics Competition',
    period: 'January 2012 – April 2015',
    tier: 'standard',
    bullets: [
      'Led a team of 70+ students and managed the design and development of competition robots.',
      'Designed complete robotic assemblies in SolidWorks and trained other team members in CAD and mechanical design.',
      'Received the FIRST Excellence in Engineering Award for development of a unique climbing mechanism.',
    ],
  },
];
