"use client";
import { Bell, FileText, BarChart3, Lock, Smartphone, Zap, Database, GitBranch, Landmark, Eye, Bot, Settings } from "lucide-react";

const uvp = [
  {
    icon: <Zap size={22} />,
    title: "End-to-End Process Integration",
    desc: "FARS mengelola seluruh siklus pembiayaan dalam satu platform, mulai dari pengajuan oleh marketing, proses analisis, hingga keputusan akhir. Tidak ada lagi perpindahan sistem atau proses manual yang terpisah.",
    tag: "INTEGRASI",
  },
  {
    icon: <GitBranch size={22} />,
    title: "Workflow Terstruktur & Terstandarisasi",
    desc: "Setiap tahapan pembiayaan memiliki alur kerja yang jelas dan konsisten, sehingga meminimalkan human error serta memastikan proses berjalan sesuai SOP dan kebijakan bank.",
    tag: "Workflow",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Centralized Document Management",
    desc: "Seluruh dokumen pembiayaan tersimpan dalam satu sistem terpusat, memudahkan akses, pencarian, dan pengelolaan dokumen tanpa risiko kehilangan atau duplikasi data.",
    tag: "DOKUMEN",
  },
  {
    icon: <Database size={22} />,
    title: "Peningkatan Kecepatan & Efisiensi",
    desc: "Dengan proses yang terdigitalisasi, waktu analisis dan pengambilan keputusan menjadi lebih cepat, sehingga meningkatkan produktivitas tim dan mempercepat layanan kepada nasabah.",
    tag: "EFISIENSI",
  },
  {
    icon: <Landmark size={22} />,
    title: "Transparansi & Audit Trail",
    desc: "Setiap aktivitas dalam sistem tercatat secara detail, memungkinkan monitoring real-time serta mempermudah kebutuhan audit dan pelacakan histori pembiayaan.",
    tag: "AUDIT",
  },
  {
    icon: <Eye size={22} />,
    title: "Data-Driven Decision Making",
    desc: "FARS menyediakan data yang terstruktur dan terdokumentasi dengan baik, sehingga membantu manajemen dalam mengambil keputusan pembiayaan yang lebih akurat dan berbasis data.",
    tag: "ANALITIK",
  },
];


export default function UVP() {
  return (
    <section id="uvp" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-2xl font-bold uppercase tracking-widest text-blue-600">UVP</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] mt-3 mb-4">
            Unique Value Proposition<br />
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Business Support System yang dirancang untuk memenuhi kebutuhan loan processing di industri perbankan
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uvp.map((f) => (
            <div
              key={f.title}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1.5 cursor-default"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[var(--navy)] mb-2 leading-tight">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">{f.desc}</p>
              <span className="text-[11px] font-bold uppercase tracking-wide text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
