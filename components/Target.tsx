"use client";

const targets = [
  {
    emoji: "🏦",
    title: "Bank Perkreditan Rakyat (BPR)",
    desc: "BPR dengan volume kredit menengah yang membutuhkan standarisasi proses dan digitalisasi dokumentasi untuk efisiensi dan kepatuhan regulasi.",
    items: ["Proses kredit UMKM & konsumer", "Standarisasi SOP antar cabang", "Siap audit OJK kapan saja"],
  },
  {
    emoji: "🏢",
    title: "Bank Umum Kelas Menengah",
    desc: "Bank dengan jaringan cabang yang ingin meningkatkan kecepatan proses kredit dan mengurangi risiko operasional dari proses manual.",
    items: ["Multi-cabang dalam satu platform", "Approval berjenjang terstruktur", "Reporting konsolidasi otomatis"],
  },
  {
    emoji: "💼",
    title: "Koperasi Simpan Pinjam",
    desc: "KSP yang ingin naik kelas dengan sistem kredit digital yang profesional, transparan, dan dapat dipertanggungjawabkan.",
    items: ["Manajemen anggota & nasabah", "Rekap angsuran otomatis", "Transparansi keputusan kredit"],
  },
  {
    emoji: "🌱",
    title: "Lembaga Keuangan Mikro",
    desc: "Lembaga keuangan yang melayani segmen mikro dan ingin meningkatkan jangkauan layanan dengan digitalisasi proses kredit lapangan.",
    items: ["Input mobile dari lapangan", "Verifikasi dokumen digital", "Scoring kredit mikro adaptif"],
  },
];

const painPoints = [
  { before: "Berkas hilang dan tidak terlacak", after: "Semua dokumen digital & tersimpan aman" },
  { before: "Proses kredit 2–4 minggu", after: "Proses kredit bisa 3–5 hari kerja" },
  { before: "Keputusan tidak terdokumentasi", after: "Audit trail lengkap setiap aksi" },
  { before: "Tidak ada visibilitas pipeline", after: "Dashboard real-time semua pengajuan" },
  { before: "Koordinasi antar divisi via WA/telepon", after: "Notifikasi otomatis ke pihak yang relevan" },
  { before: "Report manual butuh berhari-hari", after: "Laporan generated otomatis kapan saja" },
];

export default function Target() {
  return (
    <section id="target" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Target Pasar</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] mt-3 mb-4">
            FARS Dibuat Untuk <span className="gradient-text">Anda</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Dirancang spesifik untuk lembaga keuangan Indonesia yang ingin bergerak dari proses manual ke digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {targets.map((t) => (
            <div key={t.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{t.emoji}</div>
              <h3 className="text-base font-bold text-[var(--navy)] mb-3 leading-tight">{t.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{t.desc}</p>
              <ul className="space-y-1.5">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Before/After */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-8 bg-slate-50">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <h3 className="text-lg font-black text-slate-700 uppercase tracking-wide text-sm">Tanpa FARS</h3>
              </div>
              <div className="space-y-3">
                {painPoints.map((p) => (
                  <div key={p.before} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="text-red-400 mt-0.5 flex-shrink-0 text-base">✕</span>
                    {p.before}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-blue-50/50">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <h3 className="text-lg font-black text-blue-800 uppercase tracking-wide text-sm">Dengan FARS</h3>
              </div>
              <div className="space-y-3">
                {painPoints.map((p) => (
                  <div key={p.after} className="flex items-start gap-3 text-sm text-[var(--navy)] font-medium">
                    <span className="text-green-500 mt-0.5 flex-shrink-0 text-base">✓</span>
                    {p.after}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
