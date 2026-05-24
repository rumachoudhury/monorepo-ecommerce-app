# CLIENT APP – CLAUDE CODE AGENT RULES (STRICT MODE)

This file defines rules ONLY for the frontend (`apps/client`) in this monorepo.

It must be used together with the root `CLAUDE.md`.

---

## 🚨 RULE SCOPE

This file controls ONLY frontend (React/UI) behavior.

It does NOT control:

- backend logic
- database rules
- monorepo structure
- deployment
- CI/CD

---

## 🚨 CORE PRINCIPLE

You are NOT a creative assistant.

You are a **deterministic frontend engineering agent**.

Your job is:

- Build stable UI
- Prevent runtime/UI bugs
- Follow existing patterns exactly
- Make minimal, safe changes
- Avoid unnecessary refactors

---

## ❌ ABSOLUTE FORBIDDEN ACTIONS

Never:

- Introduce new folder structures
- Add new libraries without explicit request
- Rewrite working code for “refactor” or “cleanup”
- Change architecture without instruction
- Remove existing features
- Modify unrelated files
- Assume API response structure
- Guess data types or shapes

---

## 🧠 BEFORE WRITING ANY CODE

Always:

1. Inspect existing code first
2. Understand current UI behavior
3. Identify minimal required change
4. Check side effects on other components
5. Apply smallest safe fix

If unsure → STOP and ask.

---

## ⚛️ REACT RULES

- Use functional components only
- Keep components small and reusable
- Do not mix UI logic with business logic
- Avoid unnecessary component complexity

### Hooks rules

- `useEffect` must have correct dependencies
- Always cleanup effects (timers, listeners, subscriptions)
- Do not access DOM before mount
- Avoid incorrect re-render triggers

---

## 🌐 API RULES (FRONTEND)

- All API calls must live in `/services`
- Always use `async/await`
- Always handle:
  - loading state
  - error state
  - empty state
- Never call APIs directly inside JSX or render logic
- Never assume backend response structure

---

## 🎨 UI / UX RULES

- Mobile-first design is mandatory
- Do not break existing layouts
- Avoid layout shift (CLS)
- Preserve UI consistency
- No large redesigns without instruction

---

## 🧩 STATE MANAGEMENT RULES

- Use `useState` for local state
- Do not introduce new state libraries
- Use Zustand only if already used in project
- Lift state only when necessary
- Avoid deep prop drilling when possible

---

## 🧯 BUG FIX RULE

When fixing bugs:

1. Find root cause first
2. Apply smallest possible fix
3. Do NOT refactor during fix
4. Do NOT optimize at the same time

Fix ≠ refactor

---

## 🧪 DEBUGGING RULES

Before making changes:

- Check props/state values
- Inspect component lifecycle
- Verify refs and DOM availability
- Validate API responses before assumptions

Never guess runtime behavior.

---

## 🧼 CLEANUP RULE

- Do not delete code unless confirmed unused
- Prefer commenting instead of removal
- Avoid unnecessary refactors
- Keep changes minimal and safe

---

## ⚡ PERFORMANCE RULES

- Avoid unnecessary re-renders
- Avoid inline functions inside JSX when possible
- Memoize only when there is real benefit
- Keep render logic lightweight
- Avoid blocking UI with heavy logic

---

## 🧱 ECOMMERCE UI SAFETY RULES

- Do NOT break cart, checkout, or payment UI flow
- Do NOT change pricing display logic without instruction
- UI changes must NOT affect purchase flow behavior
- Preserve user journey stability

---

## 🧭 FRAMEWORK SAFETY RULES

- Do not assume framework behavior beyond this project
- Do not change build tooling without instruction
- Do not migrate routing system without request

---

## 🧠 FINAL GOLDEN RULE

> “Make the smallest correct change that preserves UI stability.”

If unsure:

→ Stop  
→ Analyze impact  
→ Ask before modifying
