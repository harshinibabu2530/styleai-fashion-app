import { Heart, Sparkles, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export interface OutfitRecommendation {
  id: string;
  topImageUrl: string;
  bottomImageUrl: string;
  aiTip: string;
  matchScore: number;
}

interface OutfitCardProps {
  outfit: OutfitRecommendation;
  onSave?: (id: string) => void;
  onTry?: (id: string) => void;
}

export function OutfitCard({ outfit, onSave, onTry }: OutfitCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.(outfit.id);
  };

  return (
    <Card className="group overflow-visible" data-testid={`outfit-card-${outfit.id}`}>
      <div className="relative">
        <div className="grid grid-cols-2 gap-1 p-3">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={outfit.topImageUrl}
              alt="Top clothing item"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={outfit.bottomImageUrl}
              alt="Bottom clothing item"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Badge
          variant="secondary"
          className="absolute left-4 top-4 gap-1"
        >
          <Sparkles className="h-3 w-3" />
          {outfit.matchScore}% Match
        </Badge>

        <Button
          size="icon"
          variant="ghost"
          className={`absolute right-4 top-4 ${isSaved ? "text-primary" : ""}`}
          onClick={handleSave}
          data-testid={`button-save-${outfit.id}`}
        >
          <Heart className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
        </Button>
      </div>

      <div className="space-y-3 p-4 pt-0">
        <p className="text-sm text-muted-foreground">{outfit.aiTip}</p>
        
        <div className="flex gap-2">
          <Button
            className="flex-1"
            onClick={() => onTry?.(outfit.id)}
            data-testid={`button-try-${outfit.id}`}
          >
            Try This Combo
          </Button>
          <Button size="icon" variant="outline" data-testid={`button-shuffle-${outfit.id}`}>
            <Shuffle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
