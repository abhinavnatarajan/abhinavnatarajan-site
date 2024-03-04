---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Chromatic Alpha Complexes"
summary: "Theory and Applications"
authors: [abhinav]
tags: []
categories: ["math", "applied topology", "computational geometry", "data science"]
date: 08 September 2023

slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  #   Available highlight themes listed in: https://highlightjs.org/static/demo/
  #   Use lower case names and replace space with hyphen '-'
  highlight_style: dracula
  diagram: true
  diagram_options:
    # Mermaid diagram themes include: default,base,dark,neutral,forest
    theme: base

  # RevealJS slide options.
  # Options are named using the snake case equivalent of those in the RevealJS docs.
  reveal_options:
    controls: true
    progress: true
    slide_number: c/t  # true | false | h.v | h/v | c | c/t
    center: true
    rtl: false
    mouse_wheel: true
    transition: fade  # none/fade/slide/convex/concave/zoom
    transitionSpeed: default  # default/fast/slow
    background_transition: slide  # none/fade/slide/convex/concave/zoom
    touch: true
    loop: false
    menu_enabled: true
---

# {{< param title >}}

## {{< param summary >}}

Abhinav Natarajan, Thomas Chaplin, Adam Brown, and Maria Jose Jiminez Rodriguez

---

## Motivation from Spatial Biology

Data from patients: tissue slices of adenoma and carcinoma tissue. 

Each sample is a record of the positions of different cell types within a tissue slice.

Primarily dealing with epithelial and immune cells. 

Our aim: to quantify spatial interactions that correspond with clinical outcomes, and aid in qualitative analysis of tumour-immune microenvironment.

---

## Spatial relationships

<div class="r-stack">
<span class="fragment current-fragment fade-out" data-fragment-index="0">How can we quantify spatial relationships in data?</span>
<span class="fragment fade-in-then-out" data-fragment-index="0">Example 1: how do we detect the blue cycle surrounding the orange points?</span>
<span class="fragment fade-in-then-out" data-fragment-index="1">Example 2: How do we quantify that this cycle makes essential use of both orange and blue points?</span>
</div>

<div class="r-stack">
<div class="fragment current-fragment fade-out" data-fragment-index="0">{{% img "images/blob_with_circle.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="0">{{% img "images/blob_with_circle.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">{{% img "images/circle_split.png" 0.4 %}}</div>

---

## Funtoriality of Persistent Homology

<div class="r-stack">
<span class="fragment current-fragment fade-out" data-fragment-index="1">At each scale there is an inclusion of the blue points into the whole point cloud.</span>
<span class="fragment fade-in-then-out" data-fragment-index="1">At each scale there is an inclusion of the blue points into the whole point cloud.</span>
<span class="fragment fade-in-then-out" data-fragment-index="2">This induces an inclusion of filtrations...</span>
<span class="fragment fade-in-then-out" data-fragment-index="3">This induces an inclusion of filtrations...</span>
<span class="fragment fade-in-then-out" data-fragment-index="4">... which induces a map on persistent homology.</span>
<span class="fragment fade-in-then-out" data-fragment-index="5">We should expect to see a persistent cycle for the blue points that lies in the kernel of the induced map on persistent homology.</span>
<span class="fragment fade-in-then-out" data-fragment-index="6">If we include orange into orange+blue, we should see a persistent cycle in the cokernel.</span>
</div>
<div class="r-stack">
<div class="fragment current-fragment fade-out" data-fragment-index="1">{{% img "images/circle.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">{{% img "images/blob_with_circle.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="2">{{% img "images/circle_complex.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="3">{{% img "images/blob_with_circle_complex.png" 0.4 %}}
</div>

<div class="fragment fade-in-then-out" data-fragment-index="4">
{{% img "images/functoriality2.png" 0.5 %}}
</div>
<div class="fragment fade-in" data-fragment-index="5">{{% img "images/blob_with_circle_complex.png" 0.4 %}}
</div>
</div>

---

More generally, we can study the invariants of these induced maps to quantify the spatial relationships in our data. 

---

## Computational challenges

The Čech and Vietoris-Rips filtrations can be huge.

For very large datasets, we run into a wall with computational cost (especially memory).

---

## Alpha complexes

{{< fragment >}}Filtration on a Delaunay triangulation that is much sparser than the Čech filtration{{< /fragment >}}

{{< fragment >}}

... but not functorial with respect to inclusion of subsets of points.

{{< /fragment >}}

---

## Chromatic alpha complexes
(S. C. di Montesano et. al., 2022).

<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="0">
Given $X \subset \mathbb{R}^d$ and a colouring $\chi :X \to \{ 0, \ldots, s\}$,<br>
the <b>chromatic alpha complex</b> is a filtered geometric simplicial complex $\mathcal{A}_{\bullet}(X, \chi)$. 

For $I \subset \\{0, \ldots, s\\}$, denote $X_I := \chi^{-1}(I)$. Then:

1. For $I \subset J \subset \\{0, \ldots, s\\}$, the inclusion $X_I \subset X_J$ induces an inclusion $\mathcal{A}\_{\bullet}(X_I, \chi) \hookrightarrow \mathcal{A}\_{\bullet}(X_J, \chi)$. We have functoriality with respect to _some_ inclusions of subsets. Chromatic alpha complexes interpolate between the Čech and alpha complexes (both of which are special cases).
</div>
<div class="fragment fade-in-then-out" data-fragment-index="0">

2. There is a filtration-preserving inclusion $\mathcal{A}\_{\bullet}(X, \chi) \hookrightarrow \check{C}\_{\bullet}(X)$ that is a filtered homotopy equivalence $\implies \mathcal{A}\_{\bullet}(X, \chi)$ recovers spatial information.
2. (Ranita Biswas et. al. 2022) Chromatic alpha complexes have $O(n^{\lceil\frac{d}{2}\rceil})$ cells for random colourings $\implies$ practical in low-dimensions. If $d=2$ then they have at most $O(s^2n)$ cells. 
</div>
</div>

---

## Computing maps of persistence modules

Given a map of persistence modules $f_{\bullet} : A_{\bullet} \to B_{\bullet}$, in general there is no nice algebraic description of $f$ unless $A$ and $B$ have fewer than 4 time steps, or no nested bars (E. Jacquard, 2016).

Algorithms are available to compute $\ker(f), \operatorname{coker}(f)$, and $\operatorname{im}(f)$ (Cohen-Steiner et. al., 2009). 

If $f:A \to B$ is induced by some inclusion of complexes $K \hookrightarrow L$, then we can also compute $H_*(L, K)$. 

---
## Six packs

Upshot: for each inclusion of subsets of points $\implies$ obtain 6 persistence diagrams in each homological dimension. 

---

## Example 1

<div class="r-stack">
<div class="fragment current-fragment fade-out" data-fragment-index="1">{{% img "images/circle.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">{{% img "images/blob_with_circle.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="2">{{% img "images/six_pack1.png" 0.3 %}}</div>
</div>

---

## Example 2

<div class="r-stack">
<div class="fragment current-fragment fade-out" data-fragment-index="1">{{% img "images/circle_split.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="1">{{% img "images/circle_split_subcomplex.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="2">{{% img "images/circle_split_complex.png" 0.4 %}}</div>
<div class="fragment fade-in-then-out" data-fragment-index="3">{{% img "images/sixpack2.png" 0.3 %}}</div>
</div>

---

## Current pipeline

+ Find the most common cell-type pairs among all the samples
+ Discard samples that do not have at least 3 of these cell-type pairs in them
+ Compute the kernel, domain, and codomain diagrams in degrees 0 and 1
+ Persistent statistics
+ Scaling + PCA
+ Classification (neural nets, random forests) into adenoma/carcinoma
+ Achieve around 82% accuracy, baseline is 65%

---

## Software

Soon to be released software for computational pipeline, including visualisation and statistics. 

---

## References
<div style="font-size: large">
Y. Reani and O. Bobrowski, "A Coupled Alpha Complex" (2021). DOI: 10.48550/arXiv.2105.08113

R. Biswas, S. C. di Montesano, O. Draganov, H. Edelsbrunner, M. Saghafian et. al. "On the size of chromatic Delaunay mosaics" (2022). DOI: 10.48550/arXiv.2212.03121

S. C. di Montesano, O. Draganov, H. Edelsbrunner, M. Saghafian. "Persistent Homology of Chromatic Alpha Complexes" (2022). DOI: 10.48550/arXiv.2212.03128

D. Cohen-Steiner, H. Edelsbrunner, J. Harer, D. Morozov, "Persistent homology for kernels, images, and cokernels" (2009) in "Proceedings of the twentieth annual ACM-SIAM symposium on Discrete algorithms", Society for Industrial and Applied Mathematics.

E. Jacquard, V. Nanda, U. Tillmann, "The Space of Barcode Bases for Persistence Modules" (2023) J Appl. and Comput. Topology., 7(1) pp. 1-30.

U. Bauer, H. Edelsbrunner, "The Morse theory of Čech and Delaunay complexes" (2016) Trans. Amer. Math. Soc., 369(5) pp. 3741-3762.
</div>

---

## Thank you!
