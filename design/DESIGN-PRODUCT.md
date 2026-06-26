# Telehealings — Design & Product Reference Document

> Living document — updated as we progress through the redesign.

---

## 1. Design System

### 1.1 Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#2a73d4` | Primary buttons, links, active states, focus rings |
| `--primary-hover` | `#2361b5` | Hover state for primary buttons |
| `--primary-dark` | `#0745b1` | Brand title text (login page) |
| `--primary-subtitle` | `#144db9` | Subtitle text (login page) |
| `--surface` | `#ffffff` | Cards, sidebar, table background |
| `--bg-page` | `#e5e5e5` | Login page background (flat) |
| `--bg-gradient` | `linear-gradient(110deg, #ffffff 0%, #eef5fc 35%, #7aaaf6 100%)` | Dashboard/app pages background |
| `--text-main` | `#111111` | Body text |
| `--text-muted` | `#4b4b4b` | Secondary text, form labels |
| `--text-soft` | `#64748b` | Placeholders, table headers, subtle text |
| `--text-dark` | `#0f172a` | Headings, tab labels, dark badges |
| `--border` | `#e2e8f0` | Card borders, separators, input borders |
| `--border-light` | `#f1f5f9` | Table row borders, subtle dividers |
| `--success` | `#22c55e` | Success badges, positive trends |
| `--danger` | `#ef4444` | Danger alerts, negative trends |
| `--warning` | `#f59e0b` | Warning badges, pending states |

### 1.2 Typography

- **Font family**: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Scale**: 16px base, 13px small, 14px body, 15px nav items, 16px card titles, 20px page headers, 26px login page title, 42px brand name (login)

### 1.3 Spacing & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `8px` | Buttons, inputs, small elements |
| `--radius-md` | `12px` | Profile cards, dropdown menus |
| `--radius-lg` | `16px` | Cards, table containers, modals |

### 1.4 Icons

- **Style**: SVG, outlined (stroke-based), 20px default for nav items, 14-16px for inline buttons, 12px for table actions
- **Color**: Matches text color via `currentColor`, or explicit `#000`/`#94a3b8` for specific states
- **All icons same color** — email and password input icons both use `#000` (not different colors)

### 1.5 Mascot & Branding

- **Logo**: `logo.png` — used in sidebar brand area (36x36px) and login page (90x90px)
- **Mascot**: `Heali.png` — used in page headers (32-36px) and inline with insight comments
- **Mascot position**: Right side of header, inline with insight box and action buttons
- **Login mascot**: `Heali-peak.png` — positioned top-right of login card

---

## 2. Layout Patterns

### 2.1 Sidebar

- **Width**: 260px expanded, 88px collapsed
- **Background**: White (`--surface`), right border `1px solid rgba(0,0,0,0.05)`
- **Nav items**: 12px 16px padding, 14px gap between icon and text
- **Active state**: `#1c52b8` background, white text and icons
- **Search box**: Pill-shaped input with icon, 20px border-radius
- **User profile**: 75px avatar (collapsed: 40px), name + role, dropdown on focus
- **Collapsed behavior**: text hidden, icons centered, search becomes circle icon

### 2.2 Page Shell

- **Background**: Gradient (not flat grey) for all pages using sidebar
- **Page shell**: `padding: 0 32px 16px`, `overflow-y: auto`
- **Sticky zone**: `position: sticky; top: 0; z-index: 50` — extends full width with negative margin, bottom padding 6px

### 2.3 Page Header

- **Layout**: Flex row, space-between, align-center
- **Left**: Page title (20px, bold)
- **Right**: Heali insight box + Heali mascot + action buttons
- **No border-bottom on header row** — removed the full-width line
- **Compact**: No extra margins, inline layout

### 2.4 Filter Row

- **Layout**: Flex row, space-between
- **Left**: Pill tabs (All/Active/Pending/Inactive) with counts
- **Right**: Action buttons (Export CSV, Add User) — small buttons
- **Heali Insight**: Now in header row (right side), not in filter row

### 2.5 Tables

- **Min width**: 900px (horizontal scroll on smaller screens)
- **Sticky header**: `position: sticky; top: 0; z-index: 10`
- **Row hover**: `#f8fdfc` background
- **Status badges**: Green (booked), Amber (pending) with dot indicator
- **Inline filters**: Chevron arrow next to column label → click → input/select replaces label in-place (absolute positioned at bottom of th)
- **Contact column**: Hidden below 1200px via media query
- **Avatar fallback**: Initials in colored circle if image fails

### 2.6 Buttons

| Class | Padding | Font | Radius | Usage |
|-------|---------|------|--------|-------|
| `.btn-sm` | 7px 14px | 13px | 8px | Header actions, filter row actions |
| `.btn-pill` | 10px 20px | 14px | 99px | Toolbar buttons (legacy) |
| `.btn-outline` | border: 1px solid `--border` | `--text-soft` | — | Secondary actions |
| `.btn-primary` | bg: `--primary` | white | — | Primary actions |

---

## 3. Component Patterns

### 3.1 Inline Table Filters

- **Default state**: Column label + small chevron arrow (color: `#cbd5e1`)
- **Click arrow**: Label hides, input/select appears in same spot (absolute positioned)
- **Active state**: Blue border + glow on input, close (X) button to dismiss
- **Behavior**: Only one filter open at a time, auto-focus on open
- **Position**: `bottom: 0` relative to `th`, contained within cell boundaries

### 3.2 Heali Insight Box

- **Position**: Right side of header row, inline with mascot and buttons
- **Layout**: `[Icon] [Label + Text] [Dismiss X] [Mascot Image]`
- **Background**: Light blue gradient (`#eff6ff` → `#dbeafe`), blue border
- **Icon**: 24px circle, lightbulb icon
- **Text**: 11px, dark blue, single line
- **Dismiss**: X button, subtle color

### 3.3 Sticky Zone

- **Contains**: Page header, filter tabs, action buttons
- **Extends to**: Top edge of viewport (no gap)
- **Bottom padding**: 6px (prevents touching filter buttons)
- **Background**: Same gradient as page (seamless)
- **Overflow hidden**: Prevents content from peeking above on scroll

### 3.4 Modals

- **Overlay**: `rgba(15,23,42,0.4)` + `backdrop-filter: blur(4px)`
- **Card**: 500px max-width, 16px radius, scale animation
- **Header**: 20px 24px padding, light grey background
- **Footer**: Right-aligned buttons, light grey background

---

## 4. Page Inventory

### Admin Pages (11 files)

| File | Status | Notes |
|------|--------|-------|
| `index.html` | ✅ Complete | Login page, gradient bg, mascot, compact |
| `dashboard.html` | ✅ Complete | KPI cards, charts, quick actions widget |
| `clients.html` | ✅ Complete | Table, inline filters, sticky header, Heali insight |
| `therapist.html` | ⬜ Pending | — |
| `schedule.html` | ⬜ Pending | — |
| `financials.html` | ⬜ Pending | — |
| `communications.html` | ⬜ Pending | — |
| `compliance.html` | ⬜ Pending | — |
| `content-management.html` | ⬜ Pending | — |
| `analytics.html` | ⬜ Pending | — |
| `Promotion.html` | ⬜ Pending | — |

### Therapist Pages (12 files)
### User Pages (7 files)

---

## 5. Product Decisions

### 5.1 Design Principles
- **Desktop-first**: Admin panel is desktop-only (no mobile responsive needed)
- **Standalone HTML**: Each page is self-contained (all CSS/JS embedded, no external fetches)
- **Consistent design language**: Same color palette, spacing, and component patterns across all three portals
- **Compact layout**: Minimize vertical space usage, inline elements where possible

### 5.2 Navigation
- **Sidebar**: Collapsible, same structure across admin pages
- **Active state**: Highlighted with dark blue (`#1c52b8`)
- **No social login**: Admin login is email/password only (no SSO buttons)

### 5.3 Data Display
- **Tables**: Sticky headers, inline filters, row hover states
- **Status badges**: Color-coded with dot indicators
- **Empty states**: Friendly message with icon when no results
- **Pagination**: Rows-per-page selector (10/25/50), dynamic count display

### 5.4 Heali AI Character
- **Persona**: Helpful AI assistant that provides contextual insights
- **Appearance**: Lightbulb icon in blue circle
- **Placement**: Right side of header, inline with action boxes
- **Insight format**: "Heali Insight" label + actionable text + dismiss button
- **Behavior**: Dismissable per-session, contextual to current page data

### 5.5 Assets Location
- **Path**: `/Users/shabinmajeed/Documents/TH new design/assets/`
- **Files**: `logo.png`, `Heali.png`, `Heali-peak.png`, `user-profile.jpg`, therapist/user images
- **Reference**: `../assets/` from admin/therapist/user subfolders

---

## 6. File Structure

```
TH new design/
├── assets/                    # Shared images (logo, mascot, profiles)
│   ├── logo.png
│   ├── Heali.png
│   ├── Heali-peak.png
│   └── user-profile.jpg
├── admin/                     # Admin panel pages
│   ├── index.html             # Login
│   ├── dashboard.html         # Dashboard with KPIs & charts
│   ├── clients.html           # Client management (reference implementation)
│   └── ... (8 more pages)
├── therapist/                 # Therapist portal pages
│   └── ... (11 pages)
└── user/                      # User/patient app pages
    └── ... (7 pages)
```

---

## 7. Changelog

| Date | Change |
|------|--------|
| Jun 11 | Initial setup — folder structure, admin login page |
| Jun 11 | Dashboard page — sidebar, KPI cards, charts, quick actions |
| Jun 11 | Clients page — table, filters, pagination, modals |
| Jun 11 | Design system — original blue palette (#2a73d4), gradient backgrounds |
| Jun 11 | Inline filters — chevron toggle, in-place input replacement |
| Jun 11 | Sticky zone — header + filters stick to top, content scrolls |
| Jun 11 | Heali insight — moved to header right, inline with mascot |
| Jun 11 | Compact layout — header + actions in one row, filter tabs + buttons in one row |
| Jun 11 | Button sizing — .btn-sm (7px 14px) for header/filter actions |
| Jun 11 | Spacing refinements — sticky zone bottom padding, reduced margins |
