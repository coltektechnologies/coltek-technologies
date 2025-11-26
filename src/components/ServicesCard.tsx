import { Card, CardContent } from "../components/ui/card";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ image, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:border-secondary/50 hover:-translate-y-1 overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-4">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center group-hover:from-secondary/20 group-hover:to-accent/20 transition-colors overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col">
          <h3 
            className="text-base font-semibold mb-2 text-card-foreground group-hover:text-secondary transition-colors"
            style={{ fontFamily: 'Montserrat-SemiBold' }}
          >
            {title}
          </h3>
          <p 
            className="text-xs text-muted-foreground line-clamp-3 flex-1"
            style={{ fontFamily: 'Montserrat-Regular' }}
          >
            {description}
          </p>
          {features && features.length > 0 && (
            <ul className="space-y-1 mt-3">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="text-xs text-muted-foreground flex items-start justify-center"
                  style={{ fontFamily: 'Montserrat-Regular' }}
                >
                  <span className="text-secondary mr-1">•</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;