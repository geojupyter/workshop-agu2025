---
authors:
  - name: "Tasha Snow"
    affiliations:
      - "University of Maryland"
      - "NASA Goddard Space Flight Center"
      - "Colorado School of Mines"
    email: "tsnow03@umd.edu"
    orcid: "0000-0001-5697-5470"
    github: "tsnow03"
---

# ❄️ 1 - Working in JupyterHub with CryoCloud

:::{note} 🛝 Slides
:icon: false
:class: dropdown

<iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vRe2ACdsZHjAfG_dpS_ZkDjLLG3qizsQCgWBgAXzetJlPz7DKVXWx3nrSfEK-LGEs_H8myf21tQzR9o/pubembed?start=false&loop=false&delayms=60000"
    frameborder="0"
    width="960"
    height="569"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true">
</iframe>
:::

:::{tip} Learning Objectives
- Learn how to access and use CryoCloud
- Start a Jupyter server in CryoCloud
- Clone the repository for this workshop website
:::


## Access the [CryoCloud powerpoint](https://docs.google.com/presentation/d/1sj5oSAnHQ5Le0zMNqy55T-esZqro-WjVOPJdv_BR08M/edit?usp=sharing) whenever you need to reference it

Open the powerpoint by directly clicking on the hyperlink above or to open it in the CryoCloud Linux Desktop web browser as follows:

- Copy this hyperlink: `https://docs.google.com/presentation/d/1sj5oSAnHQ5Le0zMNqy55T-esZqro-WjVOPJdv_BR08M/edit?usp=sharing`
- Click on the plus (`+`) sign in the `File Browser` to the left to open a `Launcher` window
- Under Notebooks, click on `Desktop` to access the Linux Desktop. This will open a new tab.
- Click on the `Web Browser` tool (globe) at the bottom of the screen
- Paste the url into the search bar

![](./slides.png)


## Open CryoCloud

1) Scroll through the languages.
   Choose the Python programming language.

2) Scroll through the server sizes. Choose the 7 Gb server.

:::{tip}
**Be realistic about the max memory you will need.
The amount you select, you are guaranteed, but if you use more you risk crashing your
server and having to rerun your analysis.**

**Check your memory usage at the bottom middle of the screen.**
:::

3) Sit back and learn about each of the tools!
    - JupyterHub options and viewing setup
    - Github
    - Virtual Linux desktop
    - SyncThing
    - Viewing and editing of different files

Now after the demo...


## Task: Clone the CryoCloud jupyterbook

We will import the [CryoCloud Website Github repository](https://github.com/CryoInTheCloud/CryoCloudWebsite.git).

To do this:
1. Select the plus (`+`) sign above the `File Browser` to the left, which will bring up a `Launcher` window.

2. Click the `terminal` button under Other to open it.
   This is your command line like you would have on any computer.

   Before cloning the repo, you have the option to switch to another file folder using
   the _change directory_ terminal command: `cd folder` if you do not want the Hackweek
   repo in your current directory (you can check which directory you are currently in
   using _print working directory_ command: `pwd`).

   ```
   cd yourfoldername
   ```

3. Now clone the hackweek code into your current directory:

   ```
   https://github.com/CryoInTheCloud/CryoCloudWebsite.git
   ```

4. You will see the folder pop into your `File Browser` on the left if you have the current directory open.
   Click on the folder to navigate through the files.

5. To open this tutorial, click on the `book` subdirectory > `tutorials` and double
   click on `CryoCloud`.
   This should open up this tutorial in case you want to review it in the future.


## Shutting down your JupyterHub

```{tip}
**Best Practice: Shut down the CryoCloud server when you are done to save us money.**

**If you only close your tab or click log out, your server will continue running for 90 minutes.**
```

Whenever you are done, it is best to shut down your server when you sign out to save on money for CryoCloud.
Time on the JupyterHub costs money and there are systems in place to make sure your server doesn't run indefinitely if you forget about it.
After 90 minutes of no use, it will shut down.
We prefer you shut down the server when so we save that 90 minutes of computing cost.

To do so:

- In upper left, click on `File` > `Hub Control Panel`, which will open another tab
- Click the `Stop Server` button. Once this button disappears after you clicked it, your server is off.
- Click `Log Out` in the top right of your screen and you will be logged out, or you can start a new server
- You can now close this tab and the other tab where you were just working

![](./stop_server.png)


## Summary

🎉 Congratulations!
You've completed this tutorial and have seen how we can access and use CryoCloud.


## References

To learn more about CryoCloud, gain code for NASA data access, and find other Cryosphere tutorials check out this other documentation:

* [CryoCloud JupyterBook](https://book.cryointhecloud.com)
