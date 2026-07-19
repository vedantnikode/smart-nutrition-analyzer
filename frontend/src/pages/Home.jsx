import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import DataSources from "../components/home/DataSources";
import DeveloperCTA from "../components/DeveloperCTA";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); 
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <Features />
      <DataSources />
      <DeveloperCTA />
      <Footer />
    </main>
  );
}