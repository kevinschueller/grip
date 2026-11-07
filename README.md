# Grip

A twelve week, load based rehab plan for golfer's elbow (medial elbow tendinopathy), as a phone first web app. Static files only: no build step, no server, no account. Progress lives in `localStorage` on the device.

Open it on an iPhone in Safari, then Share > Add to Home Screen. It runs full screen with its own icon.

## What is in here

- `index.html` the shell and the Learn copy
- `styles.css` design tokens and layout
- `app.js` program data, day logic, streak, ledger, pain chart
- `assets/icons` Phosphor regular SVGs, masked and tinted from CSS
- `assets/fonts/archivo-latin.woff2` self hosted variable font
- `PRODUCT.md`, `docs/direction-contract.md` design record

## The program model

Twelve weeks in three phases. Phase one (weeks 1 and 2) is isometrics and load management. Phase two (weeks 3 to 6) adds slow eccentrics and grip carries. Phase three (weeks 7 to 12) moves to heavy slow resistance and a return to normal training.

Each weekday has a fixed session shape; the dose column changes with the phase. Sunday is rest plus a load audit. Progress rules, red flags and the supporting videos are on the Learn tab.

## Editing

Edit `app.js` for program content (`EX`, `PHASES`, `PLAN`, `VIDEOS`, `FAQ`). Edit `styles.css` tokens at the top for colour and type. No dependencies, no bundler.

## Attribution

Loading approach follows the published material from E3 Rehab, Physiotutors and Rehab Science. Video embeds are theirs and load only on tap. This is education, not medical advice.
