---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Profiling in Python 3.x"
summary: "What, why, when, and how"
authors: [abhinav]
tags: []
categories: ["coding"]
date: 02 Feb 2023
build:
  list: false
  
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

Abhinav Natarajan

---

## Slide 2

```python
porridge = "blueberry"
if porridge == "blueberry":
    print("Eating...")
```

---

## Some math
Inline math: $\int_M d\omega = \int_{\partial M} i^* \omega$

Block math: $$\int_M d\omega = \int_{\partial M} i^* \omega$$

---
## Speaker Notes

Add speaker notes to your presentation

```markdown
{{%/* speaker_note */%}}

- Only the speaker can read these notes
- Press `S` key to view

{{%/* /speaker_note */%}}
```

Press the `S` key to view the speaker notes!

{{< speaker_note >}}

- Only the speaker can read these notes
- Press `S` key to view

{{< /speaker_note >}}

---
## Questions?
