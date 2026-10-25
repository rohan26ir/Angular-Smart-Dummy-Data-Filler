# Angular-Smart-Dummy-Data-Filler (GhostInput)

[![Angular](https://img.shields.io/badge/Angular-21.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **GhostInput · Smart Dummy Data Filler** is a production-grade multi-page marketing website, interactive demo playground, and Chrome Web Store compliant privacy & documentation platform for QA automation engineers and full-stack developers.

---

## ⚡ Overview

Modern reactive frontend frameworks (React 18/19, Vue 3, Angular Signals, Svelte 5) intercept standard DOM setter mutations (`input.value = "..."`). Standard browser autofillers and legacy dummy data tools trigger synthetic tracker rejections, leaving form submit buttons disabled.

**GhostInput** resolves this fundamentally by directly accessing native prototype property descriptors (`HTMLInputElement.prototype.value`) and dispatching genuine bubbling events. This website serves as the official portal, interactive live playground, and Chrome Web Store compliance platform for the extension.

---

## 🌟 Key Features

* **Framer-Grade Dark Aesthetic**: Looping CloudFront background video with cinematic vignette, ambient radial gradients, and sleek glassmorphism.
* **Modern Typography**: Powered by **FSP DEMO - Podium Sharp 4.11** (`font-podium`) for impactful headlines and **Inter** (`font-inter`) for crisp typography.
* **Reusable vs. Non-Reusable Component Architecture**: Strict clean-code organization separating shared UI primitives from feature-specific components.
* **Interactive Live Playground**: Real-time form hydration testing with multi-persona switching (*Default US Dev*, *E-Commerce Buyer*, *Enterprise B2B*), simulated 50ms hydration latency, and reset capability.
* **React 19 Fiber Tracker Bypass**: Direct native property descriptor setter dispatching authentic bubbling input & change events.
* **Synchronized Password Pairs**: Guarantees matching credentials across password and confirm-password fields.
* **Context-Aware Heuristics Engine**: Evaluates ARIA tags, labels, placeholders, and autocomplete attributes.
* **100% Client-Side Privacy**: Zero remote servers, zero external CDNs, zero telemetry, and zero tracking.
* **Full Multi-Page Suite**: Integrated routing with sticky header navbar, active route indicators, and persistent footer.

---

## 🗺️ Application Routes & Pages

| Route | Page | Purpose & Description |
| :--- | :--- | :--- |
| **`/`** | **Home** | Viewport hero with Podium clamp headlines, live interactive demo playground, bento architecture grid, comparison matrix, FAQ accordion, and conversion CTA. |
| **`/features`** | **Features** | Comprehensive breakdown of technical capabilities (Prototype Bypass, Password Syncing, Regex Heuristics, Shadow DOM traversal, Hotkeys). |
| **`/about`** | **About** | Origin story, the problem with standard autofill, our 4 engineering pillars, and technical specifications. |
| **`/testimonials`** | **Testimonials** | Real-world engineering feedback, 5-star rating cards, time-saved metrics, and company affiliations. |
| **`/contributors`** | **Contributors** | Lead architect profile (Rohan), open source contribution pillars, and contribution guidelines. |
| **`/help-feedback`** | **Help & Feedback** | Keyboard shortcut quick-reference table, troubleshooting guide, and interactive feedback submission form. |
| **`/privacy`** | **Privacy Policy** | **100% Chrome Web Store Compliant** privacy disclosures covering `<all_urls>`, `storage`, `contextMenus`, and CWS Limited Use certification. |
| **`/terms`** | **Terms of Service** | Developer and QA testing terms, permitted use, and liability disclaimers. |

---

## 🏗️ Project Architecture

```text
src/app/
├── components/
│   ├── reusable/                                 # 🔄 Reusable / Shared UI Components
│   │   ├── background-video.component.ts         # Fullscreen looping video with dark overlays
│   │   ├── navbar.component.ts                   # Responsive header navbar with page links & Chrome CTA
│   │   ├── mobile-menu.component.ts              # Staggered fullscreen mobile menu drawer
│   │   ├── cta-button.component.ts               # Black & outline CTA buttons with hover micro-interactions
│   │   ├── stat-badge.component.ts               # Metric counter item with bold numbers & uppercase tracking
│   │   └── footer.component.ts                   # 5-column organized footer with links & compliance info
│   │
│   └── non-reusable/                             # 🎯 Feature-Specific Components
│       ├── ghostinput-hero.component.ts          # Framed hero section (Podium clamp headline, subtext, stats)
│       ├── interactive-demo.component.ts         # Live form hydration simulator with persona switching
│       ├── bento-features.component.ts           # Architecture cards with code snippets
│       ├── comparison-table.component.ts         # Feature matrix vs Browser Autofill & Legacy tools
│       └── faq-accordion.component.ts            # Expandable FAQ questions
│
├── pages/
│   ├── home/                                     # Landing page assembling hero & features
│   ├── features/                                 # Technical features breakdown
│   ├── about/                                    # Mission & engineering philosophy
│   ├── testimonials/                             # QA & dev feedback
│   ├── contributors/                             # Open source community & maintainers
│   ├── help-feedback/                            # Troubleshooting, cheat sheet & feedback form
│   ├── privacy/                                  # CWS Compliant Privacy Policy
│   └── terms/                                    # Terms of Service
├── app.routes.ts                                 # Angular Route configuration
├── app.ts & app.html                             # Global shell layout (Navbar, Video, Outlet, Footer)
└── styles.css                                    # Tailwind directives, Podium font-face & animations
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v20.x` or higher
* **npm**: `v10.x` or higher

### Installation
```bash
# 1. Clone repository
git clone https://github.com/rohan26ir/Angular-Smart-Dummy-Data-Filler.git

# 2. Navigate to project
cd Angular-Smart-Dummy-Data-Filler

# 3. Install dependencies
npm install
```

### Running Locally
```bash
npm start
# or: npx ng serve
```
Open **`http://localhost:4200`** in your browser. The application will hot-reload automatically upon file changes.

### Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/web-ghostinput/browser`.

---

## 🤝 How to Contribute

We welcome and appreciate all contributions from developers, QA automation engineers, open-source advocates, and designers! Whether you're squashing bugs, adding international persona presets, optimizing prototype setter heuristics, improving documentation, or refining UI micro-animations, every contribution makes **GhostInput** better for everyone.

---

### 📋 Code of Conduct
We are committed to providing a welcoming, inclusive, and harassment-free community for all contributors regardless of experience level, background, or identity. Please maintain respectful, collaborative, and constructive communication across issues, discussions, and pull requests.

---

### 🌟 Ways to Contribute
You can contribute to GhostInput in several meaningful ways:
1. **🐛 Report Bugs**: Found a form where GhostInput didn't trigger, or a reactive framework that failed to register input? Open an issue with a minimal reproduction or target URL.
2. **💡 Propose Features**: Suggest new persona presets (e.g. medical, legal, localized e-commerce), accessibility checks, or keyboard shortcuts.
3. **💻 Code Contributions**: Add new features, fix issues, optimize event dispatching, or enhance Angular standalone components.
4. **🌍 Internationalization & Personas**: Contribute localized dummy datasets (names, addresses, postal codes, phone numbers) for different regions and locales.
5. **🧪 QA & Framework Edge Cases**: Test against complex web apps (Shadow DOM roots, custom elements, React Hook Form, Formik, Ant Design) and submit edge-case patches.
6. **📖 Documentation & Guides**: Improve setup docs, write Playwright/Cypress/Puppeteer testing guides, or document best practices.

---

### 🛠️ Step-by-Step Contribution Workflow

Follow these steps to contribute code or documentation changes:

#### 1. Fork the Repository
Click the **Fork** button at the top-right of the [GitHub Repository](https://github.com/rohan26ir/Angular-Smart-Dummy-Data-Filler) to create a copy under your personal GitHub account.

#### 2. Clone Your Fork Locally
Clone your fork to your local development machine:
```bash
git clone https://github.com/<YOUR_USERNAME>/Angular-Smart-Dummy-Data-Filler.git
cd Angular-Smart-Dummy-Data-Filler
```

#### 3. Add the Upstream Remote
Keep your fork synchronized with the main project:
```bash
git remote add upstream https://github.com/rohan26ir/Angular-Smart-Dummy-Data-Filler.git
git fetch upstream
```

#### 4. Install Dependencies
Ensure you have **Node.js 20+** and **npm 10+** installed, then run:
```bash
npm install
```

#### 5. Create a Feature Branch
Always create a new branch from `upstream/main` with a clear, descriptive name:
```bash
# For a new feature:
git checkout -b feature/international-personas

# For a bug fix:
git checkout -b fix/react-input-bubble-event

# For documentation updates:
git checkout -b docs/playwright-recipe
```

#### 6. Develop & Run Locally
Start the Angular development server with hot-reload:
```bash
npm start
# or: npx ng serve
```
Visit **`http://localhost:4200`** in your browser. Changes will automatically recompile and reload the browser.

#### 7. Coding Standards & Conventions
To ensure consistency and quality across the codebase, please adhere to:
* **Angular 21 Standalone Components**: Use modern Standalone components with explicit `imports: [...]`. Avoid creating Angular `NgModule`s.
* **Component Architecture**:
  * Shared UI primitives (buttons, navbar, footer, modals, badges) belong in `src/app/components/reusable/`.
  * Feature-specific views and sections belong in `src/app/components/non-reusable/` or dedicated `src/app/pages/`.
* **TypeScript & Signals**: Favor Angular Signals for reactive UI state over legacy RxJS subjects where possible.
* **Tailwind CSS Styling**:
  * Use the established dark palette (`bg-[#090A0F]`, `border-white/10`, `text-slate-300`).
  * Use `font-podium` (`FSP DEMO - Podium Sharp 4.11`) for bold clamp headlines and section titles.
  * Use `font-inter` for body typography, captions, and forms.
  * Implement smooth micro-interactions (`transition-all duration-300 ease-out`, hover glows, and subtle scale).
* **Lucide Angular Icons**: Import `LucideAngularModule` in component `imports: [...]`, assign icon definitions as class properties, and bind `<lucide-icon [img]="IconName">`.
* **Zero Telemetry / CWS Compliance**: Ensure no code introduces external trackers, remote script injection, analytics beacons, or data exfiltration.

#### 8. Verify the Build
Before committing, make sure the project builds cleanly without TypeScript or Angular compiler errors:
```bash
npm run build
```

#### 9. Commit with Conventional Commits
Write clear, concise commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) specification:
```bash
git add .
git commit -m "feat(personas): add German (DE) address and IBAN generator heuristics"
```
* `feat:` A new feature or capability
* `fix:` A bug fix
* `docs:` Documentation only changes
* `style:` Formatting, missing semicolons, or aesthetic tweaks (no code logic change)
* `refactor:` Code restructuring without behavioral changes
* `perf:` Performance improvements
* `test:` Adding or updating tests
* `chore:` Build tooling, package updates, or configuration

#### 10. Push to Your Fork
Push your local branch to your GitHub fork:
```bash
git push origin feature/international-personas
```

#### 11. Open a Pull Request
1. Navigate to the original repository: [rohan26ir/Angular-Smart-Dummy-Data-Filler](https://github.com/rohan26ir/Angular-Smart-Dummy-Data-Filler).
2. You will see a prompt to **"Compare & pull request"**. Click it!
3. Provide a clear PR title and descriptive summary:
   * **Summary**: What does this PR do?
   * **Motivation / Context**: What issue or use case does this solve?
   * **Testing Steps**: How can maintainers test and verify your changes?
   * **Screenshots / GIFs**: (If modifying UI elements or styling).
   * **Related Issues**: Reference any linked issues (e.g. `Closes #12`).
4. Submit the PR for review! Maintainers will review your submission and provide feedback promptly.

---

### 💡 High-Impact Contribution Ideas
Looking for inspiration? Here are areas where contributions are especially welcome:
* 🌐 **International Localization**: Schemas for non-US addresses, phone masks, and national identification formats.
* 🛡️ **Complex Form Framework Support**: Testing and patching quirks with Mantine, Chakra UI, Ant Design, and Web Components.
* 🏎️ **Performance Optimization**: Benchmark and optimize native setter injection speed across 1,000+ fields.
* 🧪 **End-to-End Automation Examples**: Community recipes showing GhostInput combined with Playwright and Cypress test runners.
* 🎨 **Design System Expansion**: New micro-animations, persona preview visualizers, and interactive state feedback.

---

### 📬 Need Help or Have Questions?
If you have questions before submitting a PR or want to bounce an idea off the maintainers:
* Open an issue or discussion on [GitHub Issues](https://github.com/rohan26ir/Angular-Smart-Dummy-Data-Filler/issues).
* Reach out directly via email to the Lead Architect: **[rohan26ir@gmail.com](mailto:rohan26ir@gmail.com)**.
* Visit the [Help & Feedback](http://localhost:4200/help-feedback) page within the running app.

---

## 🛡️ Chrome Web Store Compliance

The [`/privacy`](http://localhost:4200/privacy) page is explicitly designed to meet Google Chrome Web Store Developer Program Policies:
1. **Host Permission Justification (`<all_urls>`)**: Fully documented for passive testing on live sites, staging servers, and `localhost`.
2. **Storage Justification (`storage`)**: Documented as strictly local preference storage via `chrome.storage.local`.
3. **Context Menus (`contextMenus`)**: Documented for right-click autofill convenience.
4. **Limited Use Certification**: Fully adheres to Google's Limited Use requirements (no data selling, no advertising, no credit checks).

---

## 👨‍💻 Author & Maintainer

* **Lead Architect**: Rohan ([rohan26ir@gmail.com](mailto:rohan26ir@gmail.com))
* **Repository**: [https://github.com/rohan26ir/Angular-Smart-Dummy-Data-Filler](https://github.com/rohan26ir/Angular-Smart-Dummy-Data-Filler)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
