import { useState } from "react";
import { Sparkles, Loader2, Shirt, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UploadZone } from "./UploadZone";
import { ClothingCard, type ClothingItem } from "./ClothingCard";
import { v4 as uuid } from "uuid";

interface UploadPageProps {
  onGenerateOutfit: (tops: ClothingItem[], bottoms: ClothingItem[]) => void;
}

export function UploadPage({ onGenerateOutfit }: UploadPageProps) {
  const [tops, setTops] = useState<ClothingItem[]>([]);
  const [bottoms, setBottoms] = useState<ClothingItem[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleTopsAdded = (files: File[]) => {
    const newItems: ClothingItem[] = files.map((file) => ({
      id: uuid(),
      imageUrl: URL.createObjectURL(file),
      category: "top",
      color: "Analyzing...",
      style: "Detecting...",
    }));
    setTops((prev) => [...prev, ...newItems]);

    // todo: remove mock functionality - replace with AI analysis
    setTimeout(() => {
      setTops((prev) =>
        prev.map((item) => {
          if (item.color === "Analyzing...") {
            const colors = ["Navy", "White", "Black", "Beige", "Gray"];
            const styles = ["Casual", "Formal", "Streetwear", "Classic"];
            return {
              ...item,
              color: colors[Math.floor(Math.random() * colors.length)],
              style: styles[Math.floor(Math.random() * styles.length)],
            };
          }
          return item;
        })
      );
    }, 1500);
  };

  const handleBottomsAdded = (files: File[]) => {
    const newItems: ClothingItem[] = files.map((file) => ({
      id: uuid(),
      imageUrl: URL.createObjectURL(file),
      category: "bottom",
      color: "Analyzing...",
      style: "Detecting...",
    }));
    setBottoms((prev) => [...prev, ...newItems]);

    // todo: remove mock functionality - replace with AI analysis
    setTimeout(() => {
      setBottoms((prev) =>
        prev.map((item) => {
          if (item.color === "Analyzing...") {
            const colors = ["Khaki", "Denim", "Black", "Navy", "Olive"];
            const styles = ["Casual", "Tailored", "Relaxed", "Slim"];
            return {
              ...item,
              color: colors[Math.floor(Math.random() * colors.length)],
              style: styles[Math.floor(Math.random() * styles.length)],
            };
          }
          return item;
        })
      );
    }, 1500);
  };

  const handleRemoveTop = (id: string) => {
    setTops((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveBottom = (id: string) => {
    setBottoms((prev) => prev.filter((item) => item.id !== id));
  };

  const handleGenerate = () => {
    if (tops.length === 0 || bottoms.length === 0) return;
    setIsAnalyzing(true);
    // todo: remove mock functionality - replace with AI generation
    setTimeout(() => {
      setIsAnalyzing(false);
      onGenerateOutfit(tops, bottoms);
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Upload Your Wardrobe
        </h1>
        <p className="mt-2 text-muted-foreground">
          Add photos of your clothing items and let AI find the perfect combinations
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <div className="mb-4 flex items-center gap-2">
            <Shirt className="h-5 w-5 text-primary" />
            <h2 className="font-medium">Tops</h2>
            <span className="ml-auto text-sm text-muted-foreground">
              {tops.length} items
            </span>
          </div>
          <UploadZone
            label="Upload Tops"
            description="T-shirts, shirts, blouses, sweaters..."
            onFilesAdded={handleTopsAdded}
          />
          {tops.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {tops.map((item) => (
                <ClothingCard
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveTop}
                />
              ))}
            </div>
          )}
        </Card>

        <Card className="p-4">
          <div className="mb-4 flex items-center gap-2">
            <Scissors className="h-5 w-5 text-primary" />
            <h2 className="font-medium">Bottoms</h2>
            <span className="ml-auto text-sm text-muted-foreground">
              {bottoms.length} items
            </span>
          </div>
          <UploadZone
            label="Upload Bottoms"
            description="Pants, jeans, skirts, shorts..."
            onFilesAdded={handleBottomsAdded}
          />
          {bottoms.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {bottoms.map((item) => (
                <ClothingCard
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveBottom}
                />
              ))}
            </div>
          )}
        </Card>
      </div>

      <div className="text-center">
        <Button
          size="lg"
          disabled={tops.length === 0 || bottoms.length === 0 || isAnalyzing}
          onClick={handleGenerate}
          data-testid="button-generate-outfits"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              AI is analyzing your clothes...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Outfit Recommendations
            </>
          )}
        </Button>
        {(tops.length === 0 || bottoms.length === 0) && (
          <p className="mt-2 text-sm text-muted-foreground">
            Add at least one top and one bottom to get started
          </p>
        )}
      </div>
    </div>
  );
}
