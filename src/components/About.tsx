const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Passion Meets Innovation
          </h2>
          
          <div className="prose prose-lg mx-auto text-foreground/80 leading-relaxed">
            <p className="text-xl mb-6">
              I'm <strong className="text-primary">Magnus W. Awaana</strong>, a digital marketing professional and 
              aspiring entrepreneur with a passion for building AI-powered business solutions, responsive web 
              experiences, and results-driven campaigns.
            </p>
            
            <p className="text-xl mb-6">
              My journey began with a simple question: <em className="text-accent">How can technology make businesses 
              more human, efficient, and profitable?</em> This curiosity led me to explore AI automation, modern web 
              development, and digital growth strategies — tools I now use to help startups and agencies transform 
              ideas into measurable success.
            </p>
            
            <p className="text-xl">
              I combine creativity with strategy, ensuring every project delivers both 
              <span className="font-semibold text-primary"> innovation and impact</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;