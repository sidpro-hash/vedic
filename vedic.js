// ===================================================================
//  CORE ASTRONOMICAL DATA & CONSTANTS
// ===================================================================

const PLANETS = [
  { name: 'Saturn',  hindi: 'शनि',   sym: 'Sa', color: '#7888a4', day: 'Saturday',  dayHindi: 'शनिवार' },
  { name: 'Jupiter', hindi: 'गुरु',   sym: 'Ju', color: '#d4a844', day: 'Thursday',  dayHindi: 'गुरुवार' },
  { name: 'Mars',    hindi: 'मंगल',   sym: 'Ma', color: '#d45454', day: 'Tuesday',   dayHindi: 'मंगलवार' },
  { name: 'Sun',     hindi: 'सूर्य',  sym: 'Su', color: '#e8963c', day: 'Sunday',    dayHindi: 'रविवार' },
  { name: 'Venus',   hindi: 'शुक्र',  sym: 'Ve', color: '#c488d4', day: 'Friday',    dayHindi: 'शुक्रवार' },
  { name: 'Mercury', hindi: 'बुध',    sym: 'Me', color: '#6bb86b', day: 'Wednesday', dayHindi: 'बुधवार' },
  { name: 'Moon',    hindi: 'चन्द्र', sym: 'Mo', color: '#8cb4d8', day: 'Monday',    dayHindi: 'सोमवार' }
];

// Day-of-week to starting planet index in PLANETS array
const DAY_TO_PLANET = { 0:3, 1:6, 2:2, 3:5, 4:1, 5:4, 6:0 }; // Sun=0..Sat=6

const TITHI_NAMES = [
  'Pratipada','Dwitiya','Tritiya','Chaturthi','Panchami','Shashthi','Saptami',
  'Ashtami','Navami','Dashami','Ekadashi','Dwadashi','Trayodashi','Chaturdashi','Purnima/Amavasya'
];
const TITHI_HINDI = [
  'प्रतिपदा','द्वितीया','तृतीया','चतुर्थी','पंचमी','षष्ठी','सप्तमी',
  'अष्टमी','नवमी','दशमी','एकादशी','द्वादशी','त्रयोदशी','चतुर्दशी','पूर्णिमा/अमावस्या'
];

const NAKSHATRA_NAMES = [
  'Ashwini','Bharani','Krittika','Rohini','Mrigashirsha','Ardra','Punarvasu',
  'Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra',
  'Swati','Vishaka','Anuradha','Jyeshta','Moola','Purva Ashadha','Uttara Ashadha',
  'Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'
];

const RASHI_NAMES = [
  'Mesha','Vrishabha','Mithuna','Karka','Simha','Kanya',
  'Tula','Vrischika','Dhanu','Makara','Kumbha','Meena'
];
const RASHI_ENGLISH = [
  'Aries','Taurus','Gemini','Cancer','Leo','Virgo',
  'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
];

const YOGA_NAMES = [
  'Vishkambha','Preeti','Ayushman','Saubhagya','Shobhana','Atiganda','Sukarma',
  'Dhriti','Shoola','Ganda','Vriddhi','Dhruva','Vyaghata','Harshana','Vajra',
  'Siddhi','Vyatipata','Variyan','Parigha','Shiva','Siddha','Sadhya','Shubha',
  'Shukla','Brahma','Indra','Vaidhriti'
];

const KARANA_NAMES = [
  'Bava','Balava','Kaulava','Taitila','Garija','Vanija','Vishti',
  'Shakuni','Chatushpada','Naga','Kimstughna'
];

const VARA_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const VARA_HINDI = ['रविवार','सोमवार','मंगलवार','बुधवार','गुरुवार','शुक्रवार','शनिवार'];

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const CRITICAL_TITHIS = [4, 8, 11, 13]; // Chaturthi, Ashtami, Ekadashi, Trayodashi (1-indexed in each paksha)

// Hindu months
const HINDU_MONTHS = ['Chaitra','Vaisakha','Jyaistha','Asadha','Shravana','Bhadra','Ashvina','Kartika','Agrahayana','Pausha','Magha','Phalguna'];

// ===================================================================
//  RITU (SEASONS) DATA — 2026 dates based on tropical zodiac
// ===================================================================
const RITUS = [
  {
    name: 'Shishira', hindi: 'शिशिर', english: 'Late Winter',
    color: '#5a7a9a', bg: 'rgba(90,122,154,0.1)',
    months: 'Magha – Phalguna', gregMonths: 'Jan – Feb',
    zodiac: 'Makara & Kumbha', start: '2025-12-22', end: '2026-02-18',
    nature: 'Cold, dry, inward energy. Kapha accumulates.',
    ayurveda: 'Favour warm, heavy, oily foods. Sesame oil massage. Early sleep. Avoid cold drinks and raw food.',
    festivals: 'Makar Sankranti, Vasant Panchami, Republic Day',
    agriculture: 'Rabi crop maturation — wheat, barley, mustard nearing harvest'
  },
  {
    name: 'Vasanta', hindi: 'वसन्त', english: 'Spring',
    color: '#7cb87c', bg: 'rgba(124,184,124,0.1)',
    months: 'Chaitra – Vaisakha', gregMonths: 'Mar – Apr',
    zodiac: 'Meena & Mesha', start: '2026-02-18', end: '2026-04-20',
    nature: 'Pleasant, renewal. Kapha liquefies. Agni weakens.',
    ayurveda: 'Light, dry, bitter & astringent foods. Honey. Exercise. Avoid heavy meals, daytime sleep.',
    festivals: 'Holi, Gudi Padwa, Chaitra Navratri, Ram Navami, Hanuman Jayanti',
    agriculture: 'Rabi harvest. Preparation for Kharif sowing. Mango blossoming.'
  },
  {
    name: 'Grishma', hindi: 'ग्रीष्म', english: 'Summer',
    color: '#d4944c', bg: 'rgba(212,148,76,0.1)',
    months: 'Jyaistha – Asadha', gregMonths: 'May – Jun',
    zodiac: 'Vrishabha & Mithuna', start: '2026-04-20', end: '2026-06-21',
    nature: 'Hot, dry. Pitta rises. Body strength depletes.',
    ayurveda: 'Sweet, cold, liquid diet. Buttermilk, sattu. Moon-bathing. Avoid excessive exertion, sun, salty & sour.',
    festivals: 'Ganga Dussehra, Nirjala Ekadashi, Vat Savitri',
    agriculture: 'Pre-monsoon ploughing. Summer crops: watermelon, cucumber.'
  },
  {
    name: 'Varsha', hindi: 'वर्षा', english: 'Monsoon',
    color: '#4a8cb8', bg: 'rgba(74,140,184,0.1)',
    months: 'Shravana – Bhadra', gregMonths: 'Jul – Aug',
    zodiac: 'Karka & Simha', start: '2026-06-21', end: '2026-08-23',
    nature: 'Wet, humid. Vata aggravated. Digestion weak.',
    ayurveda: 'Sour, salty, oily foods. Ginger tea. Avoid river water, raw salads. Use fumigation.',
    festivals: 'Nag Panchami, Raksha Bandhan, Krishna Janmashtami',
    agriculture: 'Kharif sowing: rice, maize, cotton, soybean. Peak monsoon.'
  },
  {
    name: 'Sharada', hindi: 'शरद', english: 'Autumn',
    color: '#c4884c', bg: 'rgba(196,136,76,0.1)',
    months: 'Ashvina – Kartika', gregMonths: 'Sep – Oct',
    zodiac: 'Kanya & Tula', start: '2026-08-23', end: '2026-10-23',
    nature: 'Clear skies. Pitta dominant. Sharp sunlight.',
    ayurveda: 'Sweet, bitter foods. Ghee. Avoid sour, spicy, oil. Moonlight exposure (Sharad Purnima).',
    festivals: 'Navratri, Dussehra, Sharad Purnima, Diwali, Karva Chauth',
    agriculture: 'Kharif harvest begins. Rice paddies golden.'
  },
  {
    name: 'Hemanta', hindi: 'हेमन्त', english: 'Early Winter',
    color: '#8a7a9a', bg: 'rgba(138,122,154,0.1)',
    months: 'Agrahayana – Pausha', gregMonths: 'Nov – Dec',
    zodiac: 'Vrischika & Dhanu', start: '2026-10-23', end: '2026-12-21',
    nature: 'Cold begins. Agni strong. Body builds reserves.',
    ayurveda: 'Heavy, sweet, sour, salty foods. Milk, ghee, sesame. Oil massage. Sunbathing.',
    festivals: 'Kartik Purnima, Tulsi Vivah, Gita Jayanti',
    agriculture: 'Rabi sowing: wheat, barley, gram, mustard.'
  }
];

// ===================================================================
//  ASTRONOMICAL CALCULATION HELPERS
// ===================================================================

// Julian Day Number from Date
function dateToJD(date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate() + (date.getHours() + date.getMinutes()/60 + date.getSeconds()/3600) / 24;
  let Y = y, M = m;
  if (M <= 2) { Y--; M += 12; }
  const A = Math.floor(Y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + d + B - 1524.5;
}

// Sun longitude (approx, degrees)
function sunLongitude(jd) {
  const T = (jd - 2451545.0) / 36525;
  let L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  let M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  M = M * Math.PI / 180;
  const C = (1.914602 - 0.004817 * T) * Math.sin(M) + 0.019993 * Math.sin(2*M) + 0.000289 * Math.sin(3*M);
  let sunLon = L0 + C;
  // Ayanamsa (Lahiri approx)
  const ayan = 23.85 + 0.0137 * (jd - 2451545) / 365.25;
  sunLon -= ayan;
  return ((sunLon % 360) + 360) % 360;
}

// Moon longitude (approx, degrees)
function moonLongitude(jd) {
  const T = (jd - 2451545.0) / 36525;
  let Lp = 218.3165 + 481267.8813 * T;
  let D = 297.8502 + 445267.1115 * T;
  let M = 357.5291 + 35999.0503 * T;
  let Mp = 134.9634 + 477198.8676 * T;
  let F = 93.2720 + 483202.0175 * T;
  D = D * Math.PI / 180; M = M * Math.PI / 180; Mp = Mp * Math.PI / 180; F = F * Math.PI / 180;
  let lon = Lp
    + 6.289 * Math.sin(Mp)
    + 1.274 * Math.sin(2*D - Mp)
    + 0.658 * Math.sin(2*D)
    + 0.214 * Math.sin(2*Mp)
    - 0.186 * Math.sin(M)
    - 0.114 * Math.sin(2*F);
  const ayan = 23.85 + 0.0137 * (jd - 2451545) / 365.25;
  lon -= ayan;
  return ((lon % 360) + 360) % 360;
}

// Tithi from date (1-30)
function getTithi(date) {
  const jd = dateToJD(date);
  const sunL = sunLongitude(jd);
  const moonL = moonLongitude(jd);
  let diff = ((moonL - sunL) % 360 + 360) % 360;
  return Math.floor(diff / 12) + 1; // 1 to 30
}

// Nakshatra from Moon longitude (0-26)
function getNakshatra(date) {
  const jd = dateToJD(date);
  const moonL = moonLongitude(jd);
  return Math.floor(((moonL % 360) + 360) % 360 / (360/27));
}

// Rashi from Moon longitude (0-11)
function getMoonRashi(date) {
  const jd = dateToJD(date);
  const moonL = moonLongitude(jd);
  return Math.floor(((moonL % 360) + 360) % 360 / 30);
}

// Yoga (sum of Sun + Moon longitudes / 13°20')
function getYoga(date) {
  const jd = dateToJD(date);
  const sunL = sunLongitude(jd);
  const moonL = moonLongitude(jd);
  const sum = ((sunL + moonL) % 360 + 360) % 360;
  return Math.floor(sum / (360/27));
}

// Karana (half-tithi, 0-10 cycled)
function getKarana(date) {
  const jd = dateToJD(date);
  const sunL = sunLongitude(jd);
  const moonL = moonLongitude(jd);
  let diff = ((moonL - sunL) % 360 + 360) % 360;
  const karanaNum = Math.floor(diff / 6); // 0-59
  if (karanaNum === 0) return 10; // Kimstughna
  if (karanaNum >= 57) return [7,8,9,10][karanaNum-57] !== undefined ? [7,8,9][karanaNum-57] : 10;
  return ((karanaNum - 1) % 7);
}

// Sun-Moon angular distance in degrees
function getSunMoonAngle(date) {
  const jd = dateToJD(date);
  const sunL = sunLongitude(jd);
  const moonL = moonLongitude(jd);
  return ((moonL - sunL) % 360 + 360) % 360;
}

// Approximate sunrise/sunset for a lat/lng and date
function getSunTimes(date, lat, lng) {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(),0,0)) / 86400000);
  const zenith = 90.833;
  const D2R = Math.PI / 180;
  const R2D = 180 / Math.PI;

  function calc(rising) {
    const lngHour = lng / 15;
    const t = rising ? dayOfYear + ((6 - lngHour) / 24) : dayOfYear + ((18 - lngHour) / 24);
    const M = (0.9856 * t) - 3.289;
    let L = M + (1.916 * Math.sin(M * D2R)) + (0.020 * Math.sin(2 * M * D2R)) + 282.634;
    L = ((L % 360) + 360) % 360;
    let RA = R2D * Math.atan(0.91764 * Math.tan(L * D2R));
    RA = ((RA % 360) + 360) % 360;
    const Lquad = Math.floor(L / 90) * 90;
    const RAquad = Math.floor(RA / 90) * 90;
    RA = (RA + (Lquad - RAquad)) / 15;
    const sinDec = 0.39782 * Math.sin(L * D2R);
    const cosDec = Math.cos(Math.asin(sinDec));
    const cosH = (Math.cos(zenith * D2R) - (sinDec * Math.sin(lat * D2R))) / (cosDec * Math.cos(lat * D2R));
    if (cosH > 1 || cosH < -1) return null;
    let H = rising ? (360 - R2D * Math.acos(cosH)) / 15 : R2D * Math.acos(cosH) / 15;
    const T = H + RA - (0.06571 * t) - 6.622;
    let UT = ((T - lngHour) % 24 + 24) % 24;
    // Convert to IST (UTC+5:30)
    UT += 5.5;
    if (UT >= 24) UT -= 24;
    return UT;
  }

  const rise = calc(true);
  const set = calc(false);
  const format = (h) => {
    if (h === null) return '--:--';
    const hr = Math.floor(h);
    const mn = Math.round((h - hr) * 60);
    return `${String(hr).padStart(2,'0')}:${String(mn).padStart(2,'0')}`;
  };
  return { rise: rise, set: set, riseStr: format(rise), setStr: format(set) };
}

// Default location: Hubballi, Karnataka
const DEFAULT_LAT = 15.3647;
const DEFAULT_LNG = 75.1240;

// ===================================================================
//  HORA CALCULATIONS
// ===================================================================

function getHoraData(date, lat, lng) {
  const sun = getSunTimes(date, lat, lng);
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const sunTomorrow = getSunTimes(tomorrow, lat, lng);

  const dayLength = (sun.set - sun.rise); // hours
  const nightLength = (24 - sun.set) + sunTomorrow.rise; // hours
  const dayHora = dayLength / 12;
  const nightHora = nightLength / 12;

  const dow = date.getDay(); // 0=Sun
  const startPlanetIdx = DAY_TO_PLANET[dow];

  const horas = [];
  for (let i = 0; i < 24; i++) {
    const pIdx = (startPlanetIdx + i) % 7;
    const planet = PLANETS[pIdx];
    let startTime, endTime;
    if (i < 12) {
      startTime = sun.rise + i * dayHora;
      endTime = sun.rise + (i + 1) * dayHora;
    } else {
      startTime = sun.set + (i - 12) * nightHora;
      endTime = sun.set + (i - 11) * nightHora;
    }
    // Normalize
    if (startTime >= 24) startTime -= 24;
    if (endTime >= 24) endTime -= 24;
    horas.push({ planet, startTime, endTime, isDay: i < 12, index: i });
  }

  return { horas, sunrise: sun, dayRuler: PLANETS[startPlanetIdx] };
}

function getCurrentHoraIndex(horas, date) {
  const now = date.getHours() + date.getMinutes() / 60;
  for (let i = 0; i < horas.length; i++) {
    let s = horas[i].startTime, e = horas[i].endTime;
    if (e < s) { // crosses midnight
      if (now >= s || now < e) return i;
    } else {
      if (now >= s && now < e) return i;
    }
  }
  return 0;
}

function formatHoraTime(h) {
  if (h < 0) h += 24;
  if (h >= 24) h -= 24;
  const hr = Math.floor(h);
  const mn = Math.round((h - hr) * 60);
  const ampm = hr >= 12 ? 'PM' : 'AM';
  const h12 = hr % 12 || 12;
  return `${h12}:${String(mn).padStart(2,'0')} ${ampm}`;
}

// ===================================================================
//  CALENDAR DATA FOR A MONTH
// ===================================================================

// Major festivals database (simplified - key dates for 2026)
const FESTIVALS_2026 = {
  '2026-01-14': ['Makar Sankranti'],
  '2026-01-26': ['Republic Day'],
  '2026-03-04': ['Holi'],
  '2026-03-11': ['Kalashtami'],
  '2026-03-15': ['Papamochani Ekadashi'],
  '2026-03-17': ['Masik Shivaratri'],
  '2026-03-19': ['Gudi Padwa','Chaitra Navratri'],
  '2026-03-22': ['Chaturthi Vrat'],
  '2026-03-24': ['Yamuna Chhath'],
  '2026-03-26': ['Ram Navami','Durga Ashtami'],
  '2026-03-29': ['Kamada Ekadashi'],
  '2026-03-30': ['Mahavir Jayanti'],
  '2026-04-02': ['Hanuman Jayanti','Purnima'],
  '2026-04-13': ['Baisakhi'],
  '2026-04-14': ['Ambedkar Jayanti'],
  '2026-08-15': ['Independence Day'],
  '2026-10-02': ['Gandhi Jayanti'],
  '2026-10-20': ['Dussehra'],
  '2026-11-08': ['Diwali'],
};

function getMonthCalendarData(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const numDays = lastDay.getDate();
  const startDow = firstDay.getDay();

  const days = [];
  for (let d = 1; d <= numDays; d++) {
    const date = new Date(year, month, d, 6, 0); // sunrise approx
    const tithi = getTithi(date);
    const nak = getNakshatra(date);
    const rashi = getMoonRashi(date);
    const angle = getSunMoonAngle(date);
    const paksha = tithi <= 15 ? 'S' : 'K';
    const tithiInPaksha = tithi <= 15 ? tithi : tithi - 15;
    const tithiName = TITHI_NAMES[(tithiInPaksha - 1) % 15];
    const isCritical = CRITICAL_TITHIS.includes(tithiInPaksha);

    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const festivals = FESTIVALS_2026[dateStr] || [];

    // Approximate Hindu date
    const hinduDay = tithi;

    days.push({
      gdate: d, dow: new Date(year, month, d).getDay(),
      tithi, tithiName, tithiInPaksha, paksha,
      nakshatra: NAKSHATRA_NAMES[nak],
      rashi: RASHI_NAMES[rashi],
      angle: Math.round(angle),
      isCritical, festivals, hinduDay,
      sun: getSunTimes(new Date(year, month, d), DEFAULT_LAT, DEFAULT_LNG)
    });
  }
  return { year, month, numDays, startDow, days };
}

// ===================================================================
//  STATE
// ===================================================================

let currentDate = new Date();
let calYear = currentDate.getFullYear();
let calMonth = currentDate.getMonth();
let selectedRitu = -1;

// ===================================================================
//  RENDER: HORA CLOCK
// ===================================================================

function renderHoraClock() {
  const data = getHoraData(currentDate, DEFAULT_LAT, DEFAULT_LNG);
  const { horas, sunrise, dayRuler } = data;
  const currentIdx = getCurrentHoraIndex(horas, currentDate);
  const currentHora = horas[currentIdx];

  // SVG Clock
  const cx = 210, cy = 210, outerR = 185, innerR = 115;
  let svg = '';
  for (let i = 0; i < 24; i++) {
    const a1 = (i / 24) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 1) / 24) * Math.PI * 2 - Math.PI / 2;
    const amid = ((i + 0.5) / 24) * Math.PI * 2 - Math.PI / 2;
    const x1o = cx + outerR * Math.cos(a1), y1o = cy + outerR * Math.sin(a1);
    const x2o = cx + outerR * Math.cos(a2), y2o = cy + outerR * Math.sin(a2);
    const x1i = cx + innerR * Math.cos(a1), y1i = cy + innerR * Math.sin(a1);
    const x2i = cx + innerR * Math.cos(a2), y2i = cy + innerR * Math.sin(a2);
    const p = horas[i].planet;
    const op = (i === currentIdx) ? 1 : 0.45;
    const sw = (i === currentIdx) ? 2 : 0.5;
    svg += `<path d="M${x1o} ${y1o} A${outerR} ${outerR} 0 0 1 ${x2o} ${y2o} L${x2i} ${y2i} A${innerR} ${innerR} 0 0 0 ${x1i} ${y1i} Z" fill="${p.color}" opacity="${op}" stroke="${i===currentIdx?'#fff':'rgba(10,10,15,0.5)'}" stroke-width="${sw}"/>`;
    const midR = (outerR + innerR) / 2;
    const tx = cx + midR * Math.cos(amid), ty = cy + midR * Math.sin(amid);
    svg += `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="central" font-size="9" font-weight="600" fill="${op>0.6?'#0a0a0f':'rgba(255,255,255,0.7)'}" font-family="DM Sans,sans-serif">${p.sym}</text>`;
    // Outer labels
    const lr = outerR + 12;
    const lx = cx + lr * Math.cos(amid), ly = cy + lr * Math.sin(amid);
    const label = i < 12 ? `D${i+1}` : `N${i-11}`;
    svg += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="central" font-size="7" fill="rgba(232,230,224,0.2)" font-family="DM Sans,sans-serif">${label}</text>`;
  }
  // Center
  svg += `<circle cx="${cx}" cy="${cy}" r="${innerR-4}" fill="#111118" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>`;
  svg += `<text x="${cx}" y="${cy-18}" text-anchor="middle" font-size="11" fill="rgba(232,230,224,0.35)" font-family="DM Sans,sans-serif">HORA</text>`;
  svg += `<text x="${cx}" y="${cy+6}" text-anchor="middle" font-size="22" font-weight="600" fill="${currentHora.planet.color}" font-family="Cormorant Garamond,serif">${currentHora.planet.name}</text>`;
  svg += `<text x="${cx}" y="${cy+24}" text-anchor="middle" font-size="11" fill="rgba(232,230,224,0.4)" font-family="Noto Sans Devanagari,sans-serif">${currentHora.planet.hindi}</text>`;

  document.getElementById('horaClockSvg').innerHTML = svg;

  // Info panel
  document.getElementById('horaCurrentPlanet').textContent = currentHora.planet.name;
  document.getElementById('horaCurrentPlanet').style.color = currentHora.planet.color;
  document.getElementById('horaCurrentTime').textContent = `${formatHoraTime(currentHora.startTime)} – ${formatHoraTime(currentHora.endTime)} · Hora ${currentIdx+1} of 24 · ${currentHora.isDay ? 'Daytime' : 'Nighttime'}`;

  document.getElementById('horaDayRuler').textContent = `${dayRuler.name} (${dayRuler.hindi})`;
  document.getElementById('horaDayRuler').style.color = dayRuler.color;
  document.getElementById('horaDayExplain').textContent = `${dayRuler.day} · ${dayRuler.dayHindi} · Sunrise at ${sunrise.riseStr} starts with ${dayRuler.name} hora`;

  // Sequence grid
  let seqHtml = '';
  horas.forEach((h, i) => {
    const cls = i === currentIdx ? ' active' : '';
    const label = i < 12 ? `D${i+1}` : `N${i-11}`;
    seqHtml += `<div class="hora-seq-cell${cls}" style="background:${h.planet.color}${i===currentIdx?'33':'15'};color:${h.planet.color}"><span class="seq-num">${label}</span>${h.planet.sym}</div>`;
  });
  document.getElementById('horaSeqGrid').innerHTML = seqHtml;
}

// ===================================================================
//  RENDER: PANCHANG
// ===================================================================

function renderPanchang() {
  const tithi = getTithi(currentDate);
  const nak = getNakshatra(currentDate);
  const rashi = getMoonRashi(currentDate);
  const yoga = getYoga(currentDate);
  const karana = getKarana(currentDate);
  const vara = currentDate.getDay();
  const angle = getSunMoonAngle(currentDate);

  const paksha = tithi <= 15 ? 'Shukla' : 'Krishna';
  const pakshaHindi = tithi <= 15 ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
  const tithiInPaksha = tithi <= 15 ? tithi : tithi - 15;
  const tithiName = TITHI_NAMES[(tithiInPaksha - 1) % 15];
  const tithiHindi = TITHI_HINDI[(tithiInPaksha - 1) % 15];
  const isCritical = CRITICAL_TITHIS.includes(tithiInPaksha);
  const angleDeg = Math.round(angle);
  const anglePercent = Math.round((angle / 360) * 100);

  const sun = getSunTimes(currentDate, DEFAULT_LAT, DEFAULT_LNG);

  const critBadge = isCritical ? `<span class="critical-badge">Critical</span>` : '';

  const html = `
    <div class="panch-card" data-type="tithi">
      <div class="panch-label">Tithi — Lunar Angle${critBadge}</div>
      <div class="panch-value">${tithiName}</div>
      <div class="panch-hindi">${pakshaHindi} ${tithiHindi}</div>
      <div class="panch-detail">${paksha} Paksha · Tithi ${tithiInPaksha} · ${angleDeg}° angular distance</div>
      <div class="angle-bar"><div class="angle-fill" style="width:${anglePercent}%;background:${tithi<=15?'var(--moon)':'#9988cc'}"></div></div>
    </div>
    <div class="panch-card" data-type="nakshatra">
      <div class="panch-label">Nakshatra — Lunar Mansion</div>
      <div class="panch-value">${NAKSHATRA_NAMES[nak]}</div>
      <div class="panch-detail">Mansion ${nak+1} of 27 · Each = 13°20' arc · Moon's stellar position in the sky</div>
    </div>
    <div class="panch-card" data-type="rashi">
      <div class="panch-label">Chandra Rashi — Moon Sign</div>
      <div class="panch-value">☽ ${RASHI_NAMES[rashi]}</div>
      <div class="panch-detail">${RASHI_ENGLISH[rashi]} · 30° zodiac sector · Sign ${rashi+1} of 12</div>
    </div>
    <div class="panch-card" data-type="yoga">
      <div class="panch-label">Yoga — Sun + Moon Sum</div>
      <div class="panch-value">${YOGA_NAMES[yoga]}</div>
      <div class="panch-detail">Yoga ${yoga+1} of 27 · Each = 13°20' of combined longitude · Luni-solar energy</div>
    </div>
    <div class="panch-card" data-type="karana">
      <div class="panch-label">Karana — Half-Tithi</div>
      <div class="panch-value">${KARANA_NAMES[karana]}</div>
      <div class="panch-detail">6° segment · Two karanas per tithi · Influences activity timing</div>
    </div>
    <div class="panch-card" data-type="vara">
      <div class="panch-label">Vara — Weekday · Sunrise/Sunset</div>
      <div class="panch-value">${VARA_NAMES[vara]}</div>
      <div class="panch-hindi">${VARA_HINDI[vara]}</div>
      <div class="panch-detail">↑ ${sun.riseStr} · ↓ ${sun.setStr} · Day ruled by ${PLANETS[DAY_TO_PLANET[vara]].name} hora at sunrise</div>
    </div>
  `;
  document.getElementById('panchangGrid').innerHTML = html;
}

// ===================================================================
//  RENDER: CALENDAR GRID
// ===================================================================

function renderCalendar() {
  const data = getMonthCalendarData(calYear, calMonth);
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  document.getElementById('calNavTitle').textContent = `${MONTH_NAMES[calMonth]} ${calYear}`;

  const headers = [
    {e:'Sun',h:'रवि'},{e:'Mon',h:'सोम'},{e:'Tue',h:'मंगल'},{e:'Wed',h:'बुध'},
    {e:'Thu',h:'गुरू'},{e:'Fri',h:'शुक्र'},{e:'Sat',h:'शनि'}
  ];
  let html = headers.map(h => `<div class="cal-header">${h.e}<span class="hindi">${h.h}</span></div>`).join('');

  for (let i = 0; i < data.startDow; i++) {
    html += `<div class="cal-cell empty"></div>`;
  }

  data.days.forEach(d => {
    const dateStr = `${calYear}-${calMonth}-${d.gdate}`;
    const isToday = dateStr === todayStr;
    let cls = 'cal-cell';
    if (isToday) cls += ' today';
    if (d.isCritical) cls += ' critical';
    else if (d.festivals.length) cls += ' festival';
    const tithiCls = d.paksha === 'S' ? 'shukla' : 'krishna';
    const pakshaLabel = d.paksha === 'S' ? 'शु' : 'कृ';

    html += `<div class="${cls}" onclick="selectCalDate(${calYear},${calMonth},${d.gdate})">
      <div class="cal-gdate">${d.gdate}</div>
      <div class="cal-hdate">${pakshaLabel} ${d.tithiInPaksha}</div>
      <div class="cal-tithi ${tithiCls}">${d.tithiName} ${d.angle}°</div>
      <div class="cal-nak">☆ ${d.nakshatra}</div>
      ${d.festivals.length ? '<div class="cal-fest-dot"></div>' : ''}
    </div>`;
  });

  document.getElementById('calGrid').innerHTML = html;
}

function selectCalDate(y, m, d) {
  currentDate = new Date(y, m, d, new Date().getHours(), new Date().getMinutes());
  document.getElementById('datePicker').value = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  renderAll();
}

function calPrev() {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
}
function calNext() {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
}

// ===================================================================
//  RENDER: RITU SEASONS
// ===================================================================

function renderRitu() {
  // Determine current ritu
  const dateStr = currentDate.toISOString().split('T')[0];
  let activeIdx = 1; // default Vasanta
  RITUS.forEach((r, i) => {
    if (dateStr >= r.start && dateStr < r.end) activeIdx = i;
  });
  if (selectedRitu === -1) selectedRitu = activeIdx;

  let timelineHtml = '';
  RITUS.forEach((r, i) => {
    const cls = i === selectedRitu ? ' active' : '';
    const isCurrent = i === activeIdx;
    timelineHtml += `<div class="ritu-block${cls}" style="background:${r.bg};${isCurrent?'box-shadow:inset 0 -2px 0 '+r.color:''}" onclick="selectRitu(${i})">
      <div class="ritu-name" style="color:${r.color}">${r.name}</div>
      <div class="ritu-hindi">${r.hindi}</div>
      <div class="ritu-months">${r.gregMonths}</div>
    </div>`;
  });
  document.getElementById('rituTimeline').innerHTML = timelineHtml;

  const r = RITUS[selectedRitu];
  const detailHtml = `
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <div>
        <span style="font-family:var(--font-display);font-size:22px;font-weight:600;color:${r.color}">${r.name}</span>
        <span style="font-family:var(--font-hindi);font-size:14px;color:var(--text-secondary);margin-left:8px">${r.hindi}</span>
        <span style="font-size:12px;color:var(--text-tertiary);margin-left:8px">· ${r.english}</span>
      </div>
      ${selectedRitu === activeIdx ? '<span style="font-size:10px;background:var(--gold-dim);color:var(--gold);padding:3px 10px;border-radius:20px;font-weight:500">CURRENT SEASON</span>' : ''}
    </div>
    <div class="ritu-detail-grid">
      <div class="ritu-detail-item">
        <div class="ritu-d-label">Hindu months</div>
        <div class="ritu-d-value">${r.months}</div>
        <div class="ritu-d-sub">${r.gregMonths} · Tropical zodiac: ${r.zodiac}</div>
      </div>
      <div class="ritu-detail-item">
        <div class="ritu-d-label">Nature & Dosha</div>
        <div class="ritu-d-value" style="font-size:13px">${r.nature}</div>
      </div>
      <div class="ritu-detail-item">
        <div class="ritu-d-label">Ayurvedic Guidance (Ritucharya)</div>
        <div class="ritu-d-sub">${r.ayurveda}</div>
      </div>
      <div class="ritu-detail-item">
        <div class="ritu-d-label">Key Festivals</div>
        <div class="ritu-d-sub">${r.festivals}</div>
      </div>
      <div class="ritu-detail-item">
        <div class="ritu-d-label">Agriculture</div>
        <div class="ritu-d-sub">${r.agriculture}</div>
      </div>
      <div class="ritu-detail-item">
        <div class="ritu-d-label">Dates (2026)</div>
        <div class="ritu-d-sub">${r.start} to ${r.end}</div>
      </div>
    </div>
  `;
  document.getElementById('rituDetail').innerHTML = detailHtml;
}

function selectRitu(i) {
  selectedRitu = i;
  renderRitu();
}

// ===================================================================
//  HEADER & DATE MANAGEMENT
// ===================================================================

function updateHeader() {
  const tithi = getTithi(currentDate);
  const paksha = tithi <= 15 ? 'Shukla' : 'Krishna';
  const tithiInPaksha = tithi <= 15 ? tithi : tithi - 15;
  const tithiName = TITHI_NAMES[(tithiInPaksha - 1) % 15];

  // Approximate Vikram Samvat
  const gregYear = currentDate.getFullYear();
  const gregMonth = currentDate.getMonth();
  const vs = gregMonth >= 2 ? gregYear + 57 : gregYear + 56; // rough

  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const gregStr = currentDate.toLocaleDateString('en-IN', opts);
  document.getElementById('headerDate').textContent = `${gregStr} · Vikram Samvat ${vs} · ${paksha} ${tithiName}`;

  document.getElementById('datePicker').value = currentDate.toISOString().split('T')[0];
}

function goToDate() {
  const val = document.getElementById('datePicker').value;
  if (!val) return;
  const parts = val.split('-');
  currentDate = new Date(+parts[0], +parts[1]-1, +parts[2], new Date().getHours(), new Date().getMinutes());
  calYear = currentDate.getFullYear();
  calMonth = currentDate.getMonth();
  selectedRitu = -1;
  renderAll();
}

function goToday() {
  currentDate = new Date();
  calYear = currentDate.getFullYear();
  calMonth = currentDate.getMonth();
  selectedRitu = -1;
  renderAll();
}

// ===================================================================
//  RENDER ALL
// ===================================================================

function renderAll() {
  updateHeader();
  renderHoraClock();
  renderPanchang();
  renderCalendar();
  renderRitu();
  renderHowPlanetChain();
}

// ===================================================================
//  HOW IT WORKS — TABBED EDUCATION SECTION
// ===================================================================

function showHow(id) {
  document.querySelectorAll('.how-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.how-tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('how-' + id);
  if (panel) panel.classList.add('active');
  // Find the matching tab
  document.querySelectorAll('.how-tab').forEach(t => {
    const map = { 'Hora & Weekdays':'hora', 'Tithi & Lunar Angles':'tithi', 'Nakshatra & Rashi':'nakshatra', 'Panchang (5 Limbs)':'panchang', 'Ritu & Seasons':'ritu', 'Vikram Samvat':'samvat' };
    if (map[t.textContent] === id) t.classList.add('active');
  });
}

function renderHowPlanetChain() {
  const chain = document.getElementById('howPlanetChain');
  if (!chain) return;
  const order = [
    { name: 'Saturn', color: '#7888a4' },
    { name: 'Jupiter', color: '#d4a844' },
    { name: 'Mars', color: '#d45454' },
    { name: 'Sun', color: '#e8963c' },
    { name: 'Venus', color: '#c488d4' },
    { name: 'Mercury', color: '#6bb86b' },
    { name: 'Moon', color: '#8cb4d8' }
  ];
  let html = '';
  order.forEach((p, i) => {
    html += `<span class="planet-pill" style="color:${p.color};border-color:${p.color}33;background:${p.color}15">${p.name}</span>`;
    if (i < order.length - 1) html += `<span class="arrow-sep">→</span>`;
  });
  html += `<span class="arrow-sep">→</span><span style="font-size:11px;color:var(--text-tertiary)">(repeats)</span>`;
  chain.innerHTML = html;
}

// Init
renderAll();

// Auto-update hora clock every minute
setInterval(() => {
  if (currentDate.toDateString() === new Date().toDateString()) {
    currentDate = new Date();
    renderHoraClock();
  }
}, 60000);