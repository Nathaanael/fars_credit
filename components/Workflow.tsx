"use client";
import { Users, FileCheck, CheckSquare, BarChart2, Users2, Award } from "lucide-react";

const steps = [
  {
    icon: <Users size={22} />,
    title: "Pengajuan",
    desc: "Input dan registrasi data calon debitur secara digital, termasuk pengunggahan dokumen awal serta verifikasi kelayakan awal langsung oleh tim marketing.",
    color: "bg-blue-600",
    light: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Analisa",
    desc: "Proses analisis pembiayaan secara komprehensif meliputi penilaian 5C, perhitungan kemampuan angsuran, serta penyusunan rekomendasi kredit yang terstruktur.",
    color: "bg-blue-700",
    light: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <CheckSquare size={22} />,
    title: "Keputusan",
    desc: "Tahap review dan persetujuan pembiayaan secara berjenjang dengan sistem checklist digital untuk memastikan kepatuhan terhadap kebijakan dan SOP bank.",
    color: "bg-indigo-600",
    light: "bg-indigo-50",
    border: "border-indigo-200",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Workflow</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] mt-3 mb-4">
            Workflow <span className="gradient-text">Sepenuhnya Fleksibel</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            FARS akan diselaraskan dengan workflow masing – masing entitas
          </p>
        </div>

        {/* Desktop flow */}
        <div className="hidden md:grid grid-cols-3 gap-8 relative">
          {/* connector line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-slate-300 z-0" />

          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10">
              <div className={`w-[52px] h-[52px] rounded-full ${s.color} flex items-center justify-center text-white shadow-lg mb-3`}>
                {s.icon}
              </div>
              <p className="text-sm font-bold text-[var(--navy)] mb-2">{s.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile flow */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((s, i) => (
            // <div key={s.role} className={`flex gap-4 bg-white rounded-2xl p-5 border ${s.border} shadow-sm`}>
            <div key={i} className={`flex gap-4 bg-white rounded-2xl p-5 border ${s.border} shadow-sm`}>
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* <span className={`text-[10px] font-black uppercase tracking-widest ${s.text}`}>{s.role}</span> */}
                  {/* <span className="text-[10px] text-slate-400 font-bold">#{String(i + 1).padStart(2, "0")}</span> */}
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
