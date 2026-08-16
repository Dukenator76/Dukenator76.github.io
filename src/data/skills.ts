export interface SkillGroup {
  title: string;
  items: string[];
}

/** Ordered so mechanical design reads first and software last. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Mechanical Design',
    items: [
      'SolidWorks',
      'Mechanical Design',
      'CAD',
      'Sheet Metal Design',
      'Design for Manufacturing',
      'Product Development',
      'Prototyping',
      'Structural Analysis',
      'Thermal Analysis',
      'GD&T',
    ],
  },
  {
    title: 'Robotics & Automation',
    items: [
      'Robotics',
      'Omron Robotics',
      'Universal Robots',
      'Industrial Automation',
      'System Integration',
      'PLC Programming',
      'Allen-Bradley',
      'SCADA',
      'Ignition',
    ],
  },
  {
    title: 'Electrical & Controls',
    items: [
      'Electrical Design',
      'Control Systems',
      'Electrical Schematics',
      'Industrial Networking',
      'EtherNet/IP',
      'Modbus',
      'Troubleshooting',
      'Commissioning',
    ],
  },
  {
    title: 'Software',
    items: ['Python', 'SQL', 'PostgreSQL', 'PLC Ladder Logic', 'MATLAB'],
  },
];
