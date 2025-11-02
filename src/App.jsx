import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DashboardPreview from './components/DashboardPreview';

function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} TrustLance. Built for secure freelancer verification.</p>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          Ethereum • IPFS • MySQL • React
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <Footer />
    </div>
  );
}
