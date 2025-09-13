import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Magnus has the rare ability to bridge strategy and execution. His AI-driven insights helped us uncover opportunities we didn't even know existed.",
      author: "Kwame A.",
      role: "Digital Strategist",
      type: "Colleague"
    },
    {
      quote: "Working with Magnus transformed our online presence. His mix of technical expertise and marketing know-how is unmatched.",
      author: "Sarah T.",
      role: "Startup Founder",
      type: "Client"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by colleagues and clients alike
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-sm"
            >
              <div className="mb-6">
                <svg 
                  className="w-8 h-8 text-accent mb-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="text-sm text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">
                  {testimonial.type}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;