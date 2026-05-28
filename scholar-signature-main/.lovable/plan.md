### Changes

1. **Home page (`src/routes/index.tsx`)**
   - Remove the entire "Research Themes — Three intersecting lines of inquiry" section (the three icon cards: Women's & Perinatal Health, Health Economics, Policy & Prevention).
   - Also remove the unused icon imports `HeartPulse`, `LineChart`, and `ShieldCheck` from the Lucide import.

2. **About page (`src/routes/about.tsx`)**
   - Replace the existing three-paragraph bio in the first `Section` with the new text provided by the user, preserving the two-column layout (text left, portrait right).