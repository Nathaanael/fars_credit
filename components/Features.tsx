"use client";
import { Bell, FileText, BarChart3, Lock, Smartphone, Zap, Database, GitBranch, Landmark, Eye, Bot, Settings } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "Proses 3x Lebih Cepat",
    desc: "Notifikasi real-time ke setiap approval level. Tidak perlu lagi bolak-balik kantor atau telepon antar divisi.",
    tag: "Efisiensi",
  },
  {
    icon: <GitBranch size={22} />,
    title: "Workflow Multi-Level Approval",
    desc: "6 tahap approval terstruktur: Marketing → Admin SLIK → Kepala Kas → Analis → Komite → Direktur.",
    tag: "Workflow",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Scoring & Analisis Otomatis",
    desc: "Sistem scoring kredit berbasis 5C dengan kalkulasi angsuran, NPL prediction, dan rekomendasi analitis.",
    tag: "Analitik",
  },
  {
    icon: <Database size={22} />,
    title: "Verifikasi SLIK",
    desc: "Verifikasi SLIK langsung dari sistem",
    tag: "Regulasi",
  },
  {
    icon: <Landmark size={22} />,
    title: "Manajemen & Taksasi Agunan",
    desc: "Pencatatan detail jaminan (kendaraan, tanah, bangunan) beserta estimasi nilai taksasi untuk menunjang keputusan komite.",
    tag: "Agunan",
  },
  {
    icon: <Eye size={22} />,
    title: "Transparansi Keputusan",
    desc: "Visibilitas penuh atas riwayat review, catatan analis, dan dasar keputusan persetujuan kredit demi menjaga integritas bank.",
    tag: "Transparansi",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile-First untuk Marketing",
    desc: "Aplikasi mobile untuk tim marketing agar bisa input data, upload dokumen, dan cek status dari mana saja.",
    tag: "Mobile",
  },
  {
    icon: <Lock size={22} />,
    title: "Audit Trail & Keamanan Data",
    desc: "Setiap aksi tersimpan dengan timestamp, user ID, dan IP address. Siap untuk audit internal maupun OJK.",
    tag: "Keamanan",
  },
  {
    icon: <Bot size={22} />,
    title: "Chatbot AI Rekomendasi",
    desc: "Asisten cerdas berbasis AI yang memberikan insight dan rekomendasi persetujuan kredit secara objektif kepada tim komite.",
    tag: "AI Assistant",
  },
  {
    icon: <Settings size={22} />,
    title: "100% Customizable",
    desc: "Bebas request penyesuaian fitur agar sistem FARS bisa bekerja persis mengikuti standar alur bisnis di perusahaan Anda.",
    tag: "Kustomisasi",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Fitur Unggulan</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] mt-3 mb-4">
            Semua yang Dibutuhkan<br />
            <span className="gradient-text">Industri Perbankan Anda</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Dirancang khusus untuk kebutuhan kredit bank perkreditan rakyat dan bank kecil menengah Indonesia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
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
