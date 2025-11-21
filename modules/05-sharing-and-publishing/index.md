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

Let's jump right into a quick example of how this functionality works.


#### Example `{glossary}` directive and `{term}` role
:::{tip} 💪 Mini-exercise
:icon: false

Try changing the code for the directive and role in the example below and immediately
observe the results.
:::

```{myst}
:::{glossary}
Term
: A word or phrase which can be defined in a **glossary** directive.
Directives can include **_rich_** Markdown content.
:::

{term}`Term` roles create inline references, within your Markdown text, to glossary definitions.
Try hovering over the word "Term" to see a definition.
```



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

Right click this file and select the top option from the menu: "Build MyST Project".

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

#### Create a new empty GitHub repository

In the GitHub UI, click the `+` icon at the top-right. Select "New repository".

Select your username as the owner, and enter `myst-exercise` as the repository name.

![](./github-repo-name.jpg)

Leave everything else as default, and click "Create repository".

:::{important} 👀 You should notice...
:class: simple
:icon: false

...GitHub shows you a page for your new, empty repository.

A "Quick setup" section includes a URL you can copy.
:::


#### Clone your repository

From your repository homepage's "Quick start" menu, select "HTTPS", then copy the URL.

On your JupyterHub server, open a new terminal.

Run these commands, replacing the placeholder with your actual repository URL:

```bash
# Change to your home directory
cd

# Clone the repository
git clone <YOUR_REPOSITORY_HTTPS_URL_HERE>
```

:::{important} 👀 You should notice...
:class: simple
:icon: false

This command produces the following output:

```
Cloning into 'myst-exercise'...
warning: You appear to have cloned an empty repository.
```
:::


#### Initialize your MyST project

First, change directory into your empty repository:

```bash
cd myst-exercise
```

Next, initialize your MyST project with configuration needed to generate a website:

```bash
myst init --project --site
```


#### Create some content

Create a new file `index.md` using the JupyterLab interface:

* Right-click in the empty space in the file browser.
* Select "New file".
* Input the name `index.md`.

Enter the following content in the file (click the copy button at the top-right of this
code block):

```{code} markdown
:filename: index.md

Hello, world!

$$
1 + 1 = 2
$$
```

The `$$` symbols delimit a math equation, and you can write any $ \LaTeX $ within.


#### Build your site

Right-click the `myst.yml` file in the file browser, and select "Build MyST Project".

:::{important} 👀 You should notice...
:class: simple
:icon: false

...like last time, a new browser tab opens showing a loading spinner while your site
builds.

When it's done, you should see your "Hello, world!" message, plus our amazing math
equation, rendered on the page.


At the top-right, there is a "Rebuild" button.
:::


#### Try some other MyST features and rebuild

:::{important}
**Keep the tab displaying your website open!**

If you close this tab, you can always re-open it by right-clicking `myst.yml` and
selecting "Build MyST Project" again.
:::

MyST offers many useful features for technical publishing, including
[superscripts and subscripts](https://mystmd.org/guide/typography#subscript-superscript),
[keyboard input notation](https://mystmd.org/guide/typography#keyboard-input),
[abbreviations](https://mystmd.org/guide/typography#abbr-role),
[executable code cells](https://mystmd.org/guide/notebooks-with-markdown#code-cell),
[callouts](https://mystmd.org/guide/admonitions) (also known as admonitions),
[math](https://mystmd.org/guide/math),
[figures](https://mystmd.org/guide/figures),
[diagrams](https://mystmd.org/guide/diagrams),
[asides](https://mystmd.org/guide/asides),
[dropdowns, grids, tabs, cards, buttons](https://mystmd.org/guide/dropdowns-cards-and-tabs),
[glossaries](https://mystmd.org/guide/glossaries-and-terms), and more.

Try out some of these features in your MyST site.

**Each time you make changes, rebuild the site by clicking "Rebuild" at the top-right of
the site.**

Make changes, rebuild, and view the result as many time as you need!


#### Give your site a title

Edit your `myst.yml` file by double-clicking it in JupyterLab.

Uncomment the `title` key and populate a title for your site, e.g. "My site".

Your config file should now look like this:

```{code} yaml
:filename: myst.yml
:emphasize-lines: 5

# See docs at: https://mystmd.org/guide/frontmatter
version: 1
project:
  id: 60e9ac52-956d-4811-800a-68be74a85174
  title: "My site"
  # description:
  # keywords: []
  # authors: []
  github: https://github.com/mfisher87/myst-exercise
  # To autogenerate a Table of Contents, run "myst init --write-toc"
site:
  template: book-theme
  # options:
  #   favicon: favicon.ico
  #   logo: site_logo.png
```

**Save and rebuild your site.**

:::{important} 👀 You should notice...
:class: simple
:icon: false

...the text near the top-left of your site now says "My site" (or whatever you
chose for your title) instead of "index".

The browser tab should also now be titled "My site".

But it still says "Made with MyST" at the very top!
:::


#### Replace "Made with MyST" text

"Made with MyST" is the default text that appears at the top of your site if
you don't provide a `logo` or `logo_text`.

We can update the text at the very top to replace "Made with MyST" by editing
`myst.yml` again and setting `site.options.logo_text`.
First, uncomment `options:`, then add a line underneath it to set `logo_text`.
**Indentation is important**.

Your config file should now look like this:

```{code} yaml
:filename: myst.yml
:emphasize-lines: 14

# See docs at: https://mystmd.org/guide/frontmatter
version: 1
project:
  id: 60e9ac52-956d-4811-800a-68be74a85174
  title: "My site"
  # description:
  # keywords: []
  # authors: []
  github: https://github.com/mfisher87/myst-exercise
  # To autogenerate a Table of Contents, run "myst init --write-toc"
site:
  template: book-theme
  options:
    logo_text: "My logo text"
  #   favicon: favicon.ico
  #   logo: site_logo.png
```

**Save and rebuild your site.**

:::{important} 👀 You should notice...
:class: simple
:icon: false

...the text near at the very top-left of your site now says "My logo text" (or whatever you
chose for your logo text) instead of "Made with MyST".
:::


#### 🧠 What do we know now?

* `myst.yml` controls what the site looks like, including the title, logo, logo text, and more.
* The `index.md` file is the "home page" for our site by default.
* The development loop for a MyST site in JupyterLab looks like:
  * Right-click `myst.yml` and "Build MyST Project"
  * In the newly opened browser tab, you can view a preview of your MyST site.
  * Change your site content by editing `myst.yml`, Markdown files, or Notebooks.
  * View the results of those changes by clicking "Rebuild" at the top of your site preview.


## Building a PDF with MyST

TODO


### 💪 Exercise C: Render a PDF from the same source as your website

TODO

#### 🧠 What do we know now?

TODO


## Hosting your website for free

### GitHub Pages

TODO


### ReadTheDocs

TODO


### 💪 Exercise D: Publish your paper and website to GitHub

TODO

#### 🧠 What do we know now?

TODO


## Getting a DOI

TODO


### 💪 Exercise E: Get a DOI for your published content on GitHub

TODO

#### 🧠 What do we know now?

TODO
