<div align="center">

# 🕉️ Vedic Panchang Dashboard

### वैदिक पंचांग — पाँच अंगों का दर्शन

**An interactive, single-file Hindu astronomical calendar with live Hora clock, Tithi calculator, Nakshatra tracker, monthly Panchang grid, and six Ritu seasons — built entirely in vanilla HTML, CSS & JavaScript.**

[Live Demo](#live-demo) · [Features](#features) · [The Science](#the-science-behind-it) · [How Calculations Work](#how-calculations-work) · [Accuracy](#accuracy--limitations) · [Contributing](#contributing) · [Sources](#classical-sources--references)

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)

</div>

---

## Why This Exists

Most people think **Ravivar, Somvar, Mangalvar** are arbitrary names and **Ekadashi, Purnima, Amavasya** are just religious dates.

They're not. They are **calculated astronomical values** rooted in celestial mechanics — documented thousands of years ago in texts like the **Surya Siddhanta**, **Brihat Parashara Hora Shastra**, and the **Jyotisha Vedanga**.

This dashboard makes that science **visible and interactive**. Every element you see — the Hora clock, the Tithi angle, the Nakshatra position — is computed in real-time using astronomical algorithms, not looked up from a table.

---

## Features

### 🪐 Hora Clock — Planetary Hours
- Live circular clock showing all **24 Hora** (planetary hours) from sunrise
- **Unequal hours**: day-horas computed from actual sunrise-to-sunset ÷ 12, night-horas from sunset-to-next-sunrise ÷ 12
- Cosmic sequence: **Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon** repeating
- Shows current hora ruler, day ruler, and the full 24-hora sequence
- **Auto-updates every minute** when viewing today's date

### 🌙 Panchang — Five Limbs of Time
- **Tithi** — Sun-Moon angular distance (each tithi = 12°), with degree value and progress bar
- **Nakshatra** — Moon's position across 27 lunar mansions (each = 13°20')
- **Yoga** — Combined Sun + Moon longitude divided into 27 segments
- **Karana** — Half-tithi (6° segments), 11 named types cycling
- **Vara** — Weekday with planetary ruler from Hora, sunrise/sunset times
- Critical tithis (Chaturthi, Ashtami, Ekadashi, Trayodashi) flagged automatically

### 📅 Monthly Calendar Grid
- Full month view with **tithi, angular degree, nakshatra, and paksha** for each day
- Hindi (Devanagari) and English bilingual labels (रवि/Sun, सोम/Mon, etc.)
- Visual markers for **critical tithis** (red) and **festivals/vrats** (green)
- Navigate between months with arrow buttons
- Today's date highlighted automatically

### 🌿 Ritu — Six Seasons
- Complete Vedic seasonal cycle with **2026 dates** tied to solar zodiac pairs
- **Ayurvedic Ritucharya** guidance for each season (diet, lifestyle, dosha management)
- Agricultural relevance, key festivals, and astronomical anchors (solstices/equinoxes)
- Current season auto-detected and highlighted

### 📖 How It Works — Educational Section
- **6 tabbed panels** explaining the science behind every calculation
- Hora & weekday derivation (24 mod 7 = 3 proof)
- Tithi as angular geometry (360° ÷ 30 = 12° per tithi)
- Nakshatra & Rashi coordinate systems
- Panchang as a 5-dimensional astronomical coordinate system
- Vikram Samvat luni-solar calibration with Adhik Mas
- Formulas, tables, step-by-step derivations, and classical references

### 🎨 Design
- Dark astronomical theme with gold accents
- Cormorant Garamond display font + DM Sans body + Noto Sans Devanagari for Hindi
- Fully responsive (desktop, tablet, mobile)
- Zero dependencies — single HTML file, no build step

---

## Live Demo

1. **Download** `vedic-panchang-dashboard.html`
2. **Open** it in any modern browser (Chrome, Firefox, Safari, Edge)
3. That's it. No server, no install, no dependencies.

Or clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/vedic-panchang-dashboard.git
cd vedic-panchang-dashboard
open vedic-panchang-dashboard.html
```

---

## The Science Behind It

### How Weekday Names Are Calculated (Hora)

Weekday names are **not arbitrary** — they are derived from the Hora system:

```
Cosmic Sequence: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon (repeating)

Sunrise to sunset → divided into 12 unequal day-horas
Sunset to next sunrise → divided into 12 unequal night-horas

The planet ruling the FIRST hora at sunrise = the day's ruler = the day's name
```

**The key insight**: After 24 horas cycle through the 7-planet sequence, `24 mod 7 = 3`, so each successive sunrise shifts exactly **3 positions ahead** in the cosmic sequence:

```
Sun (3) →  +3 → Moon (6)    → +3 → Mars (2)    → +3 → Mercury (5)
         Sunday    Monday          Tuesday          Wednesday

→ +3 → Jupiter (1) → +3 → Venus (4)  → +3 → Saturn (0)
       Thursday          Friday            Saturday
```

This is why the weekday order **doesn't match** the orbital sequence — it's the modular arithmetic of planetary hours that creates it.

### How Tithi Works (Lunar Angles)

Ekadashi, Purnima, Amavasya are **angles in space**, not dates:

```
360° Moon revolution ÷ 30 = 12° per Tithi

 0°   → Amavasya (New Moon — Sun & Moon aligned)
 12°  → Shukla Pratipada
 24°  → Shukla Dwitiya
 ...
 96°  → Shukla Ashtami (near quadrature — ⚠ critical)
 132° → Shukla Ekadashi (⚠ critical — fasting prescribed)
 180° → Purnima (Full Moon — Sun & Moon opposite)
 ...
 360° → Back to Amavasya
```

**Critical tithis** (Chaturthi 48°, Ashtami 96°, Ekadashi 132°, Trayodashi 156°) correspond to angular positions where Sun-Moon gravitational geometry shifts — similar to resonance points in physics.

### How Nakshatra & Rashi Work

```
360° ecliptic ÷ 27 = 13°20' per Nakshatra (lunar mansion)
360° ecliptic ÷ 12 = 30° per Rashi (zodiac sign)

Each Rashi contains exactly 2.25 Nakshatras (30° ÷ 13.33° = 2.25)
```

The Moon moves ~13° per day, changing Nakshatra roughly daily and Rashi every ~2.3 days.

---

## How Calculations Work

### Astronomical Algorithms Used

| Element | Method | Formula |
|---|---|---|
| **Sun Longitude** | Truncated solar theory (Meeus) | Mean longitude + equation of center, corrected by Lahiri Ayanamsa |
| **Moon Longitude** | Simplified lunar theory | Mean longitude + 6 major perturbation terms (evection, variation, etc.) |
| **Tithi** | Angular difference | `floor((Moon_lon - Sun_lon) mod 360° ÷ 12°) + 1` |
| **Nakshatra** | Moon position | `floor(Moon_lon mod 360° ÷ 13.333°)` |
| **Rashi** | Moon position | `floor(Moon_lon mod 360° ÷ 30°)` |
| **Yoga** | Combined longitude | `floor((Sun_lon + Moon_lon) mod 360° ÷ 13.333°)` |
| **Karana** | Half-tithi | `floor((Moon_lon - Sun_lon) mod 360° ÷ 6°)` |
| **Hora** | Sunrise division | Day-horas = (sunset - sunrise) ÷ 12, cycled through 7-planet sequence |
| **Sunrise/Sunset** | Solar position algorithm | Based on latitude/longitude, day-of-year, and solar zenith angle |
| **Ayanamsa** | Lahiri (approximate) | `23.85° + 0.0137° × years_from_J2000` |

### What the Code Does Step-by-Step

```
1. Take the selected date → compute Julian Day Number
2. Calculate Sun's sidereal longitude (orbital mechanics + Lahiri correction)
3. Calculate Moon's sidereal longitude (with 6 perturbation terms)
4. Tithi = floor((Moon - Sun) mod 360 ÷ 12) + 1
5. Nakshatra = floor(Moon longitude ÷ 13.333)
6. Rashi = floor(Moon longitude ÷ 30)
7. Yoga = floor((Sun + Moon) mod 360 ÷ 13.333)
8. Karana = floor((Moon - Sun) mod 360 ÷ 6)
9. Sunrise/Sunset = solar position for lat/lng (default: Hubballi, Karnataka)
10. Hora = divide day/night into 12 segments each, assign 7-planet sequence
```

---

## Accuracy & Limitations

### What's Precise
- ✅ **Hora clock** — Accurate (uses computed sunrise/sunset for your location)
- ✅ **Weekday derivation** — Mathematically exact (24 mod 7 = 3 is arithmetic fact)
- ✅ **Ritu season dates** — Correct for 2026 (based on tropical zodiac ingress)
- ✅ **All definitions and principles** — Sourced from Surya Siddhanta, Brihat Parashara Hora Shastra

### What's Approximate
- ⚠️ **Tithi** — Within ±1 tithi (~12°) of professional tools like Drik Panchang
- ⚠️ **Nakshatra** — Within ±1 nakshatra due to simplified lunar theory
- ⚠️ **Yoga/Karana** — Approximate, same margin as tithi

### Why the Gap Exists

Professional panchang software (Drik Panchang, Prokerala) uses the **Swiss Ephemeris** or **JPL DE431** — precision planetary ephemerides with sub-arcsecond accuracy built from decades of observations. These require multi-megabyte data files.

This dashboard uses **simplified Meeus-style algorithms** that run entirely client-side in ~200 lines of JS. The trade-off: compact + educational + zero dependencies, but with ~0.5–1° Moon error (enough to sometimes shift a tithi boundary).

**The Surya Siddhanta's original method** uses ahargana (days from Kali Yuga epoch), planetary Bhaganas (revolution counts per Mahayuga), and epicyclic corrections — a different but equally valid approach that this dashboard does not implement.

### For Exact Panchang
For ritual/muhurat purposes requiring exact tithi timing, use:
- [Drik Panchang](https://www.drikpanchang.com) — Swiss Ephemeris based
- [Prokerala Panchang](https://www.prokerala.com/astrology/panchang/) — location-aware
- [MyPanchang](https://www.mypanchang.com) — verified against Rashtriya Panchang

---

## Classical Sources & References

### Primary Texts
- **Surya Siddhanta** (सूर्य सिद्धान्त) — ~4th–5th century CE. Foundation of Indian astronomical calculations. Defines tithi, nakshatra, planetary mean/true motions, ayanamsa.
- **Brihat Parashara Hora Shastra** (बृहत् पाराशर होरा शास्त्र) — Attributed to Sage Parashara. Core text on Hora (planetary hours), Rashi, and predictive astrology.
- **Muhurta Chintamani** — Explains tithi as angular relationship, yoga calculation, and muhurat determination.
- **Jyotisha Vedanga** — Earliest known Indian text on astronomical timekeeping (c. 1400–1200 BCE). Establishes the 27-nakshatra system.
- **Charaka Samhita & Sushruta Samhita** — Ayurvedic texts documenting Ritucharya (seasonal regimen) tied to the six Ritu.

### Modern Academic References
- Bhujle & Vahia (2006), *"Calculations of Tithis: An Extension of Suryasiddhanta Formulation"* — Validates tithi formulas against NASA solar eclipse data from 2000 BC to 3000 AD.
- Sewell & Dikshit, *"The Indian Calendar"* — Detailed procedure for computing tithis in ancient Indian astronomy.
- Jean Meeus, *"Astronomical Algorithms"* (1991) — Source for the simplified solar/lunar longitude formulas used in this dashboard.

### Conceptual Validation
- **Tithi = 12° angular segment**: Confirmed in Surya Siddhanta, Muhurta Chintamani, and modern ephemeris calculations.
- **Hora → Weekday derivation (24 mod 7)**: Documented in Indian, Hellenistic, and Babylonian traditions independently.
- **27 Nakshatras of 13°20'**: Established in Jyotisha Vedanga, confirmed by modern sidereal astronomy.
- **6 Ritus tied to solar zodiac pairs**: Documented in Vedic literature, aligned with tropical zodiac ingress dates.

---

## Tech Stack

| Component | Technology |
|---|---|
| Structure | Vanilla HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Cormorant Garamond, DM Sans, Noto Sans Devanagari) |
| Dependencies | **None** |
| Build step | **None** — single file, open in browser |
| Framework | **None** |

---

## Project Structure

```
vedic-panchang-dashboard/
├── vedic-panchang-dashboard.html   # The entire application (single file)
├── README.md                        # This file
└── LICENSE                          # MIT License
```

---

## Customization

### Change Default Location
Find this line in the `<script>` section and update with your coordinates:
```javascript
const DEFAULT_LAT = 15.3647;  // Latitude (default: Hubballi, Karnataka)
const DEFAULT_LNG = 75.1240;  // Longitude
```

### Add More Festivals
Extend the `FESTIVALS_2026` object:
```javascript
const FESTIVALS_2026 = {
  '2026-03-04': ['Holi'],
  '2026-03-19': ['Gudi Padwa', 'Chaitra Navratri'],
  // Add your dates here:
  '2026-MM-DD': ['Festival Name'],
};
```

### Adjust Ayanamsa
The Lahiri Ayanamsa approximation can be tuned:
```javascript
const ayan = 23.85 + 0.0137 * (jd - 2451545) / 365.25;
```

---

## Contributing

Contributions are welcome! Areas where help would be especially valuable:

- 🔭 **Higher-precision lunar theory** — Implement ELP2000 or truncated VSOP87 for better Moon positions
- 📜 **Surya Siddhanta native algorithm** — Implement the original ahargana + bhagana method alongside modern algorithms
- 🌍 **Geolocation** — Auto-detect user location for accurate sunrise/sunset
- 📱 **PWA support** — Add service worker for offline use
- 🗓️ **More festivals** — Expand the festival database beyond 2026
- 🌐 **Translations** — Add Tamil, Telugu, Kannada, Gujarati, Marathi support
- ♿ **Accessibility** — Improve screen reader support and keyboard navigation

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/better-lunar-theory`)
3. Commit your changes (`git commit -m 'Add ELP2000 lunar longitude calculation'`)
4. Push to the branch (`git push origin feature/better-lunar-theory`)
5. Open a Pull Request

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

The astronomical principles and formulas are from public domain classical texts. The Surya Siddhanta, Jyotisha Vedanga, and other referenced works are ancient texts in the public domain.

---

## Acknowledgments

- **Surya Siddhanta** and the ancient Indian astronomical tradition
- **Bhujle & Vahia** for their modern mathematical validation of Surya Siddhanta tithi formulas
- **Jean Meeus** for *Astronomical Algorithms*
- **Prokerala** and **Drik Panchang** for reference panchang data used in validation
- The **Vedic Jyotisha** tradition of scholar-astronomers who mapped the cosmos with extraordinary precision using observation, geometry, and mathematics

---

<div align="center">

*"ज्योतिषामयनं साक्षात् यत्तत् ज्ञानमुत्तमम्"*

*Jyotisha — the science of light — is the supreme knowledge of time.*

— Jyotisha Vedanga

</div>
