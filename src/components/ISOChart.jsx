import React, { useState, useCallback } from 'react';
import * as Icons from 'lucide-react';

const ISOChart = React.memo(function ISOChart({ data }) {
  const [activeId, setActiveId] = useState('functional');

  const handleCardClick = useCallback((id) => {
    setActiveId(id);
    const element = document.getElementById('iso-detail-panel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, []);

  // Map research data for thesis evaluations
  const detailsMap = {
    functional: {
      name: 'Functional Suitability',
      iconName: 'CheckCircle',
      tool: 'Cypress',
      method: 'Automated Testing (Cypress) & Manual Black Box Testing',
      cardResult: '70 Skenario Uji\n100% Lolos',
      detailResult: '70 Skenario Uji\n100% Lolos',
      interpretation: 'Seluruh kebutuhan fungsional sistem berjalan dengan benar dan sesuai dengan spesifikasi sistem.',
      recommendation: ['Pertahankan kualitas fungsional saat ini dan lakukan pengujian regresi untuk rilis mendatang.'],
      findings: [
        'Total Skenario Pengujian: 70 skenario',
        'Tingkat Keberhasilan: 100% Lolos (PASS)',
        'Seluruh fitur fungsional utama (input, output, navigasi) berjalan dengan benar'
      ],
      conclusion: 'Karakteristik Functional Suitability telah memenuhi standar kualitas dengan sangat baik karena seluruh skenario pengujian berhasil dilewati dengan tingkat kelulusan 100%.',
      finalStatus: 'Sangat Baik',
      badgeColor: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
      status: 'Sangat Baik'
    },
    performance: {
      name: 'Performance Efficiency',
      iconName: 'Gauge',
      tool: 'Cypress',
      method: 'Pengukuran Waktu Respon Menggunakan Cypress & Chrome DevTools',

      cardResult: 'Baik',
      detailResult: 'Kategori: Baik',

      testingData: [
        'Total Skenario: 12',
        'Sangat Baik (<2 detik): 6',
        'Baik (2–5 detik): 6',
        'Respon Tercepat: 192 ms'
      ],
      interpretation: 'Aplikasi secara konsisten memberikan performa waktu respon di bawah ambang batas yang dapat diterima.',
      recommendation: ['Optimalkan query lambat dan tingkatkan performa pada proses login yang berulang.'],
      findings: [
        'Total Skenario Uji: 12 skenario respon',
        'Kategori Sangat Baik (<2 detik): 6 skenario',
        'Kategori Baik (2-5 detik): 5 skenario',
        'Kategori Butuh Optimasi (>5 detik): 1 skenario (fitur login berulang)',
        'Waktu Respon Tercepat: 192 ms'
      ],
      conclusion: 'Karakteristik Performance Efficiency telah memenuhi standar kualitas karena sebagian besar skenario pengujian respon waktu berada dalam batas wajar dan aman.',
      finalStatus: 'Baik',
      badgeColor: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' },
      status: 'Baik'
    },
    reliability: {
      name: 'Reliability',
      iconName: 'ShieldCheck',
      tool: 'Cypress',
      method: 'Stress Testing',
      cardResult: '230 Total Permintaan\n100% Sukses',
      detailResult: '230 Total Permintaan\n100% Sukses',
      interpretation: 'Tidak terjadi crash atau kegagalan sistem selama pengujian beban berulang dilakukan.',
      recommendation: ['Lanjutkan stress testing setelah melakukan pembaruan fitur utama.'],
      findings: [
        'Total Permintaan (Stress Testing): 230 request',
        'Tingkat Keberhasilan: 100% Sukses tanpa kegagalan',
        'Sistem stabil tanpa adanya indikasi memory leak atau crash'
      ],
      conclusion: 'Karakteristik Reliability telah memenuhi standar kualitas dengan sangat baik karena sistem terbukti stabil dan tidak mengalami kegagalan selama pengujian beban.',
      finalStatus: 'Sangat Baik',
      badgeColor: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
      status: 'Sangat Baik'
    },
    security: {
      name: 'Security',
      iconName: 'ShieldAlert',
      tool: 'OWASP ZAP',
      method: 'OWASP ZAP Penetrasi & Vulnerability Scanning',
      cardResult: '32 Peringatan\n1 Risiko Tinggi',
      detailResult: '32 Peringatan Keamanan',
      testingData: [
        'Risiko Tinggi: 1',
        'Sedang: 10',
        'Rendah: 10',
        'Informasional: 11'
      ],
      interpretation: 'Ditemukan kerentanan keamanan SQL Injection pada fitur Run Code.',
      recommendation: [
        'Terapkan parameterized queries',
        'Tingkatkan validasi input pengguna',
        'Lakukan sanitasi input untuk karakter berbahaya',
        'Sembunyikan pesan kesalahan database SQL dari pengguna'
      ],
      findings: [
        'Total Alert: 32 temuan celah keamanan',
        'High Risk: 1 (SQL Injection ditemukan pada fitur Run Code)',
        'Medium Risk: 10 temuan',
        'Low Risk: 10 temuan',
        'Informational: 11 temuan'
      ],
      conclusion: 'Karakteristik Security belum memenuhi standar kualitas karena masih ditemukan satu kerentanan High Risk berupa SQL Injection pada fitur Run Code yang dapat membahayakan database.',
      finalStatus: 'Perlu Perbaikan',
      badgeColor: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', dot: 'bg-red-500' },
      status: 'Perlu Perbaikan'
    },
    usability: {
      name: 'Usability',
      iconName: 'Users',
      tool: 'SUS Questionnaire',
      method: 'System Usability Scale (SUS)',
      cardResult: 'SUS Score: 60.15\nKategori: Cukup',
      detailResult: 'SUS Score: 60.15\nKategori: Cukup',
      interpretation: 'Aplikasi dapat digunakan dengan cukup baik, namun memerlukan perbaikan pada antarmuka (UI) dan pengalaman pengguna (UX) berdasarkan masukan pengguna.',
      recommendation: [
        'Tingkatkan estetika desain antarmuka pengguna',
        'Perbaiki navigasi alur sistem',
        'Tambahkan indikator kemajuan pembelajaran',
        'Optimalkan performa pemuatan halaman'
      ],
      findings: [
        'SUS Score: 60.15',
        'Kategori: Cukup',
        'Evaluasi Kuesioner: Pengguna merasa antarmuka kurang estetis dan navigasi perlu disederhanakan'
      ],
      conclusion: 'Karakteristik Usability berada pada tingkat cukup namun memerlukan perbaikan antarmuka (UI) dan pengalaman pengguna (UX) karena skor SUS masih berada di kategori Cukup.',
      finalStatus: 'Cukup',
      badgeColor: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500' },
      status: 'Cukup'
    },
    compatibility: {
      name: 'Compatibility',
      iconName: 'Globe',
      tool: 'Playwright',
      method: 'Coexistence Testing Menggunakan Playwright',
      cardResult: '100% Lolos',
      detailResult: '100% Berdampingan Tanpa Konflik',
      interpretation: 'Aplikasi berhasil berjalan secara berdampingan dengan platform lain seperti YouTube dan WhatsApp Web tanpa adanya konflik sistem.',
      recommendation: ['Pertahankan kompatibilitas dan lakukan pengujian secara berkala setelah adanya pembaruan browser.'],
      findings: [
        'Pengujian Koeksistensi: 100% Berhasil',
        'Beroperasi bersama YouTube: Berjalan lancar tanpa hambatan',
        'Beroperasi bersama WhatsApp Web: Berjalan lancar tanpa hambatan'
      ],
      conclusion: 'Karakteristik Compatibility telah memenuhi standar kualitas dengan sangat baik karena aplikasi dapat beroperasi bersamaan dengan sistem eksternal lain tanpa gangguan.',
      finalStatus: 'Sangat Baik',
      badgeColor: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
      status: 'Sangat Baik'
    },
    maintainability: {
      name: 'Maintainability',
      iconName: 'Wrench',
      tool: 'Checklist & Regression Testing',
      method: 'Regression Testing & Checklist Evaluasi Maintainability',
      cardResult: '60% Terpenuhi',
      detailResult: '60% Terpenuhi',
      interpretation: 'Pengujian regresi berhasil dilalui, namun beberapa aspek pemeliharaan kode (maintainability) masih perlu ditingkatkan.',
      recommendation: [
        'Tingkatkan penanganan kesalahan (error handling)',
        'Perbaiki logika validasi sistem',
        'Optimalkan manajemen sesi logout pengguna'
      ],
      findings: [
        'Skor Evaluasi Checklist: 60% Terpenuhi',
        'Pengujian Regresi: Berhasil dilewati tanpa merusak fungsionalitas sebelumnya',
        'Aspek Kritis: Perlunya perbaikan penanganan error dan validasi input di sisi server'
      ],
      conclusion: 'Karakteristik Maintainability berada pada tingkat cukup namun memerlukan peningkatan standarisasi kode dan penanganan kesalahan (error handling) untuk mempermudah pemeliharaan sistem.',
      finalStatus: 'Cukup',
      badgeColor: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500' },
      status: 'Cukup'
    },
    portability: {
      name: 'Portability',
      iconName: 'Laptop',
      tool: 'Cross Browser Testing',
      method: 'Cross Browser & Multi-device Testing',
      cardResult: '100% Kompatibel',
      detailResult: '100% Kompatibel',
      interpretation: 'Aplikasi berjalan dengan konsisten dan lancar di berbagai browser (Chromium, Firefox, WebKit) dan sistem operasi (Windows, Android, iOS).',
      recommendation: ['Teruskan pemantauan stabilitas aplikasi pada rilis versi browser terbaru.'],
      findings: [
        'Dukungan Browser: Berhasil diuji pada Chromium, Firefox, dan WebKit (Safari)',
        'Dukungan Sistem Operasi: Berjalan baik di Windows, Android, dan iOS',
        'Layout Antarmuka: Tetap responsif dan proporsional di semua resolusi layar'
      ],
      conclusion: 'Karakteristik Portability telah memenuhi standar kualitas dengan sangat baik karena sistem dapat diakses secara konsisten di berbagai perangkat serta browser.',
      finalStatus: 'Sangat Baik',
      badgeColor: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
      status: 'Sangat Baik'
    }
  };

  const activeDetails = detailsMap[activeId];
  const ActiveIconComponent = Icons[activeDetails.iconName] || Icons.HelpCircle;

  return (
    <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 rounded-[24px] p-3 md:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] space-y-3">
      {/* Title & Legend Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h3 className="text-[19px] font-bold text-slate-800">
            Hasil Evaluasi Karakteristik ISO/IEC 25010
          </h3>
          <p className="text-[13px] text-slate-500 mt-1">
            Status pengujian per karakteristik berdasarkan metrik penelitian thesis.
          </p>
        </div>

        {/* Custom Legend */}
        <div className="flex flex-wrap items-center gap-4 text-[13px] font-bold text-slate-600 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200/40">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 bg-[#52B766] rounded-full"></span>
            <span>Sangat Baik</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full"></span>
            <span>Baik</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 bg-[#FB923C] rounded-full"></span>
            <span>Cukup</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 bg-[#EF4444] rounded-full"></span>
            <span>Perlu Perbaikan</span>
          </div>
        </div>
      </div>

      {/* Optional Status Summary chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mr-2">Ringkasan Status:</span>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[14px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
          Sangat Baik : 4
        </span>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[14px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
          Baik : 1
        </span>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[14px] font-extrabold bg-orange-50 text-orange-700 border border-orange-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
          Cukup : 2
        </span>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[14px] font-extrabold bg-red-50 text-red-700 border border-red-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
          Perlu Perbaikan : 1
        </span>
      </div>

      {/* Metode Evaluasi Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 space-y-1.5">
        <h4 className="text-[14px] font-extrabold text-slate-700 uppercase tracking-wider flex items-center">
          <Icons.BookOpen className="w-4.5 h-4.5 mr-2 text-slate-500" strokeWidth={2.5} />
          Metode Evaluasi & Pemetaan Karakteristik ISO/IEC 25010
        </h4>
        <p className="text-[13px] text-slate-500 leading-relaxed max-w-3xl">
          Pemetaan alat uji (testing tools) dan instrumen penelitian yang digunakan untuk mengukur setiap karakteristik kualitas perangkat lunak Bajapro.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2 rounded-xl flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[13px] font-black bg-blue-50 text-blue-700 border border-blue-100 w-fit">Cypress</span>
            <p className="text-[13px] text-slate-500 mt-2 font-semibold">Functional Suitability, Performance Efficiency, Reliability</p>
          </div>
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2 rounded-xl flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[13px] font-black bg-emerald-50 text-emerald-700 border border-emerald-100 w-fit">Playwright</span>
            <p className="text-[13px] text-slate-500 mt-2 font-semibold">Compatibility</p>
          </div>
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2 rounded-xl flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[13px] font-black bg-red-50 text-red-700 border border-red-100 w-fit">OWASP ZAP</span>
            <p className="text-[13px] text-slate-500 mt-2 font-semibold">Security</p>
          </div>
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2 rounded-xl flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[13px] font-black bg-orange-50 text-orange-700 border border-orange-100 w-fit">SUS Questionnaire</span>
            <p className="text-[13px] text-slate-500 mt-2 font-semibold">Usability</p>
          </div>
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2 rounded-xl flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[13px] font-black bg-purple-50 text-purple-700 border border-purple-100 w-fit">Regression Testing</span>
            <p className="text-[13px] text-slate-500 mt-2 font-semibold">Maintainability</p>
          </div>
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2 rounded-xl flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[13px] font-black bg-teal-50 text-teal-700 border border-teal-100 w-fit">Cross Browser Testing</span>
            <p className="text-[13px] text-slate-500 mt-2 font-semibold">Portability</p>
          </div>
        </div>
      </div>      {/* 8 Status Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((item) => {
          const cardDetails = detailsMap[item.id];
          const IconComponent = Icons[cardDetails.iconName] || Icons.HelpCircle;
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={`relative bg-white/92 backdrop-blur-[10px] border rounded-2xl p-3 flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 ease-out h-[135px] cursor-pointer select-none ${isActive
                  ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50/5'
                  : 'border-white/30'
                }`}
            >
              {/* Quality Status Badge in top-right corner */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[13px] font-extrabold ${cardDetails.badgeColor.bg} ${cardDetails.badgeColor.text} border ${cardDetails.badgeColor.border} transition-colors duration-300`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${cardDetails.badgeColor.dot} mr-1.5 animate-pulse`}></span>
                  {cardDetails.status}
                </span>
              </div>

              <div>
                {/* Header: Status-colored Icon & Characteristic Name */}
                <div className="flex items-center space-x-3 mb-2 pr-20">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${cardDetails.badgeColor.bg} ${cardDetails.badgeColor.border} shadow-2xs`}>
                    <IconComponent className={`w-4.5 h-4.5 ${cardDetails.badgeColor.text}`} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-slate-800 leading-snug">
                      {cardDetails.name}
                    </h4>
                  </div>
                </div>

                {/* Tool label with smaller gray typography */}
                <div className="text-[13px] text-slate-400 font-medium mb-1">
                  Alat: <span className="text-slate-600 font-bold">{cardDetails.tool}</span>
                </div>

                {/* Main Result display with bold typography */}
                <div className="text-[13px] text-slate-400 font-bold uppercase tracking-wider leading-tight mt-1.5">
                  Hasil: <span className="text-[14px] font-extrabold text-slate-700 whitespace-pre-line">{cardDetails.cardResult}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>      {/* Detail Panel */}
      <div
        id="iso-detail-panel"
        className="bg-white/92 backdrop-blur-[10px] border border-white/30 rounded-[24px] p-3 md:p-4 space-y-3 shadow-[0_12px_30px_rgba(0,0,0,0.12)] scroll-mt-6 transition-all duration-300 ease-in-out"
      >
        {/* Detail Panel Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 border-b border-slate-200/60 gap-3">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${activeDetails.badgeColor.bg} ${activeDetails.badgeColor.border} shadow-sm flex-shrink-0`}>
              <ActiveIconComponent className={`w-6 h-6 ${activeDetails.badgeColor.text}`} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-slate-800 leading-none">
                {activeDetails.name}
              </h3>
              <p className="text-[13px] text-slate-400 font-medium mt-1.5">
                Detail Hasil Evaluasi Karakteristik Kualitas Sistem
              </p>
            </div>
          </div>
          <div>
            <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-extrabold ${activeDetails.badgeColor.bg} ${activeDetails.badgeColor.text} border ${activeDetails.badgeColor.border} shadow-3xs`}>
              <span className={`w-2 h-2 rounded-full ${activeDetails.badgeColor.dot} mr-2 animate-pulse`}></span>
              Status: {activeDetails.status}
            </span>
          </div>
        </div>
 
        {/* Detail Panel Body */}
        <div className="space-y-3">
 
          {/* Row 1: Alat Pengujian & Metode Pengujian */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Alat Pengujian section */}
            <div className="bg-white/15 border border-white/20 backdrop-blur-md rounded-xl p-2.5 space-y-1.5">
              <div className="flex items-center text-[15px] md:text-[16px] font-extrabold text-slate-800 uppercase tracking-wider">
                <Icons.Cpu className="w-4.5 h-4.5 mr-2 text-slate-500" strokeWidth={2.5} />
                Alat Pengujian
              </div>
              <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2 rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.12)] text-[14px] font-bold text-slate-700 min-h-[40px] flex items-center border-l-4 border-l-slate-400">
                {activeDetails.tool}
              </div>
            </div>
 
            {/* Metode Pengujian section */}
            <div className="bg-white/15 border border-white/20 backdrop-blur-md rounded-xl p-2.5 space-y-1.5">
              <div className="flex items-center text-[15px] md:text-[16px] font-extrabold text-slate-800 uppercase tracking-wider">
                <Icons.BookOpen className="w-4.5 h-4.5 mr-2 text-blue-500" strokeWidth={2.5} />
                Metode Pengujian
              </div>
              <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2.5 rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.12)] text-[14px] text-slate-700 font-semibold leading-normal min-h-[40px] flex items-center border-l-4 border-l-blue-500">
                {activeDetails.method}
              </div>
            </div>
          </div>
 
          {/* Row 2: Hasil Pengujian */}
          <div className="bg-white/15 border border-white/20 backdrop-blur-md rounded-xl p-2.5 space-y-1.5">
            <div className="flex items-center text-[15px] md:text-[16px] font-extrabold text-slate-800 uppercase tracking-wider">
              <Icons.FileSpreadsheet className="w-4.5 h-4.5 mr-2 text-emerald-500" strokeWidth={2.5} />
              Hasil Pengujian
            </div>
            <div className={`p-2.5 rounded-lg border shadow-[0_12px_30px_rgba(0,0,0,0.12)] space-y-2.5 border-l-4 ${activeId === 'security'
                ? 'bg-red-50/40 border-red-200 border-l-red-500'
                : 'bg-white/92 backdrop-blur-[10px] border-white/30 border-l-emerald-500'
              }`}>
              <div className="text-[14px] md:text-[15px] font-bold text-slate-800 whitespace-pre-line leading-relaxed">
                {activeDetails.detailResult}
              </div>
              {activeDetails.testingData && activeDetails.testingData.length > 0 && (
                <div className={`pt-3 border-t ${activeId === 'security' ? 'border-red-200/60' : 'border-slate-100'}`}>
                  <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Data Pengujian:</div>
                  <ul className="space-y-2 list-none pl-1">
                    {activeDetails.testingData.map((dataPoint, idx) => (
                      <li key={idx} className="text-[14px] md:text-[15px] text-slate-600 font-semibold flex items-start">
                        <span className={`mr-2.5 mt-1.5 text-[10px] ${activeId === 'security' ? 'text-red-500' : 'text-emerald-500'}`}>•</span>
                        <span className="leading-relaxed">{dataPoint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Row 3: Ringkasan Temuan */}
          <div className="bg-white/15 border border-white/20 backdrop-blur-md rounded-xl p-2.5 space-y-1.5">
            <div className="flex items-center text-[15px] md:text-[16px] font-extrabold text-slate-800 uppercase tracking-wider">
              <Icons.ClipboardList className="w-4.5 h-4.5 mr-2 text-teal-500" strokeWidth={2.5} />
              Ringkasan Temuan
            </div>
            <div className={`p-2.5 rounded-lg border shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-l-4 ${activeId === 'security'
                ? 'bg-red-50/40 border-red-200 border-l-red-500'
                : 'bg-white/92 backdrop-blur-[10px] border-white/30 border-l-teal-500'
              }`}>
              <ul className="space-y-2.5 list-none pl-1">
                {activeDetails.findings.map((finding, idx) => (
                  <li key={idx} className="text-[14px] md:text-[15px] text-slate-700 font-medium flex items-start">
                    <span className={`mr-2.5 mt-1.5 text-[10px] ${activeId === 'security' ? 'text-red-500' : 'text-teal-500'}`}>•</span>
                    <span className="leading-relaxed">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 4: Interpretasi */}
          <div className="bg-white/15 border border-white/20 backdrop-blur-md rounded-xl p-2.5 space-y-1.5">
            <div className="flex items-center text-[15px] md:text-[16px] font-extrabold text-slate-800 uppercase tracking-wider">
              <Icons.LineChart className="w-4.5 h-4.5 mr-2 text-amber-500" strokeWidth={2.5} />
              Interpretasi
            </div>
            <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 p-2.5 rounded-lg text-[14px] text-slate-700 font-semibold leading-normal border-l-4 border-l-amber-500">
              {activeDetails.interpretation}
            </div>
          </div>
 
          {/* Row 5: Rekomendasi */}
          <div className="bg-white/15 border border-white/20 backdrop-blur-md rounded-xl p-2.5 space-y-1.5">
            <div className="flex items-center text-[15px] md:text-[16px] font-extrabold text-slate-800 uppercase tracking-wider">
              <Icons.Lightbulb className="w-4.5 h-4.5 mr-2 text-purple-500" strokeWidth={2.5} />
              Rekomendasi
            </div>
            <div className={`p-2.5 rounded-lg border text-[14px] font-semibold leading-normal shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-l-4 ${activeId === 'security'
                ? 'bg-red-50/40 border-red-200 border-l-red-500 text-red-950'
                : 'bg-purple-50/10 border-purple-200 border-l-purple-500 text-purple-950'
              }`}>
              {activeDetails.recommendation && activeDetails.recommendation.length > 1 ? (
                <ul className="space-y-2 list-none pl-1">
                  {activeDetails.recommendation.map((rec, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`mr-2.5 mt-1.5 text-[10px] ${activeId === 'security' ? 'text-red-500' : 'text-purple-500'
                        }`}>•</span>
                      <span className="leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex items-start">
                  <span className="leading-relaxed">{activeDetails.recommendation[0]}</span>
                </div>
              )}
            </div>
          </div>
 
          {/* Row 6: Kesimpulan */}
          <div className="bg-white/15 border border-white/20 backdrop-blur-md rounded-xl p-2.5 space-y-1.5">
            <div className="flex items-center text-[15px] md:text-[16px] font-extrabold text-slate-800 uppercase tracking-wider">
              <Icons.Award className={`w-4.5 h-4.5 mr-2 ${activeDetails.status === 'Sangat Baik' || activeDetails.status === 'Baik'
                  ? 'text-emerald-500'
                  : activeDetails.status === 'Cukup'
                    ? 'text-orange-500'
                    : 'text-red-500'
                }`} strokeWidth={2.5} />
              Kesimpulan
            </div>
            <div className={`p-2.5 rounded-lg border text-[14px] font-semibold leading-normal shadow-[0_12px_30px_rgba(0,0,0,0.12)] border-l-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 ${activeId === 'security'
                ? 'bg-red-50/40 border-red-200 border-l-red-500 text-red-950'
                : activeDetails.status === 'Sangat Baik' || activeDetails.status === 'Baik'
                  ? 'bg-emerald-50/10 border-emerald-200 border-l-emerald-500 text-slate-700'
                  : 'bg-orange-50/10 border-orange-200 border-l-orange-500 text-slate-700'
              }`}>
              <div className="leading-relaxed md:max-w-[70%]">
                {activeDetails.conclusion}
              </div>
              <div className="flex items-center space-x-2.5 flex-shrink-0">
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Status Akhir:</span>
                <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-extrabold ${activeDetails.badgeColor.bg} ${activeDetails.badgeColor.text} border ${activeDetails.badgeColor.border} shadow-3xs`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${activeDetails.badgeColor.dot} mr-1.5 animate-pulse`}></span>
                  {activeDetails.status}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

export default ISOChart;

