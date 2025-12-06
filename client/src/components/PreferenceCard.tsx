import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface StylePreference {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

interface PreferenceCardProps {
  preference: StylePreference;
  onLike?: (id: string) => void;
  onDislike?: (id: string) => void;
}

export function PreferenceCard({ preference, onLike, onDislike }: PreferenceCardProps) {
  const [status, setStatus] = useState<"liked" | "disliked" | null>(null);

  const handleLike = () => {
    const newStatus = status === "liked" ? null : "liked";
    setStatus(newStatus);
    if (newStatus === "liked") onLike?.(preference.id);
  };

  const handleDislike = () => {
    const newStatus = status === "disliked" ? null : "disliked";
    setStatus(newStatus);
    if (newStatus === "disliked") onDislike?.(preference.id);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all ${
        status === "liked"
          ? "ring-2 ring-primary"
          : status === "disliked"
          ? "opacity-60"
          : ""
      }`}
      data-testid={`preference-card-${preference.id}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={preference.imageUrl}
          alt={preference.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-medium text-white">{preference.title}</h3>
        <p className="text-sm text-white/70">{preference.description}</p>

        <div className="mt-3 flex gap-2">
          <Button
            size="sm"
            variant={status === "liked" ? "default" : "secondary"}
            onClick={handleLike}
            data-testid={`button-like-${preference.id}`}
          >
            <ThumbsUp className="mr-1 h-4 w-4" />
            Like
          </Button>
          <Button
            size="sm"
            variant={status === "disliked" ? "destructive" : "secondary"}
            onClick={handleDislike}
            data-testid={`button-dislike-${preference.id}`}
          >
            <ThumbsDown className="mr-1 h-4 w-4" />
            Pass
          </Button>
        </div>
      </div>
    </div>
  );
}
