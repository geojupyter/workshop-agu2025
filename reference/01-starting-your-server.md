# 🚀 Starting your server

Everything in this workshop will be done on your own personal server on
[the CryoCloud JupyterHub](https://hub.cryointhecloud.com/).

**Your server's disk space is persistent, meaning that any files you create will still
exist after you stop and restart your server.**


## Server options

Once you're logged in to [the CryoCloud JupyterHub](https://hub.cryointhecloud.com),
you'll be presented with a screen like this:

![](../assets/images/cryocloud-server-options.png)

Select:

* **Environment**: "Other..."
* **Custom image**: `ghcr.io/geojupyter/workshop-open-source-geospatial:latest`
    * TODO: Update `latest` to a fixed tag
* **Resource allocation**: "~4GB RAM, ~0.5 CPUs"

:::{important}
It's critical to only allocate the resources you need so that CryoCloud can sustain its
operations!

If you find your analysis requires more resources than you allocated, you can
[stop your server](./02-stopping-your-server.md) and recreate it with more resources.

It's also important to [stop your server](./02-stopping-your-server.md) when you're not
using it.
:::


## Click "Start"

When you click start, CryoCloud will begin creating your personal server.
You should see a progress bar like this:

![](../assets/images/cryocloud-server-starting.png)

After a few moments, you'll be presented with the JupyterLab interface.
