import { Card } from "@/components/ui/card";
import handbagImage from "@/assets/handbags-collection.jpg";
import footwearImage from "@/assets/footwear-collection.jpg";
import fabricImage from "@/assets/traditional-fabrics.jpg";
import tailoringImage from "@/assets/custom-tailoring.jpg";
import aboutImage from "@/assets/about-fashion-store.jpg";
import deliveryImage from "@/assets/delivery-service.jpg";

const Skills = () => {
  const services = [
    {
      icon: "👠",
      image: footwearImage,
      title: "Footwears",
      description: "Casual, formal, sandals, sneakers for men & women",
      details: "From everyday comfort to special occasions, we stock quality footwear for every style and budget."
    },
    {
      icon: "👜",
      image: handbagImage,
      title: "Handbags & Accessories", 
      description: "Modern, traditional, and luxury-inspired styles",
      details: "Complete your look with our curated collection of handbags, jewelry, and fashion accessories."
    },
    {
      icon: "👗",
      image: aboutImage,
      title: "Ready-Made Clothing",
      description: "Casual, corporate, traditional outfits for all genders",
      details: "Discover our diverse range of ready-to-wear clothing that combines comfort, style, and affordability."
    },
    {
      icon: "🧵",
      image: fabricImage,
      title: "Weaving Cloths",
      description: "Local fabrics, kente, smock cloths, traditional materials",
      details: "Authentic Ghanaian textiles including kente, smock cloths, and other traditional weaving materials."
    },
    {
      icon: "✂️", 
      image: tailoringImage,
      title: "Custom Tailoring",
      description: "Professional sewing, alterations, and fashion design",
      details: "Expert tailoring services for custom fits, alterations, and unique fashion designs tailored to your preferences."
    },
    {
      icon: "🚚",
      image: deliveryImage,
      title: "Nationwide Delivery",
      description: "Convenient delivery service across Ghana",
      details: "Shop from anywhere in Ghana and have your fashion items delivered right to your doorstep."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Products & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your fashion journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
                <div className="absolute top-4 left-4 text-3xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;