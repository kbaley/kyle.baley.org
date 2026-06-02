---
title: "Write Software for the Team You Have"
description: "An article on writing software for the team you have rather than the team you wish you had."
date: 2026-06-01
category: "Technical Leadership"
summary: "A contractor's architecture test: when the work is handed off, can the client's team understand it, extend it, and actually want to keep working that way?"
---

As a contractor, I think a lot about software maintenance. I'm not kidding. I wrote about it [eighteen years ago](/archive/2008/04/whos-the-next-guy/) and, though I wish I was a bit more gender-sensitive in the title, the underlying sentiment holds up. Even if some of the technology does not. Eighteen years later, I still wonder about the same thing, especially now that our industry has produced enough frameworks, patterns, deployment targets, and architecture diagrams to blot out the sun.

That older article was about a small family-run business that happened to have a cocky, know-it-all developer in the family. Hi, Dad. But the question is not limited to family businesses, or small businesses, or even old-school applications that smell faintly of Web Forms and regret.

As contractors, who are we building for?

Software architecture discussions can be...let's say...optimistic. There's regular and energetic talk of bounded contexts and software patterns and commands and queries and handlers. But what's often forgotten is that when you're done, you won't be the one to add the new feature or fix the bugs. And the implicit assumption is that the future team will be just as disciplined, just as curious, and just as unencumbered by meetings that start with "quick sync" as you are.

As a contractor, this matters more than it does when you are part of the permanent team. You are, by definition, temporary. Even if the engagement goes well, even if the client likes you, even if the system ships and everyone enjoys a brief period of heroic Slack emojis, the question eventually becomes:

Can the team in place add the next feature or fix the next bug without needing to summon you from whatever hammock-adjacent consulting arrangement you have moved on to? And the just-as-important corollary: assuming they can, do they want to do it in the same way?

## Maintainable for Whom?

When we talk about maintainability, we often talk about it as if it were an intrinsic property of the code. This code is maintainable. That code is not. This architecture is clean. That one looks like someone lost a fight with an ORM.

A codebase full of small, composable, well-tested abstractions may be a joy to one team and to another, you may as well add "HERE BE DRAGONS" to the top of the readme. A modular monolith may be a pragmatic blessing for a team that deploys together and works across features. It may also become a very well-organized junk drawer if nobody understands where the boundaries are or why they matter.

CQRS can clarify a complicated domain. It can also give a team two code paths, three naming conventions, and one more reason to look meaningfully at the ceiling during standup.

The point is not that advanced patterns are bad. That would be convenient, because then we could all agree to use three-tier architecture forever and spend the rest of our careers arguing about whether "Services" is a folder or a lifestyle. The point is that every decision has a carrying cost, and someone has to carry it after you are gone.

Before choosing the cleverer approach, I try to ask a few unromantic questions:

- Will the client's development team be able to follow this pattern when adding a feature under pressure?
- Will they know where to put new code without asking the original author?
- Will the tests explain the intended behaviour or merely enforce the current trivia?
- Will the team _want_ to keep using this approach once nobody is watching?

That last one is rude, but useful. People can be trained to follow a pattern. But never underestimate the power of the workaround when someone is under a deadline.

If the conventions feel like ceremony, if the abstractions obscure more than they reveal, or if the workflow makes common tasks feel like assembling patio furniture with translated instructions, the team will drift. Not because they are lazy. Because the code is asking them to spend energy they don't think is worth spending.

## How Much Do You Adjust?

This is where the question gets uncomfortable. I don't think the answer is to build everything at the lowest common denominator. That is its own kind of condescension, and it can punish the people on the team who are ready to stretch. Sometimes the right thing is to introduce a new pattern because it solves a real problem and gives the team a better vocabulary for future work.

But stretching is not the same as abandoning someone in the woods with a compass and a link to a conference talk.

The trick, insofar as anything in software can be called "the trick" without immediately being disproven by production, is to make the stretch visible. If I am going to use a modular monolith, I should be able to explain why I am not carving the system into microservices. Or (usually more commonly) how to justify the extra complexity when an n-tier architecture with hard-coded SQL has served them well for years, thank you very much. 

Maybe the client does not have independent deployment pipelines. Maybe the team is small enough that distributed ownership would be theatre. Maybe their operational maturity is not yet at the level where "now you have twelve deployables" counts as a gift.

If I am not using onion architecture, I should be able to explain that too. Maybe the app does not need that much layering. Maybe the indirection would make everyday changes harder for the people who will maintain it. Or maybe I am using some of those ideas but avoiding the full ritual because this system needs a raincoat, not a cathedral.

These tradeoffs should not be presented as commandments. They should be discussed as decisions with consequences. Here is what this approach makes easier. Here is what it makes harder. Here is what you will have to learn. Here is where it may frustrate you. Here is how you will know when the pattern is being followed well, and here is what it looks like when it starts to rot.

Emphasizing the potential pain points is just as important as the benefits. It means the first time they have to create a sea of request/response objects and map between them, they aren't blindsided. They will remember: Oh right, Kyle said this would happen and it would probably feel icky at first.

## Bring Them In Early

The best way I know to make that discussion real is to involve at least one person from the client's development team from the beginning. Not at the end, during the ceremonial "knowledge transfer" phase, which too often means you screenshare through six months of decisions while someone [named Dave](https://www.youtube.com/watch?v=8nvzEqsZIGo) nods absently into a webcam.

From the beginning. Have them build a feature with you. Have them pair on the awkward parts. Let them feel the friction while you're there to explain why it's a tradeoff. Their confusion/frustration isn't an inconvenience. It's an investment in the long-term viability of the system.

If that's not possible, I'd like to say it's good enough for them to review PRs at regular intervals. But I haven't had much long-term success with that. If that's all the client is offering, it kind of sends the signal from the beginning that it's not a priority for them.

I try not to get too chafed if they can't bring in someone to work closely with the contracting team. Each client has different priorities and they see things from a different perspective than I do. It's easy to say "this project will fail without this" because there are a million ways something can fail and if it does, "I told you so" is a powerful, albeit petty, drug. Better, in my opinion, to assume they have the business's best interest in mind and sincerely wish for success.

## Management Wants One Thing. Developers Want Tuesday to Be Survivable.

There is also a management wrinkle here, because there is always a management wrinkle here.

Management may want modernization, resilience, speed, and a codebase that attracts developers who use the word "craft" without irony. The developers may want something they can understand on a Tuesday afternoon when production is down and the person who knows the payment workflow is on vacation.

Both groups are usually right about something.

Part of the contractor's job is to make those expectations visible. If management wants a future-facing architecture, they need to understand the investment required to make the team successful with it: training, pairing, review time, documentation, CI/CD maturity, and operational support.

If the developers want familiar patterns, they need to understand the cost of staying where they are when the current approach is already slowing delivery or increasing risk.

This is less about compromise than calibration.

The software should be good enough to move the team forward, but not so alien that it can only be maintained during the waxing phase of the moon. It should respect the current team without freezing them in amber. It should leave them with patterns they can follow, conventions they understand, and enough confidence to make the next change without holding a seance for the original author.

That, to me, is the contractor's architecture test:

When I leave, does the team have a system they _feel_ that they own?

Kyle the Eventually Replaceable
