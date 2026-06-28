export const issuesData = [
  {
    id: 'issue-1',
    title: 'Halaman dashboard masih dapat diakses menggunakan tombol Back browser setelah logout.',
    characteristic: 'Security',
    severity: 'Sedang',
    tool: 'Cypress',
    description: 'Setelah logout, pengguna masih dapat kembali ke dashboard menggunakan tombol Back browser. Akses baru benar-benar ditolak setelah halaman direfresh.',
    recommendation:
      'Tambahkan mekanisme cache-control serta pastikan sesi pengguna diakhiri sepenuhnya setelah proses logout sehingga halaman tidak dapat diakses kembali menggunakan tombol Back browser.'
  },
  {
    id: 'issue-2',
    title: 'Data form register tidak konsisten ketika password dan confirm password tidak sesuai.',
    characteristic: 'Functional Suitability',
    severity: 'Rendah',
    tool: 'Cypress',
    description: 'Nama dan email tetap tersimpan, tetapi pilihan kelas ter-reset tanpa adanya notifikasi kepada pengguna.',
    recommendation:
      'Pertahankan seluruh data input pengguna ketika validasi gagal atau tampilkan informasi yang jelas mengenai field yang perlu diperbaiki.'
  },
  {
    id: 'issue-3',
    title: 'Pesan validasi confirm password muncul pada field yang tidak sesuai.',
    characteristic: 'Functional Suitability',
    severity: 'Rendah',
    tool: 'Cypress',
    description: 'Ketika confirm password kosong atau tidak sesuai, pesan validasi muncul pada field password, bukan pada field confirm password.',
    recommendation:
      'Tampilkan pesan validasi pada field confirm password agar pengguna lebih mudah mengetahui letak kesalahan input.'
  },
  {
    id: 'issue-4',
    title: 'Ditemukan kerentanan SQL Injection pada fitur Run Code.',
    characteristic: 'Security',
    severity: 'Tinggi',
    tool: 'OWASP ZAP',
    description: 'Pengujian keamanan menemukan kerentanan High Risk berupa SQL Injection pada parameter question_id.',
    recommendation:
      'Terapkan validasi dan sanitasi input pada sisi server, gunakan prepared statement (parameterized query), serta hindari menampilkan detail kesalahan database kepada pengguna.'
  },
  {
    id: 'issue-5',
    title: 'Nilai System Usability Scale (SUS) hanya memperoleh skor 60,15.',
    characteristic: 'Usability',
    severity: 'Sedang',
    tool: 'SUS Questionnaire',
    description: 'Skor SUS menunjukkan aplikasi berada pada kategori OK namun masih memerlukan peningkatan pengalaman pengguna.',
    recommendation:
      'Lakukan penyempurnaan pada tampilan antarmuka, navigasi, dan responsivitas aplikasi berdasarkan masukan responden untuk meningkatkan pengalaman pengguna.'
  },
  {
    id: 'issue-6',
    title: 'Nilai Maintainability hanya memperoleh skor 60%.',
    characteristic: 'Maintainability',
    severity: 'Sedang',
    tool: 'Maintainability Checklist',
    description: 'Masih terdapat indikator analyzability, modifiability, dan testability yang belum terpenuhi.',
    recommendation:
      'Perbaiki indikator maintainability yang belum terpenuhi, seperti konsistensi validasi sistem, penanganan error, serta peningkatan proses pengujian otomatis pada fitur yang masih memerlukan pengujian manual.'
  }
];
