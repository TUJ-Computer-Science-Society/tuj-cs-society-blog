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

## Installation Instructions
[Quartz 5 Setup and Installation](https://quartz.jzhao.xyz/getting-started/installation#option-a-use-the-github-template-recommended)

## Setup and Installation

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



## Branches and Code Contribution

1. The default branch is the `_development` branch.

2. Please push all blogs, and any blog changes, visual or textual to the `_development` branch first.

3. After a couple of changes have been reviewed and committed, you can merge it to `main` which will be the production branch.

4. Make sure all code is reviewed in `_development` before merging to `main`. 

5. `main` is the **production** branch, so be very safe when adding code to it.