# Quartz v5

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>

---


# TUJ CS Society Blog


---
## Installation Instructions
[Quartz 5 Setup and Installation](https://quartz.jzhao.xyz/getting-started/installation#option-a-use-the-github-template-recommended)

---
## Repository Setup and Code Environment Setup

1. Clone this GitHub Repo
```console
git clone https://github.com/TUJ-Computer-Science-Society/tuj-cs-society-blog.git
```

2. `cd` into the recently cloned folder.

3. Make sure you have Node.js 22 or later. Check your version with node -v and upgrade at nodejs.org if needed.

4. Install the required dependencies with:
```console
npm i 

// or

npm install
```

5. Issues? Just fix
```console
npm audit fix
```

6. Install necessary plugins
```console 
npx quartz plugin install --from-config
```

7. Preview your site 
```console 
npx quartz build --serve
```


---
## Coding Resources

### Want to change text fonts?
Quartz mainly uses google fonts to load fonts at the moment. This is what it's configured to currently. 
Here is the link you can find more fonts at: [Google Fonts](https://fonts.google.com/)

Feel free to modify `quartz.config.yaml` to change the styles, fonts, and design of the blog page.

### Adding Images
Please add any assets and images under `./content/<blog-folder>/images` and make sure to reference them like:
```markdown
![Alternate/Display Text](./images/<image-name>.png)
```

#### Images Naming Convention:
Make sure to name all images in the format: `BLOG_TITLE-IMAGE_NAME.png` or 
place them within a folder that has the same title as the blog. 

**Image only Naming Conventions:**
1. Separate the blog title and the name of the image with a hyphen `-`.
2. The blog title is at the start, each word separated by underscores `_`.
3. Then the image name follows, similarly, each word separated by underscores `_`.


**Folder and Image Naming Conventions**
1. Folders should be named 

### Other resources used 

1. We use Quartz-Themes in this repo: [Quartz Themes Repo](https://github.com/saberzero1/quartz-themes)

---
## Writing Blogs 

### General Template 
Refer to `./templates/general_template.md` and other files in `./templates` for 
a guide on how to structure your blogs so that quartz can process them properly.

Make sure to follow the notations and guides given so that all blogs are rendered exactly the same on the site.

### What to write?
Write whatever you want. Anything related to TUJ CS Society, a personal project, 
a recent event you went to, a recent event you organized, anything really. 

### Points to Remember:
1. Writing should be of professional quality. Please no informal sentences or phrases.
2. Writing should be kept formal, concise, and straight to the point.
3. This is not Twitter. Do not make political claims, anything that doesn't belong on a society, IT, or Tech blog.
4. **DO NOT USE AI**

### Strictly no AI (WITHOUT EXCEPTIONS):
1. Using AI shows sloppiness, weakness, and laziness.
2. This is a personal blog, writing is something most people enjoy.
3. I understand if you wanna use a tool like Grammarly to check your grammar.
4. But do NOT use AI on ANY BLOG you write for the TUJ CS Society.
5. This is a strict rule.
6. Why?
  - It degrades the overall quality of the Blog.
  - Everyone that previously wrote on the blog will be labeled as an AI writer.
  - Not only degrades your reputation, but the entire blog, the CS society's, and everyone else's reputation who worked hard for the society. 
  - This is not a rule to be messed with, do not use AI.
7. **DO NOT USE AI**
8. Just don't write if you can't write without using AI.
9. **THERE WILL BE NO EXCEPTIONS TO THIS RULE**

### Setting up Giscus for Comments and Discussion
Each blog doesn't necessarily need comments and discussions underneath it, 

1. Here is the installation, setup, and configuration guide: [Giscus Setup](https://giscus.app/)

2. Please set this up and use it for discussions, comments, and replies under each blog. 

3. Usage: If you want comments / discussion on the blog, add this script at the very end of the page:
```html
<script src="https://giscus.app/client.js"
        data-repo="TUJ-Computer-Science-Society/tuj-cs-society-blog"
        data-repo-id="R_kgDOTKRYiQ"
        data-category="General" <!-- Change this to change the discussion category, read docs for other available category info -->
        data-category-id="DIC_kwDOTKRYic4DAVui"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top" <!-- Users can comment without scrolling all the way down -->
        data-theme="catppuccin_macchiato" <!-- Change theme here -->
        data-lang="en"
        data-loading="lazy" <!-- preferably keep this lazy to prevent page hanging from prolonged loading -->
        crossorigin="anonymous"
        async>
</script>
```


---
## Branches and Code Contribution

1. The default branch is the `_development` branch.

2. Please push all blogs, and any blog changes, visual or textual to the `_development` branch first.

3. After a couple of changes have been reviewed and committed, you can merge it to `main` which is the production branch.

4. Make sure all code is reviewed in `_development` before merging to `main`. 

5. `main` is the **production** branch, so be very safe when adding code to it.

---
## Other Resources 

- [Quartz 5 Documentation](https://quartz.jzhao.xyz/)
- [Personal Blog with Quartz - by Replit](https://replit.com/guides/a-personal-blog-with-quartz)
- [Adding Premade Buttons in Markdown](https://gist.github.com/cxmeel/b3af232eba0ace022e2fba8b7b286520)
- [Quartz Themes](https://github.com/saberzero1/quartz-themes)