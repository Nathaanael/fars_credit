"use client";
import { Users, FileCheck, CheckSquare, BarChart2, Users2, Award } from "lucide-react";

const steps = [
  {
    icon: <Users size={22} />,
    role: "Marketing",
    title: "Akuisisi Nasabah",
    desc: "Input data calon debitur, upload dokumen awal, dan cek kelayakan awal langsung dari lapangan via mobile.",
    color: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  {
    icon: <FileCheck size={22} />,
    role: "Admin",
    title: "Kelengkapan SLIK",
    desc: "Verifikasi data SLIK dan kelengkapan dokumen administrasi secara sistematis.",
    color: "bg-sky-500",
    light: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
  },
  {
    icon: <CheckSquare size={22} />,
    role: "Kepala Kas & Cabang",
    title: "Approval Cabang",
    desc: "Review dan persetujuan level cabang dengan checklist digital.",
    color: "bg-indigo-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
  },
  {
    icon: <BarChart2 size={22} />,
    role: "Analis Pembiayaan",
    title: "Analisis Kredit",
    desc: "Scoring, analisis 5C, perhitungan angsuran, dan rekomendasi terstruktur.",
    color: "bg-blue-700",
    light: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  {
    icon: <Users2 size={22} />,
    role: "Komite",
    title: "Rechecking Komite",
    desc: "Rechecking dengan proses digital yang cepat dan mudah.",
    color: "bg-violet-600",
    light: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
  },
  {
    icon: <Award size={22} />,
    role: "Direktur Utama",
    title: "Putusan Final",
    desc: "Approval puncak dengan e-signature dan dokumentasi lengkap.",
    color: "bg-[var(--navy)]",
    light: "bg-slate-50",
    text: "text-slate-800",
    border: "border-slate-200",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Alur Kerja</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] mt-3 mb-4">
            Alur Kerja yang <span className="gradient-text">Sepenuhnya Fleksibel</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Contoh di bawah ini hanyalah ilustrasi. FARS akan 100% menyesuaikan (custom) penamaan role dan jumlah tahapan persetujuan agar persis mengikuti SOP di BPR Anda.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="hidden md:grid grid-cols-6 gap-0 relative">
          {/* connector line */}
          <div className="absolute top-[52px] left-[calc(8.33%+20px)] right-[calc(8.33%+20px)] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-slate-300 z-0" />

          {steps.map((s, i) => (
            <div key={s.role} className="flex flex-col items-center text-center px-2 relative z-10">
              <div className={`w-[52px] h-[52px] rounded-full ${s.color} flex items-center justify-center text-white shadow-lg mb-3`}>
                {s.icon}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${s.text} mb-1`}>{s.role}</span>
              <p className="text-sm font-bold text-[var(--navy)] mb-2">{s.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              <div className="mt-3 text-xs font-bold text-slate-400">0{i + 1}</div>
            </div>
          ))}
        </div>

        {/* Mobile flow */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((s, i) => (
            <div key={s.role} className={`flex gap-4 bg-white rounded-2xl p-5 border ${s.border} shadow-sm`}>
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${s.text}`}>{s.role}</span>
                  <span className="text-[10px] text-slate-400 font-bold">#{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-sm font-bold text-[var(--navy)] mb-1">{s.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
