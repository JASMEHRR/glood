// Chibi profile-pic stickers, drawn in the same die-cut style as the GLOOD originals:
// a black cut edge, a thick white border, then the flat-colour character with black outlines.
const OUT = '#1b1b1b';
function el(tag, attrs) {
  return `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ')}/>`;
}
function avatar(p) {
  const skin = p.skin;
  const parts = []; // [tag, attrs, inSilhouette]
  const add = (tag, attrs, sil = true) => parts.push([tag, attrs, sil]);
  if (p.girl) add('path', { d: 'M64,140 C56,52 244,52 236,140 L244,262 C226,280 204,276 198,262 L102,262 C96,276 74,280 56,262 Z', fill: p.hair });
  add('path', { d: 'M62,300 C62,238 102,224 150,224 C198,224 238,238 238,300 Z', fill: p.shirt });
  add('rect', { x: 133, y: 190, width: 34, height: 44, rx: 8, fill: skin });
  add('circle', { cx: 80, cy: 150, r: 14, fill: skin });
  add('circle', { cx: 220, cy: 150, r: 14, fill: skin });
  add('ellipse', { cx: 150, cy: 140, rx: 72, ry: 68, fill: skin });
  if (p.girl) add('path', { d: 'M76,136 C70,64 230,64 224,136 C204,112 180,104 160,116 C150,100 120,100 76,136 Z', fill: p.hair });
  else add('path', { d: 'M76,140 C64,66 118,44 160,52 C210,56 238,92 224,140 L212,116 L198,128 L190,100 L170,118 L160,94 L142,116 L128,96 L116,120 L102,104 L88,132 Z', fill: p.hair });
  // face
  add('ellipse', { cx: 122, cy: 150, rx: 11, ry: 14, fill: OUT }, false);
  add('ellipse', { cx: 178, cy: 150, rx: 11, ry: 14, fill: OUT }, false);
  add('circle', { cx: 126, cy: 145, r: 4, fill: '#fff', stroke: 'none' }, false);
  add('circle', { cx: 182, cy: 145, r: 4, fill: '#fff', stroke: 'none' }, false);
  add('ellipse', { cx: 104, cy: 174, rx: 12, ry: 7, fill: '#ff8fc7', stroke: 'none', opacity: .8 }, false);
  add('ellipse', { cx: 196, cy: 174, rx: 12, ry: 7, fill: '#ff8fc7', stroke: 'none', opacity: .8 }, false);
  add('path', { d: 'M136,178 Q150,194 164,178', fill: 'none' }, false);
  for (const a of p.extras || []) add(...a);

  const shapes = (mode) => parts.filter(([, , sil]) => mode === 'art' || sil).map(([tag, attrs]) => {
    if (mode === 'art') return el(tag, { stroke: OUT, 'stroke-width': 5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', ...attrs });
    const c = mode === 'edge' ? OUT : '#fff';
    return el(tag, { ...attrs, fill: c, stroke: c, 'stroke-width': mode === 'edge' ? 40 : 30, 'stroke-linejoin': 'round', opacity: 1 });
  }).join('');
  return `<svg viewBox="20 10 260 300" xmlns="http://www.w3.org/2000/svg">${shapes('edge')}${shapes('border')}${shapes('art')}</svg>`;
}

const crown = ['path', { d: 'M116,62 L124,26 L140,48 L150,18 L160,48 L176,26 L184,62 Z', fill: '#ffd400' }];
const tie = ['path', { d: 'M142,226 L158,226 L163,262 L150,282 L137,262 Z', fill: '#e10b19' }];
const beret = ['path', { d: 'M74,104 C70,58 196,34 232,84 C214,98 120,108 74,104 Z', fill: '#e10b19' }];
const pencil = ['path', { d: 'M214,92 L250,40 L262,48 L226,100 L210,108 Z', fill: '#ffd400' }];
const bow = ['path', { d: 'M196,70 L222,52 L224,92 Z M196,70 L176,48 L170,86 Z', fill: '#ff8fc7' }];
const bowKnot = ['circle', { cx: 196, cy: 70, r: 9, fill: '#e10b19' }];
const megaphone = ['path', { d: 'M226,252 L268,230 L268,290 L226,270 Z', fill: '#ffd400' }];
const headsetBand = ['path', { d: 'M76,150 C68,40 232,40 224,150', fill: 'none', 'stroke-width': 10 }, false];
const earL = ['rect', { x: 62, y: 132, width: 24, height: 40, rx: 10, fill: '#00bbd1' }];
const earR = ['rect', { x: 214, y: 132, width: 24, height: 40, rx: 10, fill: '#00bbd1' }];
const mic = ['path', { d: 'M76,170 Q86,200 122,196', fill: 'none', 'stroke-width': 6 }, false];
const micTip = ['circle', { cx: 124, cy: 196, r: 7, fill: '#00bbd1' }, false];
const cap = ['path', { d: 'M76,118 C76,50 224,50 224,118 Z', fill: '#3ddc84' }];
const capBrim = ['path', { d: 'M212,104 C238,100 266,108 270,124 L214,124 Z', fill: '#3ddc84' }];
const glassL = ['circle', { cx: 122, cy: 150, r: 22, fill: 'none', 'stroke-width': 6 }, false];
const glassR = ['circle', { cx: 178, cy: 150, r: 22, fill: 'none', 'stroke-width': 6 }, false];
const bridge = ['path', { d: 'M144,148 L156,148', fill: 'none', 'stroke-width': 6 }, false];
const coin = ['circle', { cx: 222, cy: 266, r: 26, fill: '#ffd400' }];
const coinText = ['text', { x: 222, y: 277, 'text-anchor': 'middle', 'font-family': 'Bungee', 'font-size': 28, fill: '#1b1b1b', stroke: 'none' }, false];

const TEAM = [
  { no: 1, name: 'JasMehr Singh', role: 'Founder & CEO', bg: 'var(--yellow)', chip: 'c-red',
    look: { skin: '#e8b48a', hair: '#1b1b1b', shirt: '#ffa905', extras: [tie, crown] },
    dept: 'Leadership & Strategy',
    contribution: 'Started Glood and runs it day to day. Picks the categories, leads the team and runs the VentureAdda store and the website.',
    achievement: 'Took Glood from an idea to a live store with 9 categories, open 24/7, plus our own website: glood.vercel.app.',
    learning: 'Launch fast, then improve. What customers ask for beats guesses.' },
  { no: 2, name: 'Prashant Pal', role: 'Head of Design', bg: 'var(--pink)', chip: 'c-purple',
    look: { skin: '#d9a07a', hair: '#2b1a10', shirt: '#8a6bff', extras: [beret, pencil] },
    dept: 'Creative & Design',
    contribution: "Creates and polishes the sticker artwork and keeps Glood's bold die-cut style consistent.",
    achievement: 'Built out the anime line, now 22 designs on the website, plus F1 favourites like "Smooth Operator".',
    learning: 'Fans notice details. Designing for the in-joke is what sells.' },
  { no: 3, name: 'Meenakshi Sharma', role: 'Marketing Lead', bg: 'var(--cyan)', chip: 'c-pink', girl: true,
    look: { skin: '#f0bf98', hair: '#2b1a10', shirt: '#e10b19', girl: true, extras: [bow, bowKnot, megaphone] },
    dept: 'Marketing & Social Media',
    contribution: "Runs Glood's social media, new-drop posts and on-campus promotions.",
    achievement: 'Built the buzz that helped popular designs sell out.',
    learning: 'Content tied to the moment (race weekends, new episodes) gets the most orders.' },
  { no: 4, name: 'Rishabh Sharma', role: 'Sales & Customer Lead', bg: 'var(--green)', chip: 'c-cyan',
    look: { skin: '#e8b48a', hair: '#1b1b1b', shirt: '#00bbd1', extras: [headsetBand, earL, earR, mic, micTip] },
    dept: 'Sales & Customer Relations',
    contribution: 'Handles WhatsApp orders and customer queries, and pitches bulk orders to clubs and events.',
    achievement: 'Made "Open 24/7" real with quick replies and smooth handovers.',
    learning: 'A fast, friendly reply closes more sales than any discount.' },
  { no: 5, name: 'Sanyam', role: 'Operations Lead', bg: 'var(--orange)', chip: 'c-green',
    look: { skin: '#d9a07a', hair: '#1b1b1b', shirt: '#ffd400', extras: [cap, capBrim] },
    dept: 'Operations & Supply Chain',
    contribution: 'Manages printing, print quality, stock and restocks across all 9 categories.',
    achievement: 'Set up stock tracking so sold-out designs are spotted and restocked.',
    learning: 'Small, frequent print batches cut waste and keep best-sellers in stock.' },
  { no: 6, name: 'Aniket Kumar', role: 'Finance Lead', bg: 'var(--purple)', chip: 'c-yellow',
    look: { skin: '#f0bf98', hair: '#2b1a10', shirt: '#3ddc84', extras: [glassL, glassR, bridge, coin, coinText] },
    dept: 'Finance & Pricing',
    contribution: 'Works out cost per sticker, sets prices and bundles, and keeps the accounts.',
    achievement: 'Built a pricing and bundle structure that keeps stickers affordable for students.',
    learning: 'On small-ticket products, margin comes from batch size and bundles.' },
];

const host = document.getElementById('team');
TEAM.forEach((m, i) => {
  let svg = avatar(m.look);
  if (m.no === 6) svg = svg.replace(/<text([^>]*)\/>/g, '<text$1>₹</text>');
  const s = document.createElement('section');
  s.className = 'slide cream team-slide';
  s.dataset.notes = `${m.name}, ${m.role}. Department: ${m.dept}. Contribution: ${m.contribution} Achievement: ${m.achievement} Learning: ${m.learning}`;
  s.innerHTML = `
    <div class="profile">
      <div class="pfp" style="background:${m.bg}">${svg}</div>
      <p class="name">${m.name}</p>
      <span class="chip ${m.chip} role">${m.role}</span>
    </div>
    <div>
      <p class="eyebrow">Team member ${m.no}</p>
      <h2>Meet ${m.name.split(' ')[0]}</h2>
      <div class="team-cards">
        <div class="card"><div class="head-row"><span class="dot c-yellow">◆</span><h3>Department</h3></div><p>${m.dept}</p></div>
        <div class="card"><div class="head-row"><span class="dot c-cyan">✚</span><h3>Contribution</h3></div><p>${m.contribution}</p></div>
        <div class="card"><div class="head-row"><span class="dot c-red">★</span><h3>Achievement</h3></div><p>${m.achievement}</p></div>
        <div class="card"><div class="head-row"><span class="dot c-green">✦</span><h3>Learning</h3></div><p>${m.learning}</p></div>
      </div>
    </div>
    <span class="num">${String(8 + i).padStart(2, '0')}</span>`;
  host.before(s);
});
host.remove();
// number the closing slide
const all = document.querySelectorAll('.slide');
all[all.length - 1].insertAdjacentHTML('beforeend', `<span class="num">${String(all.length).padStart(2, '0')}</span>`);
