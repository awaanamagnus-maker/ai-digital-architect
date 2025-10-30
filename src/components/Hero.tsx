import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Beauty Empress<br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Collections & Fashion Hub
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
            Your one-stop fashion destination where tradition meets modern style
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            From casual to corporate, woven to western, we dress you with confidence — delivered nationwide across Ghana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/shop">
              <Button 
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-elegant"
              >
                Shop Now
              </Button>
            </a>
            <a href="/tailoring">
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                Custom Tailoring
              </Button>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">🚚</div>
              <p className="text-white/80 text-sm mt-2">Nationwide Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">✂️</div>
              <p className="text-white/80 text-sm mt-2">Custom Tailoring</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">👗</div>
              <p className="text-white/80 text-sm mt-2">Traditional & Modern</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;