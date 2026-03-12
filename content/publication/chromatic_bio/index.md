---
title: 'Topology of Multi-species Localization'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - abhinav
  - Thomas Chaplin
  - Joshua A. Bull
  - Eoghan J. Mulholland-Illingworth
  - Simon J. Leedham
  - Helen M. Byrne
  - Maria-Jose Jimenez
  - Heather A. Harrington

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '05 Mar 2026' # dd mmm yyyy

tags: ['spatial biology', 'topological data analysis', 'chromatic Delaunay filtrations', 'multi-species data']

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
journal: Preprint
# journal_short: J. Am. Stat. Assoc.
# volume: 119
# number: 546
# pages: 1374-1384
# note: to appear
# doi: '10.1080/01621459.2023.2191821'

abstract: Spatial relationships in multi-species data can indicate and affect system outcomes and behaviors, ranging from disease progression in cancer to coral reef resilience in ecology; therefore, quantifying these relationships is an important problem across scientific disciplines. Persistent homology (PH), a key mathematical and computational tool in topological data analysis (TDA), provides a multiscale description of the shape of data. While it effectively describes spatial organization of species, such as cellular patterns in pathology, it cannot detect the shape relations between different types of species. Traditionally, PH analyzes single-species data, which limits the spatial analysis of interactions between different species. Leveraging recent developments in TDA and computational geometry, we introduce a scalable approach to quantify higher-order interactions in multi-species data. The framework can distinguish the presence of shape features or patterns in the data that are (i) common to multiple species of points, (ii) present in some species but disappear in the presence of other species, (iii) only visible when multiple species are considered together, and (iv) formed by some species and remain visible in the presence of others. We demonstrate our approach on two example applications. We identify (1) different behavioral regimes in a synthetic tumor micro-environment model, and (2) interspecies spatial interactions that are most significantly altered in colorectal cancer tissue samples during disease progression.

# Summary. An optional shortened abstract.
summary: Using topological data analysis to quantify spatial relationships in multi-species data, with applications to cancer research.

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Code
  icon: fa-github
  icon_pack: fa-brands
  url: 'https://github.com/abhinavnatarajan/M2S2_demo'

arxiv_id: '2603.03237'
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Inter/intra-cluster pairwise dissimilarities and posterior coclustering probabilities'
#   focal_point: ''
#   preview_only: false

# Associated Software (optional).
#   Associate this publication with one or more of your software.
#   Simply enter your software's folder or file name without extension.
#   E.g. `internal-software` references `content/software/internal-software/index.md`.
#   Otherwise, set `software: []`.
software:
  - name: 'Chalc'
    link_text: 'Software package'
    icon: fa-python
    icon_pack: fa-brands

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
