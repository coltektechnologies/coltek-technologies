import { Card, CardContent } from "../components/ui/card";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ image, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:border-secondary/50 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center gap-6 p-6">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center group-hover:from-secondary/20 group-hover:to-accent/20 transition-colors overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <h3 
              className="text-lg md:text-xl font-semibold mb-2 text-card-foreground group-hover:text-secondary transition-colors"
              style={{ fontFamily: 'Montserrat-SemiBold' }}
            >
              {title}
            </h3>
            <p 
              className="text-sm md:text-base text-muted-foreground line-clamp-2"
              style={{ fontFamily: 'Montserrat-Regular' }}
            >
              {description}
            </p>
            {features && features.length > 0 && (
              <ul className="space-y-1 mt-3">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="text-xs md:text-sm text-muted-foreground flex items-start"
                    style={{ fontFamily: 'Montserrat-Regular' }}
                  >
                    <span className="text-secondary mr-2">•</span>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;