---
# An instance of the Portfolio widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: portfolio
active: true

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 65

title: Software
subtitle: ''

build:
  render: never

content:
  # Page type to display. E.g. project. (this is the folder name)
  page_type: software

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
    - name: All
      tag: '*'
    - name: Math
      tag: math
    - name: Audio
      tag: audio

design:
  # Choose how many columns the section has. Valid values: '1' or '2'.
  columns: '2'

  # Toggle between the various page layout types.
  # list, compact, card, showcase
  view: masonry # isotope layout

  # For Showcase view, flip alternate rows?
  flip_alt_rows: false
---
