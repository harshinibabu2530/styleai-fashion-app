import { PreferenceCard } from "../PreferenceCard";

export default function PreferenceCardExample() {
  // todo: remove mock functionality
  const mockPreference = {
    id: "1",
    title: "Minimalist Chic",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    description: "Clean lines, neutral colors, timeless pieces",
  };

  return (
    <div className="w-72">
      <PreferenceCard
        preference={mockPreference}
        onLike={(id) => console.log("Liked:", id)}
        onDislike={(id) => console.log("Disliked:", id)}
      />
    </div>
  );
}
