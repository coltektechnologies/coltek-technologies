import { Link } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  path: string;
}

const ServiceCard = ({ image, title, description, path }: ServiceCardProps) => {
  return (
    <Link to={path} className="block h-full">
      <div className="h-full flex flex-col">
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center p-3 rounded-t-2xl">
          <img 
            src={image} 
            alt={title} 
            className="h-[90%] w-auto object-contain rounded-lg"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 flex-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
