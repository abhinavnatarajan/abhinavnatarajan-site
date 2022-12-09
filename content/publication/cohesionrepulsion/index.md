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

date: '12 Jul 2021' # dd mmm yyyy
doi: '10.48550/arXiv.2107.05414'

tags: ['statistics', 'clustering']

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
# publication: In *Wowchemy Conference*
publication: arXiv 
publication_short: arXiv

abstract: Clustering in high-dimensions poses many statistical challenges. While traditional distance-based clustering methods are computationally feasible, they lack probabilistic interpretation and rely on heuristics for estimation of the number of clusters. On the other hand, probabilistic model-based clustering techniques often fail to scale and devising algorithms that are able to effectively explore the posterior space is an open problem. Based on recent developments in Bayesian distance-based clustering, we propose a hybrid solution that entails defining a likelihood on pairwise distances between observations. The novelty of the approach consists in including both cohesion and repulsion terms in the likelihood, which allows for cluster identifiability. This implies that clusters are composed of objects which have small "dissimilarities" among themselves (cohesion) and similar dissimilarities to observations in other clusters (repulsion). We show how this modelling strategy has interesting connection with existing proposals in the literature as well as a decision-theoretic interpretation. The proposed method is computationally efficient and applicable to a wide variety of scenarios. We demonstrate the approach in a simulation study and an application in digital numismatics. 

# Summary. An optional shortened abstract.
summary: Bayesian clustering of high-dimensional Euclidean data using repulsion and pairwise dissimilarities. 

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: arXiv
#   url: https://arxiv.org/abs/2107.05414

url_pdf: ''
url_code: 'https://github.com/abhinavnatarajan/RedClust.jl'
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
  - 'RedClust'

# Associated Projects (optional).
#   Associate this publication with one or more of your software.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}} -->

<!-- Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
