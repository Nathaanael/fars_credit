"use client";

const rows = [
  {
    label: "1. Integrasi Proses",
    traditional: "Terpisah di berbagai tools",
    digital: "Sebagian terintegrasi",
    fars: "Terintegrasi end-to-end dalam satu platform",
  },
  {
    label: "2. Fleksibilitas Workflow",
    traditional: "Kaku & manual",
    digital: "Terbatas mengikuti sistem",
    fars: "Fleksibel sesuai SOP & kebijakan bank",
  },
  {
    label: "3. Proses Analisa",
    traditional: "Manual & berbasis file",
    digital: "Semi-digital",
    fars: "Mendukung proses analisa yang lebih terstruktur, konsisten, dan terdokumentasi",
  },
  {
    label: "4. Pengelolaan Data",
    traditional: "Tersebar & tidak terpusat",
    digital: "Sebagian terpusat",
    fars: "Single source of truth (terpusat & konsisten)",
  },
  {
    label: "5. Kecepatan Approval",
    traditional: "Lambat & bertahap manual",
    digital: "Lebih cepat",
    fars: "Real-time & multi-level approval digital",
  },
  {
    label: "6. Monitoring & Tracking",
    traditional: "Sulit dipantau",
    digital: "Terbatas",
    fars: "Real-time monitoring & SLA tracking",
  },
  {
    label: "7. Audit & Kepatuhan",
    traditional: "Minim pencatatan",
    digital: "Sebagian tercatat",
    fars: "Audit trail lengkap & siap compliance",
  },
  {
    label: "8. Manajemen Dokumen",
    traditional: "Manual & rawan hilang",
    digital: "Digital storage",
    fars: "Terpusat & otomatis terorganisir",
  },
  {
    label: "9. Implementasi Sistem",
    traditional: "Tidak ada sistem khusus",
    digital: "Butuh penyesuaian panjang",
    fars: "Implementasi cepat & siap pakai",
  },
  {
    label: "10. Pengambilan Keputusan",
    traditional: "Subjektif",
    digital: "Semi data-driven",
    fars: "Data-driven & berbasis analisis komprehensif",
  },
];

export default function Benchmarking() {
  return (
    <section id="benchmarking" className="py-24 bg-[var(--navy)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Benchmarking
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Evolusi Proses Pembiayaan dengan{" "}
            <span className="gradient-text">FARS</span>
          </h2>
          <p className="text-lg text-blue-200/70 max-w-xl mx-auto">
            Dari pendekatan konvensional menuju sistem terintegrasi yang lebih cepat,
            transparan, dan berbasis data.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr>
                <th className="text-left p-5 text-sm font-semibold text-slate-400 bg-white/5 w-[30%]">
                  Aspek
                </th>
                <th className="p-5 text-sm font-semibold text-slate-400 bg-white/5 text-left">
                  Pendekatan Konvensional
                </th>
                <th className="p-5 text-sm font-semibold text-slate-400 bg-white/5 text-left">
                  Pendekatan Digital
                </th>
                <th className="p-5 text-sm font-bold text-white bg-blue-600/40 text-left rounded-t-xl">
                  FARS ✦
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  className={`border-t border-white/10 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <td className="p-4 text-sm text-slate-300 font-semibold">
                    {r.label}
                  </td>

                  <td className="p-4 text-sm text-slate-400 leading-relaxed">
                    {r.traditional}
                  </td>

                  <td className="p-4 text-sm text-slate-400 leading-relaxed">
                    {r.digital}
                  </td>

                  <td className="p-4 text-sm text-white bg-blue-600/10 font-medium leading-relaxed">
                    {r.fars}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="text-center mt-8 text-sm text-slate-500">
          FARS menghadirkan pendekatan modern untuk meningkatkan efisiensi,
          transparansi, dan kualitas keputusan pembiayaan.
        </div>
      </div>
    </section>
  );
}