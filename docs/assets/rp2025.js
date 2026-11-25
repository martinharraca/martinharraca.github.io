/* Interactive page for Gawer & Harracá (2025), Research Policy 54(8), 105300.
   UI strings and theme labels come from the page (#rp-i18n), so EN and ES pages share this file.
   Interview excerpts are kept verbatim, in English, as published in the article's tables. */
(function () {
  'use strict';
  var I = {};
  try { I = JSON.parse(document.getElementById('rp-i18n').textContent); } catch (e) { I = {}; }
  var T = function (k, d) { return (I[k] != null ? I[k] : d); };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NS = 'http://www.w3.org/2000/svg';

  /* ---------- evidence (Tables 4, 5, 7, 8 of the article) ---------- */
  var EV = [
    { c: 'conduct', th: 't4a', y: 14, co: 'USA', q: 'My job revolves around making sure I’m keeping up on the new policy changes that Amazon has in the marketplace.' },
    { c: 'conduct', th: 't4a', y: 5, co: 'USA', q: 'We think we make the marketplace safer: with our scale we need to have a better compliance team.' },
    { c: 'conduct', th: 't4a', y: 10, co: 'USA', q: 'We’ve made every mistake in the book. We’ve gotten hit with things that weren’t really a mistake. And now we know how to address those problems.' },
    { c: 'conduct', th: 't4b', y: 25, co: 'UK', q: 'I know people who do Black Hat techniques, I know of them. I’ve met them in conferences and things like that and they do stuff that’s highly dodgy, highly illegal.' },
    { c: 'conduct', th: 't4b', y: 17, co: 'China', q: 'It doesn’t matter what category you’re in, this is going on… there’s two different sorts of things, people that are attacking you, specifically… And then there’s other people that aren’t attacking you directly but they’re doing things to cheat you out of sales.' },
    { c: 'conduct', th: 't4c', y: 8, co: 'China', q: 'Some small sellers may just come in to disrupt the market. They think ‘I just take a chance’, and then they engage in illegal operations.' },
    { c: 'conduct', th: 't4c', y: 9, co: 'China', q: 'The old sellers have to think about pros and cons of doing these bad practices, while for a new seller, their bottom line may be relatively low, and they may be very tempted.' },
    { c: 'conduct', th: 't4c', y: 9, co: 'China', q: 'By the first half of 2022 the market has been saturated, and competition became fierce. At this time, some sellers whose sales slowed down did some things that are very contrary to Amazon regulations, such as making fake orders.' },
    { c: 'conduct', th: 't4d', y: 14, co: 'UK', q: 'There was a significant increase of manipulation that was happening as these foreign sellers came onto the platform.' },
    { c: 'conduct', th: 't4d', y: 24, co: 'UK', q: 'In China you have manufacturers […] who don’t care if an account gets closed because they just open up a new account. They’re all kind of fictitious companies, but they look like real companies' },
    { c: 'conduct', th: 't4d', y: 17, co: 'China', q: 'I’ve been based in China since I started selling on Amazon. I know a lot of Chinese sellers, nearly all of them don’t play fair.' },

    { c: 'undeclared', th: 't5a', q: 'Every time you have a problem, it’s ‘That’s not my department’ or ‘Can I speak to the relevant department?’ ‘No, they’re firewalled off.’' },
    { c: 'undeclared', th: 't5a', q: 'But nonetheless, trying to get anyone to actually help you get sorted out is another matter entirely.' },
    { c: 'undeclared', th: 't5a', q: 'They are getting so big that it’s very, very difficult to get even the simplest things resolved with them.' },
    { c: 'undeclared', th: 't5b', q: 'It’s funny how many workarounds and systems you have to build just to be able to prove you overcharged me $1000 on this item.' },
    { c: 'undeclared', th: 't5b', q: 'You get a black mark for dispatching it late. But it’s not late. It’s actually Amazon’s delivery drivers [who] collected it late.' },
    { c: 'undeclared', th: 't5c', q: 'Whenever Amazon put a new policy or procedure in place… they’re not direct in their wording. So, they leave things kind of open-ended.' },
    { c: 'undeclared', th: 't5c', q: 'That’s one thing that’s really frustrating: nothing’s ever clear.' },
    { c: 'undeclared', th: 't5c', q: 'I feel like that kind of makes it very difficult to excel in anything, because they’re always keeping something just out of your reach.' },
    { c: 'undeclared', th: 't5d', q: 'It’s really, really difficult for sellers to keep up with all these constantly changing demands.' },
    { c: 'undeclared', th: 't5d', q: 'I do think that it’s incredibly difficult, operating on Amazon… the rules are always changing.' },
    { c: 'undeclared', th: 't5e', q: 'Amazon has ‘price matching’, so if you have your product on Amazon and [also offer it] somewhere else online, the price on Amazon cannot be set above a certain percentage compared to the other, otherwise Amazon will shut down your listing. But sometimes Amazon doesn’t even like [even if you offer it somewhere else] at the same price. It just depends on how moody Amazon is that day.' },
    { c: 'undeclared', th: 't5e', q: 'I can’t say who they pick and choose to pick on – you know, some people get away with things that other people don’t.' },
    { c: 'undeclared', th: 't5f', q: 'Amazon put their head in the sand and ignored it. Because at the end of the day, they’re still making money.' },
    { c: 'undeclared', th: 't5f', q: 'These people are doing, like, really bad stuff, their account gets shut down for like, two weeks, and then they’re back again. How do they manage this?' },
    { c: 'undeclared', th: 't5f', q: 'They make no efforts until the government kind of forced them to sort of go after overseas sellers that weren’t collecting VAT, which obviously, is a massive cost advantage.' },

    { c: 'trust', th: 't7a', y: 14, co: 'USA', q: 'I would say almost everyone who’s been selling on Amazon for at least a year has run into Black Hat sellers.' },
    { c: 'trust', th: 't7a', y: 24, co: 'UK', q: 'Black Hat tactics inevitably happens to your best-selling or your most profitable products because they are the listings people want to take over. It’s not going to happen to a product that sells one every six months.' },
    { c: 'trust', th: 't7a', y: 4, co: 'UK', q: 'There was a period when we got attacked 16 times with false patterns, false images, false, counterfeit claims. And that’s very hard for a seller, these competitors really hurt your momentum.' },
    { c: 'trust', th: 't7b', y: 14, co: 'USA', q: 'I feel like that kind of makes it very difficult to excel in anything, because they [Amazon] are always keeping something just out of reach of you.' },
    { c: 'trust', th: 't7b', y: 15, co: 'UK', q: 'It comes down to a genuine indifference from Amazon’s point of view as to whether you exist.' },
    { c: 'trust', th: 't7b', y: 14, co: 'UK', q: 'The two major challenges that sellers have faced, historically, are that they have faced Blackhat tactics, for sure, and then the other challenge would be Amazon’s fairness and Amazon’s enforcement of certain policies.' },
    { c: 'trust', th: 't7c', y: 14, co: 'UK', q: 'We need to have more fairness. It still remains the number one frustration of businesses dealing with Amazon, the biggest challenge of selling on Amazon is dealing with Amazon.' },
    { c: 'trust', th: 't7c', y: 14, co: 'UK', q: 'There was a significant increase of manipulation that was happening as these Chinese sellers came onto the platform. Amazon took little or no action against them.' },
    { c: 'trust', th: 't7c', q: 'I gave up trying to use that reporting ‘tool’. It can never detect a violation no matter how obvious it is. If you talk to support and mention the violation, they immediately try to unload you onto that ‘reporting tool’… Using the tool was slowly giving me an aneurism, so I gave up wasting my time or energy on it.' },

    { c: 'legit', th: 't8a', y: 14, co: 'UK', q: 'These rule violations went on almost as an open secret for years.' },
    { c: 'legit', th: 't8a', y: 5, co: 'China', q: 'Comment brushing [using fake product comments] is an open secret, it is very common.' },
    { c: 'legit', th: 't8a', y: 8, co: 'China', q: 'When Amazon does not clearly stipulate a rule, it falls into a grey area, and there are always some sellers who want to use that to increase sales.' },
    { c: 'legit', th: 't8b', y: 17, co: 'China', q: 'We always talk about this among my friends, ‘Oh, if we might do something very slightly wrong, then our account will get shut forever’. But these people are doing really bad stuff, their account gets shut down for like, two weeks, and then they’re back again.' },
    { c: 'legit', th: 't8b', q: 'How the heck do they get away with it? Brand new listing of about 2 months old and is already a Top Seller with 50+ positive reviews, dozens of questions answered, customer review videos! The other brands have been on there for years and don’t have that many reviews. It’s just so blatantly obvious manipulation.' },
    { c: 'legit', th: 't8b', y: 17, co: 'China', q: 'I know people doing this kind of cheat in this system. I feel that Amazon, for many years, put their head in the sand and ignored it.' },
    { c: 'legit', th: 't8b', y: 14, co: 'UK', q: 'There was a lot of frustration in the community because it was obvious that the manipulations were happening, and Amazon took little or no action against them' },
    { c: 'legit', th: 't8c', y: 17, co: 'China', q: 'At the end of the day, [Amazon] is still making money, so they don’t really care. The only time that they take any notice of it is when the Wall Street Journal runs a story on it.' },
    { c: 'legit', th: 't8c', q: 'Reality is, there are violations and violations. Some violations make more money to Amazon than others.' },
    { c: 'legit', th: 't8d', y: 14, co: 'USA', q: 'If a seller is competing by doing a Black Hat tactic, then, in order to succeed, you either have to combat them, or do what they’re doing' },
    { c: 'legit', th: 't8d', y: 8, co: 'China', q: 'You see that there is a copycat effect. Your competitors do not comply with some rules, and then everyone wants to do similar things.' },
    { c: 'legit', th: 't8d', y: 5, co: 'China', q: 'Opening a store is not difficult. But Amazon has many rules, it’s basically impossible to follow the rules completely. Therefore, there will be rule violations to some extent.' }
  ];
  var COMP = {
    conduct: { col: 'var(--ink2)', table: '4' },
    undeclared: { col: 'var(--m-und)', table: '5' },
    trust: { col: 'var(--m-tru)', table: '7' },
    legit: { col: 'var(--m-leg)', table: '8' }
  };

  /* ---------- connector drawing ---------- */
  function rel(el, box) {
    var r = el.getBoundingClientRect();
    return { l: r.left - box.left, t: r.top - box.top, r: r.right - box.left, b: r.bottom - box.top, w: r.width, h: r.height };
  }
  function arrowHead(x, y, dx, dy, size) {
    var len = Math.sqrt(dx * dx + dy * dy) || 1; dx /= len; dy /= len;
    var px = -dy, py = dx, s = size;
    return 'M' + x + ' ' + y + ' L' + (x - dx * s * 1.4 + px * s * .75) + ' ' + (y - dy * s * 1.4 + py * s * .75) +
      ' L' + (x - dx * s * 1.4 - px * s * .75) + ' ' + (y - dy * s * 1.4 - py * s * .75) + ' Z';
  }
  /* Straight connector between two boxes along one axis. The line sits in the middle of the
     span the two boxes share on the other axis, so aligned boxes always get a straight arrow. */
  function straight(svg, a, b, axis, size, attrs) {
    var x1, y1, x2, y2, dx = 0, dy = 0;
    if (axis === 'h') {
      var t = Math.max(a.t, b.t), bo = Math.min(a.b, b.b);
      y1 = y2 = bo - t >= 2 ? (t + bo) / 2 : (a.t + a.h / 2 + b.t + b.h / 2) / 2;
      if (a.r <= b.l) { x1 = a.r; x2 = b.l; dx = 1; } else { x1 = a.l; x2 = b.r; dx = -1; }
    } else {
      var l = Math.max(a.l, b.l), r = Math.min(a.r, b.r);
      x1 = x2 = r - l >= 2 ? (l + r) / 2 : (a.l + a.w / 2 + b.l + b.w / 2) / 2;
      if (a.b <= b.t) { y1 = a.b; y2 = b.t; dy = 1; } else { y1 = a.t; y2 = b.b; dy = -1; }
    }
    var g = mk('g', attrs || {}, svg);
    var back = size * 1.3;
    mk('path', { d: 'M' + x1 + ' ' + y1 + ' L' + (x2 - dx * back) + ' ' + (y2 - dy * back) }, g);
    mk('path', { d: arrowHead(x2, y2, dx, dy, size), 'class': 'head' }, g);
    return g;
  }
  function mk(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  /* ---------- process model ---------- */
  var mdl = $('.mdl');
  var step = 5, timer = null;
  var WIRES = {
    wide: [
      { f: '.eye-l', t: '.tru', ax: 'h', s: 3 },
      { f: '.tru', t: '.leg', ax: 'v', s: 4 },
      { f: '.leg', t: '.con', ax: 'h', s: 4 }
    ],
    narrow: [
      { f: '.eye-t', t: '.tru', ax: 'v', s: 3 },
      { f: '.tru', t: '.leg', ax: 'v', s: 4 },
      { f: '.leg', t: '.con', ax: 'v', s: 4 }
    ]
  };
  function drawModel() {
    if (!mdl) return;
    var svg = $('.mdl-wires', mdl); if (!svg) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var narrow = window.matchMedia('(max-width: 640px)').matches;
    /* Side boxes sit on the centre lines of the observation row and the conduct row, so their
       arrows stay straight. Grow the observation row just enough to leave a visible arrow
       between the trust and legitimation boxes. */
    var eye = $('.mdl-eye', mdl), tru = $('.tru', mdl), leg = $('.leg', mdl), con = $('.con', mdl);
    if (eye && tru && leg && con) {
      if (narrow) eye.style.minHeight = '';
      else {
        var conRow = Math.max(con.offsetHeight, leg.offsetHeight);
        var need = Math.max(96, Math.ceil(tru.offsetHeight + 2 * 36 - (conRow - leg.offsetHeight)));
        if (eye.style.minHeight !== need + 'px') eye.style.minHeight = need + 'px';
      }
    }
    var box = mdl.getBoundingClientRect();
    (narrow ? WIRES.narrow : WIRES.wide).forEach(function (w) {
      var a = $(w.f, mdl), b = $(w.t, mdl); if (!a || !b) return;
      straight(svg, rel(a, box), rel(b, box), w.ax, 6, { 'data-s': w.s, 'class': step < w.s ? 'is-future' : '' });
    });
  }
  function setStep(n, fromUser) {
    if (!mdl) return;
    step = Math.max(1, Math.min(5, n));
    mdl.setAttribute('data-step', step);
    $$('[data-s]', mdl).forEach(function (el) {
      var s = +el.getAttribute('data-s');
      el.classList.toggle('is-future', s > step);
      el.classList.toggle('is-current', s === step && step < 5);
    });
    var con = $('.con', mdl); if (con) con.classList.toggle('shift', step >= 5);
    var tag = $('.con .tag', mdl); if (tag) { tag.tabIndex = step >= 5 ? 0 : -1; tag.setAttribute('aria-hidden', step >= 5 ? 'false' : 'true'); }
    $$('.steps button').forEach(function (b) {
      var k = +b.getAttribute('data-go');
      if (k === step) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
      b.classList.toggle('done', k < step);
    });
    $$('.cap[data-cap]').forEach(function (c) { c.hidden = +c.getAttribute('data-cap') !== step; });
    var panel = step === 1 ? 1 : (step === 5 ? 3 : 2);
    $$('.panels .p').forEach(function (p) { p.classList.toggle('on', +p.getAttribute('data-p') === panel); });
    var pos = $('.ctrl .pos'); if (pos) pos.textContent = T('stepOf', 'Step {n} of 5').replace('{n}', step);
    var prev = $('#m-prev'), next = $('#m-next');
    if (prev) prev.disabled = step === 1;
    if (next) next.disabled = step === 5;
    if (fromUser) stop();
  }
  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    var p = $('#m-play'); if (p) { p.textContent = T('play', 'Play the sequence'); p.setAttribute('aria-pressed', 'false'); }
  }
  function play() {
    if (timer) { stop(); return; }
    var p = $('#m-play');
    if (p) { p.textContent = T('pause', 'Pause'); p.setAttribute('aria-pressed', 'true'); }
    setStep(1);
    timer = setInterval(function () {
      if (step >= 5) { stop(); return; }
      setStep(step + 1);
    }, reduce ? 3200 : 3600);
  }
  if (mdl) {
    $$('.steps button').forEach(function (b) { b.addEventListener('click', function () { setStep(+b.getAttribute('data-go'), true); }); });
    var pb = $('#m-prev'), nb = $('#m-next'), pl = $('#m-play');
    if (pb) pb.addEventListener('click', function () { setStep(step - 1, true); });
    if (nb) nb.addEventListener('click', function () { setStep(step + 1, true); });
    if (pl) pl.addEventListener('click', play);
    var seq = $('.seq');
    if (seq) seq.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { if (e.target.closest('.steps')) { e.preventDefault(); setStep(step + 1, true); var c = $('.steps [aria-current]'); if (c) c.focus(); } }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { if (e.target.closest('.steps')) { e.preventDefault(); setStep(step - 1, true); var c2 = $('.steps [aria-current]'); if (c2) c2.focus(); } }
    });
    $$('[data-gostep]').forEach(function (a) {
      a.addEventListener('click', function () { setStep(+a.getAttribute('data-gostep'), true); });
    });
    setStep(5);
    if (window.ResizeObserver) new ResizeObserver(function () { drawModel(); }).observe(mdl);
    window.addEventListener('resize', drawModel);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawModel);
    drawModel();
  }

  /* ---------- floating detail panel ---------- */
  var ORDER = ['declared', 'discrepancy', 'undeclared', 'ruleabiding', 'misconduct', 'observe', 'trust', 'legit', 'contagion'];
  var NODESTEP = { declared: 1, discrepancy: 1, undeclared: 1, ruleabiding: 1, misconduct: 1, observe: 2, trust: 3, legit: 4, contagion: 5 };
  var NODECOL = { declared: 'var(--m-dec)', discrepancy: 'var(--m-dis)', undeclared: 'var(--m-und)', ruleabiding: 'var(--muted)', misconduct: 'var(--ink)', observe: 'var(--m-obs)', trust: 'var(--m-tru)', legit: 'var(--m-leg)', contagion: 'var(--m-leg)' };
  var dlg = $('#dlg'), cur = null, opener = null;
  function nodeName(k) { var t = $('#n-' + k); return t ? (t.getAttribute('data-name') || k) : k; }
  function openNode(k, keepOpener) {
    var tpl = $('#n-' + k); if (!dlg || !tpl) return;
    cur = k;
    if (!keepOpener) opener = document.activeElement;
    var body = $('.dlg-body', dlg);
    body.innerHTML = '';
    body.appendChild(tpl.content.cloneNode(true));
    body.scrollTop = 0;
    dlg.style.setProperty('--dlg-c', NODECOL[k] || 'var(--accent)');
    var crumbs = $('.crumbs', dlg);
    if (crumbs) {
      crumbs.innerHTML = '';
      var lbls = T('stepShort', ['1', '2', '3', '4', '5']);
      for (var i = 1; i <= 5; i++) {
        var s = document.createElement('span'); s.textContent = lbls[i - 1];
        if (i === NODESTEP[k]) s.className = 'on';
        crumbs.appendChild(s);
      }
      crumbs.setAttribute('aria-label', T('stepOf', 'Step {n} of 5').replace('{n}', NODESTEP[k]));
    }
    var idx = ORDER.indexOf(k);
    var pv = $('.dlg-nav [data-dir="-1"]', dlg), nx = $('.dlg-nav [data-dir="1"]', dlg);
    if (pv) { var pk = ORDER[(idx + ORDER.length - 1) % ORDER.length]; pv.textContent = '← ' + nodeName(pk); pv.setAttribute('data-k', pk); }
    if (nx) { var nk = ORDER[(idx + 1) % ORDER.length]; nx.textContent = nodeName(nk) + ' →'; nx.setAttribute('data-k', nk); }
    $$('.mdl [data-node]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-node') === k); });
    if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); }
    var h = $('h2', body); if (h) { h.id = 'dlg-title'; }
    try { history.replaceState(null, '', '#c-' + k); } catch (e) {}
  }
  function closeDlg() {
    if (!dlg || !dlg.open) return;
    if (dlg.close) dlg.close(); else dlg.removeAttribute('open');
  }
  if (dlg) {
    dlg.addEventListener('close', function () {
      $$('.mdl [data-node].on').forEach(function (b) { b.classList.remove('on'); });
      try { history.replaceState(null, '', location.pathname + location.search + '#model'); } catch (e) {}
      cur = null;
    });
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) { closeDlg(); return; }
      var a = e.target.closest('a[href^="#"]');
      if (a) {
        e.preventDefault();
        opener = null;
        closeDlg();
        follow(a);
      }
    });
    $('.dlg-x', dlg).addEventListener('click', closeDlg);
    $$('.dlg-nav button', dlg).forEach(function (b) { b.addEventListener('click', function () { openNode(b.getAttribute('data-k'), true); }); });
    $$('[data-node]').forEach(function (b) { b.addEventListener('click', function () { openNode(b.getAttribute('data-node')); }); });
    var m = /^#c-([a-z]+)$/.exec(location.hash);
    if (m && $('#n-' + m[1])) setTimeout(function () { openNode(m[1]); }, 60);
  }

  /* in-page links that also set a filter or a tab */
  function follow(a) {
    var ev = a.getAttribute('data-ev'), ds = a.getAttribute('data-ds'), hat = a.getAttribute('data-hat'), t6 = a.getAttribute('data-t6');
    if (ev) setEvFilter(ev, 'all');
    if (ds) selectTab('ds-tab-' + ds);
    if (hat) selectTab('hat-tab-' + hat);
    if (t6) selectTab('t6-tab-' + t6);
    var id = a.getAttribute('href').slice(1);
    var target = document.getElementById(id);
    if (target) {
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      setTimeout(function () {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        try { target.focus({ preventScroll: true }); } catch (e) { target.focus(); }
        try { history.replaceState(null, '', '#' + id); } catch (e) {}
      }, 30);
    }
  }
  $$('a[href^="#"][data-ev], a[href^="#"][data-ds], a[href^="#"][data-hat], a[href^="#"][data-t6]').forEach(function (a) {
    a.addEventListener('click', function (e) { if (a.closest('dialog')) return; e.preventDefault(); follow(a); });
  });

  /* ---------- tabs ---------- */
  function selectTab(id) {
    var tab = document.getElementById(id); if (!tab) return;
    var list = tab.closest('[role="tablist"]');
    $$('[role="tab"]', list).forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = !on;
    });
    list.dispatchEvent(new CustomEvent('tabchange', { bubbles: true }));
  }
  $$('[role="tablist"]').forEach(function (list) {
    var tabs = $$('[role="tab"]', list);
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { selectTab(t.id); });
      t.addEventListener('keydown', function (e) {
        var j = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i + tabs.length - 1) % tabs.length;
        if (e.key === 'Home') j = 0;
        if (e.key === 'End') j = tabs.length - 1;
        if (j !== null) { e.preventDefault(); selectTab(tabs[j].id); tabs[j].focus(); }
      });
    });
  });

  /* ---------- data structure (Fig. 1) ---------- */
  function drawDS(grid) {
    if (!grid || grid.offsetParent === null) return;
    var svg = $('svg', grid); if (!svg) { svg = mk('svg', { 'aria-hidden': 'true' }); grid.insertBefore(svg, grid.firstChild); }
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var box = grid.getBoundingClientRect();
    var c4 = $('.c4', grid);
    function link(a, b, key) {
      var g = straight(svg, rel(a, box), rel(b, box), 'h', 4.5, { 'data-k': key });
      $$('path', g).forEach(function (p) { p.setAttribute('data-k', key); });
      return g;
    }
    $$('.c1[data-to]', grid).forEach(function (c) { var t = document.getElementById(c.getAttribute('data-to')); if (t) link(c, t, t.id); });
    $$('.c3[data-from]', grid).forEach(function (c3) {
      c3.getAttribute('data-from').split(' ').forEach(function (id) { var s = document.getElementById(id); if (s) link(s, c3, id + ' ' + c3.id); });
      if (c4) link(c3, c4, c3.id + ' c4');
    });
  }
  function hotDS(grid, el, on) {
    var id = el.id;
    var keys = $$('path', grid).filter(function (p) { return (p.getAttribute('data-k') || '').split(' ').indexOf(id) > -1; });
    keys.forEach(function (p) { p.classList.toggle('hot', on); });
    el.classList.toggle('hot', on);
    if (el.classList.contains('c3')) (el.getAttribute('data-from') || '').split(' ').forEach(function (s) { var x = document.getElementById(s); if (x) x.classList.toggle('hot', on); });
    if (el.classList.contains('c2')) $$('.c3[data-from]', grid).forEach(function (c3) { if (c3.getAttribute('data-from').split(' ').indexOf(id) > -1) c3.classList.toggle('hot', on); });
  }
  $$('.ds').forEach(function (grid) {
    $$('.c2, .c3', grid).forEach(function (el) {
      el.addEventListener('mouseenter', function () { hotDS(grid, el, true); });
      el.addEventListener('mouseleave', function () { hotDS(grid, el, false); });
      el.addEventListener('focus', function () { hotDS(grid, el, true); });
      el.addEventListener('blur', function () { hotDS(grid, el, false); });
    });
  });
  function drawAllDS() { $$('.ds').forEach(drawDS); }
  document.addEventListener('tabchange', function () { requestAnimationFrame(drawAllDS); });
  window.addEventListener('resize', drawAllDS);
  if (window.ResizeObserver) $$('.ds').forEach(function (g) { new ResizeObserver(function () { drawDS(g); }).observe(g); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawAllDS);
  drawAllDS();

  /* ---------- evidence explorer ---------- */
  var ev = { c: 'all', co: 'all', all: false };
  var LIMIT = 12;
  var evList = $('#ev-list'), evCount = $('#ev-count'), evCo = $('#ev-co');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function renderEv() {
    if (!evList) return;
    var th = T('themes', {}), comps = T('comps', {});
    var items = EV.filter(function (x) {
      if (ev.c !== 'all' && x.c !== ev.c) return false;
      if (ev.co === 'all') return true;
      if (ev.co === 'na') return !x.co;
      return x.co === ev.co;
    });
    var total = items.length;
    var more = $('#ev-more');
    var cut = ev.c === 'all' && ev.co === 'all' && !ev.all && total > LIMIT;
    if (more) { more.hidden = !cut; more.textContent = T('showAll', 'Show all {t} excerpts').replace('{t}', total); }
    if (cut) items = items.filter(function (x, i) { return i % 4 === 0; }).slice(0, LIMIT);
    evList.innerHTML = items.map(function (x) {
      var meta = [];
      meta.push(T('table', 'Table') + ' ' + COMP[x.c].table);
      if (x.y != null) meta.push(T('years', '{y} yrs on Amazon').replace('{y}', x.y));
      if (x.co) meta.push(x.co);
      if (x.y == null && !x.co) meta.push(x.c === 'undeclared' ? T('t5meta', 'Interview excerpt, informant details not reported') : T('notReported', 'Details not reported'));
      return '<figure class="q" style="--qc:' + COMP[x.c].col + '"><div class="th">' + esc(th[x.th] || '') + '</div>' +
        '<p lang="en">“' + esc(x.q) + '”</p><footer>' + meta.map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('') + '</footer></figure>';
    }).join('') || '<p class="ev-empty">' + esc(T('none', 'No excerpts match these filters.')) + '</p>';
    if (evCount) evCount.textContent = T('showing', '{n} of {t} excerpts').replace('{n}', items.length).replace('{t}', EV.length);
    $$('#ev-chips button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-c') === ev.c ? 'true' : 'false'); });
    if (evCo) evCo.value = ev.co;
    void comps;
  }
  function setEvFilter(c, co) { ev.c = c || 'all'; if (co) ev.co = co; renderEv(); }
  var moreBtn = $('#ev-more');
  if (moreBtn) moreBtn.addEventListener('click', function () { ev.all = true; renderEv(); });
  $$('#ev-chips button').forEach(function (b) { b.addEventListener('click', function () { setEvFilter(b.getAttribute('data-c')); }); });
  if (evCo) evCo.addEventListener('change', function () { ev.co = evCo.value; renderEv(); });
  renderEv();

  /* ---------- map of the article: tooltips ---------- */
  var tip = null, tipFor = null;
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  function hideTip() { if (tip) tip.hidden = true; if (tipFor) tipFor.classList.remove('tip-on'); tipFor = null; }
  function showTip(a) {
    if (!tip) { tip = document.createElement('div'); tip.id = 'map-tip'; tip.className = 'map-tip'; tip.setAttribute('role', 'tooltip'); tip.hidden = true; document.body.appendChild(tip); }
    if (tipFor) tipFor.classList.remove('tip-on');
    var no = $('.no', a), b = $('b', a);
    tip.innerHTML = '<span class="k">' + esc(no ? no.textContent : '') + '</span><b>' + esc(b ? b.textContent : '') + '</b><p>' + esc(a.getAttribute('data-sum') || '') + '</p>' +
      (canHover ? '<span class="h">' + esc(T('tipHint', 'Click to go to this part')) + '</span>' : '<a href="' + a.getAttribute('href') + '">' + esc(T('tipGo', 'Go to this part →')) + '</a>');
    tip.hidden = false; tipFor = a; a.classList.add('tip-on');
    var r = a.getBoundingClientRect(), vw = document.documentElement.clientWidth, vh = window.innerHeight;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.max(12, Math.min(vw - w - 12, r.left + r.width / 2 - w / 2));
    var top = r.bottom + 10;
    if (top + h > vh - 12 && r.top - h - 10 > 12) top = r.top - h - 10;
    tip.style.left = left + 'px'; tip.style.top = top + 'px';
  }
  $$('.map .mn').forEach(function (a) {
    a.setAttribute('aria-describedby', 'map-tip');
    a.addEventListener('mouseenter', function () { if (canHover) showTip(a); });
    a.addEventListener('mouseleave', function () { if (canHover) hideTip(); });
    a.addEventListener('focus', function () {
      var kb = false; try { kb = a.matches(':focus-visible'); } catch (e) { kb = true; }
      if (canHover || kb) showTip(a);
    });
    a.addEventListener('blur', function () { setTimeout(function () { if (tipFor === a && !(tip && tip.contains(document.activeElement))) hideTip(); }, 120); });
    a.addEventListener('click', function (e) {
      if (!canHover && tipFor !== a) { e.preventDefault(); showTip(a); return; }
      hideTip();
    });
  });
  document.addEventListener('click', function (e) {
    if (!tipFor) return;
    if (e.target.closest('.map .mn')) return;
    if (tip && tip.contains(e.target)) { hideTip(); return; }
    hideTip();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideTip(); });
  window.addEventListener('scroll', function () { if (tipFor) hideTip(); }, { passive: true });
  window.addEventListener('resize', hideTip);

  /* ---------- copy ---------- */
  $$('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var src = document.getElementById(b.getAttribute('data-copy')); if (!src) return;
      var text = src.innerText.trim();
      var done = function () { var o = b.textContent; b.textContent = T('copied', 'Copied'); b.classList.add('ok'); setTimeout(function () { b.textContent = o; b.classList.remove('ok'); }, 1600); };
      var fallback = function () {
        var r = document.createRange(); r.selectNodeContents(src);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        b.textContent = T('selected', 'Selected, press Ctrl/⌘+C');
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
        else fallback();
      } catch (e) { fallback(); }
    });
  });
})();
