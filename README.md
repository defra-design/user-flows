# User flows

A shared way for Defra design teams to show every screen in a service’s journeys as small desktop and mobile wireframes, linked to the pages in a GOV.UK Prototype Kit prototype.

This repository is a working [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/) prototype that contains:

- **the guide** – how to read, make and change a user flow (`/guide`)
- **an example user flow** – for a made-up service, Apply for a woodland creation grant (`/example/user-flow`)
- **the example service** – clickable pages that the example user flow links to (`/example/start`)
- **AI skills** – for GitHub Copilot, Claude Code and similar tools (`.github/skills`)

The user flow tool started in the Flood Map for Planning prototype.

## Run it

You need [Node.js](https://nodejs.org/) 22 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add a user flow to your own prototype

Copy 2 files into your prototype, in the same places:

| File | What it does |
|------|--------------|
| `app/views/includes/user-flow/wireframes.njk` | Draws the wireframes, steps and styles. Don’t change it unless you’re adding a screen type. |
| `app/views/example/user-flow.html` | The user flow page. Put it with your prototype’s pages, for example `app/views/user-flow.html`, and change the `journeys` and `otherPages` lists to describe your service. |

Full steps are in the guide, at `/guide/add-to-your-prototype`.

## Where things are

| Path | What it is |
|------|------------|
| `app/views/includes/user-flow/wireframes.njk` | The shared wireframes, step macros and styles |
| `app/views/example/user-flow.html` | The example user flow – copy this one |
| `app/views/example/*.html` | The example service’s pages |
| `app/views/guide/` | The guide pages |
| `app/views/layouts/user-flow-guide.html` | Layout and side navigation for the guide |
| `.github/skills/` | `create-user-flow` and `edit-user-flow` AI skills |

## Contributing

If you add a screen type that other teams could use, or improve the guide, raise a pull request. Keep the example service made-up and neutral so it works as an example for any team.
