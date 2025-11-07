# GeoJupyter Docker image

A Docker image containing geospatial tools and libraries needed for this workshop,
intended to be run on [CryoCloud](https://cryointhecloud.com/)

Use this image string in your JupyterHub:

```
ghcr.io/geojupyter/workshop-open-source-geospatial:latest
```


## How it's built

This Docker image is built with
[repo2docker](https://github.com/jupyterhub/repo2docker).

repo2docker enables building and publishing a Docker image without Docker-specific
knowledge.
It uses familiar
[configuration files](https://repo2docker.readthedocs.io/en/latest/config_files.html)
like conda's `environment.yml` to generate the image, and the author of the repo2docker
repository doesn't need to deal with frustrating complexities like environment
activation or requirements to work as expected on a JupyterHub.
