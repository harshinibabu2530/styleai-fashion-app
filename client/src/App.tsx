import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { UploadPage } from "@/components/UploadPage";
import { OutfitsPage } from "@/components/OutfitsPage";
import { PreferencesPage } from "@/components/PreferencesPage";
import { PinterestInspiration } from "@/components/PinterestInspiration";
import { ChatWidget } from "@/components/ChatWidget";
import { LoginPage, SignUpPage } from "@/components/AuthPages";

function AppContent() {
  const [activeTab, setActiveTab] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState<"login" | "signup" | null>(null);

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      setAuthView("signup");
    } else {
      setActiveTab("upload");
    }
  };

  const handleGenerateOutfit = () => {
    setActiveTab("outfits");
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setAuthView(null);
    setActiveTab("home");
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setAuthView(null);
    setActiveTab("upload");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab("home");
  };

  if (authView === "login") {
    return (
      <LoginPage
        onLogin={handleLogin}
        onSwitchToSignUp={() => setAuthView("signup")}
      />
    );
  }

  if (authView === "signup") {
    return (
      <SignUpPage
        onSignUp={handleSignUp}
        onSwitchToLogin={() => setAuthView("login")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isAuthenticated={isAuthenticated}
        onLoginClick={() => setAuthView("login")}
        onLogout={handleLogout}
      />
      
      <main>
        {activeTab === "home" && (
          <HeroSection onGetStarted={handleGetStarted} />
        )}
        {activeTab === "upload" && (
          <UploadPage onGenerateOutfit={handleGenerateOutfit} />
        )}
        {activeTab === "discover" && <PinterestInspiration />}
        {activeTab === "outfits" && <OutfitsPage />}
        {activeTab === "preferences" && <PreferencesPage />}
      </main>

      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
