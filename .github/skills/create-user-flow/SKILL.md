---
name: create-user-flow
description: Add a user flow page to a GOV.UK Prototype Kit prototype, or to a new version of one, by copying the shared wireframes file and a user flow page and filling in the service's journeys.
status: discovery
applyTo:
  - add a user flow to this prototype
  - create a user flow for a new prototype version
  - copy the user flow into a new version
  - set up the user flow page
---

# Create a User Flow

> **Status: Discovery.** This skill is still being explored. Record anything that doesn't work well under [Open questions](#open-questions).

A user flow is a page (`user-flow.html`) that shows each journey through the service as small desktop and mobile wireframes, with the live and prototype address of each page. The wireframes, steps and styles are drawn by a shared file, `app/views/includes/user-flow/wireframes.njk`.

Source of both files, the guide and an example: https://github.com/defra-design/user-flows

---

## Information needed

- **Where the user flow goes** – e.g. `app/views/user-flow.html`, or a version folder like `app/views/v2/user-flow.html`
- **Copy from** – for a new version, the previous version's `user-flow.html`. Otherwise the example, `app/views/example/user-flow.html` from the user flows repo
- **Service name**
- **The journeys** – in the user's words, or work them out from the pages in the folder (ask the user to confirm the order)

---

## Workflow

### Step 1: Make sure the shared file is there
- If `app/views/includes/user-flow/wireframes.njk` doesn't exist, copy it from the user flows repo. Don't change it
- If it exists, don't overwrite it – the team may have added their own screen types

### Step 2: Copy the user flow page
- Copy `user-flow.html` to where it should go. No route is needed: the Prototype Kit serves `app/views/{path}.html` at `/{path}`
- Set `serviceName`

### Step 3: Fill in the lists
- **New prototype:** replace the example `journeys` and `otherPages` with the service's own (`{% set otherPages = [] %}` if there are none). Use the `#edit-user-flow` rules for steps, choice steps, other pages and commas
- **New version:** keep the journeys, and update steps for anything that changed in this version

### Step 4: Check prototype links
- A `prototype` value without a leading slash (e.g. `"map"`) links to the page in the same folder. Check `{value}.html` exists there
- A value with a leading slash (e.g. `"/v1/map"`) links to another folder. Leave it, but list it in the summary
- If a page doesn't exist, **don't delete the step**. Set `"prototype": ""` and list it in the summary

### Step 5: Link to it
- Add a link to the user flow from the prototype's home page (`app/views/index.html`), or from the version's entry on it. Ask first if the home page should keep pointing at an older version's user flow

### Step 6: Check the page loads
- If the prototype is running, open the user flow's address and check it loads with no errors

### Step 7: Summarise
Tell the user:
- the user flow's address
- which steps had their prototype link cleared, and which link to other folders
- that the guide is at https://github.com/defra-design/user-flows

---

## Open questions

- Should journeys be built automatically from the pages and routes in the folder?
- Should the skill fill in `prototype` links by matching page names?
- Should the home page link always point to the newest version?

---

## Related

- `#edit-user-flow` – change steps, journeys and pages, or add a screen type
