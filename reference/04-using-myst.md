# 📝 Using MyST

## Previewing your MyST site

### Building your site for the first time

Every MyST site must have a `myst.yml` config file that defines the project.

Right-click this file in the file browser and select the first item on the context menu:
"Build MyST Project".

A new tab will open displaying a loading progress indicator.
After a few seconds, your site will be built and you'll it displayed in the current tab.


### Subsequent builds

In JupyterLab, your site will **not** automatically rebuild when you make changes!
This functionality will be available in JupyterLab the future.

For now, the JupyterLab infrastructure will magically add a "Rebuild" button to the
top-right of your site, which you can click to trigger a new build of your site.

Do this every time you make a change to see if it worked correctly!


### How this works

This functionality is provided by the extension
[`jupyter-myst-build-proxy`](https://github.com/ryanlovett/jupyter-myst-build-proxy/).
