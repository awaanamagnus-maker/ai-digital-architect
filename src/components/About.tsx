const About = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Fashion Excellence in the Heart of Ghana
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your premier fashion destination in Lawra, Upper West Region
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">Beauty Empress Collections & Fashion Hub</span> 
                operates as a comprehensive fashion and lifestyle retail brand, serving both male and female customers 
                with a perfect blend of traditional and modern styles.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine retail fashion sales, professional tailoring services, and nationwide delivery 
                into a one-stop destination for style-conscious individuals across Ghana.
              </p>
              
              <p className="text-lg text-foreground font-medium">
                From casual everyday wear to corporate attire, traditional ceremonial outfits to modern fashion statements — 
                we dress you with confidence for every occasion.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🌍</div>
                  <p className="font-semibold text-primary">Nationwide</p>
                  <p className="text-sm text-muted-foreground">Delivery Service</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">✂️</div>
                  <p className="font-semibold text-primary">Custom</p>
                  <p className="text-sm text-muted-foreground">Tailoring</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 flex items-center justify-center shadow-elegant">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">👗</div>
                  <h3 className="text-2xl font-bold mb-2">Style & Tradition</h3>
                  <p className="text-white/80">
                    Where traditional Ghanaian craftsmanship meets contemporary fashion trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;