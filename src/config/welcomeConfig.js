/**
 * ─────────────────────────────────────────────────────────────────────────────
 * GLOBAL WELCOME EXPERIENCE — CONFIGURATION
 * Principal Motion Designer & UX Architect Specification
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * NARRATIVE:
 *   Silence → Portrait (B&W, introduced) → Blueprint (drawn) →
 *   Ideas → Architecture → Intelligence → Systems →
 *   TheNameIsBhagavan (held) → Engineering Intelligent Systems. →
 *   1px rule (left → right → fade) → Dissolve → Homepage
 *
 * PRECISION TIMELINE — Target: 4.4 seconds total
 * ─────────────────────────────────────────────────────────────────────────────
 *   Stage 1  160ms   White silence. Calm and intentional opening.
 *   Stage 2  500ms   Portrait soft settle (scale 1.06→1, opacity 0→1)
 *   Stage 3  280ms   Blueprint coordinate grid draws in
 *   Stage 4  320ms   Per word × 4 = 1280ms  (in:140 hold:80 out:100)
 *   Stage 5  450ms   Morph → TheNameIsBhagavan
 *   Hold 5   850ms   Brand held — visitor reads, feels
 *   Stage 6  380ms   Tagline fades in
 *   Hold 6   220ms   Tagline breathes
 *   Stage 7  520ms   1px rule: draw(320) + pause(100) + fade(100)
 *   Stage 8  450ms   Portrait regains color. Overlay dissolves.
 *   Total:  ~4410ms
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const welcomeConfig = {

  // ── Brand Identity ─────────────────────────────────────────────────────────
  brandName:   "TheNameIsBhagavan",
  tagline:     "Engineering Intelligent Systems.",
  portraitAlt: "Bhagavan — Engineering Intelligent Systems",

  // ── Narrative Word Sequence (FIXED — do not change) ───────────────────────
  wordSequence: ["Ideas", "Architecture", "Intelligence", "Systems"],

  // ── Colors ─────────────────────────────────────────────────────────────────
  colors: {
    background:     "#FFFFFF",
    primaryText:    "#000000",
    taglineText:    "#5a5a5a",
    blueprintGrid:  "rgba(0,0,0,0.075)",  // 7.5% — visible engineering identity
    crosshair:      "rgba(0,0,0,0.11)",
    horizontalRule: "rgba(0,0,0,0.20)",
  },

  /**
   * PRECISION TIMING (milliseconds)
   * Every number is a design decision. Change with intent.
   */
  timing: {
    // Stage 1: silence
    silenceMs:      160,   // Pure white opening — calm, intentional, unhurried

    // Stage 2: portrait
    portraitFadeMs: 500,   // scale 1.06→1, opacity 0→1

    // Stage 3: blueprint
    blueprintFadeMs: 280,  // grid opacity 0→1

    // Stage 4: words (each word = in + hold + out)
    wordFadeInMs:   140,   // blur(10px)→clear, y:12→0
    wordHoldMs:     80,    // full opacity hold
    wordFadeOutMs:  100,   // y:0→-8, blur back
    // 4 words × 320ms = 1280ms

    // Stage 5: brand morph + hold
    brandMorphMs:   450,   // Systems→TheNameIsBhagavan
    brandHoldMs:    1250,  // Emotional peak — visitor reads the name, feels it

    // Stage 6: tagline
    taglineFadeMs:  380,
    taglineHoldMs:  220,

    // Stage 7: 1px horizontal rule
    ruleDrawMs:     320,   // left→right (ease-out pen stroke)
    rulePauseMs:    100,   // pause at full width
    ruleFadeMs:     100,   // dissolve

    // Stage 8: final dissolve
    dissolveMs:     450,   // overlay out + portrait color restore
  },

  /**
   * EASING CURVES
   * Derived from Apple Human Interface Design principles.
   * Every curve has a specific character and use case.
   */
  easing: {
    // Entries: fast start, natural deceleration
    standard:   [0.16, 1.00, 0.30, 1.00],
    // Exits: silky, effortless
    dissolve:   [0.22, 1.00, 0.36, 1.00],
    // Typography: fluid tracking expansion
    editorial:  [0.19, 1.00, 0.22, 1.00],
    // Rule draw: ease-out precision (pen stroke character)
    penStroke:  [0.25, 0.00, 0.00, 1.00],
  },

  /**
   * RUNTIME BEHAVIOR
   */
  behavior: {
    playOnEveryRoute: true,
    allowUrlForce:    true,   // ?welcome=true forces replay
  },

};

export default welcomeConfig;
