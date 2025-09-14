import { Card } from "@/components/ui/card";
import corporateImage from "@/assets/corporate-fashion.jpg";
import weddingImage from "@/assets/wedding-fashion.jpg";
import deliveryImage from "@/assets/delivery-service.jpg";

const Projects = () => {
  const targetMarkets = [
    {
      title: "Working Professionals & Corporate",
      description: "Stylish business attire and professional wear",
      details: "From sharp corporate suits to smart-casual work outfits, we help professionals dress for success with confidence and style.",
      stats: "500+ professionals served",
      image: corporateImage
    },
    {
      title: "Traditional Ceremonies & Weddings", 
      description: "Custom traditional wear and ceremonial outfits",
      details: "Specializing in kente clothing, traditional smocks, and custom ceremonial wear for weddings, festivals, and cultural events.",
      stats: "200+ ceremonies styled",
      image: weddingImage
    },
    {
      title: "Online Shoppers Nationwide",
      description: "Convenient nationwide delivery service",
      details: "Serving fashion-forward customers across Ghana with our reliable delivery network, bringing style to your doorstep.",
      stats: "All 16 regions covered",
      image: deliveryImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fashion for every lifestyle, occasion, and budget
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {targetMarkets.map((market, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={market.image} 
                  alt={market.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary/30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary-glow transition-colors">
                  {market.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {market.description}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {market.details}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {market.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-primary p-8 rounded-2xl shadow-elegant">
          <h3 className="text-2xl font-bold text-white mb-4">
            Strategic Location Advantage
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Located in Lawra, Upper West Region, we serve as a regional fashion hub with less competition 
            for structured fashion retail. Our strategic position allows us to serve nearby towns while 
            offering nationwide delivery across Ghana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;