import { Product } from "@/contexts/CartContext";

// Product images
import sneakers from "@/assets/products/sneakers.jpg";
import handbag from "@/assets/products/handbag.jpg";
import smartwatch from "@/assets/products/smartwatch.jpg";
import watch from "@/assets/products/watch.jpg";
import traditionalFabric from "@/assets/products/traditional-fabric.jpg";
import heels from "@/assets/products/heels.jpg";
import nightwear from "@/assets/products/nightwear.jpg";
import crossbodyBag from "@/assets/products/crossbody-bag.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Sneakers",
    price: 250.00,
    image: sneakers,
    category: "Footwear",
    isNew: true,
  },
  {
    id: "2",
    name: "Luxury Handbag",
    price: 450.00,
    image: handbag,
    category: "Accessories",
    isNew: true,
  },
  {
    id: "3",
    name: "Smart Watch",
    price: 350.00,
    image: smartwatch,
    category: "Accessories",
    isNew: false,
  },
  {
    id: "4",
    name: "Classic Watch",
    price: 180.00,
    image: watch,
    category: "Accessories",
    isNew: false,
  },
  {
    id: "5",
    name: "Traditional Fabric",
    price: 120.00,
    image: traditionalFabric,
    category: "Fabrics",
    isNew: true,
  },
  {
    id: "6",
    name: "Designer Heels",
    price: 280.00,
    image: heels,
    category: "Footwear",
    isNew: false,
  },
  {
    id: "7",
    name: "Silk Nightwear",
    price: 95.00,
    image: nightwear,
    category: "Clothing",
    isNew: true,
  },
  {
    id: "8",
    name: "Crossbody Bag",
    price: 165.00,
    image: crossbodyBag,
    category: "Accessories",
    isNew: false,
  },
];
