import { useMemo, useState, useCallback } from 'react';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import ISOChart from '../components/ISOChart';
import IssueAccordion from '../components/IssueAccordion';
import { dashboardData } from '../data/dashboardData';
import { issuesData } from '../data/issuesData';
import { feedbackData } from '../data/feedbackData';

export default function Dashboard({ onReportClick }) {
  const { metricsData, summaryStats } = dashboardData;

  // Manage open accordion item ID per section ID (collapsed by default)
  const [openItemIds, setOpenItemIds] = useState({
    'system-issues': null,
    'feedback-issues': null,
  });

  // Toggle handlers that ensure only one accordion is open at a time within that section
  const handleToggle = useCallback((sectionId, itemId) => {
    setOpenItemIds(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === itemId ? null : itemId
    }));
  }, []);

  // Unified configuration array to map summary cards and avoid repeated JSX blocks
  const summaryCardsConfig = useMemo(() => [
    {
      key: 'totalCharacteristics',
      stats: summaryStats.totalCharacteristics,
      bgColor: 'bg-white/92 backdrop-blur-[10px] border border-white/30 shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-all duration-300',
      iconName: 'MessageSquare',
      iconColorClass: 'text-blue-600',
      iconBgColorClass: 'bg-blue-50',
      valueColorClass: 'text-slate-800',
      delay: 0
    },
    {
      key: 'testingTools',
      stats: summaryStats.testingTools,
      bgColor: 'bg-white/92 backdrop-blur-[10px] border border-white/30 shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-all duration-300',
      iconName: 'Percent',
      iconColorClass: 'text-slate-600',
      iconBgColorClass: 'bg-slate-100',
      valueColorClass: 'text-slate-800',
      delay: 100
    },
    {
      key: 'overallQualityStatus',
      stats: {
        title: 'Kategori terbanyak dalam evaluasi sistem',
        value: 'SANGAT BAIK (DOMINAN)',
      },
      bgColor: 'bg-white/92 backdrop-blur-[10px] border border-white/30 shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-all duration-300',
      iconName: 'Check',
      iconColorClass: 'text-emerald-600',
      iconBgColorClass: 'bg-emerald-50',
      valueColorClass: 'text-emerald-700',
      delay: 200
    }
  ], [summaryStats]);

  return (
    <div className="min-h-screen bg-transparent flex flex-col font-sans">
      {/* Header */}
      <Header activePage="dashboard" onReportClick={onReportClick} />

      {/* Main Content Area */}
      <main className="flex-1 p-3 md:p-5 lg:p-6 max-w-[1920px] mx-auto w-full">
        {/* Large Rounded Container Box (SaaS Contrast Layer) */}
        <div className="bg-white/10 backdrop-blur-[20px] border border-white/20 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 md:p-5 space-y-5">

          {/* Summary Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {summaryCardsConfig.map((card) => (
              <SummaryCard
                key={card.key}
                title={card.stats.title}
                subtext={card.stats.subtext}
                value={card.stats.value}
                bgColor={card.bgColor}
                iconName={card.iconName}
                iconColorClass={card.iconColorClass}
                iconBgColorClass={card.iconBgColorClass}
                valueColorClass={card.valueColorClass}
                delay={card.delay}
              />
            ))}
          </div>

          {/* ISO 25010 Chart Section */}
          <div>
            <ISOChart data={metricsData} />
          </div>

          {/* Section 1: Temuan Sistem (White Card Grouping) */}
          <div id="system-issues-section" className="bg-white/92 backdrop-blur-[10px] border border-white/30 rounded-[24px] p-4 md:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] space-y-3">
            <h3 className="text-[19px] font-extrabold text-slate-800 border-b border-slate-100 pb-2 px-1 flex items-center justify-between">
              <span>Temuan Sistem</span>
              <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full shadow-sm">
                {issuesData.length} Temuan
              </span>
            </h3>
            <IssueAccordion
              items={issuesData}
              openId={openItemIds['system-issues']}
              onToggle={(id) => handleToggle('system-issues', id)}
              type="system"
            />
          </div>

          {/* Section 2: Masukan Pengguna (SUS Questionnaire) (White Card Grouping) */}
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 rounded-[24px] p-4 md:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] space-y-3">
            <h3 className="text-[19px] font-extrabold text-slate-800 border-b border-slate-100 pb-2 px-1 flex items-center justify-between">
              <span>Masukan Pengguna (SUS Questionnaire)</span>
              <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full shadow-sm border border-blue-100">
                {feedbackData.length} Kategori Masukan
              </span>
            </h3>
            <IssueAccordion
              items={feedbackData}
              openId={openItemIds['feedback-issues']}
              onToggle={(id) => handleToggle('feedback-issues', id)}
              type="feedback"
            />
          </div>

        </div>
      </main>
    </div>
  );
}
