# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based blog called "Tokenfiend" using the [jekyll-klise](https://github.com/piharpi/jekyll-klise) theme. The theme is minimalist with light and dark mode support, syntax highlighting, and SEO optimization.

## Development Commands

```bash
# Install dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site
bundle exec jekyll build

# Clean generated files
bundle exec jekyll clean
```

## Architecture

### Remote Theme Override Pattern
This site uses `jekyll-klise` as a remote theme. The theme files are fetched from GitHub at build time. Local files override remote theme files when placed in the same relative path:

**Key override hierarchy:**
1. `_layouts/default.html` - Main layout that wraps all content, includes custom navbar and theme initialization
2. `_includes/navbar.html` - Custom navigation bar component
3. `_includes/custom-head.html` - Loads `assets/css/custom.css` for all styling customizations
4. `assets/css/custom.css` - All custom CSS (navbar styling, wrapper width, dark mode)

**Menu system:**
- Navigation links are defined in `_data/menus.yml`
- Navbar reads from this file and auto-highlights active page
- Fallback to hardcoded home/about links if menus.yml is missing

### Theme System Architecture
The theme switcher works through a coordinated system:

1. **Inline script in `_layouts/default.html`** - Runs immediately on page load to prevent flash, reads from localStorage or system preference, sets `data-theme="dark"` attribute on `<body>`
2. **CSS theme selectors** - Use `[data-theme="dark"]` attribute selectors in `assets/css/custom.css`
3. **Toggle button** - In `_includes/navbar.html`, shows sun icon in dark mode, moon icon in light mode

### Content Management
Blog posts must follow the naming convention: `YYYY-MM-DD-title.md` in `_posts/`

Required YAML front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +TIMEZONE
---
```

### Configuration
`_config.yml` controls site metadata, author info, and build settings. Key settings:
- Remote theme: `piharpi/jekyll-klise`
- Permalink structure: `/:title/`
- Pagination: 5 posts per page
- Configured for GitHub Pages via `github-pages` gem

### Styling Architecture
- **No SASS files** - All customization is in `assets/css/custom.css` (plain CSS)
- **Navbar max-width: 1200px** - Centered with auto margins
- **Content wrapper** - Matches navbar width (1200px max-width) for visual alignment
- **Responsive breakpoints** - 768px and 480px with adjusted font sizes and spacing
