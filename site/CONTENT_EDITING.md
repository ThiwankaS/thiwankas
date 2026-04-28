# Content Editing Guide

This website is now data-driven so updates are easy.

## Where to edit

Edit the `PROFILE` object in `site/app.js`.

## What to edit

- `PROFILE.contact`: top contact links (email, GitHub, LinkedIn)
- `PROFILE.sections`: all main sections in the page

Each section has:

- `id`: unique key (used for expand/collapse memory)
- `title`: section heading
- `type`: one of `paragraph`, `pills`, `cards`, `timeline`, `list`
- `content`: section data (format depends on `type`)
- `open` (optional): set `true` to keep section open by default

## Frequently updated sections

- **Experience**: section with `id: "experience"` and `type: "timeline"`
- **Qualifications**: section with `id: "qualifications"` and `type: "timeline"`
- **Achievements**: section with `id: "achievements"` and `type: "list"`

## Timeline item format

Use this object shape inside a timeline section:

```js
{
  title: "Role or Qualification",
  organization: "Company or Institution",
  period: "2024 - Present",
  summary: "One sentence summary",
  link: "https://example.com" // optional
}
```

## Local preview

From repository root:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/site/`

## Notes

- Theme selection and open/closed section state are saved in browser `localStorage`.
- If content changes do not appear, hard refresh your browser once.
