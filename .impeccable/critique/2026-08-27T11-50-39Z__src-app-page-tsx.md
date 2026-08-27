---
target: STRATUM site (home, shop, product detail, cart, about, contact)
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
timestamp: 2026-08-27T11-50-39Z
slug: src-app-page-tsx
---
Method: dual-agent (A: general-purpose design review · B: general-purpose detector/browser evidence)

## Design Health Score (initial pass, before fixes)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Search silently capped at 6 results with no "view all" |
| 2 | Match System / Real World | 3 | Strong domain language, undone by Latin lorem ipsum on every PDP |
| 3 | User Control and Freedom | 1 | Zero Escape handlers on any overlay; filters not in URL |
| 4 | Consistency and Standards | 3 | Drawer vs. cart-page CTA copy mismatch; inconsistent select styling |
| 5 | Error Prevention | 1 | No confirm on clear-cart; unbounded quantity; unenforced `inStock` |
| 6 | Recognition Rather Than Recall | 3 | Cart showed only line totals, never unit price at qty>1 |
| 7 | Flexibility and Efficiency | 2 | Search/mega-menu present but broken for keyboard users |
| 8 | Aesthetic and Minimalist Design | 4 | Standout — restrained, disciplined, nothing decorative without meaning |
| 9 | Error Recovery | 1 | Contact form: no inline errors, no `name` attributes |
| 10 | Help and Documentation | 3 | FAQ + trust badges present but not contextual |
| **Total** | | **24/40** | **Acceptable — solid foundation, real gaps** |

## Design Specificity Verdict

Authored, not templated. The blueprint/patent-schematic illustration system (FIG numbers, dashed measurement circles, corner ticks) and the strict "mono only for spec-sheet metadata" typographic rule both read as deliberate product decisions, not category-interchangeable choices. The one thing that broke the illusion was Latin lorem ipsum on every product description — now replaced with authored Romanian copy.

## Deterministic scan (Assessment B)

1 hard finding from the static CSS scan: `codex-grid-background` on `globals.css` (the schematic-grid utility). Verified as a **true positive at the time** — the grid was applied to 7 plain hero/CTA/page-header sections beyond the 3 legitimate schematic illustrations. Fixed by scoping the utility to only `ProductPlate`/`HeroBlueprint`/`LocationPlate`, and persisted a narrow, documented detector ignore for the file now that usage is compliant. All 7 URL-based browser scans returned no data (missing `puppeteer` dependency in the shared plugin cache, outside this project's scope) rather than a clean bill of health — noted, not actionable here.

## Priority issues — status

- **[P0] Search broken for un-accented Romanian input** (`bormasina` → 0 results, and the SKU printed on every card wasn't searchable) — **Fixed**: diacritic-folding match extended to name/brand/description/SKU/category/specs, shared between the header search and a new in-shop search box; results are no longer silently capped (a "view all N results" link appears, and the shop page now supports `?cauta=`).
- **[P1] No keyboard access to any overlay** (cart drawer, mobile menu, search, Categorii mega-menu — zero Escape handlers, no focus trap, hover-only dropdown) — **Fixed**: shared `useOverlayDialog` hook adds Escape-to-close, scroll lock, and a Tab focus trap with restore-on-close; Categorii converted to a real click/keyboard disclosure with `aria-expanded`.
- **[P1] Checkout is one irreversible click with no persisted receipt** — **Fixed** the concrete gaps: the order confirmation now survives a refresh (persisted to localStorage, verified), and the "demo, no real payment" disclaimer moved above the button in higher-contrast text. Deliberately did **not** build a multi-step address/payment/review flow — that's scope beyond what a portfolio checkout needs, not a bug.
- **[P1] Lorem ipsum on all 20 product pages** — **Fixed**: rewrote all 40 filler paragraphs as authored, product-specific Romanian copy. (Note: the original task explicitly permitted lorem ipsum as a placeholder option — this was done as a quality upgrade, not a correction against instructions.)
- **[P2] Secondary text fails AA contrast site-wide** (`taupe-500`/`taupe-400`/`bronze-500`/`bronze-600` on light backgrounds, measured 2.3–3.8:1) — **Fixed**: systematically swapped to `taupe-600` (5.68:1) / `bronze-700` (5.85:1) everywhere used as text on a light surface; left unchanged everywhere the same tokens sit on dark backgrounds (already 4.9–11.7:1) or are purely decorative icon/border color.
- **[P2] Product card CTA overflow with a discount price present** — **Fixed**: `flex-wrap` + `shrink-0` on the price/button row.

## Also fixed (found during remediation, not in the original report)

- `inStock` was defined and set on every product but read nowhere — wired up a real out-of-stock demo product (disabled purchase panel, muted plate, no phantom "notify me" promise).
- Cart line items showed only the total, never unit price at qty > 1.
- "Golește coșul" (clear cart) had no confirmation and was styled as a neutral link despite being destructive — added an inline two-step confirm and trash icon.
- Quantity had no ceiling (reached 15+ with no limit) — clamped to 20.
- Contact form inputs had no `name` attributes at all — added, plus full inline validation with `aria-invalid`/`aria-describedby`.
- Framer Motion ignored `prefers-reduced-motion` (only CSS animations respected it) — wrapped the app in `MotionConfig reducedMotion="user"`.
- Added a skip-to-content link (Sam/screen-reader persona finding).
- Drawer vs. cart-page CTA copy said two different things for two different steps — renamed for clarity.

## Not pursued (left as open creative direction, not bugs)

Assessment A's "what if" provocations — schematic plates carrying real per-product measurements instead of decorative ticks, checkout reimagined as a stamped spec sheet, dropping star-rating/review-count conventions entirely to lean harder into the no-photography premise — are legitimate redesign ideas, not defects. Not implemented unilaterally since they're a creative-direction call, not a fix.
