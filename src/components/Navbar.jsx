import { useEffect, useState } from 'react';
import { ShieldCheck, Wallet } from 'lucide-react';

export default function Navbar() {
  const [account, setAccount] = useState(null);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    // Attempt to read selected account from MetaMask if already connected
    async function fetchAccount() {
      try {
        if (window.ethereum && window.ethereum.selectedAddress) {
          setAccount(window.ethereum.selectedAddress);
        }
      } catch (_) {
        // noop
      }
    }
    fetchAccount();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask not detected. Please install the MetaMask extension.');
      return;
    }
    try {
      setConnecting(true);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.error('Wallet connection failed:', err);
    } finally {
      setConnecting(false);
    }
  };

  const short = (addr) => (addr ? `${addr.slice(0, 6)}…${addr.slice(-4)}` : '');

  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/50 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 text-white shadow-md">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="font-semibold text-neutral-900 dark:text-white text-lg">TrustLance</div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#features"
            className="hidden sm:inline-flex text-sm px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Features
          </a>
          <a
            href="#dashboard"
            className="hidden sm:inline-flex text-sm px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Dashboard
          </a>
          <button
            onClick={connectWallet}
            disabled={connecting}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 shadow active:scale-[.98]"
          >
            <Wallet className="h-4 w-4" />
            {account ? short(account) : connecting ? 'Connecting…' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </header>
  );
}
