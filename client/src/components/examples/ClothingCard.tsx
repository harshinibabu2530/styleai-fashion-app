import { ClothingCard } from "../ClothingCard";

export default function ClothingCardExample() {
  // todo: remove mock functionality
  const mockItem = {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    category: "top" as const,
    color: "Navy",
    style: "Casual",
  };

  return (
    <div className="w-48">
      <ClothingCard
        item={mockItem}
        onRemove={(id) => console.log("Remove item:", id)}
      />
    </div>
  );
}
