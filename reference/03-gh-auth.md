# 🔐 Configuring GitHub authentication

GitHub authentication on shared cloud infrastructure is complicated.

Always remember, "cloud" is the same as "someone else's computer".
It's not a good idea to store your credentials on someone else's computer!

For this reason, we use a special tool called `gh-scoped-creds` to provide a special
credential which grants restricted access to only certain GitHub resources for a limited
amount of time.


## Copy the GitHub authentication Notebook

There's a special notebook titled `GHAUTH.ipynb` in the `shared/` directory.

Right-click it, select "**Copy**", then return to your home directory by clicking the 📁
icon at the top of your file browser.
Finally, right click in the empty space in your home directory and select "**Paste**".

:::{hint}
Right-click this notebook and select "Add Favorite" to enable quick access in the
future!
:::


## Follow the instructions in the Notebook

**The first time you use this Notebook, you should open the "First time setup" hint and
follow the instructions within.**

After you've completed first-time setup, run the code cell at the end of the Notebook
and carefully follow the instructions output by this cell.
