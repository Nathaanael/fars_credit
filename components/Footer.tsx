export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] py-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
            <span className="text-white font-black text-sm">F</span>
          </div>
          <div>
            <span className="text-white font-black text-base" style={{ fontFamily: 'Sora, sans-serif' }}>FARS</span>
            <p className="text-blue-400 text-[10px] font-medium -mt-0.5">Financing Application & Review System</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-300">
          {[
            { label: "UVP", href: "uvp" },
            { label: "Workflow", href: "workflow" },
            { label: "Benchmarking", href: "benchmarking" },
            { label: "Business Challenges", href: "challenges" }, // ini yang beda
            { label: "Demo", href: "demo" },
            { label: "Kontak", href: "kontak" },
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-blue-500 text-xs text-center md:text-right">
          © {new Date().getFullYear()} FARS. Dilindungi hak cipta.<br />
        </p>
      </div>
    </footer>
  );
}
