"use client";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    nama: "",
    institusi: "",
    email: "",
    wa: "",
  });

  const handleWhatsApp = () => {
    if (!formData.nama || !formData.institusi) {
      alert("Mohon isi minimal Nama dan Institusi.");
      return;
    }
    const phone = "6288806893977";
    const text = `Halo tim FARS, saya ingin menjadwalkan demo sistem FARS.\n\n*Detail Kontak:*\nNama: ${formData.nama}\nInstitusi: ${formData.institusi}\nEmail: ${formData.email || '-'}\nNo. WhatsApp: ${formData.wa || '-'}\n\nMohon informasi lebih lanjut terkait jadwal demonya. Terima kasih.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="bg-gradient-to-br from-[var(--navy)] to-blue-800 rounded-3xl overflow-hidden relative">
          {/* BG grid */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4 block">
                Mulai Sekarang
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                Transformasi Digital Kredit Anda Dimulai Hari Ini
              </h2>
              <p className="text-blue-200/80 text-base leading-relaxed mb-8">
                Dapatkan demo eksklusif FARS untuk institusi Anda. Tim kami siap menjelaskan implementasi, customisasi, dan proses onboarding.
              </p>
              <div className="space-y-3">
                {[
                  { icon: <Mail size={15} />, text: "rasenatech@gmail.com" },
                  { icon: <Phone size={15} />, text: "088806893977" },
                  { icon: <MapPin size={15} />, text: "Seluruh Indonesia" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3 text-blue-200/80 text-sm">
                    <span className="text-blue-400">{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-lg font-black text-[var(--navy)] mb-5">Jadwalkan Demo Gratis</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1.5">Nama Anda</label>
                  <input
                    type="text"
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    placeholder="Nama lengkap"
                    className="w-full h-10 border border-slate-200 rounded-xl px-3 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 placeholder:text-slate-300"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1.5">Nama Institusi</label>
                  <input
                    type="text"
                    value={formData.institusi}
                    onChange={(e) => setFormData({...formData, institusi: e.target.value})}
                    placeholder="BPR / Bank ..."
                    className="w-full h-10 border border-slate-200 rounded-xl px-3 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 placeholder:text-slate-300"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1.5">Email Kerja</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@institusi.id"
                    className="w-full h-10 border border-slate-200 rounded-xl px-3 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 placeholder:text-slate-300"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1.5">No. WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.wa}
                    onChange={(e) => setFormData({...formData, wa: e.target.value})}
                    placeholder="+62 ..."
                    className="w-full h-10 border border-slate-200 rounded-xl px-3 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 placeholder:text-slate-300"
                    suppressHydrationWarning
                  />
                </div>
                
                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/30 mt-2"
                  suppressHydrationWarning
                >
                  <MessageCircle size={18} />
                  Kirim via WhatsApp
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Gratis. Tanpa komitmen. Kami hubungi dalam 1×24 jam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
