import { ShieldCheck, FileUp, Database, CheckCircle, Wallet } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'On-chain Verification',
    desc: 'Register and verify freelancer identities through Ethereum smart contracts for tamper-proof credentials.'
  },
  {
    icon: FileUp,
    title: 'IPFS Storage (Pinata)',
    desc: 'Upload resumes, certifications, and work proofs to IPFS with public gateway retrieval.'
  },
  {
    icon: Database,
    title: 'Off-chain Metadata',
    desc: 'Store user profiles, timestamps, and verification references in a secure MySQL database.'
  },
  {
    icon: Wallet,
    title: 'Wallet Connect',
    desc: 'Use MetaMask to connect and interact with your on-chain verification record.'
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Built for trust, designed for speed</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">A streamlined toolkit that keeps verification transparent and simple.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
                <CheckCircle className="h-4 w-4" />
                Production-ready foundations
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
