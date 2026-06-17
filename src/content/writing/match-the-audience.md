---
title: "Match Your Audience"
description: "A reflection on choosing communication that helps the other person feel understood instead of impressed."
date: 2026-06-12
category: "Communication"
summary: "Communication works better when it's aimed at the person in front of you, using their language, their context, and their need to feel understood instead of dazzled."
heroImage: "/assets/match-audience-hero.webp"
previewImage: "/assets/match-audience-hero-linkedin.jpg"
previewUrl: "/writing/match-the-audience/?v=2"
heroAlt: "Someone speaking only to be heard"
---

Years ago, I wrote about an [epiphany involving a plumber](/archive/2008/10/epiphany-on-a-plumber/). The short version is that our plumber was explaining a new reverse osmosis system with all the intensity and enthusiasm of someone who genuinely loved the machinery. Valves. Filters. Membranes. Sediment. Pressure. Parts-per-something-or-other. The man was practically vibrating with joy. And he was a big guy so there were times where I was genuinely concerned about my safety.

I, the user in that story, stood there with my eyes glazing over, waiting for the part where the water came out clean. The realization at the time was uncomfortable: Is this what I sound like to users?

I still think about that fellow pretty often, especially when I'm talking to people in a professional capacity, whether it's users, the dev team, management, QA, the legal team, or the HR department. Okay, I'm kidding about the last one. I don't talk professionally to HR.

## The Goal Isn't to Sound Smart

There are different styles of communication for different people. That sounds obvious in the way all useful advice sounds obvious right up until the moment we fail at it.

A developer may want implementation detail. A product owner may want tradeoffs and impact. A support person may want language they can use with a customer. An executive may want risk, timing, cost, and what happens if we do nothing. A user may not care what pattern you used, which database query changed, or why the cache invalidation strategy briefly became a character-building exercise.

They just want to know whether they can do their job. You need to decide whether you're going [to help them](https://www.youtube.com/watch?v=iBtcGwHPMKM) or hinder them.

Technical details aren't bad. Indeed, they're often necessary. But they can also become a way of showing off, especially when we use them before we know whether the other person needs them. At that point, the details aren't serving understanding. They're serving our egos.

This is a hard thing to admit, because most of us don't walk into a conversation thinking, "Now would be a good time to establish dominance through vocabulary." We just get excited. Or nervous. Or we want to prove we have thought it through. Or we want credit for the complexity we had to survive before arriving at the answer. Or we (maybe subconsciously, maybe not) don't want to implement the feature and spewing tech will make the client think it's too expensive to implement. Or, and let's be honest with ourselves, we want to show off.

## How It Feels Matters

<blockquote class="pull-quote">
  <p>I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.</p>
  <cite>Maya Angelou</cite>
</blockquote>

I love this quote and considered it for my home page before Douglas Adams won out. This relates to me in many ways. For example, I can tell you instantly whether I liked a book/movie/TV show/musical regardless of when I saw it. But more often than not, I won't be able to give you many details about it, unless it's a movie I've seen dozens of times like _Phantom of the Paradise_ or _Glengarry Glen Ross_. It's the feeling that lingers. I absolutely loathed the entire Cradle series of books pretty much from the second book but at this point, I can't tell you why. Only that I hate-read all of them because I downloaded them free somewhere and I'll be damned if I'm going to let a book sit on my Kindle unread.

But I digress. Back to the quote.

The takeaway I...ummm...take away from it is: you can be the "smartest" person in the room and still not be good at your job. Do you want to be the person the client talks about years afterward that says, "You remember that contractor? Seemed smart enough but he made me feel stupid." Though it's likely they'll phrase "he made me feel stupid" differently. Like "he was kind of an asshole".

If you make someone feel stupid, you're fighting uphill from the start. They may assume you don't know what you're doing because you can't explain it clearly. Or they may assume you know exactly what you're doing and enjoy making them feel small. Neither assumption brings warm fuzzies.

The opposite isn't much better. If you condescend, simplifying everything into baby talk and visible patience, people can feel that too. You might think you are being helpful. They may hear, "This person thinks I'm an idiot." You've likely experienced this yourself when you call any sort of tech support.

No one wants to feel stupid. No one wants to feel managed. People want to feel oriented. Respected. Included in the conversation rather than tolerated by it. In short, they want to feel useful.

This is the part where I should probably make it clear that I am not an expert on this. I like a clever turn of phrase, a satisfying click of a sentence that amuses me. And more than once, I've favored that click over shared understanding. It's a process, not a destination.

The problem is that cleverness isn't the same as clarity. Sometimes it helps. Sometimes it gets in the way and then sits there, all smug and pleased with ~myself~ itself.

## Listen Then Translate

The practical advice is painfully simple: listen.

Not "wait for your turn to speak because you already have something clever to say" listen. Actual listening. Listen for what they call things. Listen for what they emphasize. Listen for what they avoid. Listen for the distinction between what they asked and what they're worried about.

<figure>
  <a href="https://xkcd.com/920/">
    <img src="https://imgs.xkcd.com/comics/youtube_parties.png" alt="A person thinks a video is blowing everyone's minds while the group is thinking about what video to watch next." />
  </a>
  <figcaption>Sometimes listening loses to waiting for your turn.</figcaption>
</figure>

Then use their terminology and reflect it back to them. If they call it a customer record, maybe don't immediately correct them to "aggregate root." If they say "the nightly file," maybe start there before introducing "asynchronous integration workflow." If they talk about "the thing that fails after billing," that may not be the moment to open with a treatise on batch jobs vs. message brokers.

Active listening is harder than it looks. It's _really_ easy to pick out a couple of keywords and think "I know where this is going and I have a solution" and then tune out the important bit where they say "we tried _&lt;the thing you're about to suggest&gt;_ and it didn't work".

Reflecting their language has at least two benefits. First, it verifies your understanding. When you say, "So the customer record looks right until the nightly file runs, and then the billing status changes unexpectedly," they can correct you. That correction is a gift. It's cheaper than confidently building the wrong thing.

Second, it shows the person that you understand them. Not that you understood a problem in the abstract. That you understood their problem in the form they experience it. It makes them more confident that you can help them.

## Assume the Best

There's an assumption underneath all of this that's worth making explicit: the person you're talking to is probably good at their job.

Keep in mind, I said _their_ job, not yours. They may not know the architecture, the deployment pipeline, the domain model, or why saying "just add a field" can make a developer stare silently into the middle distance. But they know their work. They know where the process bends. They know which workaround everyone has quietly accepted. They know which customer calls make the room go quiet.

Assume that competence is real. Assume they have context you don't have. And, unless you have strong evidence otherwise, assume they want the project to succeed as much as you (presumably) do.

<figure>
  <img src="/assets/match-audience-listen.webp" alt="Active listening
  leads to shared understanding and confidence in the solution" />
</figure>

That assumption changes the conversation. You stop treating their words as a flawed bug report that needs to be converted into GitHub issues. You start treating them as a partial view from another part of the system. Still incomplete, still possibly wrong in places, but valuable because it's coming from a place you don't necessarily grasp fully.

This doesn't mean everyone is right, or that every request is good. But correction lands better when it starts from respect. "That's not how this works" is a dead end. "I see why you'd expect that; here's the part of the system that makes it weird" leaves room for both people to keep collaborating.

## Whatever, Man, Just Make It Work

That plumber story still makes me smile because I had no doubt he knew what he was doing. His enthusiasm gave me confidence. But his explanation didn't give me understanding. It gave me proximity to his understanding.

I don't want to drain the enthusiasm out of technical work. Enthusiasm is wonderful. It's contagious when it's aimed well (though I don't recommend vibrating with it). The trick is to let it invite people in instead of leaving them outside the glass while we point excitedly at the machinery.

Use the person's language. Check that you understood. Explain from their context before yours. Offer technical depth when it helps, not because it proves you have depth available.

And when in doubt, remember the look on a user's face when what they really mean is:

Whatever, man, just make it work.

Kyle the Occasionally Overtranslated
