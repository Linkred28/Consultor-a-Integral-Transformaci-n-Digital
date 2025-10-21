import React from 'react';

export const IconMoon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

export const IconSun = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.95a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM3 11a1 1 0 100-2H2a1 1 0 100 2h1zM6.464 5.05l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414z" clipRule="evenodd" />
  </svg>
);

export const IconProcessFragmented = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);
export const IconInfoUnreliable = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h.01M15 12h.01M10.33 16.33a4.5 4.5 0 117.34-7.34M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
);
export const IconLateDecisions = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
export const IconTraceability = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l-5 2 2 5 5-5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l-5 2 2 5 5-5z" opacity=".5"></path></svg>
);
export const IconMobileClarity = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM5 7h14"></path></svg>
);
export const IconGlobeAnticipate = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.512L6.117 21.05a1 1 0 001.768.618l2.25-4.5M16.263 16.512L17.883 21.05a1 1 0 01-1.768.618l-2.25-4.5"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z"></path></svg>
);

// ===== ICONS FOR BENEFITS SECTION (REDESIGNED) =====
export const IconShieldCheck = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.25C6.072 2.25 3 5.4 3 10.5C3 16.5 8.4 21.75 12 21.75C15.6 21.75 21 16.5 21 10.5C21 5.4 17.928 2.25 12 2.25Z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M9 12.75L11.25 15L15.75 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2.25C6.072 2.25 3 5.4 3 10.5C3 16.5 8.4 21.75 12 21.75C15.6 21.75 21 16.5 21 10.5C21 5.4 17.928 2.25 12 2.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const IconLightning = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/>
        <path d="M12 17.25C14.8995 17.25 17.25 14.8995 17.25 12C17.25 9.10051 14.8995 6.75 12 6.75C9.10051 6.75 6.75 9.10051 6.75 12C6.75 14.8995 9.10051 17.25 12 17.25Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 15V12L14.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const IconGrowth = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/>
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 7H17V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const IconExpand = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.1"/>
        <path d="M7 15V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 15V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// ===== GENERAL ICONS =====
export const IconTickerCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
export const IconPlay = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
);
export const IconClose = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);
export const IconExternalLink = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
);
export const IconMenu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);
export const IconChat = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);


// ===== New, refined ticker icons =====
export const IconData = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5h16.5M7.5 14.25l4.5-4.5 3 3 4.5-6" /></svg>;
export const IconClock = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.182-3.182m0-11.667a8.25 8.25 0 00-11.667 0L2.985 7.985" /></svg>;
export const IconRisk = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.602-3.751m-.227-4.122a12.022 12.022 0 00-4.122-.227" /></svg>;
export const IconAgility = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>;
export const IconStrategy = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>;
export const IconAudit = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.02.39-7.5 1.084V21M3 21h18" /></svg>;
export const IconGrowthTrend = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V3.375" /></svg>;
export const IconInnovation = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a2.25 2.25 0 01-1.463-1.462L12.25 18l1.938-.648a2.25 2.25 0 011.462-1.463L18 14.25l.648 1.938a2.25 2.25 0 011.463 1.462L22.5 18l-1.938.648a2.25 2.25 0 01-1.462 1.463z" /></svg>;


// ===== NEW, REDESIGNED PREMIUM PILLAR ICONS =====
export const IconPillarModel = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5V16.5C5 17.8807 6.11929 19 7.5 19H16.5C17.8807 19 19 17.8807 19 16.5V7.5C19 6.11929 17.8807 5 16.5 5H7.5C6.11929 5 5 6.11929 5 7.5Z" fill="currentColor" fillOpacity="0.1"></path><path d="M5 8C5 6.89543 5.89543 6 7 6H17C18.1046 6 19 6.89543 19 8V9H5V8Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M9 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M12 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M15 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>;
export const IconPillarGov = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.8234C17.1765 20.4912 21 15.7946 21 10.249C21 8.93897 20.7899 7.6782 20.398 6.49902M12 21.8234C6.82355 20.4912 3 15.7946 3 10.249C3 8.93897 3.21008 7.6782 3.60205 6.49902M12 21.8234V2.17645M20.398 6.49902C19.0658 3.32355 15.7946 2.17645 12 2.17645C8.20541 2.17645 4.93425 3.32355 3.60205 6.49902M20.398 6.49902C20.6622 7.27218 20.865 8.08181 20.9818 8.91185" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
export const IconPillarChangeGov = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.1"></path><path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 16V20M12 4V8M8 12H4M20 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
export const IconPillarAutomation = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5L14 4.5M12 6.5L10 4.5M12 6.5V10.5M12 17.5L14 19.5M12 17.5L10 19.5M12 17.5V13.5M17.5 12L19.5 14M17.5 12L19.5 10M17.5 12H13.5M6.5 12L4.5 14M6.5 12L4.5 10M6.5 12H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="1.5" fill="currentColor"></circle></svg>;
export const IconPillarInnovation = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" fill="currentColor" fillOpacity="0.1"></path><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M8.5 4.5L10 6M15.5 4.5L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M12 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>;
export const IconPillarTools = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 20L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5 6.5L14.5 10.5L9.5 5.5L5.5 9.5L4 11L9.5 16.5L13 13L17.5 17.5L18.5 16.5L20 15L14.5 9.5L18.5 5.5L19.5 4.5L18.5 3.5L17 5L12.5 9.5L8.5 5.5L4 10L5 11.5L9.5 7L13.5 11L18 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
export const IconPillarAI = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.1"></path><path d="M12 9.5C13.3807 9.5 14.5 8.38071 14.5 7C14.5 5.61929 13.3807 4.5 12 4.5C10.6193 4.5 9.5 5.61929 9.5 7C9.5 8.38071 10.6193 9.5 12 9.5Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M7 19.5C8.38071 19.5 9.5 18.3807 9.5 17C9.5 15.6193 8.38071 14.5 7 14.5C5.61929 14.5 4.5 15.6193 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M17 19.5C18.3807 19.5 19.5 18.3807 19.5 17C19.5 15.6193 18.3807 14.5 17 14.5C15.6193 14.5 14.5 15.6193 14.5 17C14.5 18.3807 15.6193 19.5 17 19.5Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M12 9.5V17M9.5 17L7 17M14.5 17H17" stroke="currentColor" strokeWidth="1.5"></path></svg>;
export const IconPillarCoaching = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.1"></path><path d="M15 14L12 11L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="currentColor"></path></svg>;
export const IconPillarTraining = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8" r="4" fill="currentColor" fillOpacity="0.1"></circle><circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"></circle><path d="M9 16C6.23858 16 4 18.2386 4 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M15 4C17.7614 4 20 6.23858 20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M15 14C17.7614 14 20 16.2386 20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>;
export const IconPillarLabs = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5C3.89543 3 3 3.89543 3 5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 3H19C20.1046 3 21 3.89543 21 5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21H19C20.1046 21 21 20.1046 21 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 8L8 10L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 16L16 14L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
export const IconPillarCertified = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.1"></path><path d="M10 10L12 8L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 14L12 16L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 12L10 14L10 10L8 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 12L14 10L14 14L16 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>;

export const IconArrowUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
);

// ===== New Impact Section Icons =====
export const IconImpactROI = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0-12L9 9m3-3l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
    </svg>
);
export const IconImpactFODA = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 8.09l-3.82 3.82-3.82-3.82m3.82 9.62V8.09" />
    </svg>
);
export const IconImpactKPIs = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path fill="currentColor" fillOpacity="0.1" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75L16.5 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
    </svg>
);