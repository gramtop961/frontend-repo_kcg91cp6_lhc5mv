import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-neutral-900/60 dark:via-neutral-900/70 dark:to-neutral-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/60 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-xs font-medium">Blockchain-Powered Freelancer Verification</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500">
            TrustLance
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-200">
            Verify freelancer credentials with Ethereum and IPFS. Secure, tamper-proof, and instantly auditable — designed for modern teams and marketplaces.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow hover:opacity-90"
            >
              <Rocket className="h-4 w-4" />
              Launch Dashboard
            </a>
            <a
              href="#features"
              className="inline-flex items-center px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
