import type React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  icon?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon = '✨' }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {price && <p className="service-price">{price}</p>}
    </div>
  );
};

export default ServiceCard;
