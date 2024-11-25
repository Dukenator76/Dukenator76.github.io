import React from 'react';
import {  Linkedin, Mail, FileText, Scale, WrenchIcon, Cpu, Settings } from 'lucide-react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function HomePage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header />
      
      {/* Hero/About Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Mechanical Engineer
                <span className="block text-blue-500">Design Innovator</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Specializing in mechatronics engineering, combining expertise in precision mechanical design and electrical systems. 
                With 3+ years of experience in industrial automation, robotics, and innovative product development.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="https://www.linkedin.com/in/ducatimondani/" icon={<Linkedin />} />
                <SocialLink 
                  href="mailto:ducatimondani@gmail.com" 
                  icon={<Mail />} 
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80"
                alt="Engineering Design"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-lg shadow-xl">
                <Scale className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle 
            title="Professional Experience" 
            subtitle="Where I've Made an Impact"
            icon={<WrenchIcon className="w-6 h-6" />}
          />
          
          <div className="space-y-12 mt-12">
            <ExperienceCard 
              title="Project Engineer"
              company="Process Metrix Vesuvius"
              period="2022 - Present"
              description="Perform the design and implementation of complex robotic arms to manipulate laser scanners for the steel industry. "
            />
            <ExperienceCard 
              title="Lead Designer Rear Suspension and Driver Controls"
              company="Nevada Electric Racing"
              period="2020 - 2022"
              description="Lead a group of Junior Engineers in the design and implementation of the rear suspension and driver controls for a race car."
            />
            <ExperienceCard 
              title="Manufacturing Support Specialist"
              company="Process Metrix Vesuvius"
              period="2017 - 2019"
              description="Collaborated with Senior Engineers to manufacture high speed laser measurement devices for the steel industry."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Engineering Solutions"
            icon={<Cpu className="w-6 h-6" />}
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle 
            title="Technical Skills" 
            subtitle="Tools & Technologies"
            icon={<Settings className="w-6 h-6" />}
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <SkillCategory 
              title="Design Tools"
              skills={["SolidWorks", "AutoCAD", "Fusion 360", "SolidEdge"]}
            />
            <SkillCategory 
              title="Analysis"
              skills={["FEA (Finite Element Analysis)", "Prototyping" , "Thermal Analysis", "Electrical Analysis"]}
            />
            <SkillCategory 
              title="Manufacturing"
              skills={["CNC Machining", "GD&T", "Sheet Metal", "Welding"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const SocialLink = ({ href, icon, className }: { href: string; icon: React.ReactNode; className?: string }) => (
  <a 
    href={href}
    className={`w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const SectionTitle = ({ 
  title, 
  subtitle,
  icon 
}: { 
  title: string; 
  subtitle: string;
  icon: React.ReactNode;
}) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
      {icon}
    </div>
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <p className="text-gray-400">{subtitle}</p>
  </div>
);

const ExperienceCard = ({ 
  title, 
  company, 
  period,
  description 
}: { 
  title: string; 
  company: string;
  period: string;
  description: string;
}) => (
  <div className="relative pl-8 border-l-2 border-gray-800">
    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    <div className="flex items-center text-gray-400 mb-2">
      <span>{company}</span>
      <span className="mx-2">•</span>
      <span>{period}</span>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const SkillCategory = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: string[];
}) => (
  <div className="bg-gray-950 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-2">
      {skills.map((skill) => (
        <div 
          key={skill}
          className="flex items-center space-x-2"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span>{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;