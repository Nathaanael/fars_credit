"use client";

const targets = [
  {
    emoji: "⏱️",
    title: "Operasional Kredit yang Lambat",
    desc: "Proses kredit terhambat akibat alur kerja manual dan koordinasi antar tim yang tidak terstruktur.",
    items: [
      "Waktu proses kredit terlalu lama",
      "Banyak tahapan manual & duplikasi kerja",
      "Koordinasi antar unit tidak efisien",
    ],
  },
  {
    emoji: "📄",
    title: "Dokumen & Data Tidak Terpusat",
    desc: "Dokumen tersebar di berbagai media sehingga sulit diakses, berisiko hilang, dan menyulitkan proses audit.",
    items: [
      "Dokumen tersimpan di banyak tempat",
      "Sulit tracking status & histori",
      "Risiko kehilangan atau data tidak sinkron",
    ],
  },
  {
    emoji: "🔍",
    title: "Minim Visibilitas & Monitoring",
    desc: "Manajemen tidak memiliki visibilitas real-time terhadap pipeline kredit dan performa proses.",
    items: [
      "Tidak ada dashboard real-time",
      "Sulit monitoring SLA proses",
      "Kurang insight terhadap performa kredit",
    ],
  },
  {
    emoji: "⚖️",
    title: "Risiko Kepatuhan & Audit",
    desc: "Minimnya pencatatan aktivitas meningkatkan risiko ketidaksesuaian terhadap regulasi dan kesulitan saat audit.",
    items: [
      "Tidak ada audit trail yang lengkap",
      "Sulit memenuhi kebutuhan audit",
      "Risiko ketidaksesuaian SOP & regulasi",
    ],
  },
];

export default function Challenge() {
  return (
    <section id="challenges" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Business Challenges
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] mt-3 mb-4">
            Apakah Anda Menghadapi{" "}
            <span className="gradient-text">Tantangan Ini?</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            FARS dirancang untuk membantu institusi keuangan mengatasi hambatan
            operasional, meningkatkan kontrol, dan mempercepat proses pembiayaan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4">{t.emoji}</div>

              <h3 className="text-base font-bold text-[var(--navy)] mb-3 leading-tight group-hover:text-blue-700 transition">
                {t.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {t.desc}
              </p>

              <ul className="space-y-2">
                {t.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-slate-600 font-medium"
                  >
                    <span className="text-red-400 mt-0.5 flex-shrink-0">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-lg text-slate-600">
            FARS hadir sebagai solusi terintegrasi untuk mengatasi tantangan ini
            dan membantu institusi Anda bekerja lebih cepat, terstruktur, dan
            siap menghadapi tuntutan regulasi.
          </p>
        </div>
      </div>
    </section>
  );
}