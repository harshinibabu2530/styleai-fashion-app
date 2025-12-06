import { useState } from "react";
import { Header } from "../Header";

export default function HeaderExample() {
  const [activeTab, setActiveTab] = useState("home");
  return <Header activeTab={activeTab} onTabChange={setActiveTab} />;
}
