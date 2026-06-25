import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { getCategoryColor } from '../utils/colorHelper';
import { useCountUp } from '../hooks/useCountUp';

const ResultCard = React.memo(function ResultCard({ 
  id,
  name, 
  tool, 
  score, 
  category, 
  description,
  iconName,
  status,
  highRisk,
  totalAlerts
}) {
  // Resolve Lucide icon
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  // Mount animation for progress bar
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score || 0);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  // Dynamic severity-based badge styling
  const badgeColor = getCategoryColor(category);

  // Count-up animation for card score
  const animatedDisplayScore = useCountUp(score || 0, 1200);

  return (
    <div className="bg-[#DCE6F5] rounded-[24px] p-5 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ease-out">
      {/* Header section */}
      <div>
        <div className="flex items-start space-x-3 mb-4">
          {/* White icon container */}
          <div className="w-10 h-10 bg-white rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-sm">
            <IconComponent className="w-5 h-5 text-slate-700" strokeWidth={2.5} />
          </div>
          {/* Name */}
          <h4 className="text-sm font-bold text-slate-800 leading-tight pt-0.5">
            {name}
          </h4>
        </div>

        {/* Tool label */}
        <p className="text-xs font-bold text-slate-600 mb-4">
          Tool: {tool}
        </p>

        {/* Description or Security details */}
        {id === 'security' ? (
          <div className="space-y-1.5 text-xs font-bold text-slate-700 bg-white/40 p-3 rounded-xl border border-slate-200/50 mb-5">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">Status:</span>
              <span className="text-red-600 font-extrabold">{status}</span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-t border-slate-200/30">
              <span className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">High Risk:</span>
              <span className="text-red-600 font-extrabold bg-red-50 px-2 py-0.5 rounded border border-red-100">{highRisk}</span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-t border-slate-200/30">
              <span className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">Total Alerts:</span>
              <span className="text-slate-800 font-extrabold">{totalAlerts}</span>
            </div>
          </div>
        ) : (
          description && (
            <p className="text-[11px] font-medium text-slate-600/80 leading-relaxed mb-5">
              {description}
            </p>
          )
        )}
      </div>

      {/* Progress & Category section */}
      <div className="mt-auto">
        {id === 'security' ? (
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-600 mt-2">
            <span className="flex items-center space-x-1.5">
              <span>Kategori:</span>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold ${badgeColor.bg} ${badgeColor.text} border ${badgeColor.border} transition-colors duration-300`}>
                {category}
              </span>
            </span>
            <span className="px-2.5 py-1 rounded-full text-[9px] font-black bg-red-600 text-white shadow-sm border border-red-700 uppercase tracking-wider animate-pulse">
              HIGH RISK
            </span>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="w-full bg-white/60 rounded-full h-2.5 mb-3 overflow-hidden">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${animatedScore}%` }}
              ></div>
            </div>

            {/* Card Footer: Category & Percentage */}
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-600">
              <span className="flex items-center space-x-1.5">
                <span>Kategori:</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold ${badgeColor.bg} ${badgeColor.text} border ${badgeColor.border} transition-colors duration-300`}>
                  {category}
                </span>
              </span>
              <span>
                {id === 'usability' 
                  ? `SUS Score: ${animatedDisplayScore.toString().replace('.', ',')}` 
                  : `${animatedDisplayScore}%`
                }
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default ResultCard;
