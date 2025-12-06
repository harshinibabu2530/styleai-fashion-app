import { UploadPage } from "../UploadPage";

export default function UploadPageExample() {
  return (
    <UploadPage
      onGenerateOutfit={(tops, bottoms) =>
        console.log("Generate outfit with:", { tops, bottoms })
      }
    />
  );
}
