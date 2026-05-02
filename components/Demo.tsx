"use client";
import { useState, useRef } from "react";
import { CheckCircle2, FileText, BarChart3, Users, PlayCircle, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

const screens = [
  {
    id: "dashboard",
    icon: <BarChart3 size={16} />,
    label: "Dashboard",
    title: "Command Center Kredit",
    desc: "Semua pengajuan kredit aktif dalam satu tampilan. Filter by status, cabang, atau nominal.",
    image: "/dashboard.png",
  },
  {
    id: "pengajuan",
    icon: <FileText size={16} />,
    label: "Pengajuan Baru",
    title: "Form Pengajuan Nasabah",
    desc: "Marketing input data dari mobile, lengkap dengan upload foto KTP, slip gaji, dan dokumen agunan.",
    image: "/demo-pengajuan.png",
    images: ["/prospect1.png", "/prospect2.png"], // <-- CONTOH MULTIPLE IMAGES
  },
  {
    id: "approval",
    icon: <CheckCircle2 size={16} />,
    label: "Approval Flow",
    title: "Tracking Status Persetujuan",
    desc: "Visualisasi perjalanan pengajuan dari tahap pertama hingga keputusan Direktur Utama.",
    video: "/flow.mp4",
  },
  {
    id: "analisis",
    icon: <Users size={16} />,
    label: "Analisis Kredit",
    title: "Laporan Analisis & Scoring",
    desc: "Analis dapat download hasil analisis kredit dan upload kembali ke sistem di role lain.",
    video: "/analis.mp4",
  },
  {
    id: "device",
    icon: <Smartphone size={16} />,
    label: "Device Friendly",
    title: "Responsif di Semua Perangkat",
    desc: "Akses FARS dengan nyaman dari PC, Laptop, Tablet, maupun Smartphone saat sedang berada di lapangan.",
    image: "/device.png",
  },
  {
    id: "video",
    icon: <PlayCircle size={16} />,
    label: "Video Demo",
    title: "Demo Lengkap FARS",
    desc: "Tonton video singkat bagaimana FARS mempercepat proses kredit dari awal hingga akhir.",
    video: "/demo.mp4",
  },
];

export default function Demo() {
  const [active, setActive] = useState("dashboard");
  const scrollRef = useRef<HTMLDivElement>(null);
  const screen = screens.find((s) => s.id === active)!;

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -clientWidth : clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Tampilan Sistem</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] mt-3 mb-4">
            Intuitif. Cepat. <span className="gradient-text">Profesional.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Preview tampilan nyata dari FARS — bersih, mudah digunakan, dan penuh informasi.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Sidebar tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {screens.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all whitespace-nowrap flex-shrink-0 lg:flex-shrink lg:whitespace-normal ${
                  active === s.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {s.icon}
                <span className="text-sm font-semibold">{s.label}</span>
              </button>
            ))}

            <div className="hidden lg:block mt-6 bg-blue-50 rounded-2xl p-5 border border-blue-100">
              <h4 className="text-sm font-bold text-[var(--navy)] mb-2">{screen.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{screen.desc}</p>
            </div>
          </div>

          {/* Screen */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-inner min-h-[420px]">
            <div className="bg-[var(--navy)] px-5 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white/10 rounded-md px-3 py-1 text-blue-300 text-xs font-mono">
                https://app.fars.id/{active}
              </div>
            </div>
            <div className="relative group bg-slate-100 min-h-[420px]">
              
              {/* Scrollable Container */}
              <div ref={scrollRef} className="w-full h-full overflow-x-auto overflow-y-hidden flex flex-row snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {'video' in screen && screen.video ? (
                  <video 
                    src={screen.video} 
                    controls 
                    autoPlay 
                    muted 
                    loop
                    className="w-full min-w-full h-auto object-cover snap-center flex-shrink-0"
                  >
                    Browser Anda tidak mendukung tag video.
                  </video>
                ) : ('images' in screen && Array.isArray(screen.images) && screen.images.length > 0) ? (
                  <>
                    {screen.images.map((imgSrc, idx) => (
                      <img 
                        key={idx}
                        src={imgSrc} 
                        alt={`${screen.title} - Slide ${idx + 1}`} 
                        className="w-full min-w-full h-auto object-cover block snap-center flex-shrink-0 border-r border-slate-200 last:border-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/800x500/e2e8f0/475569?font=montserrat&text=Gambar+${idx+1}+Tidak+Ditemukan`;
                        }}
                      />
                    ))}
                  </>
                ) : (
                  <img 
                    src={screen.image as string} 
                    alt={screen.title} 
                    className="w-full min-w-full h-auto object-cover block snap-center flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x500/e2e8f0/475569?font=montserrat&text=Screenshot+${screen.label.replace(' ', '+')}`;
                    }}
                  />
                )}
              </div>

              {/* Navigation Arrows for Multiple Images */}
              {('images' in screen && Array.isArray(screen.images) && screen.images.length > 1) && (
                <>
                  <button 
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                    aria-label="Slide sebelumnya"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                    aria-label="Slide selanjutnya"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mini CTA di bawah Demo */}
        <div className="mt-20 text-center bg-slate-50/80 rounded-[2rem] p-8 md:p-12 border border-slate-200/60 max-w-4xl mx-auto flex flex-col items-center shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Jelajahi Lebih Dalam
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-[var(--navy)] mb-4">
            Untuk fitur lebih lengkap, langsung jadwalkan demo
          </h3>
          <p className="text-slate-500 mb-8 max-w-xl text-center leading-relaxed">
            Kami akan mendemonstrasikan secara langsung bagaimana FARS dapat disesuaikan dengan alur kerja (workflow) spesifik di institusi Anda.
          </p>
          <a 
            href="#kontak" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1"
          >
            Jadwalkan Demo Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
