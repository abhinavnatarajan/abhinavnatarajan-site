---
# An instance of the Pages widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: collection
active: true

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 30

title: Research
subtitle: ''

content:
  archive:
    enable: false
    text: See all
    link: ./research/
  # Filter on criteria
  filters:
    folders:
      - publication
    tag: ''
    category: ''
    publication_type: ''
    author: ''
    exclude_featured: false
    exclude_future: false
    exclude_past: false
  # Choose how many pages you would like to display (0 = all pages)
  count: 4
  # Choose how many pages you would like to offset by
  offset: 0
  # Page order: descending (desc) or ascending (asc) date.
  order: desc

design:
  # Choose a view for the listings:
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   4 = Citation (publication only)
  view: citation
  columns: '2'
---

<!-- {{% callout note %}}
[Search and filter](./publications/).
{{% /callout %}} -->
