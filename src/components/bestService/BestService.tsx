import { FC } from 'react';

import './BestService.css'

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  bgColor: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description, linkText, bgColor }) => {
  return (
    <div className="service-card" style={{ backgroundColor: bgColor }}>
      <div className="service-card-title-box">
        <span className='service-card-icon'>{icon}</span>
        <h3 className="service-card-title">{title}</h3>
      </div>
      <p className="service-card-p">{description}</p>
      <a className="service-card-a" href="#">{linkText}</a>
    </div>
  );
};

const BestServices: React.FC = () => {
  const services = [
    {
      icon: '👨🏻‍🏫',
      title: 'Expert Instructor',
      description: 'Expert Instructor knowledgeable, experienced, and provides quality education and guidance.',
      linkText: 'Read More',
      bgColor: '#ecebff',
    },
    {
      icon: '⏰',
      title: '24/7 Support Available',
      description: 'Expert Instructor knowledgeable, experienced, and provides quality education and guidance.',
      linkText: 'Read More',
      bgColor: '#fff8e7',
    },
    {
      icon: '⏳',
      title: 'Lifetime access',
      description: 'Expert Instructor knowledgeable, experienced, and provides quality education and guidance.',
      linkText: 'Read More',
      bgColor: '#e7f6ee',
    },
    {
      icon: '🎓',
      title: 'Learn Anywhere',
      description: 'Expert Instructor knowledgeable, experienced, and provides quality education and guidance.',
      linkText: 'Read More',
      bgColor: '#ffe8e7', 
    },
  ];

  return (
    <div className="best-services">
      <h2 className="service-card-h2">Our Best Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default BestServices;