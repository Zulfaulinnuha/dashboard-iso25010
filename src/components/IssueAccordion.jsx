import React from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const styles = {
  high: {
    card: 'bg-red-50/70 border-red-200 hover:border-red-300',
    headerHover: 'hover:bg-red-100/20',
    badge: 'text-red-700 border-red-200 bg-red-100/50',
    recBox: 'bg-red-100/30 border-red-500 text-red-900',
    recTitle: 'text-red-950 font-bold',
    recText: 'text-red-900',
    recIcon: 'text-red-600',
    textColor: 'text-slate-800',
    chevron: 'text-red-400',
    chevronOpen: 'text-red-600'
  },
  medium: {
    card: 'bg-orange-50/70 border-orange-200 hover:border-orange-300',
    headerHover: 'hover:bg-orange-100/20',
    badge: 'text-orange-700 border-orange-200 bg-orange-100/50',
    recBox: 'bg-orange-100/30 border-orange-500 text-orange-950',
    recTitle: 'text-orange-950 font-bold',
    recText: 'text-orange-900',
    recIcon: 'text-orange-600',
    textColor: 'text-slate-800',
    chevron: 'text-orange-400',
    chevronOpen: 'text-orange-600'
  },
  low: {
    card: 'bg-green-50/70 border-green-200 hover:border-green-300',
    headerHover: 'hover:bg-green-100/20',
    badge: 'text-green-700 border-green-200 bg-green-100/50',
    recBox: 'bg-green-100/30 border-green-500 text-green-950',
    recTitle: 'text-green-950 font-bold',
    recText: 'text-green-900',
    recIcon: 'text-green-600',
    textColor: 'text-slate-800',
    chevron: 'text-green-400',
    chevronOpen: 'text-green-600'
  },
  feedback: {
    card: 'bg-blue-50/70 border-blue-200 hover:border-blue-300',
    headerHover: 'hover:bg-blue-100/20',
    badge: 'text-blue-700 border-blue-200 bg-blue-100/50',
    recBox: 'bg-blue-100/30 border-blue-500 text-blue-950',
    recTitle: 'text-blue-950 font-bold',
    recText: 'text-blue-900',
    recIcon: 'text-blue-600',
    textColor: 'text-slate-800',
    chevron: 'text-blue-400',
    chevronOpen: 'text-blue-600'
  }
};

const getStyle = (item, type) => {
  if (type === 'feedback') {
    return styles.feedback;
  }
  const sev = (item.severity || '').toLowerCase();
  if (sev === 'tinggi' || sev === 'high') {
    return styles.high;
  }
  if (sev === 'rendah' || sev === 'low') {
    return styles.low;
  }
  return styles.medium;
};

const IssueAccordion = React.memo(function IssueAccordion({ 
  items, 
  openId, 
  onToggle,
  type = 'system'
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const style = getStyle(item, type);
        
        return (
          <div 
            key={item.id} 
            className={`border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${style.card}`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => onToggle(item.id)}
              className={`w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none transition-colors ${style.headerHover}`}
            >
              <span className={`font-bold text-[17px] pr-4 leading-snug ${style.textColor}`}>
                {type === 'feedback' ? item.category : item.title}
              </span>
              <ChevronDown 
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? `transform rotate-180 ${style.chevronOpen}` : style.chevron
                }`} 
              />
            </button>

            {/* Accordion Body */}
            <div 
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-[500px] border-t border-slate-100/50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              } overflow-hidden`}
            >
              <div className="p-6 space-y-4 bg-white/40">
                {/* Metadata Row */}
                {type === 'system' ? (
                  <div className="flex flex-wrap gap-2 pb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[13px] font-bold border ${style.badge}`}>
                      Karakteristik: {item.characteristic}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[13px] font-bold border ${style.badge}`}>
                      Tingkat Risiko: {item.severity}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[13px] font-bold border ${style.badge}`}>
                      Alat Uji: {item.tool}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 pb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[13px] font-bold border ${style.badge}`}>
                      Kategori: {item.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[13px] font-bold border ${style.badge}`}>
                      Jumlah Masukan: {item.frequency}
                    </span>
                  </div>
                )}

                {/* Description / Summary */}
                {type === 'system' ? (
                  item.description && (
                    <div className="text-slate-600 text-[15px] leading-relaxed">
                      <p className="font-extrabold text-slate-400 text-[14px] uppercase tracking-wider mb-1">
                        Deskripsi
                      </p>
                      <p className="text-slate-700 font-medium">{item.description}</p>
                    </div>
                  )
                ) : (
                  item.summary && (
                    <div className="text-slate-600 text-[15px] leading-relaxed">
                      <p className="font-extrabold text-slate-400 text-[14px] uppercase tracking-wider mb-1">
                        Ringkasan Temuan
                      </p>
                      <p className="text-slate-700 font-medium">{item.summary}</p>
                    </div>
                  )
                )}

                {/* Recommendation Box */}
                {item.recommendation && (
                  <div className={`border-l-4 rounded-r-xl p-4 flex items-start space-x-3 ${style.recBox}`}>
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.recIcon}`} />
                    <div>
                      <h5 className={`text-[15px] font-extrabold mb-1 ${style.recTitle}`}>
                        Rekomendasi
                      </h5>
                      <p className={`text-[15px] leading-relaxed font-semibold whitespace-pre-line ${style.recText}`}>
                        {item.recommendation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default IssueAccordion;
