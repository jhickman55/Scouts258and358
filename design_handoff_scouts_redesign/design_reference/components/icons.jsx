// Shared illustrative icons and motifs for the Scouts site.
// Hand-drawn-style SVGs used across both homepage variations and supporting pages.

const Compass = ({ size = 64, color = 'currentColor', accent = '#a8442a' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
    <circle cx="50" cy="50" r="44" />
    <circle cx="50" cy="50" r="36" strokeDasharray="1 4" />
    <circle cx="50" cy="50" r="3" fill={color} stroke="none" />
    {/* Cardinal ticks */}
    <g>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const r1 = 38, r2 = i % 2 === 0 ? 30 : 33;
        const rad = (deg - 90) * Math.PI / 180;
        const x1 = 50 + Math.cos(rad) * r1, y1 = 50 + Math.sin(rad) * r1;
        const x2 = 50 + Math.cos(rad) * r2, y2 = 50 + Math.sin(rad) * r2;
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={i % 2 === 0 ? 1.8 : 1} />;
      })}
    </g>
    {/* Needle */}
    <polygon points="50,18 56,50 50,82 44,50" fill={accent} stroke={accent} strokeLinejoin="round" />
    <polygon points="50,18 56,50 50,50" fill="#7a3b2e" stroke="#7a3b2e" strokeLinejoin="round" />
    {/* N label */}
    <text x="50" y="13" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Outfit, sans-serif" fill={color} stroke="none">N</text>
  </svg>
);

const OakLeaf = ({ size = 40, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
    <path d="M50,8 C52,20 60,22 66,18 C64,28 70,32 78,30 C72,38 76,46 84,46 C76,52 78,60 86,62 C76,66 76,74 82,80 C72,80 68,86 70,94 C62,88 54,92 50,98 C46,92 38,88 30,94 C32,86 28,80 18,80 C24,74 24,66 14,62 C22,60 24,52 16,46 C24,46 28,38 22,30 C30,32 36,28 34,18 C40,22 48,20 50,8 Z" />
    <path d="M50,8 L50,98" stroke="#1a2419" strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
);

const Mountain = ({ size = 80, color = 'currentColor' }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
    <path d="M5,55 L25,25 L38,38 L55,12 L72,32 L85,22 L95,55 Z" />
    <path d="M48,18 L52,22 M55,12 L60,18 L55,22 L62,30" strokeWidth="1.2" />
    <path d="M22,30 L25,25 L28,30" strokeWidth="1.2" />
  </svg>
);

const Sun = ({ size = 60, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <circle cx="50" cy="50" r="18" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
      const rad = deg * Math.PI / 180;
      const x1 = 50 + Math.cos(rad) * 28, y1 = 50 + Math.sin(rad) * 28;
      const x2 = 50 + Math.cos(rad) * 38, y2 = 50 + Math.sin(rad) * 38;
      return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

const Tent = ({ size = 60, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
    <path d="M10,80 L50,18 L90,80 Z" />
    <path d="M50,18 L50,80" />
    <path d="M40,80 L50,55 L60,80" />
    <path d="M5,82 L95,82" strokeDasharray="2 3" />
  </svg>
);

const Campfire = ({ size = 60, color = 'currentColor', accent = '#c25434' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
    <path d="M50,20 C42,32 38,42 44,52 C48,46 48,40 50,40 C52,46 56,52 56,60 C62,52 60,38 50,20 Z" stroke={accent} fill={accent} fillOpacity="0.15"/>
    <path d="M58,40 C66,52 64,62 56,68 C58,60 56,56 54,56 C52,62 50,66 46,68 C40,60 50,48 58,40 Z" stroke={accent} fill={accent} fillOpacity="0.1"/>
    <path d="M20,80 L80,80" stroke={color} strokeWidth="2"/>
    <path d="M22,80 L78,68 M22,68 L78,80" stroke={color} strokeWidth="1.8"/>
  </svg>
);

const TrailMarker = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
  </svg>
);

const Arrow = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
  </svg>
);

// Trail-marker section divider — three blazes (rectangles) on a thin rule
const TrailDivider = ({ color = '#7a8c5c', accent = '#a8442a' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', padding: '32px 0', color }}>
    <div style={{ flex: 1, height: 1, background: 'currentColor', opacity: 0.35 }}></div>
    <svg width="60" height="20" viewBox="0 0 60 20">
      <rect x="4" y="4" width="12" height="12" fill={color} />
      <rect x="22" y="2" width="16" height="16" fill={accent} />
      <rect x="44" y="4" width="12" height="12" fill={color} />
    </svg>
    <div style={{ flex: 1, height: 1, background: 'currentColor', opacity: 0.35 }}></div>
  </div>
);

// Photo placeholder with monospace label
const PhotoPlaceholder = ({ aspect = '4/3', label = 'Photo', tone = 'sage', style = {} }) => {
  const palettes = {
    sage: { bg: 'linear-gradient(135deg, #93a274, #7a8c5c)', stripe: 'rgba(45,74,50,0.18)' },
    oak:  { bg: 'linear-gradient(135deg, #3d5a3f, #2d4a32)', stripe: 'rgba(0,0,0,0.18)' },
    clay: { bg: 'linear-gradient(135deg, #c25434, #a8442a)', stripe: 'rgba(0,0,0,0.18)' },
    sun:  { bg: 'linear-gradient(135deg, #f0c46b, #e0a93b)', stripe: 'rgba(80,50,0,0.18)' },
    limestone: { bg: 'linear-gradient(135deg, #e3dac0, #d4c9a8)', stripe: 'rgba(80,60,30,0.15)' },
  };
  const p = palettes[tone] || palettes.sage;
  return (
    <div style={{
      aspectRatio: aspect,
      width: '100%',
      borderRadius: 'var(--radius-md)',
      background: p.bg,
      backgroundImage: `${p.bg}, repeating-linear-gradient(135deg, transparent 0 14px, ${p.stripe} 14px 15px)`,
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(135deg, transparent 0 18px, rgba(255,255,255,0.06) 18px 19px)',
      }} />
      <div style={{
        position: 'absolute', bottom: 12, left: 14,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'rgba(255,255,255,0.85)', letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>
        ▢ {label}
      </div>
    </div>
  );
};

// Animated topographic background
const TopoBackground = ({ color = 'rgba(45,74,50,0.10)', animated = true, style = {} }) => (
  <div style={{
    position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
    color, ...style,
  }}>
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%', animation: animated ? 'topoDrift 60s linear infinite' : 'none' }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M-50,180 C220,140 380,280 620,230 C880,180 1080,290 1340,240 C1500,210 1600,260 1700,230"/>
        <path d="M-50,250 C200,220 380,330 640,290 C880,250 1100,330 1340,300 C1500,280 1600,310 1700,300"/>
        <path d="M-50,330 C240,300 400,400 620,370 C880,335 1140,410 1320,380 C1500,360 1600,380 1700,380"/>
        <path d="M-50,420 C220,400 420,470 660,440 C880,415 1140,470 1320,450 C1500,430 1600,445 1700,445"/>
        <path d="M-50,500 C240,490 410,540 620,520 C880,505 1160,540 1320,525 C1500,520 1600,525 1700,525"/>
        <path d="M-50,580 C260,570 410,610 660,600 C880,590 1160,615 1320,610 C1500,605 1600,610 1700,610"/>
        <path d="M-50,670 C240,660 420,690 620,680 C880,675 1160,690 1320,685 C1500,680 1600,685 1700,685"/>
        <path d="M-50,760 C280,750 420,780 660,770 C880,765 1160,780 1320,775 C1500,770 1600,775 1700,775"/>
        {/* Closed peaks */}
        <path d="M280,420 C340,360 460,360 520,420 C490,490 380,510 320,490 C280,475 260,450 280,420 Z"/>
        <path d="M310,420 C355,375 450,385 490,420 C470,470 380,485 335,470 C310,460 295,440 310,420 Z"/>
        <path d="M340,420 C370,395 430,400 460,425 C440,455 380,465 350,455 C340,450 335,435 340,420 Z"/>
        <path d="M1020,540 C1080,490 1200,490 1240,540 C1220,605 1110,620 1060,600 C1020,585 1000,565 1020,540 Z"/>
        <path d="M1050,540 C1090,510 1190,510 1220,540 C1200,580 1110,595 1075,580 C1050,570 1035,555 1050,540 Z"/>
      </g>
    </svg>
  </div>
);

// Logo lockup placeholder
const TroopLogo = ({ size = 56, color = '#f7f3ea', stroke = '#2d4a32' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill={color} stroke={stroke} strokeWidth="2" />
    <circle cx="50" cy="50" r="36" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="2 3" />
    <path d="M34,62 L50,30 L66,62 Z" fill={stroke} />
    <path d="M50,30 L50,62" stroke={color} strokeWidth="1.2" />
    <text x="50" y="76" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="Outfit, sans-serif" fill={stroke} letterSpacing="1">258·358</text>
  </svg>
);

Object.assign(window, {
  Compass, OakLeaf, Mountain, Sun, Tent, Campfire,
  TrailMarker, Arrow, TrailDivider, PhotoPlaceholder,
  TopoBackground, TroopLogo,
});
