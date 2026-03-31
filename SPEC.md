# Ugly Metronome Specification

## Project Overview
- **Project name**: Ugly Metronome
- **Type**: Interactive HTML/JS web app
- **Core functionality**: A fully functional metronome that is graphically offensively ugly
- **Target users**: People who hate their eyes

## UI/UX Specification

### Layout Structure
- Single page, vertically centered content
- Container with garish border
- BPM display prominently (and awkwardly) placed
- Tempo slider with terrible styling
- Start/Stop button that's hard to miss

### Visual Design

**Color Palette**
- Background: `#FF00FF` (hot magenta) with `#00FF00` (lime green) polka dots
- Container: `#FFFF00` (yellow) background with `#FF0000` (red) border
- Primary accent: `#00FFFF` (cyan)
- Text: `#0000FF` (blue) on yellow, changing to `#FF00FF` on cyan
- Button: `#FF6600` (orange) with `#FFFFFF` white text

**Typography**
- BPM Display: Papyrus (the font of champions), 72px, bold
- Labels: Comic Sans MS, 24px
- All text: varying sizes, clashing colors, no hierarchy

**Spacing**
- Inconsistent margins (random px values: 3px, 47px, 13px)
- Elements misaligned on purpose
- Padding that makes no sense

**Visual Effects**
- Marquee text scrolling "TICK TOCK" 
- Rainbow gradient on slider
- Blink animation on button hover
- Box shadow that doesn't match anything: `10px 10px 0px #888888`
- Border: 5px dashed red on one side, solid on others

### Components

**BPM Display**
- Shows current BPM in giant Papyrus font
- Changes color randomly every tick

**Tempo Slider**
- Custom styled range input
- Rainbow gradient track
- Square thumb that rotates on drag
- Range: 20-300 BPM

**Start/Stop Button**
- Oversized rectangular button
- States: 
  - Default: Orange with white Comic Sans text
  - Hover: Blinks aggressively
  - Active: Inverts colors

**Beat Indicator**
- A bouncing ball animation
- Uses the ugliest shade of brown: `#8B4513`
- Bounces with no easing (linear, mechanical)

## Functionality Specification

### Core Features
1. **Metronome timing**: Accurate BPM from 20-300
2. **Visual beat indicator**: Bounces on each beat
3. **Audio click**: Web Audio API beep on each beat
4. **BPM slider**: Adjust tempo in real-time
5. **Start/Stop toggle**: Click to start or stop

### User Interactions
- Drag slider to change BPM
- Click button to start/stop
- Visual feedback on every beat

### Audio
- Short beep sound generated via Web Audio API
- Frequency: 800Hz sine wave
- Duration: 50ms

## Acceptance Criteria
- [ ] Page loads with offensive colors visible
- [ ] Papyrus font is used for BPM display
- [ ] Slider adjusts BPM from 20-300
- [ ] Clicking start begins metronome
- [ ] Beat indicator animates on each tick
- [ ] Audio click plays on each beat
- [ ] At least 3 different fonts used on page
- [ ] At least 5 clashing colors visible
- [ ] Hover effects cause visual discomfort