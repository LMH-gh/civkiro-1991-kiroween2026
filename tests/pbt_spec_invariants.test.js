// Property-Based Testing (PBT) Invariants for CivKiro 1991 & NecroSpec Studio
const assert = require('assert');

function compileToEars(rawClause) {
  const clean = String(rawClause || '').trim();
  if (!clean) return 'WHEN a user interacts with the module, THE SYSTEM SHALL respond deterministically within 100ms.';
  const hasTrigger = /\b(WHEN|WHILE|IF|WHERE)\b/i.test(clean);
  const hasShall = /\bTHE SYSTEM SHALL\b/i.test(clean);
  if (hasTrigger && hasShall) return clean;
  if (!hasTrigger && hasShall) return `WHEN triggered by user or hook action, ${clean}`;
  if (hasTrigger && !hasShall) return `${clean}, THE SYSTEM SHALL execute the validated state transition.`;
  return `WHEN ${clean}, THE SYSTEM SHALL execute the validated state transition and log the result.`;
}

function clampGandhiAggression(baseAggro, delta) {
  return Math.max(0, Math.min(10, baseAggro + delta));
}

for (let i = 0; i < 100; i++) {
  const sample = `civ_rule_${i}_${Math.random().toString(36).slice(2)}`;
  const out1 = compileToEars(sample);
  const out2 = compileToEars(out1);
  assert(/\b(WHEN|WHILE|IF|WHERE)\b/i.test(out1), 'Missing EARS trigger');
  assert(/\bTHE SYSTEM SHALL\b/i.test(out1), 'Missing THE SYSTEM SHALL');
  assert.strictEqual(out1, out2, 'EARS compiler must be idempotent');

  // Civ 1991 Nuclear Gandhi Underflow Guard Invariant: never wraps to 255
  const randomDelta = -Math.floor(Math.random() * 50);
  const clamped = clampGandhiAggression(1, randomDelta);
  assert(clamped >= 0 && clamped <= 10, 'Aggression underflowed outside [0, 10]!');
}
console.log('[PBT PASS] 100/100 EARS Spec & Civ 1991 Nuclear Gandhi Guard Invariants verified.');
