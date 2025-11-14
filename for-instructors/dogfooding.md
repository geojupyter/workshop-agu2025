# 🐕 Dogfooding our processes

["Dogfooding" or "eating our own dog food"](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)
refers to the practice of using our own product.
This is important because it enables us to continuously test the same experience that
our users will use on the day of the workshop.


## Setup

You'll need to be familiar with the following processes:

* [](../reference/01-starting-your-server.md)
* [](../reference/02-stopping-your-server.md)
* [](../reference/03-gh-auth.md)

Once you've set up GitHub authentication, you can use Git normally.


## Previewing the MyST site

We have installed
[`jupyter-myst-build-proxy`](https://github.com/ryanlovett/jupyter-myst-build-proxy)
which builds the MyST site on-demand.

To view your built site:

* Copy the URL of your server (e.g. Matt's URL is
  `https://hub.cryointhecloud.com/user/mfisher87/lab`)
* Open a new browser tab
* Paste the URL in the URL bar
* Replace `/lab` with `/myst-build/$DIRECTORY_OF_MYST_PROJECT`; for example, Matt's
  project is at `~/workshop-open-source-geospatial`, so his URL would be
  `https://hub.cryointhecloud.com/user/mfisher87/myst-build/workshop-open-source-geospatial`.

At this point you should see the build progress in your browser. It should only take a
few seconds, and then you'll see your fully-built MyST site!


### Tradeoffs

Unfortunately, this extension uses the `myst build --html` command instead of `myst
start`
([read more here](https://github.com/ryanlovett/jupyter-myst-build-proxy/issues/8)).
As a consequence, builds are not triggered automatically when edits are performed.

Builds are triggered in two ways:

* First build: When the user first accesses the URL corresponding to the MyST project,
  and the built site is not found, a build is triggered.
  A nice UI shows the user progress in their browser during the build.
* Subsequent builds: The user must append `/?rebuild=1` to the URL to trigger subsequent
  builds.


#### Pros

* User doesn't need to run anything in the terminal to build their site
* Handles BASE_URL concerns implicitly


#### Cons

* Not portable to local usage after the workshop
* Builds only occur when manually triggered
