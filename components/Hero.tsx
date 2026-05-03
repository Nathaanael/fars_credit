"use client";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Clock } from "lucide-react";

const stats = [
  { num: "SLA", label: "Tracking Timeline" },
  { num: "Workflow ", label: "Dashboard Monitoring System" },
  { num: "Role Layer", label: "Approval Terstruktur" },
  { num: "Real-time", label: "Tracking Status" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-sky-100/60" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1a56db 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Loan Processing System
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[var(--navy)] leading-[1.05] mb-6 tracking-tight">
              Integrated{" "}
              <span className="gradient-text">Loan Processing System</span>{" "}
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl text-justify">
              <strong>FARS - Financing Application & Review System</strong> adalah platform digital loan processing yang dibangun secara end-to-end, mulai dari pengajuan oleh marketing hingga keputusan akhir dengan mengintegrasikan workflow dan dokumen dalam satu sistem yang terstruktur guna meningkatkan efisiensi, transparansi, serta akurasi dalam proses analisis dan pengambilan keputusan pembiayaan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#demo"
                className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 text-base"
              >
                Lihat Demo Langsung
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#fitur"
                className="flex items-center justify-center gap-2 bg-white border-2 border-blue-100 hover:border-blue-300 text-blue-700 font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-1 text-base"
              >
                Pelajari Fitur
              </a>
            </div>

            {/* Trust badges */}
            {/* <div className="flex flex-wrap gap-4">
              {[
                { icon: <Shield size={14} />, text: "Dipercaya Bank" },
                { icon: <CheckCircle2 size={14} />, text: "SLIK" },
                { icon: <Clock size={14} />, text: "Proses 3x Lebih Cepat" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <span className="text-blue-500">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div> */}
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="float-anim">
              <DashboardMockup />
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Kredit Disetujui</p>
                <p className="text-xs text-slate-400">Rp 500 Juta — PT. Maju Jaya</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 z-10">
              <TrendingUp size={20} className="text-blue-600 mb-1" />
              <p className="text-2xl font-black text-[var(--navy)]">+147%</p>
              <p className="text-xs text-slate-400 font-medium">Efisiensi Proses</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-5 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <p className="text-base font-black text-blue-700 mb-1">{s.num}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const pipeline = [
    { name: "Approach", amount: "Rp 250 Jt", stage: "Analisis", pct: 65, color: "bg-blue-500" },
    { name: "Review Kepala Cabang", amount: "Rp 500 Jt", stage: "Komite", pct: 80, color: "bg-amber-500" },
    { name: "Analis Review", amount: "Rp 75 Jt", stage: "Approved", pct: 100, color: "bg-green-500" },
    { name: "Approve Direktur", amount: "Rp 1.2 M", stage: "Direktur", pct: 90, color: "bg-purple-500" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      {/* Topbar */}
      <div className="bg-[var(--navy)] px-5 py-3.5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">FARS Dashboard</span>
        <div className="w-16" />
      </div>

      <div className="p-5 bg-slate-50">
        {/* Metric row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { val: "24", lbl: "Pengajuan Aktif" },
            { val: "8", lbl: "Menunggu Approval" },
            { val: "Rp 4.2M", lbl: "Total Pipeline" },
          ].map((m) => (
            <div key={m.lbl} className="bg-white rounded-xl p-3 border border-slate-200 text-center">
              <p className="text-xl font-black text-[var(--navy)]">{m.val}</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">{m.lbl}</p>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Pipeline Aktif</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Live</span>
          </div>
          {pipeline.map((row) => (
            <div key={row.name} className="flex items-center gap-3 px-4 py-3 border-b border-slate-50 last:border-0">
              <div className="flex-1 min-w-0">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-semibold text-slate-700 truncate">{row.name}</span>
                  <span className="text-xs font-bold text-slate-800 ml-2 whitespace-nowrap">{row.amount}</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full">
                  <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.pct}%` }} />
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap ${
                row.stage === "Approved" ? "bg-green-100 text-green-700" :
                row.stage === "Komite" ? "bg-amber-100 text-amber-700" :
                row.stage === "Direktur" ? "bg-purple-100 text-purple-700" :
                "bg-blue-100 text-blue-700"
              }`}>
                {row.stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
