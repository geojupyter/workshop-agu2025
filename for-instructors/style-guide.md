# 🎨 Style guide

Reference the source code of this document to see how the content was produced.

:::{note}
The [{myst} directive](https://mystmd.org/guide/directives#directive-myst) is
being used to show both source code and the rendered output in this document;
please do not use the `{myst}` directive in your module.
:::


## References

### <diataxis.fr>

Diátaxis is a fantastic resource for writing documentation for various audiences.

* [Tutorials](https://diataxis.fr/tutorials/) -
  The audience of a tutorial is inexperienced.
  Goal: A successful guided and tightly-controlled hands-on learning experience and
  [target the feeling of doing](https://diataxis.fr/tutorials/#target-the-feeling-of-doing).
* [How-to guides](https://diataxis.fr/how-to-guides/) -
  The audience of a how-to is more self-sufficient than the audience of a tutorial.
  Goal: Help the reader accomplish their own goals.
  _Do we have anything of this type in our workshop?_
* [Reference](https://diataxis.fr/reference/) -
  The audience of a reference document is looking for specific technical information,
  like the definition of a word or an API.
  Goal: Answer questions and provide technical information.
  _E.g. our vocabulary page._
* [Explanation](https://diataxis.fr/explanation/) -
  The audience of an explanation is seeking deeper understanding.
  Goal: Provide in-depth understanding of a concept, often linking multiple concepts
  together or explaining a technical decision, architecture, or history.


## Structure

All modules should have a consistent structure!


### Embedded slides

Slides should be the first thing on a given page.

Use a [dropdown callout](https://mystmd.org/guide/admonitions#admonition-dropdown) in
the following style to embed slides for a module:

```{myst}
:::{note} 🛝 Slides
:icon: false
:class: dropdown

<iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vRPPScGGDg9PKQiEQGCj5GWSt5TnrHUyTOPoSRKrLAs9sXKuj2BTwc4SzCpXYrDE2p6B7hpRFgpoguC/pubembed?start=false&loop=false&delayms=60000"
    frameborder="0"
    width="960"
    height="569"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true">
</iframe>
:::
```


### "Where we are going"

Immediately after the embedded slides,
[show the learner where they will be going](https://diataxis.fr/tutorials/#show-the-learner-where-they-ll-be-going).

> It’s important to allow the learner to form an idea of what they will achieve right
> from the start.

Learning objectives should be phrased as aspirational, not as definite outcomes.
Avoid "you will learn...", as that's considered an antipattern.

This section should be very short.
Aim for 3 sentences max!

```{myst}
:::{tip} 🧭 Where we are going
:icon: false

_This example is © and provided by Daniele Procida @ <diataxis.fr>_

In this tutorial we will create and deploy a scalable web application.
Along the way we will encounter containerisation tools and services.
:::
```


### Content

The "meat" of your materials comes after giving readers a preview of where we are going
together.


## Authoring

### What type of audience does your module serve?

Is it a tutorial or explanation?

Include this information in the document front-matter.

```yaml
---
subject: "Tutorial"
authors:
  # ...
---
```

Follow the [Diátaxis](https://diataxis.fr) principles for your audience!


### Headings

* Use consistent heading structure so that the generated document outline on the right
  pane can be used for navigation.
* Use "Title Case" only for `h1` headers (single `#`).
* Use "Sentence case" for all other headers.


### Emojis

Use emojis in document titles.

For repeated elements, use emojis.


#### Steps

Use 🔧 in a header to indicate a step.


#### Testing

Use 🧪 in a header to indicate that the reader should stop to test their work.


#### Noticing

Use 👀 in a callout to indicate that the user should notice something, e.g. a UI element
or CLI output.
E.g.:

```{myst}
:::{important} 👀 You should notice...
:class: simple
:icon: false

...these commands produce no output when successful.
:::
```


### Voice / language

#### [Tutorials](https://diataxis.fr/tutorials/)

##### "We..."

Use "we" language to reinforce that we, learner and instructor, are on a journey
together.


##### "See ... for details"

Tutorials should
[minimize explanation (ruthlessly)](https://diataxis.fr/tutorials/#ruthlessly-minimise-explanation).
Reference other materials (e.g. vocabulary) for readers who are seeking deeper understanding.


##### "Notice" / "remember"

Provide many opportunities for learners to see results ([deliver visible results early
and often](https://diataxis.fr/tutorials/#deliver-visible-results-early-and-often)).
Help readers verify that what they're seeing is what they should be seeing ([point out
what the learner should notice](https://diataxis.fr/tutorials/#point-out-what-the-learner-should-notice))
Regularly reinforce important concepts ([encourage and permit
repetition](https://diataxis.fr/tutorials/#encourage-and-permit-repetition)).


#### [Explanation](https://diataxis.fr/explanation)

##### "The reason for..."

Explain _why_!
[Provide context](https://diataxis.fr/explanation/#provide-context).


##### "X is better than Y because..."

Make judgements, [share your opinions and perspective](https://diataxis.fr/explanation/#admit-opinion-and-perspective).


##### "X interacts with Y..."

[Make connections](https://diataxis.fr/explanation/#make-connections) to build a network
of understanding, a mental model, for your readers.
