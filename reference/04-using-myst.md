# 📝 Using MyST

## Previewing your MyST site

### First time

To view your built site:

* Copy the URL of your server (e.g. Matt's URL is
  `https://hub.cryointhecloud.com/user/mfisher87/lab`)
* Open a new browser tab
* Paste the URL in the URL bar
* Replace `/lab` with `/myst-build/$DIRECTORY_OF_MYST_PROJECT`; for example, Matt's
  project is at `~/workshop-open-source-geospatial`, so his URL would be
  `https://hub.cryointhecloud.com/user/mfisher87/myst-build/workshop-open-source-geospatial`.

At this point you should see the build progress in your browser.
It should only take a few seconds, and then you'll see your fully-built MyST site!


### Subsequent builds

Your site will not automatically rebuild when you make changes!
This functionality will be available in the future.

Append  `/?rebuild=1` to the URL to trigger a rebuild.
