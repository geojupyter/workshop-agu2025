---
subject: "Tutorial"
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


:::{tip} 🧭 Where we are going
:icon: false

In this tutorial we will build and publish a website and PDF paper from scratch.
We'll publish the website and PDF for free on GitHub, and enable automatic generation of
DOIs for our published product.
:::


## What is MyST?

MyST (Markedly Structured Text) is both a language and a software tool.


### MyST, the language

MyST, as a language, extends Markdown.

It adds new syntax, including
["roles" and "directives"](https://mystmd.org/guide/quickstart-myst-markdown#directives-and-roles)
that enable advanced functionality like
[executable code cells](https://mystmd.org/guide/notebooks-with-markdown#code-cell),
[callouts](https://mystmd.org/guide/admonitions) (also known as admonitions),
and [glossaries](https://mystmd.org/guide/glossaries-and-terms), and more.
There is also dedicated syntax for
[citations](https://mystmd.org/guide/citations#markdown-citations),
[math](https://mystmd.org/guide/math),
and more.

Directives are like functions that can receive Markdown content, for example an
callout's text. Roles are just like directives, except they are _inline_ with other
Markdown text.


#### Example `{glossary}` directive and `{term}` role

```{myst}
:::{glossary}
Term
: A word or phrase which can be defined in a **glossary** directive.
Directives can include **_rich_** Markdown content.
:::

{term}`Term` roles create inline references, within your Markdown text, to glossary definitions.
Try hovering over the word "Term" to see a definition.
```

:::{tip} 💪 Mini-exercise
:icon: false

Try changing the code for the directive and role in the example above and immediately
observe the results.
:::


### MySTMD, the software

[MySTMD](https://mystmd.org/) is a software tool for executing and rendering technical
documents from source in MyST or Notebook input formats to multiple output formats
including websites, PDFs, $ \LaTeX $, Typst, MS Word, JATS, and `CITATION.cff`.

MySTMD is the software that created this website from its
[source code](https://github.com/geojupyter/workshop-open-source-geospatial) (written in
MyST and Jupyter Notebook format).


## Building a website with MyST

### The normal way

:::{important}
Because we're working in CryoCloud for this workshop, this section is provided for
informational purposes.
We'll be following the instructions below for using MyST in JupyterLab.
:::

With MySTMD [installed](https://mystmd.org/guide/installing), you can build a MyST
website from source with one command:

```bash
myst build --html
```

During development, you can also use MyST's convenient preview server to automatically
rebuild your site any time you change its content:

```bash
myst start
```


### In JupyterLab

As workshop participants, you have access to CryoCloud, which provides a JupyterLab
instance with MyST pre-installed.
CryoCloud also comes with a special configuration for building a MyST site without the
use of the terminal.

To preview a MyST site in JupyterLab, view instructions at [](../../reference/04-using-myst.md).

:::{important} 👀 You should notice...
:class: simple
:icon: false

...when you open the URL specified in the instructions above, a loading screen is
displayed.

After a few seconds, the build will complete and you can see your fully-built site!
:::


### 💪 Exercise A: Build _this_ MyST website in JupyterLab

_TODO_: Will the participants already have the workshop cloned? Or does that need to be
a step here?


#### Navigate to the correct directory in the file browser

On the left panel, ensure the JupyterLab file browser tab (📁 icon) is selected.

Double click the folder in the file browser named `workshop-open-source-geospatial`.

:::{important} 👀 You should notice...
:class: simple
:icon: false

...a listing of around a dozen files and directories, including Markdown files and a
file named `myst.yml`.
:::


#### Build the MyST website

Location the MyST project configuration file, `myst.yml`, in the file browser.

Right click this file and select the top option from the menu: "Build MyST project".

:::{important} 👀 You should notice...
:class: simple
:icon: false

...a new browser tab opens with a loading spinner and the title "Building MyST Site".

After around 5 seconds, the build will complete and the website content will display
automatically.

At the top-left is the website title: "Open Source Geospatial Workflows in the Cloud".
At the top-right is a button with the text "Rebuild".
:::


#### 🧠 What do we know now?

* A MyST project is configured by a `myst.yml` file
* In JupyterLab, we can right-click `myst.yml` to trigger a build (requires
  [jupyter-myst-build-proxy](https://github.com/ryanlovett/jupyter-myst-build-proxy/))


### 💪 Exercise B: Build a MyST website _from scratch_ in JupyterLab

TODO


## Building a PDF with MyST

TODO


### 💪 Exercise C: Render a PDF from the same source as your website

TODO


## Hosting your website for free

### GitHub Pages

TODO


### ReadTheDocs

TODO


### 💪 Exercise D: Publish your paper and website to GitHub

TODO


## Getting a DOI

TODO


### 💪 Exercise E: Get a DOI for your published content on GitHub

TODO
