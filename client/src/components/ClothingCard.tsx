import { X, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ClothingItem {
  id: string;
  imageUrl: string;
  category: "top" | "bottom";
  color?: string;
  style?: string;
}

interface ClothingCardProps {
  item: ClothingItem;
  onRemove?: (id: string) => void;
}

export function ClothingCard({ item, onRemove }: ClothingCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-card"
      data-testid={`clothing-card-${item.id}`}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={item.imageUrl}
          alt={`${item.category} clothing item`}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      {onRemove && (
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-2 top-2 h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={() => onRemove(item.id)}
          data-testid={`button-remove-${item.id}`}
        >
          <X className="h-3 w-3" />
        </Button>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
        <div className="flex flex-wrap items-center gap-1">
          {item.color && (
            <Badge variant="secondary" className="text-xs">
              <Tag className="mr-1 h-3 w-3" />
              {item.color}
            </Badge>
          )}
          {item.style && (
            <Badge variant="secondary" className="text-xs">
              {item.style}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
