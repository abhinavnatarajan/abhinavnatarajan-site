---
title: 'Cohesion and Repulsion in Bayesian Distance Clustering'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - abhinav
  - Maria De Iorio
  - Andreas Heinecke
  - Emanuel Mayer
  - Simon Glenn

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '09 Mar 2023' # dd mmm yyyy

tags: ['statistics', 'unsupervised clustering', 'high dimensional clustering', 'Bayesian clustering', 'composite likelihood', 'pseudolikelihood', 'random partition model', 'product partition model', 'microclustering']

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['2']

# Publication name and optional abbreviated publication name.
journal: Journal of the American Statistical Association
# journal_short: J. Am. Stat. Assoc.
volume: 119
number: 546
pages: 1374-1384
# note: to appear
doi: '10.1080/01621459.2023.2191821'

abstract: Clustering in high-dimensions poses many statistical challenges. While traditional distance-based clustering methods are computationally feasible, they lack probabilistic interpretation and rely on heuristics for estimation of the number of clusters. On the other hand, probabilistic model-based clustering techniques often fail to scale and devising algorithms that are able to effectively explore the posterior space is an open problem. Based on recent developments in Bayesian distance-based clustering, we propose a hybrid solution that entails defining a likelihood on pairwise distances between observations. The novelty of the approach consists in including both cohesion and repulsion terms in the likelihood, which allows for cluster identifiability. This implies that clusters are composed of objects which have small "dissimilarities" among themselves (cohesion) and similar dissimilarities to observations in other clusters (repulsion). We show how this modelling strategy has interesting connection with existing proposals in the literature as well as a decision-theoretic interpretation. The proposed method is computationally efficient and applicable to a wide variety of scenarios. We demonstrate the approach in a simulation study and an application in digital numismatics. 

# Summary. An optional shortened abstract.
summary: Bayesian clustering of high-dimensional Euclidean data using repulsion and pairwise dissimilarities. 

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Code for figures
  icon: fa-github
  icon_pack: fa-brands
  url: 'https://github.com/abhinavnatarajan/RedClust.jl/tree/examples'

arxiv_id: '2107.05414'
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
image:
  caption: 'Inter/intra-cluster pairwise dissimilarities and posterior coclustering probabilities'
  focal_point: ''
  preview_only: false

# Associated Software (optional).
#   Associate this publication with one or more of your software.
#   Simply enter your software's folder or file name without extension.
#   E.g. `internal-software` references `content/software/internal-software/index.md`.
#   Otherwise, set `software: []`.
software:
  - name: 'RedClust'
    link_text: 'Software package'
    icon: icon-julia
    icon_pack: icomoon

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
