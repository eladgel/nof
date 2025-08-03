# Work Plan for nofrayer Chrome Extension

> **Purpose**: Provide a clear, incremental roadmap to build, document, automate, and release **nofrayer**.
> **Format**: Each **Chapter** is split into **Mini‑Steps**, ending with a **⛔️ Stop & Validate** checklist.
> **Checkpoint Enforcement**: Work on a dedicated branch per chapter (`chapter‑X`). Merge to `main` only via a PR **after** its checklist is green. The PR template must include:
>
> ```markdown
> - [ ] I confirm all Stop & Validate items for Chapter X are green.
> ```
>
> A CI workflow blocks the merge if the box is unchecked.
## Chapter 1  ·  Repository Bootstrap


## Chapter 2  ·  Project Documentation

### 2.1 Create `README.md`

* Add **Project vision**, **tech stack**, and **quick‑start** commands.
* Embed architecture diagram showing UI, background, content, and storage flow.
* **Add a progress checklist** so you can tick chapters as they’re completed:

  ```markdown
  ## Project Progress
  - [x] Chapter 1 – Repository Bootstrap
  - [x] Chapter 2 – Project Documentation
  - [x] Chapter 3 – CI/CD Automation
  - [ ] Chapter 4 – Core Extension Features
  - [ ] Chapter 5 – Packaging & Release
  - [ ] Chapter 6 – Quality Assurance
  - [ ] Chapter 7 – Deployment & Next Steps
  ```

### 2.2 Author `instructions/COMMIT_INSTRUCTIONS.md`

* Follow [Conventional Commits](https://www.conventionalcommits.org) + Release Please rules:

  * `feat(scope): add …`
  * `fix(scope): …`
  * `chore!: breaking …`
* Provide handy table of types & scopes.

#### ⛔️ Stop & Validate (Chapter 2)

* `README.md` renders correctly on GitHub and checkboxes are interactive.
* `instructions/COMMIT_INSTRUCTIONS.md` visible and linkable. & Validate (Chapter 2)
* `README.md` renders correctly on GitHub.
* `instructions/COMMIT_INSTRUCTIONS.md` visible and linkable.

---

## Chapter 3  ·  CI / CD Automation

### 3.1 Configure Release‑Please

1. **Add config file**: create `.release-please-config.json` at repo root:

   ```json
   {
     "packages": {
       ".": {
         "release-type": "chrome-extension",
         "manifest": "src/manifest.json",
         "include-component-in-tag": false
       }
     },
     "bump-minor-pre-major": true,
     "include-v-in-tag": true,
     "commit-filtering": "lenient"
   }
   ```
2. **Add workflow**: `.github/workflows/release-please.yml`

   ```yaml
   name: release-please
   on:
     push:
       branches: [main]
   permissions:
     contents: write
   jobs:
     release:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: googleapis/release-please-action@v4
           with:
             release-type: node
             package-name: nofrayer
   ```

### 3.2 Enforce Commit Message Linting

1. `yarn add -D @commitlint/{config-conventional,cli} husky`
2. `npx husky install` → add `commit-msg` hook: `echo "npx --no-install commitlint --edit $1" > .husky/commit-msg`.
3. Point devs to `instructions/COMMIT_INSTRUCTIONS.md` for format.

### 3.3 Add Versioning & Changelog

* Release‑Please will open PRs that bump `package.json` and create `CHANGELOG.md`.

#### ⛔️ Stop & Validate (Chapter 3)

* Dummy `feat:` commit triggers a **release‑please** PR.
* `CHANGELOG.md` and version bumps appear.
* Commit‑lint rejects bad messages. & Validate (Chapter 3)
* A dummy `feat:` commit on `main` triggers a PR labelled **release‑please--branches--main**.
* Reject if CI fails commit‑lint.

---

## Chapter 4  ·  Core Extension Features

### 4.1 Popup UI – Commission Snapshot

* Use **shadcn Card & Badge** components.
* Display header **nofrayer** and a summary card:

  * **Daily commissions:** *\$X.XX/day*
  * **Monthly commissions:** *\$Y.YY/month*
  * **Yearly commissions:** *\$Z.ZZ/year*
  * **💸 Lost since install:** *\$TOTAL*
* Add a **Settings** link/button (`chrome.runtime.openOptionsPage`) so users can adjust bank & holding details.
* Show a subtle spinner badge when calculations are in progress.

### 4.2 TASE Commissions API Integration *(deferred)* TASE Commissions API Integration *(deferred)*

After the settings screen is functional end‑to‑end, call
`GET https://api.tase.co.il/api/commissions/loadcommissions` → store response in `chrome.storage.local` (24 h cache).
Display the commission table inside the *Options* page.
*Target milestone: after the Settings screen is live.*

### 4.3 Settings Screen

* User selects **Bank** and inputs **Israeli / Foreign securities** values.
* Persist via `storage.sync`.

#### ⛔️ Stop & Validate (Chapter 4)

* Popup shows commission snapshot and settings link correctly.
* API call succeeds and options page renders data (if implemented).
* Settings persist after browser restart.

---

## Chapter 5  ·  Packaging & Release

### 5.1 Production Build Script

* `yarn build && yarn build:ext` outputs `dist/` with version from `package.json`.

### 5.2 Zip Artifact

* GitHub Release workflow uploads `amalton‑vX.Y.Z.zip` ready for Chrome Web Store.

### 5.3 Store Listing Checklist

* 128×128 & 48×48 icons.
* Short & long description.
* Privacy policy link.

#### ⛔️ Stop & Validate (Chapter 5)

* Manual install zip → extension loads without warnings.

---

## Chapter 6  ·  Quality Assurance

### 6.1 Unit Tests

* Jest + React Testing Library for UI.
* Vitest for background/content utilities.

### 6.2 E2E Tests

* Playwright to load a test page and verify status notifications.

#### ⛔️ Stop & Validate (Chapter 6)

* `yarn test` and `yarn e2e` both green.

---

## Chapter 7  ·  Deployment & Next Steps

1. Merge `release‑please` PR → auto‑create GitHub Release + zip.
2. Submit to Chrome Web Store — track review status.
3. Gather user feedback → open issues & schedule vNext.

#### ⛔️ Final Checklist

* All previous Stop & Validate points confirmed.
* README badges (version, build) show green.

---

### Appendix A  ·  Merging Historical Files

* Import any **legacy markdown files** into this document under relevant Chapters.
* Remove duplicates and close obsolete GitHub issues.

> **Next Action**: Review **Chapter 1**. Reply *✅* when it passes validation, or comment with fixes. We’ll iterate chapter‑by‑chapter.

---

## 🎬 YouTube Video Series Roadmap

> **Goal**: Produce a concise, chapter‑by‑chapter tutorial playlist for YouTube so viewers can follow the build and learn Chrome‑extension best practices. Each episode ≤ 10 minutes, recorded in 1080p, with voice‑over, on‑screen code, and chapter timestamps.

### Episode 0  ·  Planning & Series Overview *(5‑7 min)*

* Hook: Why track bank commissions? Demo "💸 lost since install" mock.
* Walk through the Work Plan PDF on‑screen.
* Explain branching model & checkpoint enforcement.
* CTA: “Clone the repo and get ready for Episode 1.”

### Episode 1  ·  Repository Bootstrap *(8‑10 min)*

* Live: `create-next-app` scaffold, repo setup, push to `chapter-1`.
* Show manifest v3 basics.
* **Checkpoint**: Load unpacked extension → working popup.

### Episode 2  ·  Adding Webpack & shadcn UI *(8 min)*

* Install deps, configure `next.config.js`.
* Import `<Button>` and hot‑reload.
* **Checkpoint**: Styled popup in Chrome.

### Episode 3  ·  Project Documentation *(6 min)*

* Draft README with checklist.
* Write `instructions/COMMIT_INSTRUCTIONS.md`.
* **Checkpoint**: Docs render correctly.

### Episode 4  ·  CI/CD with Release‑Please *(9 min)*

* Create `.release-please-config.json` & workflow.
* Commit‑lint + Husky demo—show failed bad commit.
* **Checkpoint**: Fake `feat:` commit triggers release PR.

### Episode 5  ·  Popup UI – Commission Snapshot *(10 min)*

* Build Card & Badge components.
* Mock daily/monthly/yearly numbers in state.
* Add Settings link.
* **Checkpoint**: Snapshot values display.

### Episode 6  ·  Settings Screen *(8 min)*

* Options page routing & form (bank, holdings).
* Persist to `storage.sync`.
* **Checkpoint**: Values survive reload.

### Episode 7  ·  TASE API Integration *(deferred episode)*

* Fetch & cache commissions JSON.
* Render table; discuss rate‑limiting.
* **Checkpoint**: Network call visible in DevTools.

### Episode 8  ·  Packaging & Release *(7 min)*

* Run build script, inspect `dist/`.
* Tag release → GitHub artifact.
* Manual zip install test.
* **Checkpoint**: Extension loads error‑free.

### Episode 9  ·  Testing Suite *(9 min)*

* Jest + RTL example; Playwright E2E run.
* Show CI green checks.
* **Checkpoint**: All tests pass.

### Episode 10  ·  Publish & Next Steps *(6 min)*

* Chrome Web Store submission tips.
* Roadmap teaser (new features, analytics).
* Series recap & subscribe CTA.

---

### Production Tips

| Aspect             | Recommendation                                           |
| ------------------ | -------------------------------------------------------- |
| **Screen capture** | Use OBS; separate audio track for easy noise gating.     |
| **Branding**       | Add a simple logo sting “nofrayer” 3 sec intro/outro.    |
| **Captions**       | Auto‑generate, then edit for accuracy.                   |
| **Thumbnail**      | Bold title, loss counter graphic, consistent palette.    |
| **Chapters**       | Use YouTube timestamps so users can jump to checkpoints. |

> **Next Action**: Approve the series outline or suggest tweaks (episode order, length, extras). After approval we can script Episode 0 in detail.
