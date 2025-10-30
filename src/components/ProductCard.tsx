import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isNew && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            New
          </Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-primary">
            ₵{product.price.toFixed(2)}
          </p>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
