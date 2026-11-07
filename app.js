/* Grip: a twelve week loading plan for medial elbow pain. No build step, no server. */
(() => {
  "use strict";

  const STORE = "grip.v1";
  const WEEKS = 12;

  /* ---------- data ---------- */

  const EX = {
    mobility: {
      name: "Shoulder and mid back prep",
      mins: 3,
      dose: { 1: "2 x 10 each", 2: "2 x 10 each", 3: "2 x 10 each" },
      cues: [
        "Open book on the floor: knees bent, top arm sweeps across, 10 slow reps a side.",
        "Prone Y raise, thumbs up, squeeze the shoulder blades, 3 second hold at the top.",
        "A shoulder that moves takes load off the elbow. This is not filler."
      ]
    },
    isoFlex: {
      name: "Isometric wrist flexion hold",
      mins: 4,
      dose: { 1: "5 x 30 seconds", 2: "4 x 40 seconds", 3: "3 x 45 seconds" },
      cues: [
        "Forearm on your thigh or a table, palm up, wrist free.",
        "Other hand presses down on the palm; you press up. Nothing moves.",
        "Build to about 70 percent effort. A dull ache at 3 out of 10 is the target.",
        "Rest 30 seconds between holds."
      ],
      video: "82QVCyyl-F8"
    },
    isoPron: {
      name: "Isometric pronation hold",
      mins: 2,
      dose: { 1: "3 x 30 seconds", 2: "3 x 30 seconds", 3: "optional" },
      cues: [
        "Hold a hammer or a light dumbbell by the handle, wrist neutral.",
        "Resist turning the palm down. Keep the wrist locked and quiet.",
        "Release slowly each round instead of dropping it."
      ]
    },
    eccFlex: {
      name: "Slow eccentric wrist flexion",
      mins: 4,
      dose: { 1: "skip", 2: "3 x 12, 4 seconds down", 3: "4 x 8, 3 seconds down" },
      cues: [
        "Forearm supported, palm up, hand off the edge of the bench.",
        "Lift the weight with your other hand, then lower it alone over 3 to 4 seconds.",
        "Only the lowering counts. The slow part is the medicine.",
        "Add weight once 12 clean reps feel like a 6 out of 10 effort."
      ],
      video: "qxBxN4HDhKM"
    },
    eccRot: {
      name: "Eccentric pronation and supination",
      mins: 3,
      dose: { 1: "skip", 2: "2 x 10 each way", 3: "3 x 10 each way" },
      cues: [
        "Elbow bent, tucked at your side, holding a hammer by the handle.",
        "Rotate palm down slowly, then palm up slowly. Three seconds each way.",
        "Stop before it passes 3 out of 10. Sharp pain ends the set."
      ],
      video: "tBgc5NE3CMI"
    },
    carry: {
      name: "Grip carry",
      mins: 3,
      dose: { 1: "skip", 2: "3 x 30 seconds", 3: "3 x 45 seconds, heavier" },
      cues: [
        "Hold a weight at your side, arm long, shoulders stacked.",
        "Grip hard the whole time. This is the tendon doing its real job.",
        "No leaning. If the grip fails before the time, drop the weight."
      ]
    },
    audit: {
      name: "Cap the aggravating load",
      mins: 0,
      dose: { 1: "once today", 2: "once today", 3: "once today" },
      cues: [
        "Straps on any pull above half your usual weight.",
        "Skip palm up curls and heavy carries on the sore side today.",
        "Note anything that hurt. Tomorrow morning is the verdict."
      ]
    }
  };

  const PHASES = [
    {
      n: 1,
      name: "Settle",
      from: 1,
      to: 2,
      goal: "Quiet the tendon without unloading it. Isometrics daily, volume down everywhere else.",
      detail: [
        "Isometrics are the whole job. Long holds, moderate effort.",
        "Cut pulling volume by about a third. Straps on everything heavy.",
        "No eccentric work yet. No stretching it hard."
      ]
    },
    {
      n: 2,
      name: "Load",
      from: 3,
      to: 6,
      goal: "Teach the tendon to handle slow, heavy work again. This is the phase that changes the outcome.",
      detail: [
        "Slow eccentrics enter. Three to four seconds on every lowering.",
        "Grip carries twice a week. This is the movement that transfers to real life.",
        "Expect it to feel like training, not therapy. Keep it under 3 out of 10."
      ]
    },
    {
      n: 3,
      name: "Rebuild",
      from: 7,
      to: 12,
      goal: "Heavy slow resistance, then straight back into your normal training.",
      detail: [
        "Fewer reps, more weight, three seconds down every rep.",
        "Rows and pulls return to working weight with a neutral grip first.",
        "The last four weeks are the test: does it hold at full volume."
      ]
    }
  ];

  const PLAN = {
    0: ["mobility", "audit"],
    1: ["mobility", "isoFlex", "isoPron", "eccFlex", "carry"],
    2: ["mobility", "isoFlex"],
    3: ["mobility", "isoFlex", "eccFlex", "eccRot"],
    4: ["mobility", "isoFlex", "isoPron"],
    5: ["mobility", "isoFlex", "eccFlex", "carry"],
    6: ["mobility", "isoFlex", "audit"]
  };

  const VIDEOS = [
    {
      id: "3CJMz0HoGXk",
      title: "Golfer's elbow rehab: education, myths, stretching and strengthening",
      src: "E3 Rehab"
    },
    {
      id: "uim7jD1O4Cw",
      title: "How to get rid of golfer's elbow",
      src: "Rehab Science"
    },
    {
      id: "YRgwcowOqK0",
      title: "Modalities, load management and exercise selection",
      src: "Physiotutors"
    }
  ];

  const FAQ = [
    {
      q: "Should I wear a brace?",
      a: "A counterforce strap worn about two fingers below the elbow crease can take the edge off during gripping work. It is a symptom tool, not a cure. Keep doing the loading."
    },
    {
      q: "Ice or heat?",
      a: "Whichever feels better for ten minutes. Neither changes healing. Do not ice before exercise, since you want the tissue warm enough to work."
    },
    {
      q: "Can I keep lifting?",
      a: "Yes, with the volume and grip adjusted. Cutting everything out for six weeks is why this injury drags on. Keep the movements that stay under 3 out of 10 and do not make the next morning worse."
    },
    {
      q: "How long does this take?",
      a: "Six to twelve weeks of consistent loading is the usual range, and the first two weeks often feel like nothing is happening. Judge it in three week blocks, not days."
    },
    {
      q: "Should I stretch it?",
      a: "No hard stretching. The tight feeling is an irritated tendon, not a short muscle. Gentle range of motion is enough."
    },
    {
      q: "What if it flares?",
      a: "Drop back to isometrics for three or four days, cut the aggravating volume, then resume the phase you were in one step lighter. A flare is information, not failure."
    },
    {
      q: "Do I need a scan?",
      a: "Usually not. This is a clinical diagnosis made by pressing and loading the tendon. Imaging is for suspected fracture, instability or a tear."
    }
  ];

  const RANKS = [
    { min: 0, name: "Empty bar", note: "Everything is still ahead of you. Stamp the first item." },
    { min: 10, name: "Two and a half a side", note: "The habit exists now. That is the hard part." },
    { min: 25, name: "Five a side", note: "Loading is becoming a normal part of the week." },
    { min: 45, name: "Ten a side", note: "This is where the tendon starts to answer back." },
    { min: 70, name: "A plate a side", note: "Consistency is doing the work now." },
    { min: 100, name: "Two plates", note: "Most people quit before here. You did not." },
    { min: 140, name: "Three plates", note: "The elbow has been rebuilt, not just rested." }
  ];

  const BADGES = [
    { id: "first", t: "First stamp", d: "One item filed", icon: "seal-check", test: (s) => s.stamps >= 1 },
    { id: "three", t: "Three straight", d: "3 day streak", icon: "flame", test: (s) => s.best >= 3 },
    { id: "seven", t: "Full week", d: "7 day streak", icon: "flame", test: (s) => s.best >= 7 },
    { id: "phase2", t: "Loading phase", d: "Reached week 3", icon: "barbell", test: (s) => s.week >= 3 },
    { id: "half", t: "Halfway", d: "Reached week 6", icon: "timer", test: (s) => s.week >= 6 },
    { id: "pain", t: "Pain falling", d: "Latest week lower", icon: "chart-line-up", test: (s) => s.painFalling },
    { id: "fifty", t: "Fifty stamps", d: "50 items filed", icon: "trophy", test: (s) => s.stamps >= 50 },
    { id: "done", t: "Twelve weeks", d: "Program complete", icon: "check", test: (s) => s.week >= 12 && s.sessions >= 40 }
  ];

  /* ---------- state ---------- */

  const pad = (n) => String(n).padStart(2, "0");
  const keyOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseKey = (k) => {
    const [y, m, d] = k.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const midnight = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  const dayDiff = (a, b) => Math.round((midnight(b) - midnight(a)) / 86400000);

  let state = load();

  function load() {
    const today = keyOf(new Date());
    let raw = null;
    try { raw = localStorage.getItem(STORE); } catch (e) { /* private mode */ }
    let s = { v: 1, start: today, theme: "auto", log: {} };
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          s = Object.assign(s, parsed);
          s.log = parsed.log && typeof parsed.log === "object" ? parsed.log : {};
        }
      } catch (e) { /* corrupt, start clean */ }
    }
    if (!s.start || !/^\d{4}-\d{2}-\d{2}$/.test(s.start)) s.start = today;
    return s;
  }

  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* full or blocked */ }
  }

  const dayEntry = (key) => state.log[key] || (state.log[key] = { done: [], pain: null });

  function weekOf(d) {
    const days = dayDiff(parseKey(state.start), d);
    return Math.min(WEEKS, Math.floor(Math.max(0, days) / 7) + 1);
  }
  function phaseOf(week) {
    return week <= 2 ? 1 : week <= 6 ? 2 : 3;
  }
  function tasksFor(d) {
    const phase = phaseOf(weekOf(d));
    return (PLAN[d.getDay()] || ["mobility"])
      .filter((id) => EX[id] && EX[id].dose[phase] !== "skip")
      .map((id) => ({ id, ex: EX[id], dose: EX[id].dose[phase] }));
  }
  function titleFor(tasks, dow) {
    const ids = tasks.map((t) => t.id);
    if (ids.includes("eccRot")) return "Load day B";
    if (ids.includes("eccFlex") || ids.includes("carry")) return "Load day A";
    if (dow === 0) return "Rest and reset";
    if (dow === 6) return "Optional flush";
    return "Isometrics";
  }
  function minutesFor(tasks) {
    return tasks.reduce((n, t) => n + (t.ex.mins || 0), 0);
  }
  function completedIds(key) {
    const e = state.log[key];
    return e && Array.isArray(e.done) ? e.done : [];
  }
  function isComplete(key, d) {
    const tasks = tasksFor(d || parseKey(key));
    if (!tasks.length) return false;
    const done = completedIds(key);
    return tasks.every((t) => done.includes(t.id));
  }

  function stats() {
    const today = new Date();
    const todayKey = keyOf(today);
    let stamps = 0;
    let sessions = 0;
    const keys = Object.keys(state.log);
    keys.forEach((k) => {
      const d = parseKey(k);
      const done = completedIds(k).filter((id) => EX[id]);
      stamps += done.length;
      if (isComplete(k, d)) sessions += 1;
    });

    let streak = 0;
    let cursor = today;
    if (!isComplete(todayKey, today)) cursor = addDays(today, -1);
    for (let i = 0; i < 400; i += 1) {
      const k = keyOf(cursor);
      if (isComplete(k, cursor)) { streak += 1; cursor = addDays(cursor, -1); } else break;
    }

    let best = 0;
    let run = 0;
    const sorted = Object.keys(state.log).sort();
    if (sorted.length) {
      let prev = null;
      sorted.forEach((k) => {
        const d = parseKey(k);
        const complete = isComplete(k, d);
        if (complete) {
          run = prev && dayDiff(prev, d) === 1 ? run + 1 : 1;
          if (run > best) best = run;
          prev = d;
        } else {
          run = 0;
          prev = null;
        }
      });
    }
    if (streak > best) best = streak;

    const pains = Object.keys(state.log)
      .filter((k) => typeof state.log[k].pain === "number")
      .sort()
      .map((k) => ({ k, v: state.log[k].pain }));

    let painFalling = false;
    if (pains.length >= 4) {
      const recent = pains.slice(-7);
      const older = pains.slice(0, Math.max(1, pains.length - 7)).slice(-7);
      const avg = (arr) => arr.reduce((n, p) => n + p.v, 0) / arr.length;
      painFalling = avg(recent) < avg(older) - 0.2;
    }

    return {
      stamps,
      sessions,
      streak,
      best,
      pains,
      painFalling,
      week: weekOf(today),
      todayKey
    };
  }

  /* ---------- render helpers ---------- */

  const el = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (name, size) => `<span class="ico" style="--i:url(assets/icons/${name}.svg)${size ? `;width:${size}px;height:${size}px` : ""}"></span>`;

  let toastTimer = null;
  function toast(msg) {
    const t = el("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  /* ---------- today ---------- */

  function renderToday() {
    const today = new Date();
    const key = keyOf(today);
    const week = weekOf(today);
    const phase = phaseOf(week);
    const tasks = tasksFor(today);
    const done = completedIds(key).filter((id) => tasks.some((t) => t.id === id));
    const count = tasks.length;
    const doneCount = done.length;
    const complete = count > 0 && doneCount === count;
    const title = titleFor(tasks, today.getDay());
    const mins = minutesFor(tasks);
    const entry = state.log[key] || {};

    const dayName = today.toLocaleDateString(undefined, { weekday: "long" });
    const dayNum = today.toLocaleDateString(undefined, { day: "numeric", month: "long" });

    const tomorrow = addDays(today, 1);
    const tTasks = tasksFor(tomorrow);
    const tTitle = titleFor(tTasks, tomorrow.getDay());
    const tMins = minutesFor(tTasks);

    let html = "";

    html += `<div class="order${complete ? " is-filed" : ""}" style="--i:0">
      <div class="order-top"><span>Week ${pad(week)} / ${WEEKS}</span><span>${phase === 1 ? "Settle" : phase === 2 ? "Load" : "Rebuild"}</span></div>
      <h2>${esc(title)}</h2>
      <p class="order-meta"><span>${esc(dayName)}, ${esc(dayNum)}</span><span>${count} ${count === 1 ? "item" : "items"}</span><span>${mins} min</span></p>
      <div class="tally">
        ${tasks.map((t) => `<span class="seg${done.includes(t.id) ? " on" : ""}"></span>`).join("")}
        <span class="count">${doneCount}/${count}</span>
      </div>
      ${complete ? `<span class="filed">Filed</span>` : ""}
    </div>`;

    html += `<div class="sheet session" style="--i:1">`;
    tasks.forEach((t, i) => {
      const isDone = done.includes(t.id);
      html += `<div class="item${isDone ? " done" : ""}" data-id="${t.id}">
        <span class="idx">${pad(i + 1)}</span>
        <button class="ibody" type="button" data-act="open" aria-expanded="false">
          <span class="iname">${esc(t.ex.name)}</span>
          <span class="idose">${esc(t.dose)}</span>
        </button>
        <button class="stamp-btn" type="button" data-act="stamp" role="checkbox" aria-checked="${isDone}" aria-label="${esc(t.ex.name)}${isDone ? ", filed" : ""}">
          ${icon("check")}
        </button>
        <div class="detail">
          <ul class="cues">${t.ex.cues.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
          ${t.ex.video ? `<a class="vlink" href="https://www.youtube.com/shorts/${t.ex.video}" target="_blank" rel="noopener">${icon("play")} Watch the movement</a>` : ""}
        </div>
      </div>`;
    });
    html += `</div>`;

    const pain = typeof entry.pain === "number" ? entry.pain : null;
    const hint = pain === null
      ? "Pick the number that matches it right now."
      : pain <= 2
        ? "Low. Stay on the plan and keep the doses where they are."
        : pain <= 4
          ? "Manageable. Keep every dose at or under this level."
          : pain <= 7
            ? "Flare. Drop a set, cut the gripping volume, keep the isometrics."
            : "Back off to isometrics only today. If this holds for a week, get it looked at.";

    html += `<div class="sheet gauge" style="--i:2">
      <div class="gauge-head">
        <div>
          <div class="gauge-label">Pain today</div>
          <div class="gauge-hint" id="painHint">${esc(hint)}</div>
        </div>
        <div class="gauge-val">${pain === null ? '<i class="noval" aria-hidden="true"></i>' : pain}<small>/10</small></div>
      </div>
      <div class="scale" role="group" aria-label="Pain today, zero to ten">
        ${Array.from({ length: 11 }, (_, n) => `<button class="tick${pain === n ? " on" : ""}" type="button" data-pain="${n}" aria-label="${n} out of 10" aria-pressed="${pain === n}"><span>${n}</span></button>`).join("")}
      </div>
      <div class="gauge-scale-row"><span>Nothing</span><span>Worst yet</span></div>
    </div>`;

    html += `<div class="next" style="--i:3"><span>Tomorrow</span><b>${esc(tTitle)}</b><span>${tMins} min</span></div>`;

    if (week >= WEEKS && dayDiff(parseKey(state.start), today) >= WEEKS * 7) {
      html += `<div class="sheet" style="--i:4"><h2>Twelve weeks in the books</h2><p>Keep two loading sessions a week on the elbow and check the line in the ledger. If pain climbs for two weeks straight, drop back to week seven for a month.</p></div>`;
    }

    el("todayMount").innerHTML = html;
  }

  /* ---------- plan ---------- */

  function renderPlan() {
    const week = weekOf(new Date());
    const ruler = [];
    for (let w = 1; w <= WEEKS; w += 1) {
      const cls = w < week ? "done" : w === week ? "now" : "ahead";
      ruler.push(`<div class="wk ${cls}"><div class="n">W${pad(w)}</div><div class="k">${w <= 2 ? "Settle" : w <= 6 ? "Load" : "Build"}</div></div>`);
    }
    el("ruler").innerHTML = ruler.join("");

    const phase = phaseOf(week);
    el("phaseMount").innerHTML = PHASES.map((p) => {
      const rows = Object.keys(EX)
        .filter((id) => EX[id].dose[p.n] !== "skip")
        .map((id) => `<tr><td>${esc(EX[id].name)}</td><td>${esc(EX[id].dose[p.n])}</td></tr>`)
        .join("");
      return `<div class="phase${p.n === phase ? " is-now" : ""}">
        <div class="phase-top"><span class="phase-name">${esc(p.name)}</span><span class="phase-weeks">Week ${p.from} to ${p.to}</span></div>
        <p>${esc(p.goal)}</p>
        <ul class="list">${p.detail.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
        <table class="dose-table">${rows}</table>
      </div>`;
    }).join("");

    el("libraryMount").innerHTML = Object.keys(EX).map((id) => {
      const ex = EX[id];
      const doses = PHASES.map((p) => `<div><b>${esc(p.name)}</b>${esc(ex.dose[p.n])}</div>`).join("");
      return `<details class="mv">
        <summary>${esc(ex.name)}<span class="ico" style="--i:url(assets/icons/caret-right.svg)"></span></summary>
        <div class="body">
          <ul class="cues">${ex.cues.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
          <div class="phase-dose">${doses}</div>
          ${ex.video ? `<a class="vlink" href="https://www.youtube.com/watch?v=${ex.video}" target="_blank" rel="noopener">${icon("play")} Watch the movement</a>` : ""}
        </div>
      </details>`;
    }).join("");
  }

  /* ---------- learn ---------- */

  function renderLearn() {
    el("videoMount").innerHTML = VIDEOS.map((v, i) => `<div class="vid" style="--i:${i}">
      <button class="vid-frame" type="button" data-video="${v.id}" aria-label="Play ${esc(v.title)}">
        <span class="vf-src">${esc(v.src)}</span>
        <span class="play">${icon("play")}</span>
        <span class="vf-foot">Tap to play</span>
      </button>
      <div class="vid-meta">
        <div class="vid-title">${esc(v.title)}</div>
      </div>
    </div>`).join("");

    el("faqMount").innerHTML = FAQ.map((f) => `<details class="faq">
      <summary>${esc(f.q)}<span class="ico" style="--i:url(assets/icons/caret-right.svg)"></span></summary>
      <p>${esc(f.a)}</p>
    </details>`).join("");
  }

  /* ---------- log ---------- */

  function renderLog() {
    const s = stats();
    const rankIdx = RANKS.reduce((acc, r, i) => (s.stamps >= r.min ? i : acc), 0);
    const rank = RANKS[rankIdx];
    const next = RANKS[rankIdx + 1];
    const floor = rank.min;
    const ceil = next ? next.min : rank.min + 40;
    const fill = Math.max(0.08, Math.min(1, (s.stamps - floor) / (ceil - floor)));

    let html = `<div class="strip" style="--i:0">
      <div><div class="k">Sessions</div><div class="v">${s.sessions}</div></div>
      <div><div class="k">Streak</div><div class="v">${s.streak}<small> d</small></div></div>
      <div><div class="k">Best</div><div class="v">${s.best}<small> d</small></div></div>
    </div>`;

    const plateCount = 8;
    const onCount = Math.round(fill * plateCount);
    html += `<div class="rank" style="--i:1">
      <div class="rank-head"><span class="rank-name">${esc(rank.name)}</span><span class="rank-sub">${s.stamps} filed</span></div>
      <div class="plates">${Array.from({ length: plateCount }, (_, i) => `<i class="${i < onCount ? "on" : ""}" style="height:${12 + i * 3}px"></i>`).join("")}</div>
      <p>${esc(rank.note)}${next ? ` Next: ${esc(next.name)} at ${next.min}.` : ""}</p>
    </div>`;

    html += `<h2 class="h2" style="--i:2">Twelve weeks</h2><div class="ledger" style="--i:3">`;
    for (let w = 1; w <= WEEKS; w += 1) {
      let cells = "";
      let count = 0;
      for (let d = 0; d < 7; d += 1) {
        const date = addDays(parseKey(state.start), (w - 1) * 7 + d);
        const k = keyOf(date);
        const future = dayDiff(new Date(), date) > 0;
        const complete = !future && isComplete(k, date);
        const touched = !future && completedIds(k).length > 0;
        if (complete) count += 1;
        cells += `<i class="${complete ? "d" : touched ? "t" : ""}"></i>`;
      }
      html += `<div class="ledger-row${w === s.week ? " now" : ""}"><span class="lw">W${pad(w)}</span><span class="cells">${cells}</span><span class="ln">${count}/7</span></div>`;
    }
    html += `</div>`;

    html += `<h2 class="h2" style="--i:4">Pain line</h2><div class="chart-wrap" style="--i:5">`;
    if (s.pains.length < 1) {
      html += `<p class="empty">No pain logged yet. Rate it on the Today tab and the line starts here.</p>`;
    } else {
      const pts = s.pains.slice(-21);
      const W = 320;
      const H = 108;
      const PAD = 12;
      const x = (i) => (pts.length === 1 ? W / 2 : PAD + (i * (W - PAD * 2)) / (pts.length - 1));
      const y = (v) => PAD + ((10 - v) * (H - PAD * 2)) / 10;
      const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(p.v).toFixed(1)}`).join(" ");
      const grid = [0, 5, 10].map((v) => `<line class="g" x1="${PAD}" y1="${y(v)}" x2="${W - PAD}" y2="${y(v)}"/><text class="lbl" x="0" y="${y(v) + 3}">${v}</text>`).join("");
      const dots = pts.map((p, i) => `<circle class="dot" cx="${x(i).toFixed(1)}" cy="${y(p.v).toFixed(1)}" r="2.5"/>`).join("");
      const first = parseKey(pts[0].k).toLocaleDateString(undefined, { month: "short", day: "numeric" });
      const last = parseKey(pts[pts.length - 1].k).toLocaleDateString(undefined, { month: "short", day: "numeric" });
      html += `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Pain ratings over the last ${pts.length} entries">${grid}<path class="ln" d="${path}"/>${dots}</svg>
        <div class="chart-legend"><span>${esc(first)}</span><span>${esc(last)}</span></div>`;
    }
    html += `</div>`;

    html += `<h2 class="h2" style="--i:6">Marks</h2><div class="badges" style="--i:7">`;
    BADGES.forEach((b) => {
      const on = b.test(s);
      html += `<div class="badge${on ? " on" : ""}">
        <span class="bi">${icon(b.icon)}</span>
        <span><span class="bt">${esc(b.t)}</span><span class="bd">${esc(b.d)}</span></span>
      </div>`;
    });
    html += `</div>`;

    const started = parseKey(state.start).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
    html += `<button class="btn" type="button" data-act="restart" style="--i:8"><span class="bt">Restart the twelve weeks</span><span class="bd">Started ${esc(started)}. This clears every stamp and pain entry.</span></button>`;

    el("logMount").innerHTML = html;
  }

  /* ---------- ticks ---------- */

  let current = "today";
  function show(tab) {
    current = tab;
    ["today", "plan", "learn", "log"].forEach((t) => {
      el(`view-${t}`).hidden = t !== tab;
      const btn = el(`tab-${t}`);
      btn.classList.toggle("is-on", t === tab);
      btn.setAttribute("aria-selected", t === tab ? "true" : "false");
    });
    const view = el(`view-${tab}`);
    view.classList.remove("is-entering");
    void view.offsetWidth;
    Array.from(view.children).forEach((c, i) => c.style.setProperty("--i", i));
    if (tab === "today") renderToday();
    if (tab === "plan") renderPlan();
    if (tab === "log") renderLog();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  /* ---------- events ---------- */

  document.addEventListener("click", (e) => {
    const tab = e.target.closest("[data-tab]");
    if (tab) { show(tab.dataset.tab); return; }

    const stamp = e.target.closest('[data-act="stamp"]');
    if (stamp) {
      const item = stamp.closest(".item");
      const id = item.dataset.id;
      const key = keyOf(new Date());
      const entry = dayEntry(key);
      const had = entry.done.includes(id);
      entry.done = had ? entry.done.filter((x) => x !== id) : entry.done.concat(id);
      save();
      item.classList.toggle("done", !had);
      stamp.setAttribute("aria-checked", String(!had));
      const tasks = tasksFor(new Date());
      const doneNow = tasks.every((t) => entry.done.includes(t.id));
      if (doneNow && !had) {
        toast("Session filed. That is the whole job for today.");
        renderToday();
      } else {
        updateTally();
        if (had) item.querySelector(".stamp-btn").setAttribute("aria-label", `${EX[id].name}`);
      }
      return;
    }

    const open = e.target.closest('[data-act="open"]');
    if (open) {
      const item = open.closest(".item");
      const isOpen = item.classList.toggle("open");
      open.setAttribute("aria-expanded", String(isOpen));
      return;
    }

    const pain = e.target.closest("[data-pain]");
    if (pain) {
      const v = Number(pain.dataset.pain);
      const key = keyOf(new Date());
      const entry = dayEntry(key);
      entry.pain = entry.pain === v ? null : v;
      save();
      renderToday();
      if (entry.pain !== null) toast("Logged. The next morning is the real test.");
      return;
    }

    const vid = e.target.closest("[data-video]");
    if (vid) {
      const id = vid.dataset.video;
      const frame = document.createElement("div");
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      vid.replaceWith(frame);
      return;
    }

    const restart = e.target.closest('[data-act="restart"]');
    if (restart) {
      if (window.confirm("Clear every stamp and pain entry, and start again from week one?")) {
        state = { v: 1, start: keyOf(new Date()), theme: state.theme, log: {} };
        save();
        show("today");
        toast("Clean sheet. Week one starts today.");
      }
    }
  });

  function updateTally() {
    const key = keyOf(new Date());
    const tasks = tasksFor(new Date());
    const done = completedIds(key);
    const segs = document.querySelectorAll(".order .seg");
    segs.forEach((seg, i) => seg.classList.toggle("on", done.includes(tasks[i].id)));
    const count = document.querySelector(".order .count");
    if (count) count.textContent = `${tasks.filter((t) => done.includes(t.id)).length}/${tasks.length}`;
  }

  el("themeBtn").addEventListener("click", () => {
    const order = ["auto", "light", "dark"];
    const now = order.indexOf(state.theme || "auto");
    state.theme = order[(now + 1) % order.length];
    save();
    applyTheme();
    toast(`Theme: ${state.theme === "auto" ? "follow the system" : state.theme}`);
  });

  function applyTheme() {
    const mode = state.theme || "auto";
    document.documentElement.setAttribute("data-theme", mode);
    const dark = mode === "dark" || (mode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const btn = el("themeBtn");
    btn.innerHTML = `<span class="ico" style="--i:url(assets/icons/${dark ? "sun" : "moon"}.svg)"></span>`;
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  /* ---------- boot ---------- */

  applyTheme();
  renderLearn();
  show("today");

  const s0 = stats();
  const chip = el("streakChip");
  if (s0.streak > 0) {
    chip.hidden = false;
    el("streakNum").textContent = String(s0.streak);
  }

  window.addEventListener("storage", (e) => {
    if (e.key === STORE) {
      state = load();
      applyTheme();
      renderToday();
    }
  });

  document.querySelectorAll("[data-tab]").forEach((b) => {
    b.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const order = ["today", "plan", "learn", "log"];
        const i = order.indexOf(current);
        const n = e.key === "ArrowRight" ? (i + 1) % 4 : (i + 3) % 4;
        show(order[n]);
        el(`tab-${order[n]}`).focus();
      }
    });
  });
})();
