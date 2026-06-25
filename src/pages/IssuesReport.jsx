import { useState, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import IssueAccordion from '../components/IssueAccordion';
import { issuesData } from '../data/issuesData';
import { feedbackData } from '../data/feedbackData';

export default function IssuesReport({ onBackClick }) {
  // Manage open accordion item ID per section ID
  const [openItemIds, setOpenItemIds] = useState({
    'system-issues': 'issue-4', // Start with the highest severity issue open by default
    'feedback-issues': 'feedback-1', // Default first feedback open
  });

  // Toggle handlers that ensure only one accordion is open at a time *within* that section (wrapped in useCallback)
  const handleToggle = useCallback((sectionId, itemId) => {
    setOpenItemIds(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === itemId ? null : itemId
    }));
  }, []);

  return (
    <div className="min-h-screen bg-transparent flex flex-col font-sans relative overflow-x-hidden">
      
      {/* ==========================================
          DECORATIVE FIGMA ELEMENTS (Absolute Positioned)
          ========================================== */}
      
      {/* 1. Green Circle (Top-Left) */}
      <div className="absolute top-24 left-10 w-24 h-24 rounded-full bg-emerald-100/50 border-2 border-emerald-200/60 -z-10 shadow-sm animate-pulse pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-[100px] -z-20 pointer-events-none"></div>

      {/* 2. Floating Purple Triangles */}
      {/* Left Triangle */}
      <svg 
        className="absolute w-14 h-14 text-purple-400/20 top-[40%] left-12 -z-10 animate-bounce pointer-events-none" 
        style={{ animationDuration: '6s' }} 
        viewBox="0 0 100 100"
      >
        <polygon points="50,15 90,85 10,85" fill="currentColor" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="3" />
      </svg>
      {/* Right Triangle */}
      <svg 
        className="absolute w-16 h-16 text-purple-400/15 top-[65%] right-16 -z-10 animate-bounce pointer-events-none" 
        style={{ animationDuration: '8s' }} 
        viewBox="0 0 100 100"
      >
        <polygon points="50,15 90,85 10,85" fill="currentColor" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="3" />
      </svg>
 
      {/* 3. Red Circle (Bottom-Right) */}
      <div className="absolute bottom-28 right-16 w-32 h-32 rounded-full bg-rose-100/40 border-2 border-rose-200/50 -z-10 shadow-sm pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/15 rounded-full blur-[120px] -z-20 pointer-events-none"></div>

      {/* Custom Page 2 Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-white/20 px-6 md:px-12 py-4 flex items-center justify-between w-full relative z-50">
        {/* Back Button */}
        <button
          onClick={onBackClick}
          id="btn-back"
          className="flex items-center space-x-2 px-4 py-2.5 text-slate-600 hover:text-blue-600 hover:scale-105 active:scale-95 font-bold rounded-full hover:bg-slate-50 border border-slate-200 transition-all duration-300 text-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Larger BQA Logo on the top-right */}
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md">
            <span className="text-white font-extrabold text-2xl tracking-tighter">Q</span>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-blue-500"></div>
          </div>
          <span className="text-[10px] font-black text-slate-800 mt-1 tracking-widest leading-none">BQA</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 p-3 md:p-5 lg:p-6 max-w-[1920px] mx-auto w-full relative z-10">
        {/* White Rounded Card Box (SaaS Contrast Layer) */}
        <div className="bg-white/10 backdrop-blur-[20px] border border-white/20 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 md:p-5 lg:p-6 space-y-5">
          
          {/* Page Title */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">
              System Issue & Recommendation
            </h2>
            <p className="text-sm font-semibold text-slate-400 mt-1">
              Rekomendasi perbaikan berdasarkan temuan tools pengujian otomatis dan kuesioner.
            </p>
          </div>

          {/* Section 1: Temuan Sistem (White Card Grouping) */}
          <div className="bg-white/92 backdrop-blur-[10px] border border-white/30 rounded-[24px] p-4 md:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] space-y-3">
            <h3 className="text-lg font-extrabold text-slate-800 border-b border-slate-100 pb-2 px-1 flex items-center justify-between">
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
            <h3 className="text-lg font-extrabold text-slate-800 border-b border-slate-100 pb-2 px-1 flex items-center justify-between">
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
