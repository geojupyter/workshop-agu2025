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

See [](../reference/04-using-myst.md) for instructions.


### Tradeoffs

This extension uses the `myst build --html` command instead of `myst
start`
([read more here](https://github.com/ryanlovett/jupyter-myst-build-proxy/issues/8)).
As a consequence, builds are not triggered automatically when edits are performed.

There is currently no known way to use the MyST preview server `myst start` in a
JupyterLab environment. See https://github.com/jupyter-book/mystmd/issues/302


#### Pros

* User doesn't need to run anything in the terminal to build their site
* Handles BASE_URL concerns implicitly


#### Cons

* Not portable to local usage after the workshop
* Builds only occur when manually triggered
