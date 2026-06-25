import React from 'react';

const Header = React.memo(function Header({ onReportClick, onHomeClick, activePage }) {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-white/20 px-6 md:px-12 py-4 flex items-center justify-between w-full relative z-50">
      {/* Left section: Logo & Titles */}
      <div className="flex items-center space-x-4 cursor-pointer" onClick={onHomeClick}>
        {/* BQA Logo */}
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md">
            {/* White 'Q' inside */}
            <span className="text-white font-extrabold text-2xl tracking-tighter">Q</span>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-blue-500"></div>
          </div>
          <span className="text-[10px] font-black text-slate-800 mt-1 tracking-widest leading-none">BQA</span>
        </div>

        {/* Title Stack */}
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-slate-800 leading-tight">
            Dashboard Evaluasi Kualitas Aplikasi Bajapro
          </h1>
          <p className="text-xs font-semibold text-slate-500 tracking-wide">
            ISO/IEC 25010 – Multi Tools Testing
          </p>
        </div>
      </div>

      {/* Middle section: Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-400">
        <span className="hover:text-blue-600 transition-colors cursor-pointer">Cypress</span>
        <span className="hover:text-blue-600 transition-colors cursor-pointer">Playwright</span>
        <span className="hover:text-blue-600 transition-colors cursor-pointer">OWASP ZAP</span>
        <span className="hover:text-blue-600 transition-colors cursor-pointer">SUS</span>
      </nav>

      {/* Right section: CTA Button */}
      <div>
        {activePage === 'dashboard' ? (
          <button
            onClick={onReportClick}
            id="btn-system-issues-report"
            className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm text-sm"
          >
            System Issues Report
          </button>
        ) : (
          <button
            onClick={onHomeClick}
            id="btn-back-to-dashboard"
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md text-sm"
          >
            Back to Dashboard
          </button>
        )}
      </div>
    </header>
  );
});

export default Header;
