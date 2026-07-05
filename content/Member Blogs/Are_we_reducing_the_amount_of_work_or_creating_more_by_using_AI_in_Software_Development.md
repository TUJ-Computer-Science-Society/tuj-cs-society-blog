---
title: Are we creating more or less work by using AI in software development?
description: My thoughts regarding using AI in software development.
author: Bhushith Gujjala Hari
date: 2026-07-02
publishDate: 2026-07-10
draft: false
tags:
  - ai
  - cs
  - tech
  - personal-blog
  - software-development
  - tech-trends
---

# Introduction

With the recent introduction of AI agents, MCP servers, coding agents, agentic AI tools, and so much more, many software development processes can be sped up (or slowed down) with the use of AI. These are my personal thoughts and discussions based on experiences with using AI in software development. 


--- 
# Using AI in Software Development: How it's done 

There's a good amount of setup that goes into using AI in software development. You need to setup a coding agent tool, the one I use at work is [OpenCode](https://opencode.ai/). But I've started to stray away from using it all too much. 

Then you'll need to setup a [Model Context Protocol (MCP) server](https://modelcontextprotocol.io/docs/getting-started/intro), which will need you to code a lot of the functions the agent can inspect and use to interact and check your application's code. 

You can also experiment with [Agent Skills](https://agentskills.io/home) which are basically just MarkDown files instructing agents on how to do certain tasks. For example, if your agent needs to write GraphQL queries, a useful skill would be to instruct the agent how to follow proper syntax, language rules, and using schema introspection to generate a valid GraphQL query. 

If setup properly, an AI coding agent can perform the functions it's made for pretty well. However, is this making the software development process faster? Teams have definitely changed, they have all revolved around using agentic coding tools, but below all the high level abstraction, at the end of the day, are we making the entire process much faster and cheaper, or much slower and more expensive?


---
# Counterarguments: AI obviously makes "everything" faster

AI makes the entire coding process faster, a few calculated and well-written prompts will get what you want within a reasonable amount of time. The process can be so optimized to the point where detailed JIRA tickets can be connected to a coding agent such as [GitHub Copilot](https://github.com/features/copilot) and the agent, once assigned the ticket / task, can just go ahead, code it, test itself, and make a detailed PR. 

AI agents make the whole process automated and much more efficient. People can be onboarded within a day, while it used to take days, even upto weeks to get them up to speed and familiar with the company's codebase and technology stack. AI agents can be instructed to go through skills, documentation, and detailed markdown files detailing each component of the application. This is absolutely true, software developers can get started on writing code much faster because AI agents can go through the vast, sometimes even legacy codebase and instruct them on what files to look at based on their task. They can understand the bigger picture much sooner.

AI agents also make a lot of menial, boring, repetitive tasks insanely faster and automated. This is very helpful, humans can focus on dynamic tasks that need more effort rather than wasting time on repetetive tasks that can be automated with "routines" or easily instructing and agent to complete those tasks.


--- 
# Problem: Integrating this into the actual software development cycle

In an actual software development team, each development cycle consists of planning, coding, review, testing, Quality Analysis (QA) testing, and only then finally deployment. Many teams have already integrated AI into some, if not all of these steps. But where does the problem actually occur?

Imagine this scenario, a developer picks up a ticket, prompts around a bit, and gets an AI agent to code the entire feature. After making the initial Pull Request (PR), their co-workers advice them to add a testing suite to cover all the functions with individual test cases. The developer just asks the agent to do it, and remakes the PR. Now, on GitHub, there's a new feature that allows people to request a review from Copilot. The developer tries it out, and within a few minutes has a review. What developers can do now is actually just commit all of the changes that Copilot has requested directly onto the same PR. So they do that as well. However, the PR is stuck in limbo for much longer as their coworkers go back and forth about best coding practices, existing utility features the developer could have developed this feature on top of, and a lot more security issues that could have only be caught by senior developers with experience regarding the system, codebase, and existing application. 

The problem is, that at each step, if people get quite lazy when it comes to reviewing their own work, it makes the entire process much slower. This also leads to repeated iterations of asking multiple agents to re-evaluate their work, code again, review their code, write tests, and a lot of other steps that just consumes more tokens. 

So, somehwere in the slowed down development process, there's hours of wasted time, thousands of wasted AI credits, more resources used, and the feature taking much longer than expected to be integrated, tested, and deployed. The only issue is, the losses are not well tracked in most teams. 


--- 
# Key Takeaway: Don't get Lazy! 

That's right! Go ahead and use AI for the menial boring tasks. Want to change the colors of 10 buttons across 7 different pages? Go for it, prompt well, review the changes, all good. 

But, when it comes down to actually developing new features, integrating new systems, and other heavy tasks. Plan ahead, discuss with your team, draw out Unified Modelling Language (UML) diagrams, talk to your coworkers about best practices, talk to the senior developers about existing system code, and write the base code by yourself! 

The best practices include reviewing your own code, multiple times, asking AI about existing codebase knowledge that you may not know of. Asking AI to test your code, and asking it to help you write tests for it, because obviously writing unit tests can be menial and quite repetetive. 

**Use AI as a tool, not as a replacement for yourself.**

Don't take a nap while the agent is busy burning tokens to code your feature. Don't rush to grab a cup of coffee while the three agents you left running on your computer are planning a new integration. Because once you let that happen, what differentiates you from a software development team spinning up a few agents to do exactly what you just did, but for much cheaper as they don't need to pay a human to sit and doom-scroll on Instagram while agents are doing the work.


---
# Final Comments and Author Thoughts 

Written by Bhushith Gujjala Hari.

I have personally used AI in software development. Some coding teams require you to use it, the pace expected sometimes needs you to catch up with the rapidly evolving teams. However, I have not felt like myself when using it. Is this really software development in the year 2026? The thought really baffled me. I really like coding by hand. I like coding, I like debugging, I like having a deep understanding of everything I write. 

But with the changing times, I have no choice but to stay updated with the new trends. However, I feel there's some compromise that can be made, and I prefer using AI as minimally as possible when writing code. I'll use it for tests, I'll use it to ask questions, I'll use it to understand the existing code, but never, as even remotely close to a replacement. I will review the code myself, and read it through line by line before blindly clicking on "Keep All Changes". 

These are just my thoughts on the current software development cycle culture, feel free to disagree with this blog and my opinions.

_Thanks to Professor Farid Nakhle inspiring me to write a part of this blog. I attribute the "Don't get Lazy!" quote to him!_

<script src="https://giscus.app/client.js"
        data-repo="TUJ-Computer-Science-Society/tuj-cs-society-blog"
        data-repo-id="R_kgDOTKRYiQ"
        data-category="General"
        data-category-id="DIC_kwDOTKRYic4DAVui"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="catppuccin_macchiato"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>