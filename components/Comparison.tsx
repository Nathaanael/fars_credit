"use client";
import { Check, X, Minus } from "lucide-react";

type CellVal = boolean | "partial";
const rows: { label: string; manual: CellVal; generic: CellVal; fars: CellVal }[] = [
  { label: "1. Multi-level Approval Digital", manual: false, generic: "partial", fars: true },
  { label: "2. Integrasi & Analisa SLIK OJK", manual: false, generic: false, fars: true },
  { label: "3. Scoring Kredit Otomatis & Analisa Rasio", manual: false, generic: false, fars: true },
  { label: "4. Audit Trail Lengkap (Keamanan & Kepatuhan)", manual: false, generic: "partial", fars: true },
  { label: "5. Generate Dokumen Otomatis (Export Word)", manual: false, generic: false, fars: true },
  { label: "6. Mobile App / Web Responsive", manual: false, generic: false, fars: true },
  { label: "7. Real-time & SLA Tracking", manual: false, generic: "partial", fars: true },
  { label: "8. Disesuaikan Regulasi OJK", manual: false, generic: false, fars: true },
  { label: "9. Implementasi Cepat (< 2 Minggu)", manual: "partial", generic: false, fars: true },
  { label: "10. Chatbot AI untuk Rekomendasi", manual: false, generic: false, fars: true },
];

function Cell({ val }: { val: boolean | "partial" }) {
  if (val === true) return <Check size={18} className="text-green-600 mx-auto" />;
  if (val === false) return <X size={18} className="text-red-400 mx-auto" />;
  return <Minus size={18} className="text-amber-500 mx-auto" />;
}

export default function Comparison() {
  return (
    <section id="keunggulan" className="py-24 bg-[var(--navy)]">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Perbandingan</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Mengapa Memilih <span className="gradient-text">FARS?</span>
          </h2>
          <p className="text-lg text-blue-200/70 max-w-lg mx-auto">
            Bandingkan dengan cara manual atau software generik yang tidak dirancang untuk perbankan.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[540px]">
            <thead>
              <tr>
                <th className="text-left p-5 text-sm font-semibold text-slate-400 bg-white/5 w-[44%]">Fitur / Kemampuan</th>
                <th className="p-5 text-sm font-semibold text-slate-400 bg-white/5 text-center">Manual/Excel</th>
                <th className="p-5 text-sm font-semibold text-slate-400 bg-white/5 text-center">Software Generik</th>
                <th className="p-5 text-sm font-bold text-white bg-blue-600/40 text-center rounded-t-xl">
                  FARS ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                  <td className="p-4 text-sm text-slate-300 font-medium">{r.label}</td>
                  <td className="p-4 text-center"><Cell val={r.manual} /></td>
                  <td className="p-4 text-center"><Cell val={r.generic} /></td>
                  <td className="p-4 text-center bg-blue-600/10"><Cell val={r.fars} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><Check size={14} className="text-green-500" /> Tersedia penuh</span>
          <span className="flex items-center gap-1.5"><Minus size={14} className="text-amber-500" /> Tersedia sebagian</span>
          <span className="flex items-center gap-1.5"><X size={14} className="text-red-400" /> Tidak tersedia</span>
        </div>
      </div>
    </section>
  );
}
