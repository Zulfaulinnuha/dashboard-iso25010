import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const SummaryCard = React.memo(function SummaryCard({ 
  title, 
  value, 
  subtext, 
  bgColor, 
  iconName, 
  iconColorClass, 
  iconBgColorClass,
  valueColorClass = 'text-slate-800',
  delay = 0
}) {
  // Dynamic icon resolution
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  // Staggered entry animation states
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Count-up animation for numeric stats
  const isPercent = typeof value === 'string' && value.endsWith('%');
  const cleanValue = isPercent ? value.replace('%', '') : value;
  const animatedNumber = useCountUp(cleanValue, 1200);
  const displayValue = isPercent ? `${animatedNumber}%` : animatedNumber;

  return (
    <div 
      className={`rounded-[24px] p-6 ${bgColor} flex items-center space-x-4 transition-all duration-500 ease-out flex-1 min-w-[220px] ${
        mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}
    >
      {/* Icon Badge container */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBgColorClass} flex-shrink-0 shadow-inner`}>
        <IconComponent className={`w-7 h-7 ${iconColorClass}`} strokeWidth={2.5} />
      </div>

      {/* Text details */}
      <div className="flex flex-col">
        <span className={`text-3xl font-extrabold tracking-tight ${valueColorClass}`}>
          {displayValue}
        </span>
        <span className="text-xs font-bold text-slate-700 mt-0.5 leading-tight">
          {title}
        </span>
        {subtext && (
          <span className="text-[10px] font-semibold text-slate-500 leading-tight mt-0.5 whitespace-pre-line">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
});

export default SummaryCard;
