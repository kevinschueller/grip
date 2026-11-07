# Grip, design system

One surface, phone first. Mode: Operate, with a Read tab. The system is a printed job card and a steel rule: chalk ground, iron ink, one oxide red field.

## Colour, three roles and no fourth

| Token | Light | Dark | Role |
|---|---|---|---|
| `--ground` | `#e9eae4` | `#101210` | Page ground, the paper the job card sits on |
| `--paper` | `#f4f3ec` | `#171a15` | Session sheets, cards, dock |
| `--ink` | `#151713` | `#e8e5da` | Primary text |
| `--ink-2` | `#4e564b` | `#b3b8ac` | Body copy inside sheets |
| `--muted` | `#6f776b` | `#8d9488` | Meta, doses, timestamps |
| `--rust` | `#7e2c18` | `#742716` | The work order field, filled stamps, active marks |
| `--rust-ink` | `#8a2f1b` | `#e0895f` | Rust as text and hairline on ground |
| `--on-rust` | `#f6f1e4` | `#f3ede0` | Text and marks inside the rust field |
| `--hair` | ink at 14% | ink at 15% | Single border weight everywhere |

Contrast measured in the built page: ink on ground 14.9, muted on paper 5.6, body on ground 9.3, rust field text 8.8. No second accent. The warning panel is the rust wash, not a new hue.

## Type

One family: Archivo variable, self hosted, `wdth` 62 to 125 and `wght` 100 to 900. Two widths carry the hierarchy.

| Role | Size / width / weight | Notes |
|---|---|---|
| Work order title | 38px, 78% width, 600 | Uppercase, `-0.015em`, line height 0.98 |
| Screen title | 33px, 84%, 600 | Sentence case, `-0.02em` |
| Sheet heading | 17px, 92%, 600 | |
| Body | 14 to 15px, 100%, 400 | line height 1.55 |
| Dose and meta | 12.5px | tabular numerals |
| Label | 11px, 600, uppercase | `0.15em` tracking |

No monospace. Numerals are tabular throughout, because doses and dates are data. Tracking never goes below `-0.02em`.

## Shape and elevation

One radius system: 12px for panels and sheets, 10px for nested blocks, 8px for the stamp control, full pill for chips, icon buttons and the streak badge. Elevation is a single hairline border. No shadows, no second border, no gradients except the header scrim that keeps text legible over scrolling content.

## Components

- **Work order**: rust field, week and phase on the top rule, title, date and dose summary, four-segment tally, and a rotated `Filed` stamp when the session completes.
- **Session row**: 26px index, movement name, dose, 38px square stamp control. Tapping the row expands cues and a video link; tapping the stamp completes it.
- **Pain gauge**: an eleven-tick steel rule. The selected tick thickens to 2px and takes the rust; the numeral grows and boldens. Replaces the slider so it is usable one handed.
- **Dock**: four tabs, 62px, paper at 92% with a hairline. Active tab in rust.
- **Video card**: rust field with the channel in the corner and a single outlined play mark. No third-party thumbnail, so nothing loads until tapped.
- **Ledger**: seven cells per week row, filled rust for a complete day, outlined for a partial one.

## Motion

Three authored moments and nothing else: rows rise 7px on tab change with a 40ms cascade; the stamp control fills and draws its check over 220ms; the completion stamp lands with a 0.45s rotate-scale overshoot. Reduced motion collapses all three to instant state changes.

## States

Every control ships hover, active, focus-visible and disabled-equivalent states. Session rows have done, open and idle. The gauge has unset (a hairline rule, never a dash), set and flare. The ledger distinguishes untouched, partial and complete. Empty states: no pain logged, no sessions yet, program complete.

## Copy rules

Controls name their action. Pain guidance changes with the number, in the second person, with no reassurance that is not earned. No em dashes anywhere on the surface. Nothing claims a cure or a timeline beyond six to twelve weeks.
