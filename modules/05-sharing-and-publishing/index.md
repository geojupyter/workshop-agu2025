---
authors:
  - name: "Fernando Perez"
    affiliations:
      - "University of California, Berkeley"
      - "Schmidt Center for Data Science and Environment"
    email: "fernando.perez@berkeley.edu"
    orcid: "0000-0002-1725-9815"
    github: "fperez"
  - name: "Matt Fisher"
    affiliations:
      - "University of California, Berkeley"
      - "Schmidt Center for Data Science and Environment"
    email: "matt.fisher@berkeley.edu"
    orcid: "0000-0003-3260-5445"
    github: "mfisher87"
---

# 📢 5 - Sharing & Publishing Your Work

:::{note} 🛝 Slides
:icon: false
:class: dropdown

<iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vQ-a3ILv2ZUWfhVsWkUy1torRodOWgz0lGKFSYia2mQ5xia3zvh67rrKSiF7RcWqW2duN6Wy0gE_ano/pubembed?start=false&loop=false&delayms=60000"
    frameborder="0"
    width="960"
    height="569"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true">
</iframe>
:::


## Technical publishing with MyST

MyST (Markedly Structured Text) is both:

* A language, which extends Markdown, for authoring technical documents, including executable code cells, **and**
* A software tool for rendering technical documents from MyST source


## Using MyST in JupyterLab

This JupyterLab instance has MyST installed, plus a special configuration for building
and exposing a MyST site at a special URL.

To preview a MyST site, first...

::::::{info} Using MyST on your local machine
:class: dropdown

The special configuration for building and hosting our MyST site is not necessary on a
local computer.
We even have some special features that we can't use in the JupyterLab environment,
for example a live-updating preview server:

```bash
myst start
```

:::{important} 👀 You should notice...
:class: simple
:icon: false

...when the preview server successfully starts, the following message is printed:

```
🔌 Server started on port 3000!  🥳 🎉


        👉  http://localhost:3000  👈
```

At this point, you can visit the printed URL to preview your site.
The preview will automatically update any time you change a file.
:::
::::::
