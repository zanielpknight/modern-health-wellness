import Link from "next/link";
import { clinic } from "@/lib/data/clinic";

export default function Footer() {
  return (
    <footer className="bg-navy py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-[family-name:var(--font-playfair)] text-lg text-white/40">
            Modern Health & Wellness
          </p>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-white/30 break-words text-center sm:text-left">
            {clinic.address.full} &middot; {clinic.phone}
          </p>
          <div className="flex gap-4 font-[family-name:var(--font-dm-sans)] text-xs text-white/25">
            <Link href="/privacy-policy" className="hover:text-white/40 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/40 transition-colors">
              Terms
            </Link>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
