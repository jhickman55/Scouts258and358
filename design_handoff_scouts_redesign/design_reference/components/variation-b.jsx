// Variation B — "Field Journal" (Dark)
// Editorial split-hero on dark oak background with topographic trail lines.

const VariationB = () => {
  return (
    <div style={{
      width: 1280,
      background: 'var(--paper)',
      color: 'var(--oak-900)',
      fontFamily: 'var(--font-body)',
      position: 'relative',
    }}>

      {/* ─── NAV (dark header) ─── */}
      <nav style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 32,
        padding: '24px 64px',
        background: 'var(--oak-800)',
        borderBottom: '1px solid rgba(212,201,168,0.15)',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <TroopLogo size={50} color="#f7f3ea" stroke="#2d4a32" />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em', color: 'var(--paper-bright)' }}>Troops 258 & 358</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--limestone-300)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Est. — Cedar Park · Leander</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 500, justifyContent: 'center' }}>
          {['Home', 'New Scouts', 'Activities', 'Calendar', 'Resources', 'Contact'].map((l, i) => (
            <span key={l} style={{
              color: i === 0 ? 'var(--sun-soft)' : 'var(--limestone-200)',
              fontWeight: i === 0 ? 700 : 500, cursor: 'pointer',
            }}>{l}</span>
          ))}
        </div>
        <button style={{
          padding: '12px 22px', borderRadius: 4, border: 'none',
          background: 'var(--clay-500)', color: 'var(--paper-bright)',
          fontWeight: 700, fontSize: 13, letterSpacing: '0.04em',
          textTransform: 'uppercase', cursor: 'pointer',
        }}>Join Us for a Meeting</button>
      </nav>

      {/* ─── HERO — split editorial (dark) ─── */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', minHeight: 640,
        position: 'relative', zIndex: 1,
        background: 'var(--oak-800)', color: 'var(--paper-bright)',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5 }}>
          <TopoBackground color="rgba(212,201,168,0.10)" />
        </div>
        <div style={{ padding: '88px 64px', position: 'relative' }}>
          {/* Hand-drawn sun accent top right */}
          <div style={{ position: 'absolute', top: 56, right: -30, opacity: 0.25 }}>
            <Sun size={120} color="#e0a93b" />
          </div>

          {/* Field journal header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
            <div style={{ width: 60, height: 1, background: 'var(--sun-soft)' }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sun-soft)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600 }}>Field Notes · Vol. 47 · Spring '26</div>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 96, lineHeight: 1.0, letterSpacing: '-0.04em',
            margin: '0 0 40px', color: 'var(--paper-bright)',
          }}>
            Two troops.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--sun-soft)' }}>One trail.</span><br />
            Hill Country Texas.
          </h1>

          <p style={{
            fontSize: 19, lineHeight: 1.5, maxWidth: 480,
            color: 'rgba(247,243,234,0.82)', margin: '0 0 40px',
          }}>
            Scouts BSA Troops 258 and 358 meet weekly in Cedar Park and camp
            once a month across Texas. Youth-led, parent-supported, and going
            strong since our charter with Capitol Area Council.
          </p>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '16px 26px', borderRadius: 4, border: 'none',
              background: 'var(--clay-500)', color: 'var(--paper-bright)',
              fontWeight: 700, fontSize: 14, letterSpacing: '0.04em', textTransform: 'uppercase',
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
              boxShadow: '0 8px 24px rgba(168,68,42,0.4)',
            }}>
              Join the Troop <Arrow size={14} color="#f7f3ea" />
            </button>
            <button style={{
              padding: '16px 26px', borderRadius: 4, border: '2px solid var(--limestone-200)',
              background: 'transparent', color: 'var(--limestone-200)',
              fontWeight: 700, fontSize: 14, letterSpacing: '0.04em', textTransform: 'uppercase',
              cursor: 'pointer',
            }}>
              New Scout Process
            </button>
            <button style={{
              padding: '16px 22px', borderRadius: 4, border: 'none', background: 'transparent',
              color: 'var(--sun-soft)', fontWeight: 700, fontSize: 14,
              letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
              textDecoration: 'underline', textUnderlineOffset: 4,
            }}>
              Scout Portal →
            </button>
          </div>

          {/* Hand-written annotation */}
          <div style={{
            marginTop: 64, paddingTop: 24,
            borderTop: '1px dashed rgba(212,201,168,0.3)',
            display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'center',
          }}>
            <Compass size={64} color="#e3dac0" accent="#d36a48" />
            <div style={{ fontSize: 14, color: 'var(--limestone-200)', lineHeight: 1.5, fontStyle: 'italic' }}>
              "A Scout is never taken by surprise; he knows exactly what to do when anything unexpected happens."
              <div style={{ marginTop: 6, fontStyle: 'normal', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sun-soft)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>— Robert Baden-Powell, Scouting for Boys (1908)</div>
            </div>
          </div>
        </div>

        {/* Right: photo journal collage */}
        <div style={{
          background: 'rgba(26,36,25,0.4)', position: 'relative', overflow: 'hidden',
          borderLeft: '1px solid rgba(212,201,168,0.15)',
        }}>
          <div style={{ position: 'absolute', inset: 0, padding: 36 }}>
            <div style={{
              position: 'absolute', top: 36, left: 36, right: 80, height: 320,
              background: 'var(--paper-bright)', padding: 12,
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              transform: 'rotate(-1.5deg)',
            }}>
              <PhotoPlaceholder aspect="auto" tone="oak" label="hill country sunrise" style={{ height: '100%', borderRadius: 0 }} />
              <div style={{ padding: '10px 4px 0', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--oak-600)', display: 'flex', justifyContent: 'space-between' }}>
                <span>03·15·26</span><span>Enchanted Rock</span>
              </div>
            </div>
            <div style={{
              position: 'absolute', bottom: 110, left: 80, width: 220, height: 220,
              background: 'var(--paper-bright)', padding: 10,
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              transform: 'rotate(3deg)',
            }}>
              <PhotoPlaceholder aspect="1/1" tone="sage" label="patrol cookout" style={{ borderRadius: 0 }} />
            </div>
            <div style={{
              position: 'absolute', bottom: 60, right: 36, width: 200, height: 260,
              background: 'var(--paper-bright)', padding: 10,
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              transform: 'rotate(-2deg)',
            }}>
              <PhotoPlaceholder aspect="3/4" tone="clay" label="campfire night" style={{ borderRadius: 0 }} />
            </div>
            {/* Pinned note */}
            <div style={{
              position: 'absolute', top: 28, right: 28,
              background: '#fef4a8', padding: '14px 18px',
              transform: 'rotate(4deg)',
              fontFamily: 'var(--font-mono)', fontSize: 11, color: '#5a4a2a',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
              maxWidth: 130, lineHeight: 1.4,
            }}>
              ★ Tues 7pm<br/>Rockbridge Church<br/>bring water bottle
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY ACTIONS — bookmark-style row (light paper band) ─── */}
      <section style={{ padding: '72px 64px 80px', position: 'relative', zIndex: 1, background: 'var(--paper-bright)' }}>
        <TrailDivider color="#2d4a32" accent="#a8442a" />
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, margin: '24px 0 32px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em', margin: 0, color: 'var(--oak-900)' }}>
            Quick <span style={{ fontStyle: 'italic', color: 'var(--clay-600)', fontWeight: 500 }}>tabs</span>
          </h2>
          <div style={{ flex: 1, height: 1, background: 'rgba(45,74,50,0.25)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--oak-700)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>05 destinations</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {[
            { num: '01', title: 'Join the Troop', desc: 'Visit any Tuesday — no commitment.', icon: <Tent size={36} color="#d36a48" /> },
            { num: '02', title: 'New Scout Process', desc: 'Step-by-step to your first campout.', icon: <Mountain size={48} color="#b4be9b" /> },
            { num: '03', title: 'Scout Portal', desc: 'Resources for current scouts.', icon: <OakLeaf size={36} color="#b4be9b" /> },
            { num: '04', title: 'Payments', desc: 'Dues, campouts, registration.', icon: <Sun size={36} color="#f0c46b" /> },
            { num: '05', title: 'Troop Store', desc: 'Patches, gear, and uniforms.', icon: <Compass size={36} color="#b4be9b" accent="#d36a48" /> },
          ].map((c) => (
            <div key={c.num} style={{
              padding: '24px 20px', background: 'var(--limestone-200)',
              border: '1.5px solid var(--oak-700)',
              position: 'relative', minHeight: 200,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              cursor: 'pointer', transition: 'transform .15s',
              color: 'var(--oak-900)',
              boxShadow: '4px 4px 0 var(--oak-700)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', fontWeight: 700, letterSpacing: '0.1em' }}>№ {c.num}</div>
                <div>
                  {c.num === '01' && <Tent size={36} color="#a8442a" />}
                  {c.num === '02' && <Mountain size={48} color="#2d4a32" />}
                  {c.num === '03' && <OakLeaf size={36} color="#2d4a32" />}
                  {c.num === '04' && <Sun size={36} color="#e0a93b" />}
                  {c.num === '05' && <Compass size={36} color="#2d4a32" accent="#a8442a" />}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, lineHeight: 1.15 }}>{c.title}</div>
                <div style={{ fontSize: 13, marginTop: 6, color: 'var(--oak-700)', lineHeight: 1.4 }}>{c.desc}</div>
              </div>
              <div style={{
                position: 'absolute', bottom: -1, right: -1, width: 28, height: 28,
                background: 'var(--clay-500)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Arrow size={14} color="#f7f3ea" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TWO TROOPS — typographic spread (limestone band) ─── */}
      <section style={{
        padding: '80px 64px',
        background: 'var(--limestone-100)',
        borderTop: '2px solid var(--oak-700)',
        borderBottom: '2px solid var(--oak-700)',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 12 }}>Chapter II</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 64, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, lineHeight: 1, maxWidth: 800, marginInline: 'auto', color: 'var(--oak-900)' }}>
            Two troops. One <span style={{ fontStyle: 'italic', color: 'var(--clay-600)', fontWeight: 400 }}>family.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 48, alignItems: 'stretch' }}>
          {[
            { num: '258', kind: 'Boys Troop', patrols: 7, scouts: 53, sm: 'Mr. Shawn Trollope', tone: 'oak', side: 'L' },
            null,
            { num: '358', kind: 'Girls Troop', patrols: 3, scouts: 25, sm: 'Mrs. Carla Osuna', tone: 'clay', side: 'R' },
          ].map((t, idx) => {
            if (!t) {
              return (
                <div key="div" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 8px' }}>
                  <div style={{ width: 1, flex: 1, background: 'rgba(45,74,50,0.3)', minHeight: 120 }} />
                  <div style={{ padding: 12, background: 'var(--limestone-100)' }}>
                    <Compass size={56} color="#2d4a32" accent="#a8442a" />
                  </div>
                  <div style={{ width: 1, flex: 1, background: 'rgba(45,74,50,0.3)', minHeight: 120 }} />
                </div>
              );
            }
            return (
              <div key={t.num} style={{ textAlign: t.side === 'L' ? 'right' : 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginBottom: 6 }}>{t.kind}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 200, fontWeight: 700, lineHeight: 0.9,
                    letterSpacing: '-0.05em', color: 'var(--oak-700)',
                  }}>{t.num}</div>
                </div>
                <div style={{ display: 'flex', gap: 32, justifyContent: t.side === 'L' ? 'flex-end' : 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, color: 'var(--clay-600)', lineHeight: 1 }}>{t.scouts}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--oak-700)', marginTop: 4 }}>scouts</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, color: 'var(--clay-600)', lineHeight: 1 }}>{t.patrols}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--oak-700)', marginTop: 4 }}>patrols</div>
                  </div>
                </div>
                <div style={{ paddingTop: 16, borderTop: '1px dashed rgba(45,74,50,0.3)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--oak-700)', marginBottom: 4 }}>Scoutmaster</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--oak-900)' }}>{t.sm}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── MEETING + MAP (paper) ─── */}
      <section style={{ padding: '88px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1, background: 'var(--paper)' }}>
        <div style={{
          aspectRatio: '4/3', background: 'var(--paper-bright)',
          padding: 14, boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
          border: '1px solid rgba(45,74,50,0.15)',
        }}>
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #b4be9b, #93a274)',
            position: 'relative', overflow: 'hidden',
          }}>
            <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              <g stroke="#f7f3ea" strokeWidth="5" fill="none" opacity="0.85">
                <path d="M-20,180 Q120,160 200,170 T420,150" />
                <path d="M150,-20 Q170,80 160,170 T180,320" />
                <path d="M-20,80 Q140,110 240,90 T420,110" />
              </g>
              <g stroke="#d4c9a8" strokeWidth="2" fill="none" strokeDasharray="3 4">
                <path d="M-20,240 Q120,230 220,240 T420,230" />
                <path d="M280,-20 Q300,100 290,200 T310,320" />
              </g>
              <circle cx="80" cy="100" r="22" fill="#7a8c5c" opacity="0.5" />
              <circle cx="320" cy="220" r="28" fill="#7a8c5c" opacity="0.5" />
              <circle cx="60" cy="240" r="18" fill="#7a8c5c" opacity="0.5" />
              <g transform="translate(200,170)">
                <circle r="32" fill="rgba(168,68,42,0.2)" />
                <path d="M0,-22 C-12,-22 -20,-12 -20,0 C-20,12 0,28 0,28 C0,28 20,12 20,0 C20,-12 12,-22 0,-22 Z" fill="#a8442a" stroke="#f7f3ea" strokeWidth="2"/>
                <circle cy="-2" r="6" fill="#f7f3ea"/>
              </g>
              <text x="220" y="173" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="700" fill="#1a2419">Rockbridge Church</text>
            </svg>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600, marginBottom: 14 }}>Where to find us</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 28px', lineHeight: 1, color: 'var(--oak-900)' }}>
            Tuesdays at 7.<br/><span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--clay-600)' }}>Rain or shine.</span>
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--oak-700)', maxWidth: 480, marginBottom: 24 }}>
            We meet weekly at Rockbridge Church and camp out one weekend a month. New scouts and parents are
            always welcome to drop in — no signup needed.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: '24px 0', borderTop: '1px solid rgba(45,74,50,0.2)', borderBottom: '1px solid rgba(45,74,50,0.2)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--clay-600)', marginBottom: 6 }}>Address</div>
              <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--oak-900)' }}>Rockbridge Church</div>
              <div style={{ fontSize: 14, color: 'var(--oak-700)' }}>2001 W. New Hope Drive<br/>Cedar Park, TX 78613</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--clay-600)', marginBottom: 6 }}>Eligibility</div>
              <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--oak-900)' }}>Ages 10+</div>
              <div style={{ fontSize: 14, color: 'var(--oak-700)' }}>Fifth grade or<br/>Arrow of Light earned</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button style={{
              padding: '14px 24px', borderRadius: 4, border: 'none',
              background: 'var(--oak-700)', color: 'var(--paper-bright)',
              fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
            }}>Get Directions</button>
            <button style={{
              padding: '14px 24px', borderRadius: 4, border: '2px solid var(--oak-700)',
              background: 'transparent', color: 'var(--oak-700)',
              fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
            }}>Add to Calendar</button>
          </div>
        </div>
      </section>

      {/* ─── OATH & LAW — letterpress on darker block ─── */}
      <section style={{
        background: 'var(--oak-900)', color: 'var(--paper-bright)', padding: '96px 64px',
        position: 'relative', overflow: 'hidden', zIndex: 1,
        borderTop: '1px solid rgba(212,201,168,0.15)',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
          <TopoBackground color="rgba(212,201,168,0.08)" />
        </div>
        <div style={{ position: 'absolute', top: 40, right: 40, opacity: 0.18 }}>
          <Sun size={180} color="var(--sun)" />
        </div>
        <div style={{ position: 'absolute', bottom: 40, left: 40, opacity: 0.15 }}>
          <OakLeaf size={140} color="var(--limestone-200)" />
        </div>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sun-soft)', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: 24 }}>The Scout Oath</div>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1.4,
            fontWeight: 400, fontStyle: 'italic', margin: 0, color: 'var(--limestone-200)',
            textWrap: 'balance',
          }}>
            "On my honor I will do my best to do my duty to God and my country and to obey the Scout Law;
            to help other people at all times; to keep myself physically strong, mentally awake,
            and morally straight."
          </p>
          <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(212,201,168,0.3)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sun-soft)', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: 24 }}>The Scout Law</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, lineHeight: 1.7, color: 'var(--paper-bright)', textWrap: 'balance' }}>
              A Scout is{' '}
              {['trustworthy','loyal','helpful','friendly','courteous','kind','obedient','cheerful','thrifty','brave','clean','reverent'].map((w, i, arr) => (
                <span key={w}>
                  <span style={{ borderBottom: '2px solid var(--sun-soft)', paddingBottom: 2 }}>{w}</span>
                  {i < arr.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: 'var(--oak-900)', color: 'var(--limestone-200)', padding: '56px 64px 32px', borderTop: '1px solid rgba(212,201,168,0.15)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <TroopLogo size={48} color="#f7f3ea" stroke="#2d4a32" />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--paper-bright)' }}>Troops 258 & 358</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--limestone-300)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cedar Park · Leander, TX</div>
              </div>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(212,201,168,0.75)', maxWidth: 360 }}>
              Youth-led scout troops chartered by the Capitol Area Council, North Shore District. Hosted by Rockbridge Church.
            </div>
          </div>
          {[
            { h: 'Explore', l: ['Home', 'Activities', 'Calendar', 'Photo Library'] },
            { h: 'Get Involved', l: ['Join the Troop', 'New Scout Process', 'Adult Resources', 'Training'] },
            { h: 'Quick Links', l: ['Scout Portal', 'Payments', 'Troop Store', 'Mulch Fundraiser'] },
          ].map((col) => (
            <div key={col.h}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--sun-soft)', fontWeight: 700, marginBottom: 14 }}>{col.h}</div>
              {col.l.map((i) => (
                <div key={i} style={{ fontSize: 14, marginBottom: 8, color: 'var(--limestone-200)' }}>{i}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid rgba(212,201,168,0.15)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--limestone-300)', display: 'flex', justifyContent: 'space-between' }}>
          <span>© 2026 Scouts BSA Troops 258 & 358 — All rights reserved</span>
          <span>Made on the trail · Cedar Park, TX</span>
        </div>
      </footer>
    </div>
  );
};

window.VariationB = VariationB;
