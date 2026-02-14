import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import TrustBanner from './components/TrustBanner';
import GameGrid from './components/GameGrid';
import FeaturesSection from './components/FeaturesSection';
import InfoSection from './components/InfoSection';
import LocationsMap from './components/LocationsMap';
import WhyChooseUs from './components/WhyChooseUs';
import FAQSection from './components/FAQSection';
import BeyondGamingSection from './components/BeyondGamingSection';
import StartHereBanner from './components/StartHereBanner';
import Footer from './components/Footer';
import MinecraftProductPage from './components/MinecraftProductPage';
import HytaleProductPage from './components/HytaleProductPage';
import PalworldProductPage from './components/PalworldProductPage';
import DedicatedServerPage from './components/DedicatedServerPage';
import VPSServerPage from './components/VPSServerPage';
import WebHostingPage from './components/WebHostingPage';
import DiscordBotPage from './components/DiscordBotPage';
import AboutUsPage from './components/AboutUsPage';
import PanelFeaturesPage from './components/PanelFeaturesPage';
import FAQPage from './components/FAQPage';
import BlogsPage from './components/BlogsPage';
import WhyUsPage from './components/WhyUsPage';
import LocationsPage from './components/LocationsPage';
import PartnerProgramPage from './components/PartnerProgramPage';
import ReturnPolicyPage from './components/ReturnPolicyPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsConditionsPage from './components/TermsConditionsPage';
import ServerConfigPage from './components/ServerConfigPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [configData, setConfigData] = useState<{ type: string; plan?: string; price?: string } | null>(null);

  const handleNavigate = (view: string, data?: any) => {
    setCurrentView(view);
    if (data) {
      setConfigData(data);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-nexus-dark text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar onNavigate={handleNavigate} />
      <main>
        {currentView === 'home' ? (
          <>
            <div className="relative">
                <Hero onNavigate={handleNavigate} />
            </div>
            
            <TrustBanner />
            
            <FeaturesSection />

            <InfoSection />

            <LocationsMap />
            
            <PromoBanner />
            
            <GameGrid onNavigate={handleNavigate} />

            <WhyChooseUs />

            <FAQSection />

            <BeyondGamingSection />

            <StartHereBanner />
          </>
        ) : currentView === 'minecraft' ? (
          <MinecraftProductPage onNavigate={handleNavigate} />
        ) : currentView === 'hytale' ? (
          <HytaleProductPage onNavigate={handleNavigate} />
        ) : currentView === 'palworld' ? (
          <PalworldProductPage onNavigate={handleNavigate} />
        ) : currentView === 'dedicated' ? (
          <DedicatedServerPage onNavigate={handleNavigate} />
        ) : currentView === 'vps' ? (
          <VPSServerPage onNavigate={handleNavigate} />
        ) : currentView === 'web-hosting' ? (
          <WebHostingPage onNavigate={handleNavigate} />
        ) : currentView === 'discord-bot' ? (
          <DiscordBotPage onNavigate={handleNavigate} />
        ) : currentView === 'about' ? (
          <AboutUsPage />
        ) : currentView === 'panel-features' ? (
          <PanelFeaturesPage />
        ) : currentView === 'faq' ? (
          <FAQPage />
        ) : currentView === 'blogs' ? (
          <BlogsPage />
        ) : currentView === 'why-us' ? (
          <WhyUsPage />
        ) : currentView === 'locations' ? (
          <LocationsPage />
        ) : currentView === 'partner-program' ? (
          <PartnerProgramPage />
        ) : currentView === 'return-policy' ? (
          <ReturnPolicyPage />
        ) : currentView === 'privacy-policy' ? (
          <PrivacyPolicyPage />
        ) : currentView === 'terms' ? (
          <TermsConditionsPage />
        ) : currentView === 'configure' ? (
          <ServerConfigPage initialData={configData} />
        ) : null}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;