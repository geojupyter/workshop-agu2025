---
authors:
  - name: "Fernando Perez"
    affiliations:
      - "University of California, Berkeley"
      - "Schmidt Center for Data Science and Environment"
    equal_contributor: true
    email: "fernando.perez@berkeley.edu"
    orcid: "0000-0002-1725-9815"
    github: "fperez"
    corresponding: true
  - name: "Matt Fisher"
    affiliations:
      - "University of California, Berkeley"
      - "Schmidt Center for Data Science and Environment"
    equal_contributor: true
    email: "matt.fisher@berkeley.edu"
    orcid: "0000-0003-3260-5445"
    github: "mfisher87"
    bluesky: "mfisher87.bsky.social"
    linkedin: "https://www.linkedin.com/in/mattfisher8"
    corresponding: true
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

* A language, which extends Markdown, for authoring technical documents, including
  executable code cells, **and**
* A software tool for executing and rendering technical documents from MyST source to
  multiple output formats including websites, PDFs, $ \LaTeX $, Typst, MS Word, JATS,
  and `CITATION.cff`.


## Building a website

### Building a MyST site in JupyterLab

This JupyterLab instance has MyST installed, plus a special configuration for building
and exposing a MyST site at a special URL.

To preview a MyST site in JupyterLab, view instructions at [](../../reference/04-using-myst.md).

:::{important} 👀 You should notice...
:class: simple
:icon: false

...when you open the URL specified in the instructions above, a loading screen is
displayed.

After a few seconds, the build will complete and you can see your fully-built site!
:::

::::::{note} Building a MyST site on your local machine
:class: dropdown

It's important to us that you can take these skills home with you!
Some things will be slightly different outside of JupyterLab.

The special configuration for building and hosting our MyST site in JupyterLab is not
necessary on a local computer.
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


### Hosting your website for free

#### GitHub Pages

TODO


#### ReadTheDocs

TODO


## Building a paper

TODO
