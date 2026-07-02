# Contributing

# 1. Branch Naming Convention

Branch names should be lowercase, hyphenated, and descriptive. 
The branch names `_development` and `main` are reserved and should not be committed to directly.
Here are a few examples:

```
# good
dev-6769-properties-listings-page
bugfix/properties-address-text-not-visible

# bad
dev-6431_properties_page_add_button     # underscores
Dev-5981-Lock-on_admin                  # uppercase
```

## 1.1. Branch Prefixes

If not through JIRA tickets or GitHub Issues, try to be descriptive with your branch names by 
providing a prefix. This makes branch names easier to identify. 
Here are a list of possible branch name prefixes:

```
style/dev-5671-change-theme                        # new features or updates regarding style / design of the blog

blog/dev-6000-new-blog                             # new blog

dependency/dev-4094-excalidraw-plugin-dependency   # new dependency
```

---
# 3. Pull Requests

Make pull requests to merge to the `_development` and `main` branches. Be sure your pull requests:

1. Are descriptive, have a summary.
2. Explain the issue, where is it found, what caused it, and how. 
3. or, if it's a feature, explain the impact, where it'll be added, and what changes it'll be making.
4. Outline any tests you've written for this feature / fix.
5. Show any possible output(s), mockup(s), etc. if applicable.
