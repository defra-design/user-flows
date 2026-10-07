---
name: edit-user-flow
description: Edit a user flow page – add, remove or reorder steps and journeys, update live and prototype links, add pages outside the main flow, or add a new screen type.
status: discovery
applyTo:
  - add a step to the user flow
  - add a journey to the user flow
  - update the user flow
  - change a screen in the user flow
  - add a page outside the main flow
  - add a new screen type to the user flow
---

# Edit a User Flow

> **Status: Discovery.** This skill is still being explored. The steps below are a starting point and may change. Record anything that doesn't work well under [Open questions](#open-questions).

A user flow is a page (`user-flow.html`, anywhere under `app/views/` – often one per version folder, like `app/views/v2/user-flow.html`) that shows each journey through the service as small desktop and mobile wireframes. The wireframes, steps and styles are drawn by a shared file, `app/views/includes/user-flow/wireframes.njk`, used by every user flow in the prototype. See the guide at https://github.com/defra-design/user-flows (run it and open `/guide`) for how it works.

---

## Information needed

- **Which user flow** – find every `app/views/**/user-flow.html`. If there's more than one, default to the newest version and say which you picked
- **What to change** – in the user's words, e.g. "add a contact details step after results in the main journey"

---

## Where things live in the file

Only edit these two lists near the top of `user-flow.html`:

| List | Holds |
|------|-------|
| `journeys` | Journeys, each with a `heading` and a list of `steps`, shown in order with arrows |
| `otherPages` | Pages outside the main flow, shown in a dashed box with a "Linked from" list |

Each step or page:
```
{ "type": "radio", "title": "Who owns the land", "live": "/eligibility", "prototype": "eligibility", "note": "Optional note" }
```

| Field | Meaning |
|-------|---------|
| `type` | Screen type – see list below |
| `title` | Label above the screen |
| `live` | Address on the live service – plain text, can include placeholders like `/applications/[reference]` |
| `prototype` | Page in the prototype – a link. No leading slash = same folder as the user flow |
| `note` | Short note under the screen |
| `from` | `otherPages` only – list of pages that link to it |

A **choice step** shows several screens side by side in a dashed box, where the user goes through one of them and then carries on. It counts as one step. It has `choice` (a short label, used as the accessible name) and `options` (a list of normal steps) instead of `type`:
```
{ "choice": "Add the planting area", "options": [
  { "type": "draw-polygon", "title": "Draw the area", "live": "/map", "prototype": "draw" },
  { "type": "upload",       "title": "Upload a boundary file", "live": "/upload", "prototype": "upload" }
] }
```

Screen types: `start`, `hero`, `signin`, `tasklist`, `text`, `radio`, `checkbox`, `check`, `confirmation`, `dashboard`, `map`, `draw-polygon`, `draw-square`, `upload`, `results`, `content`. Check `ufScreenTypes` in `wireframes.njk` for the current list – teams may have added their own.

---

## Workflow

### Step 1: Read the current lists
- Open the `user-flow.html` and read `journeys` and `otherPages`
- Confirm which journey and position the user means if it's ambiguous (for example the same page appears in several journeys)

### Step 2: Make the change
Common changes:

- **Add a step** – copy a nearby step line, change it, keep it in journey order
- **Remove a step** – delete the line; check the comma on the new last line
- **Reorder steps** – move lines; order in the list is order on the page
- **Add a choice** – if the user picks one of several screens at one point and then rejoins the same route (e.g. different ways to add a map boundary), use a choice step rather than a separate journey, so steps aren't repeated
- **Optional page** – if the user doesn't have to visit a page to carry on (e.g. grant rules linked from an estimate page), add it to `otherPages` and mention it in a note on the page that links to it. Don't make it a step or a choice
- **Add a journey** – copy a journey block, change `heading` and `steps`. Only for routes that differ from start to finish
- **Page used in several journeys** – ask whether to change it in all of them
- **Add a page outside the flow** – add to `otherPages` with a `from` list
- **Choose a type** – pick the screen type closest to the real page. If none fits, use the nearest one and ask if a new type is wanted (see Step 3)

Rules:
- Every item except the last in a list needs a trailing comma, and the last must **not** have one – Nunjucks fails on both
- Keep values in double quotes
- Only change `live` if the user gives the live address – never guess it
- For `prototype`, check `{value}.html` exists in the user flow's folder (or at `app/views{value}.html` for a value with a leading slash). If it doesn't, ask before adding a link to a page that doesn't exist

### Step 3 (only if asked): Add a new screen type
Adding a type changes the shared file `app/views/includes/user-flow/wireframes.njk`, which every user flow in the prototype uses, so confirm with the user first.
1. In the `ufScreen` macro, add a branch for the new type. Build it from the existing classes (`uf-l`, `uf-h`, `uf-btn`, `uf-card`, etc.) and match the header style of similar screens (the blue header is used for full screen map pages)
2. Add any new CSS in the `ufStyles` macro, with desktop and `.uf-mobile` rules
3. Check it fits the screen height: desktop screens are 104px tall, mobile 148px. Content below that is cut off
4. Add it to the `ufScreenTypes` list with a `name` and `use`. This adds it to **Screen types you can use** on every user flow and to the guide's screen types page
5. Add the type to the type list in the comment at the top of each `user-flow.html`

### Step 4: Check the page loads
- If the prototype is running, open the user flow's address (its path under `app/views/`, without `.html`) and check the change
- Look at both **Desktop** and **Mobile** views if a screen type changed
- If the new type would help other teams, suggest contributing it back to https://github.com/defra-design/user-flows

### Step 5: Summarise
Tell the user what changed, and list any steps where the prototype link was left empty or the live address is still needed.

---

## Open questions

These are being explored in discovery:

- Should the skill accept a description of a journey (e.g. from a research plan or a Mural board) and build the steps from it?
- Should it flag steps whose `prototype` page no longer exists, every time it runs?
- Should journeys be kept in a separate data file (e.g. JSON) so they're easier to edit, and shared between versions?
- When a page changes, should the skill update every version's user flow, or only the current one?
- Is a screen type for every page useful, or should a generic type with options (header colour, number of sections) replace some of them?

---

## Related

- `#create-user-flow` – add a user flow to a prototype, or to a new version
- Guide and example: https://github.com/defra-design/user-flows
