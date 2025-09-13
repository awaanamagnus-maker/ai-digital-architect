import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Beauty Empress transformed my wardrobe completely! Their custom tailoring service is exceptional, and the quality of their traditional fabrics is unmatched. I get compliments everywhere I go!",
      author: "Akosua M.",
      role: "Teacher, Wa",
      rating: 5
    },
    {
      quote: "I ordered my wedding outfit from Beauty Empress and it was perfect! The attention to detail in the kente work and the fit was exactly what I dreamed of. Delivery was quick too!",
      author: "Kwame D.",
      role: "Groom, Accra", 
      rating: 5
    },
    {
      quote: "As a young professional, I love their modern corporate wear collection. The quality is great, prices are reasonable, and I can order online and get delivery right to my office.",
      author: "Fatima A.",
      role: "Banker, Tamale",
      rating: 5
    },
    {
      quote: "Their customer service is amazing! They helped me choose the perfect traditional outfit for my graduation ceremony. The craftsmanship of their weaving cloths is truly authentic.",
      author: "Abdul R.",
      role: "University Graduate",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Happy Customers
          </h2>
          <p className="text-xl text-muted-foreground">
            Stories from our satisfied customers across Ghana
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-sm"
            >
              <div className="mb-4">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">⭐</span>
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-primary">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.role}
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