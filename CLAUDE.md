# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based blog called "Tokenfiend" using the Minima theme with custom styling. The blog uses a minimalist, condensed design with dark theme enabled.

## Development Commands

### Local Development
```bash
# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site
bundle exec jekyll build

# Clean generated files
bundle exec jekyll clean
```

### Content Management
Blog posts are located in `_posts/` and must follow the naming convention: `YYYY-MM-DD-title.md`

Posts require YAML front matter:
```yaml
---
layout: post
title: "Your Post Title"
---
```

## Architecture

### Theme Override Pattern
The site uses Jekyll's Minima theme as a base but overrides specific components:

- **Custom includes**: `header.html` and `footer.html` override theme defaults (placed in root, not `_includes/`)
- **Custom layouts**: `home.html` overrides the home layout (placed in root, not `_layouts/`)
- **Custom styles**: `style.scss` imports the Minima theme and adds custom styling on top

**Important**: Custom template overrides (`header.html`, `footer.html`, `home.html`) are placed in the **repository root**, not in `_includes/` or `_layouts/` directories. This is the pattern used in this project.

### Styling System
The custom styles in `style.scss` create a condensed, minimalist design:
- Reduced font sizes (14px base, 13px mobile)
- Compact spacing throughout
- Custom styling for post lists, code blocks, tables, and blockquotes
- Uses CSS variables for theme colors (e.g., `var(--border-color-01, #424242)`)

### Configuration
`_config.yml` controls:
- Site metadata (title, author, description)
- Theme settings (skin: dark, date format)
- Header pages (currently empty array to hide navigation)
- Permalink structure: `/:year/:month/:day/:title/`
- Plugins: jekyll-feed, jekyll-seo-tag

## File Structure
- `_config.yml` - Jekyll configuration
- `_posts/` - Blog post markdown files
- `style.scss` - Custom SCSS that imports and extends Minima theme
- `header.html`, `footer.html`, `home.html` - Theme component overrides (root level)
- `_includes/`, `_layouts/` - Currently empty (overrides are in root)
- `assets/css/` - Compiled CSS output location
