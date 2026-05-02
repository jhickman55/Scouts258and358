// Supporting pages: New Scout Process, Calendar, Contact

const SharedNav = ({ active = 'Home', dark = false }) => (
  <nav style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 56px', borderBottom: '1px solid rgba(45,74,50,0.10)',
    background: dark ? 'var(--oak-800)' : 'var(--paper)',
    color: dark ? 'var(--paper-bright)' : 'var(--oak-900)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <TroopLogo size={48} />
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em', lineHeight: 1.05 }}>Troops 258 & 358</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: dark ? 'var(--limestone-200)' : 'var(--oak-700)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cedar Park · Leander, TX</div>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 500 }}>
      {['Home', 'New Scouts', 'Activities', 'Calendar', 'Resources', 'Contact'].map((l) => (
        <span key={l} style={{
          borderBottom: l === active ? '2px solid var(--clay-600)' : 'none',
          paddingBottom: 4, cursor: 'pointer',
          color: l === active ? 'var(--clay-500)' : 'inherit',
        }}>{l}</span>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 10 }}>
      <button style={{
        padding: '10px 18px', borderRadius: 999, border: '1.5px solid var(--oak-700)',
        background: 'transparent', color: dark ? 'var(--paper-bright)' : 'var(--oak-700)',
        fontWeight: 600, fontSize: 13, cursor: 'pointer',
        borderColor: dark ? 'var(--limestone-200)' : 'var(--oak-700)',
      }}>Scout Portal</button>
      <button style={{
        padding: '10px 18px', borderRadius: 999, border: 'none',
        background: 'var(--clay-500)', color: 'var(--paper-bright)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
      }}>Join the Troop</button>
    </div>
  </nav>
);

const SharedFooter = () => (
  <footer style={{ background: 'var(--oak-900)', color: 'var(--limestone-200)', padding: '48px 56px 32px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <TroopLogo size={44} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>Troops 258 & 358</div>
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.7, maxWidth: 320 }}>
          Youth-led scout troops serving Cedar Park and Leander, Texas. Chartered by Capitol Area Council, North Shore District.
        </div>
      </div>
      {[
        { h: 'Explore', l: ['Home', 'Activities', 'Calendar', 'Photo Library'] },
        { h: 'Get Involved', l: ['Join the Troop', 'New Scout Process', 'Adult Resources', 'Training'] },
        { h: 'Quick Links', l: ['Scout Portal', 'Payments', 'Troop Store', 'Mulch Fundraiser'] },
      ].map((col) => (
        <div key={col.h}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--sun-soft)', marginBottom: 14 }}>{col.h}</div>
          {col.l.map((i) => (
            <div key={i} style={{ fontSize: 14, marginBottom: 8, opacity: 0.85 }}>{i}</div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(212,201,168,0.15)', fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.55, display: 'flex', justifyContent: 'space-between' }}>
      <span>© 2026 Scouts BSA Troops 258 & 358 — All rights reserved</span>
      <span>Made on the trail · Cedar Park, TX</span>
    </div>
  </footer>
);

// ─────────────────────────────────────────────────────────────
// NEW SCOUT PROCESS
// ─────────────────────────────────────────────────────────────
const NewScoutPage = () => {
  const steps = [
    { n: '01', t: 'Visit a meeting', d: 'Drop in any Tuesday at 7pm — meet the scouts, see how a meeting runs. No paperwork yet.', icon: <Tent size={48} color="#2d4a32" /> },
    { n: '02', t: 'Complete the application', d: 'Fill out the Scouting America application and Health & Medical Form Parts A & B. We can help.', icon: <OakLeaf size={48} color="#2d4a32" /> },
    { n: '03', t: 'Pay registration', d: '$85 annual Scouting America registration + $11/month troop dues. Scholarships available.', icon: <Sun size={48} color="#e0a93b" /> },
    { n: '04', t: 'Get the uniform', d: 'Field uniform shirt, neckerchief, and the basics. Hand-me-downs welcome at the troop store.', icon: <Compass size={48} color="#2d4a32" accent="#a8442a" /> },
    { n: '05', t: 'Pick a patrol', d: 'New scouts join a patrol of peers. Patrols cook, camp, and learn together.', icon: <Mountain size={56} color="#2d4a32" /> },
    { n: '06', t: 'Your first campout', d: 'Monthly campouts are $20. Bring a duffel, sleeping bag, and curiosity. We teach the rest.', icon: <Campfire size={48} color="#2d4a32" accent="#c25434" /> },
  ];
  return (
    <div style={{ width: 1280, background: 'var(--paper)', color: 'var(--oak-900)', fontFamily: 'var(--font-body)' }}>
      <SharedNav active="New Scouts" />
      <section style={{
        background: 'linear-gradient(180deg, var(--oak-700) 0%, var(--oak-800) 100%)',
        color: 'var(--paper-bright)', padding: '72px 56px 96px', position: 'relative', overflow: 'hidden',
      }}>
        <TopoBackground color="rgba(212,201,168,0.15)" />
        <div style={{ position: 'relative', maxWidth: 760 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sun-soft)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>★ The trail to Scouts</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1, letterSpacing: '-0.03em', margin: '0 0 20px' }}>
            Six steps from<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--sun-soft)' }}>curious to camping.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(247,243,234,0.8)', margin: 0, maxWidth: 600 }}>
            We've made joining as simple as we can. Most new scouts go from their first meeting visit to a
            campout within four weeks. Here's the trail.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, position: 'relative' }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: 32, background: 'var(--paper-bright)',
              border: '1px solid rgba(45,74,50,0.12)', borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-sm)', position: 'relative',
              display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 84, height: 84, borderRadius: 'var(--radius-md)',
                background: 'var(--limestone-100)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 6 }}>STEP {s.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--oak-700)' }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrailDivider />

      {/* What to bring */}
      <section style={{ padding: '40px 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>★ Field kit</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.05 }}>
              What to bring on day one.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--oak-700)' }}>
              For your first meeting, you don't need anything special — just show up. For your first
              campout, here's a starter list. Hand-me-downs and loaner gear are available.
            </p>
          </div>
          <div style={{ background: 'var(--paper-bright)', border: '1px solid rgba(45,74,50,0.12)', borderRadius: 'var(--radius-md)', padding: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px' }}>
              {[
                'Sleeping bag (30°F or warmer)',
                'Sleeping pad',
                'Duffel or backpack',
                'Mess kit + water bottle',
                'Flashlight + headlamp',
                'Rain jacket',
                'Long pants & layers',
                'Hiking boots / sturdy shoes',
                'Toothbrush + small towel',
                'Scout Handbook',
              ].map((i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                  <span style={{ width: 14, height: 14, border: '1.5px solid var(--oak-700)', borderRadius: 3, flexShrink: 0 }} />
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--limestone-100)', padding: '64px 56px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Ready for step one?</h2>
        <p style={{ fontSize: 17, color: 'var(--oak-700)', maxWidth: 520, margin: '0 auto 28px' }}>
          The next meeting is Tuesday at 7pm at Rockbridge Church. We'll be expecting you.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button style={{ padding: '16px 28px', borderRadius: 999, border: 'none', background: 'var(--clay-500)', color: 'var(--paper-bright)', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Get directions</button>
          <button style={{ padding: '16px 28px', borderRadius: 999, border: '1.5px solid var(--oak-700)', background: 'transparent', color: 'var(--oak-700)', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Email us first</button>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// CALENDAR
// ─────────────────────────────────────────────────────────────
const CalendarPage = () => {
  const events = [
    { day: 'Tue', date: '05', month: 'May', title: 'Weekly troop meeting', type: 'Meeting', loc: 'Rockbridge Church · 7:00 PM', tone: 'sage' },
    { day: 'Sat', date: '09', month: 'May', title: 'Spring campout — Inks Lake', type: 'Campout', loc: 'Inks Lake State Park · Fri 5pm – Sun 11am', tone: 'oak' },
    { day: 'Tue', date: '12', month: 'May', title: 'Court of Honor + potluck', type: 'Ceremony', loc: 'Rockbridge Church · 7:00 PM', tone: 'clay' },
    { day: 'Tue', date: '19', month: 'May', title: 'Patrol leaders council', type: 'Leadership', loc: 'Rockbridge Church · 6:00 PM', tone: 'sage' },
    { day: 'Sat', date: '23', month: 'May', title: 'Mulch fundraiser delivery day', type: 'Service', loc: 'Cedar Park · 8:00 AM', tone: 'sun' },
    { day: 'Tue', date: '26', month: 'May', title: 'Weekly troop meeting', type: 'Meeting', loc: 'Rockbridge Church · 7:00 PM', tone: 'sage' },
    { day: 'Sat', date: '06', month: 'Jun', title: 'Summer kickoff campout', type: 'Campout', loc: 'Lost Maples · Fri 5pm – Sun 11am', tone: 'oak' },
    { day: 'Sun', date: '21', month: 'Jun', title: 'Summer camp departure', type: 'Camp', loc: 'Lost Pines Scout Reservation · 1 week', tone: 'clay' },
  ];
  const typeColor = { Meeting: 'var(--sage-500)', Campout: 'var(--oak-700)', Ceremony: 'var(--clay-600)', Leadership: 'var(--sage-500)', Service: 'var(--sun)', Camp: 'var(--clay-600)' };
  return (
    <div style={{ width: 1280, background: 'var(--paper)', color: 'var(--oak-900)', fontFamily: 'var(--font-body)' }}>
      <SharedNav active="Calendar" />

      <section style={{ padding: '64px 56px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>★ The trail ahead</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1, letterSpacing: '-0.03em', margin: 0 }}>
              Calendar.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--oak-700)', margin: '20px 0 0', maxWidth: 480, lineHeight: 1.55 }}>
              Weekly meetings, monthly campouts, and the big stuff. Subscribe to the troop calendar
              to keep it on your phone.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            <button style={{ padding: '12px 18px', borderRadius: 999, border: '1.5px solid var(--oak-700)', background: 'transparent', color: 'var(--oak-700)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Subscribe (.ics)</button>
            <button style={{ padding: '12px 18px', borderRadius: 999, border: 'none', background: 'var(--oak-700)', color: 'var(--paper-bright)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Add to Google</button>
          </div>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {['All events', 'Meetings', 'Campouts', 'Ceremonies', 'Leadership', 'Service'].map((p, i) => (
            <span key={p} style={{
              padding: '8px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600,
              background: i === 0 ? 'var(--oak-700)' : 'transparent',
              color: i === 0 ? 'var(--paper-bright)' : 'var(--oak-700)',
              border: i === 0 ? 'none' : '1px solid rgba(45,74,50,0.25)',
              cursor: 'pointer',
            }}>{p}</span>
          ))}
        </div>

        {/* Mini month calendar + agenda */}
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 32 }}>
          {/* Month grid */}
          <div style={{ background: 'var(--paper-bright)', border: '1px solid rgba(45,74,50,0.12)', borderRadius: 'var(--radius-md)', padding: 24, height: 'fit-content' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700 }}>May 2026</div>
              <div style={{ display: 'flex', gap: 4 }}>
                <button style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid rgba(45,74,50,0.2)', background: 'transparent', cursor: 'pointer' }}>‹</button>
                <button style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid rgba(45,74,50,0.2)', background: 'transparent', cursor: 'pointer' }}>›</button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--oak-600)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
              {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} style={{ textAlign: 'center', padding: 4 }}>{d}</div>)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 4; // May 2026 starts on Friday
                const inMonth = day >= 1 && day <= 31;
                const eventDays = [5, 9, 12, 19, 23, 26];
                const hasEvent = inMonth && eventDays.includes(day);
                const isToday = day === 5;
                return (
                  <div key={i} style={{
                    aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: hasEvent ? 700 : 500,
                    color: !inMonth ? 'rgba(45,74,50,0.25)' : isToday ? 'var(--paper-bright)' : 'var(--oak-900)',
                    background: isToday ? 'var(--clay-500)' : hasEvent ? 'var(--limestone-100)' : 'transparent',
                    borderRadius: 6, position: 'relative', cursor: inMonth ? 'pointer' : 'default',
                  }}>
                    {inMonth ? day : ''}
                    {hasEvent && !isToday && <span style={{ position: 'absolute', bottom: 4, width: 4, height: 4, borderRadius: '50%', background: 'var(--clay-500)' }} />}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(45,74,50,0.12)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--oak-600)', marginBottom: 10 }}>Legend</div>
              {[['Meeting', 'sage'], ['Campout', 'oak'], ['Ceremony', 'clay'], ['Service', 'sun']].map(([k, t]) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, marginBottom: 6 }}>
                  <span style={{ width: 12, height: 12, borderRadius: 3, background: typeColor[k] }} />
                  {k}
                </div>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {events.map((e, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '92px 1fr auto', gap: 24, alignItems: 'center',
                padding: 20, background: 'var(--paper-bright)',
                border: '1px solid rgba(45,74,50,0.12)', borderRadius: 'var(--radius-md)',
                borderLeft: `4px solid ${typeColor[e.type]}`,
              }}>
                <div style={{ textAlign: 'center', borderRight: '1px dashed rgba(45,74,50,0.2)', paddingRight: 18 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--oak-600)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{e.month}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, lineHeight: 1, color: 'var(--oak-700)' }}>{e.date}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{e.day}</div>
                </div>
                <div>
                  <div style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, background: 'var(--limestone-100)', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--oak-700)', marginBottom: 8 }}>{e.type}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, lineHeight: 1.2 }}>{e.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--oak-700)', marginTop: 4 }}>{e.loc}</div>
                </div>
                <button style={{ padding: '10px 16px', borderRadius: 999, border: '1.5px solid var(--oak-700)', background: 'transparent', color: 'var(--oak-700)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────
const ContactPage = () => {
  return (
    <div style={{ width: 1280, background: 'var(--paper)', color: 'var(--oak-900)', fontFamily: 'var(--font-body)' }}>
      <SharedNav active="Contact" />
      <section style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 720 }}>
        <div style={{ padding: '72px 56px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>★ Send up a smoke signal</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 76, lineHeight: 0.98, letterSpacing: '-0.03em', margin: '0 0 20px' }}>
            Get in touch.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--oak-700)', maxWidth: 480, lineHeight: 1.55, margin: '0 0 36px' }}>
            Have a question? Curious about visiting? Drop us a line and a member of leadership will get
            back to you within a couple of days.
          </p>

          <form style={{ display: 'grid', gap: 18, maxWidth: 520 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label="First name" placeholder="Sam" />
              <Field label="Last name" placeholder="Hayes" />
            </div>
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Field label="Phone (optional)" type="tel" placeholder="(512) 555-0123" />
            <div>
              <Label>I'm reaching out about…</Label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                {['Joining the troop', 'Adult volunteering', 'Eagle project', 'Mulch fundraiser', 'Something else'].map((t, i) => (
                  <span key={t} style={{
                    padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                    background: i === 0 ? 'var(--oak-700)' : 'transparent',
                    color: i === 0 ? 'var(--paper-bright)' : 'var(--oak-700)',
                    border: i === 0 ? 'none' : '1px solid rgba(45,74,50,0.25)',
                    cursor: 'pointer',
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <Label>Your message</Label>
              <textarea rows={5} placeholder="Tell us a bit about your scout, your questions, or anything we should know…"
                style={{ width: '100%', marginTop: 8, padding: '14px 16px', borderRadius: 8, border: '1.5px solid rgba(45,74,50,0.2)', background: 'var(--paper-bright)', fontFamily: 'inherit', fontSize: 14, resize: 'vertical', color: 'var(--oak-900)' }} />
            </div>
            <button type="button" style={{
              marginTop: 8, padding: '16px 28px', borderRadius: 999, border: 'none',
              background: 'var(--clay-500)', color: 'var(--paper-bright)',
              fontWeight: 700, fontSize: 14, cursor: 'pointer', justifySelf: 'flex-start',
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              Send message <Arrow size={14} color="#f7f3ea" />
            </button>
          </form>
        </div>

        {/* Right side: leadership cards + map */}
        <div style={{ background: 'var(--limestone-100)', padding: '72px 56px', position: 'relative' }}>
          <TopoBackground color="rgba(45,74,50,0.08)" />
          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>Troop leadership</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {[
                { num: '258', role: 'Scoutmaster', name: 'Mr. Shawn Trollope', tone: 'oak' },
                { num: '358', role: 'Scoutmaster', name: 'Mrs. Carla Osuna', tone: 'clay' },
                { num: '—', role: 'Committee Chair', name: 'Brian Kennedy', tone: 'sage' },
              ].map((p) => (
                <div key={p.name} style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr auto', alignItems: 'center', gap: 16,
                  padding: 18, background: 'var(--paper-bright)', borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(45,74,50,0.12)',
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: p.tone === 'oak' ? 'var(--oak-700)' : p.tone === 'clay' ? 'var(--clay-500)' : 'var(--sage-500)',
                    color: 'var(--paper-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em',
                  }}>{p.num}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--clay-600)', fontWeight: 700 }}>{p.role}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, marginTop: 2 }}>{p.name}</div>
                  </div>
                  <button style={{ padding: '8px 14px', borderRadius: 999, border: '1px solid var(--oak-700)', background: 'transparent', color: 'var(--oak-700)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Email</button>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-600)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>Where we meet</div>
            <div style={{
              borderRadius: 'var(--radius-md)', overflow: 'hidden',
              boxShadow: 'var(--shadow-md)', border: '1px solid rgba(45,74,50,0.12)',
            }}>
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #b4be9b, #93a274)', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  <g stroke="#f7f3ea" strokeWidth="5" fill="none" opacity="0.85">
                    <path d="M-20,180 Q120,160 200,170 T420,150" />
                    <path d="M150,-20 Q170,80 160,170 T180,320" />
                  </g>
                  <circle cx="80" cy="100" r="22" fill="#7a8c5c" opacity="0.5" />
                  <circle cx="320" cy="220" r="28" fill="#7a8c5c" opacity="0.5" />
                  <g transform="translate(200,170)">
                    <circle r="32" fill="rgba(168,68,42,0.2)" />
                    <path d="M0,-22 C-12,-22 -20,-12 -20,0 C-20,12 0,28 0,28 C0,28 20,12 20,0 C20,-12 12,-22 0,-22 Z" fill="#a8442a" stroke="#f7f3ea" strokeWidth="2"/>
                    <circle cy="-2" r="6" fill="#f7f3ea"/>
                  </g>
                </svg>
              </div>
              <div style={{ padding: 18, background: 'var(--paper-bright)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>Rockbridge Church</div>
                  <div style={{ fontSize: 13, color: 'var(--oak-700)' }}>2001 W. New Hope Drive · Cedar Park, TX 78613</div>
                </div>
                <button style={{ padding: '8px 14px', borderRadius: 999, border: 'none', background: 'var(--oak-700)', color: 'var(--paper-bright)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Open in Maps</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SharedFooter />
    </div>
  );
};

const Label = ({ children }) => (
  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--oak-700)', fontWeight: 700 }}>{children}</div>
);
const Field = ({ label, type = 'text', placeholder }) => (
  <div>
    <Label>{label}</Label>
    <input type={type} placeholder={placeholder}
      style={{ width: '100%', marginTop: 8, padding: '12px 16px', borderRadius: 8, border: '1.5px solid rgba(45,74,50,0.2)', background: 'var(--paper-bright)', fontFamily: 'inherit', fontSize: 14, color: 'var(--oak-900)' }} />
  </div>
);

Object.assign(window, { NewScoutPage, CalendarPage, ContactPage, SharedNav, SharedFooter });
