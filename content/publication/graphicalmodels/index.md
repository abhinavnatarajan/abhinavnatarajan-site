---
title: 'On a Wider Class of Prior Distributions for Graphical Models'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - abhinav
  - Willem van den Boom
  - Kristoforus Bryant Odang
  - Maria De Iorio

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '09 June 2023' # dd mmm yyyy
publishDate: '15 Apr 2023' # include this so that the page is rendered despite the date being in the future
doi: '10.1017/jpr.2023.33'

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent; 9 = Accepted manuscript
publication_types: ['2']

# Publication name and optional abbreviated publication name.
# publication: In *Wowchemy Conference*
publication: Journal of Applied Probability
# publication_short:

# volume: 61
# number: 1

# note: To appear.

abstract: Gaussian graphical models are useful tools for conditional independence structure inference of multivariate random variables. Unfortunately, Bayesian inference of latent graph structures is challenging due to exponential growth of $\mathcal{G}_n$, the set of all graphs in n vertices. One approach that has been proposed to tackle this problem is to limit search to subsets of $\mathcal{G}_n$. In this paper, we study subsets that are vector subspaces with the cycle space $C_n$ as main example. We propose a novel prior on $C_n$ based on linear combinations of cycle basis elements and present its theoretical properties. Using this prior, we implemented a Markov chain Monte Carlo algorithm and show that (i) posterior edge inclusion estimates compared to the standard technique are comparable despite searching a smaller graph space and (ii) the vector space perspective enables straightforward MCMC algorithms. 

# Summary. An optional shortened abstract.
summary: A novel class of prior distributions for sampling random graphs.

tags: ['statistics', 'random graphs', 'MCMC', 'cycle space', 'Gaussian graphical models']

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Code
  url: 'https://github.com/kristoforusbryant/cbmcmc'
  icon: fa-github
  icon_pack: fa-brands

# arxiv_id: '2205.04324'
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
  caption: 'A fundamental system of graph cycles.'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
<!-- 
{{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
