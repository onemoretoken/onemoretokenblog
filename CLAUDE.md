# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based blog called "Tokenfiend" using the [jekyll-klise](https://github.com/piharpi/jekyll-klise) theme. The theme is minimalist with light and dark mode support, syntax highlighting, and SEO optimization.

## Development Commands

### Initial Setup
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

### Content Management
Blog posts are located in `_posts/` and must follow the naming convention: `YYYY-MM-DD-title.md`

Posts require YAML front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +TIMEZONE
---
```

## Architecture

### Remote Theme
This site uses `jekyll-klise` as a remote theme via the `jekyll-remote-theme` plugin. The theme files are pulled from the GitHub repository at build time, so local customization should be done through:
- Custom files in `_includes/` to override theme includes
- Custom files in `_layouts/` to override theme layouts
- Custom SASS files in `_sass/` to extend theme styles

### Configuration
`_config.yml` controls:
- Site metadata (title, description, language, timezone)
- Author information (name, bio, username, avatar, social links)
- Remote theme: `piharpi/jekyll-klise`
- Permalink structure: `/:title/`
- Pagination: 5 posts per page
- Plugins: jekyll-feed, jekyll-seo-tag, jekyll-sitemap, jekyll-postfiles, jekyll-paginate, jekyll-remote-theme

### Important Notes
- **GitHub Pages Limitation**: The `jekyll-postfiles` plugin is not supported by GitHub Pages. If hosting on GitHub Pages, you may experience issues with post images and assets. Consider deploying to Netlify, Vercel, Azure Static Web Apps, or Surge instead.
- **Avatar Image**: Place your avatar at `assets/img/avatar.jpg` (referenced in `_config.yml`)
- **Old Theme Files**: Previous Minima theme customizations are backed up in `_old_minima_theme/` directory

## File Structure
- `_config.yml` - Jekyll configuration
- `_posts/` - Blog post markdown files
- `Gemfile` - Ruby dependencies
- `assets/img/` - Images (avatar, etc.)
- `_includes/`, `_layouts/`, `_sass/` - Theme customization directories
- `_old_minima_theme/` - Backup of previous Minima theme overrides
