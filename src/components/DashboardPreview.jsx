import { useState } from 'react';
import { BadgeCheck, UploadCloud, Link as LinkIcon } from 'lucide-react';

export default function DashboardPreview() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  };

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Verification Status</h3>
              <span className="inline-flex items-center gap-2 text-sm text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-950/40 px-3 py-1 rounded-full">
                <BadgeCheck className="h-4 w-4" />
                Sample Verified
              </span>
            </div>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm">
              This is a live UI preview. Connect your wallet, upload to IPFS via the backend, and write a verification record to the smart contract to finalize status.
            </p>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                <dt className="text-xs text-neutral-500">On-chain Address</dt>
                <dd className="mt-1 font-mono text-sm text-neutral-900 dark:text-neutral-100 truncate">0x1234...ABCD</dd>
              </div>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                <dt className="text-xs text-neutral-500">Verification Tx</dt>
                <dd className="mt-1 font-mono text-sm text-neutral-900 dark:text-neutral-100 truncate">0x9f...42b</dd>
              </div>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                <dt className="text-xs text-neutral-500">IPFS CID</dt>
                <dd className="mt-1 font-mono text-sm text-neutral-900 dark:text-neutral-100 truncate">bafy...hash</dd>
              </div>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                <dt className="text-xs text-neutral-500">Last Updated</dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">Just now</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Upload Proofs (IPFS)</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              For security, uploads should go through the backend which talks to Pinata. This component previews your selected file locally.
            </p>

            <label className="mt-4 flex flex-col items-center justify-center gap-3 w-full h-44 border-2 border-dashed rounded-xl cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/40 border-neutral-300 dark:border-neutral-700">
              <UploadCloud className="h-6 w-6 text-neutral-500" />
              <div className="text-sm text-neutral-600 dark:text-neutral-300">Click to select a file</div>
              <input type="file" onChange={onFileChange} className="hidden" />
            </label>

            {file && (
              <div className="mt-4 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{file.name}</div>
                    <div className="text-xs text-neutral-500">{(file.size / 1024).toFixed(1)} KB</div>
                  </div>
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300"
                  >
                    <LinkIcon className="h-4 w-4" /> Preview
                  </a>
                </div>
                {file.type.startsWith('image/') && (
                  <img src={previewUrl} alt="preview" className="mt-4 rounded-lg max-h-56 object-contain w-full" />
                )}
              </div>
            )}

            <div className="mt-4 text-xs text-neutral-500">
              Tip: After backend integration, this will return a CID and pin your file to IPFS.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
