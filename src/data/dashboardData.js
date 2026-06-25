// Single unified source of truth for all dashboard values
export const dashboardData = {
  summaryStats: {
    totalCharacteristics: {
      title: 'Total Karakteristik',
      value: 8,
      subtext: 'ISO/IEC 25010'
    },
    qualityStatus: {
      title: 'Status Kualitas',
      value: 'Baik',
      subtext: 'Evaluasi Keseluruhan'
    },
    testingTools: {
      title: 'Tools Pengujian',
      value: 4,
      subtext: 'Cypress, Playwright, OWASP ZAP, SUS Questionnaire'
    },
    averageScore: {
      title: 'Skor Rata-rata',
      value: 84,
      subtext: 'Kualitas Keseluruhan'
    }
  },
  metricsData: [
    {
      id: 'functional',
      name: 'Functional Suitability',
      shortName: 'Functional',
      tool: 'Cypress',
      score: 100,
      category: 'Sangat Baik',
      description: 'Semua fungsi aplikasi berhasil dijalankan sesuai hasil pengujian Functional Suitability.',
      iconName: 'Settings'
    },
    {
      id: 'performance',
      name: 'Performance Efficiency',
      shortName: 'Performance',
      tool: 'Cypress',
      score: 78,
      category: 'Baik',
      description: 'Mayoritas waktu respon aplikasi berada di bawah satu detik dan performa sistem tetap stabil.',
      iconName: 'ClipboardCheck'
    },
    {
      id: 'reliability',
      name: 'Reliability',
      shortName: 'Reliability',
      tool: 'Cypress',
      score: 100,
      category: 'Sangat Baik',
      description: 'Seluruh pengujian stress testing berhasil diselesaikan tanpa kegagalan.',
      iconName: 'Activity'
    },
    {
      id: 'security',
      name: 'Security',
      shortName: 'Security',
      tool: 'OWASP ZAP',
      status: 'Perlu Perbaikan',
      highRisk: 1,
      totalAlerts: 32,
      category: 'Perlu Perbaikan',
      description: 'Pengujian keamanan menemukan satu kerentanan berisiko tinggi yang harus segera diperbaiki.',
      iconName: 'TrendingUp'
    },
    {
      id: 'usability',
      name: 'Usability',
      shortName: 'Usability',
      tool: 'SUS Questionnaire',
      susScore: 60.15,
      category: 'Cukup',
      description: 'Aplikasi mudah digunakan oleh pengguna, namun masih diperlukan peningkatan pada antarmuka dan pengalaman pengguna.',
      iconName: 'FileText'
    },
    {
      id: 'compatibility',
      name: 'Compatibility',
      shortName: 'Compatibility',
      tool: 'Playwright',
      score: 100,
      category: 'Sangat Baik',
      description: 'Aplikasi berhasil berjalan berdampingan dengan aplikasi web lain tanpa konflik.',
      iconName: 'Globe'
    },
    {
      id: 'maintainability',
      name: 'Maintainability',
      shortName: 'Maintainability',
      tool: 'Checklist & Regression Testing',
      score: 60,
      category: 'Cukup',
      description: 'Regression testing berhasil, namun evaluasi maintainability menunjukkan masih terdapat beberapa aspek yang perlu ditingkatkan.',
      iconName: 'SearchCode'
    },
    {
      id: 'portability',
      name: 'Portability',
      shortName: 'Portability',
      tool: 'Cross Browser Testing',
      score: 100,
      category: 'Sangat Baik',
      description: 'Aplikasi berjalan dengan konsisten pada seluruh browser dan perangkat yang diuji.',
      iconName: 'Smartphone'
    }
  ]
};
