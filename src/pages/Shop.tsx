import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Contact from "@/components/Contact";
import { Product } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import sneakersImg from "@/assets/products/sneakers.jpg";
import handbagImg from "@/assets/products/handbag.jpg";
import smartwatchImg from "@/assets/products/smartwatch.jpg";
import watchImg from "@/assets/products/watch.jpg";
import traditionalFabricImg from "@/assets/products/traditional-fabric.jpg";
import heelsImg from "@/assets/products/heels.jpg";
import nightwearImg from "@/assets/products/nightwear.jpg";
import crossbodyBagImg from "@/assets/products/crossbody-bag.jpg";

const Shop = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Urban Sport Sneakers",
      price: 250.00,
      image: sneakersImg,
      category: "Footwear",
      isNew: true,
    },
    {
      id: "2",
      name: "Luxury Leather Handbag",
      price: 450.00,
      image: handbagImg,
      category: "Bags",
      isNew: true,
    },
    {
      id: "3",
      name: "Smart Fitness Watch",
      price: 350.00,
      image: smartwatchImg,
      category: "Accessories",
      isNew: false,
    },
    {
      id: "4",
      name: "Classic Chronograph Watch",
      price: 550.00,
      image: watchImg,
      category: "Accessories",
      isNew: false,
    },
    {
      id: "5",
      name: "Traditional Kente Fabric",
      price: 180.00,
      image: traditionalFabricImg,
      category: "Traditional",
      isNew: true,
    },
    {
      id: "6",
      name: "Elegant High Heels",
      price: 200.00,
      image: heelsImg,
      category: "Footwear",
      isNew: false,
    },
    {
      id: "7",
      name: "Luxury Nightwear",
      price: 150.00,
      image: nightwearImg,
      category: "Clothing",
      isNew: false,
    },
    {
      id: "8",
      name: "Designer Crossbody Bag",
      price: 320.00,
      image: crossbodyBagImg,
      category: "Bags",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Shop Our Collection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the finest selection of fashion, accessories, and traditional wear
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-primary p-12 rounded-2xl shadow-elegant text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Something Custom?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Our expert tailors can create bespoke pieces tailored to your exact specifications
            </p>
            <a
              href="/tailoring"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Explore Custom Tailoring
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/233592053745"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22c55e] text-white p-4 rounded-full shadow-elegant transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Beauty Empress Collections & Fashion Hub. All rights reserved.
          </p>
          <p className="text-xs opacity-70 mt-2">
            Your premier fashion destination in Lawra, Upper West Region | Nationwide delivery available
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
