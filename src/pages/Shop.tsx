import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/contexts/CartContext";
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
      </main>

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
