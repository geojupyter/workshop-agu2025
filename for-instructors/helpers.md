# 🪄 Helpers

This repository includes a `plugin-custom-directives.mjs` file which defines custom
directives that will save some time authoring certain repeated elements.

## Git commit checkpoint directive

```myst
:::{gitCommitCheckpoint} my commit message
:::
```

:::{gitCommitCheckpoint} my commit message
:::


## "You should notice..." directive

``````myst
:::{youShouldNotice}
...the `{youShouldNotice}` directive fully supports markdown in the body.
This means you can, for example include some code:

```python
print("Some code!")
```
:::
``````

:::{youShouldNotice}
...the `{youShouldNotice}` directive fully supports markdown in the body.
This means you can, for example include some code:

```python
print("Some code!")
```
:::
