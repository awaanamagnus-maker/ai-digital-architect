import { Card } from "@/components/ui/card";

const Projects = () => {
  const targetMarkets = [
    {
      title: "Primary Market",
      audience: "Youth, working professionals, students, and fashion-forward individuals in Lawra and Upper West Region.",
      focus: "Local community engagement and style-conscious individuals seeking quality fashion.",
      icon: "🎯",
      highlight: "Local Focus"
    },
    {
      title: "Secondary Market", 
      audience: "Online shoppers across Ghana seeking affordable yet stylish fashion pieces delivered to their doorstep.",
      focus: "Nationwide reach through e-commerce and social media presence.",
      icon: "🌍",
      highlight: "National Reach"
    },
    {
      title: "Special Segments",
      audience: "Weddings, traditional ceremonies, corporate events requiring custom clothing & accessories.",
      focus: "Premium custom tailoring and event-specific fashion solutions.",
      icon: "💒",
      highlight: "Premium Events"
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
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {targetMarkets.map((market, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-card group"
            >
              <div className="mb-6">
                <div className="text-4xl mb-4">{market.icon}</div>
                <div className="inline-block px-4 py-2 bg-gradient-accent text-accent-foreground text-sm font-semibold rounded-full mb-4">
                  {market.highlight}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {market.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Target Audience:</h4>
                  <p className="text-muted-foreground">{market.audience}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Focus:</h4>
                  <p className="text-foreground font-medium">{market.focus}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-primary p-8 rounded-2xl shadow-elegant">
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