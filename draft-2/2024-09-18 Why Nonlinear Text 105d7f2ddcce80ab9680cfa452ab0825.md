# 2024-09-18 Why Nonlinear Text

AI summary: The text discusses the need for a logic-forward channel to complement traditional rhetoric in communication, addressing the limitations of linear text in conveying complex arguments. It highlights issues such as structural ambiguity, the confusion between rhetoric and logic, and the challenges of extracting key information. The author proposes a visual representation of logical structures alongside text to enhance understanding and facilitate better communication, while acknowledging potential problems with adoption and the subjective appeal of the structure.
Status: First Draft done

# **Text is a channel for rhetoric, let’s add one for logic**

## **Text should not be left alone**

Many *things-worth-knowing* are found in text instead of conversations and experience. This is unfortunate because getting them out of text is hard.

Here are the core problems with pure text, as a medium for communication:

- [structural grokking] The structure of an argument is important for analyzing it. It’s difficult to immediately see that structure, though, because text is linear - one statement follows another. Imagine two adjacent sentences that are actually structurally parallel, and together stand as premises which hold up the conclusion of a third sentence. Here’s an overused example: *“Socrates is a man. All men are mortal. Socrates is mortal.”* Nothing about the form of text gives the first and second sentences the clothes of premises, nor the third sentence the mark of conclusion. Nothing about the form of text even makes the link from the first sentence to the third, nor the second to the third. At most, one could argue that a 2 —> 3 link is implied by adjacency. This is true, but a 1 —> 2 link is also implied and is *wrong*. So link-implication-by-adjacency is not reliable. We need better, especially for more complex argumentation.
- [rhetoric-logic confusion] Evolution, for whatever reason, decided to put rhetoric and logic in the same mind-room. This has the side-effect of making us extremely vulnerable to believing the wrong things. Bad logic becomes persuasive through good rhetoric. Good logic becomes unknown through bad rhetoric. The linearity of text makes this worse, by forefronting rhetoric (which compounds through linearity) at the expense of backgrounding logic (whose structure is hidden).
- [exploration] The imposed order on text is hard to break. When I read an interesting point, I might want to see how it relates to another particular point. Perhaps I read about how London taxi drivers developed larger hippocampi to accommodate the spatial knowledge of car-traversable London, and want to know whether this big brain gain came at the expense of some other abilities. This desire is only reliably fulfilled if that relation just so happens to be the next sentence. Else I need to keep reading, and hope that I will not forget my query (and hope that the query will be eventually answered).
- [high-level understanding] It’s difficult to get a sense of the key points of a text. When reading scientific papers, common advice is to jump to the abstract, then conclusion, and then check any interesting figures before reading the paper in its entireity. In speed reading-esque circles, common advice is to read the first and then last sentences of each paragraph on a first pass. These are both abuses on the form of text, which is inherently linear (read it start-to-finish) thus non-interactive (no jumping around!). Yet by treating the text as such, you take the reins of your interaction. You decide where to go, and thus your understanding is now your active responsibility instead of being delegated solely to the author. But with the current incarnation, text does not like this use, and so the form of text struggles against you.
- [search] It’s hard to find the exact information wanted from text. For example, you may know that David Hume, in his Enquiry Concerning Human Understanding, outlines base rules that our minds use to combine pre-known concepts into new ones. Based on this, imagine that you want to know exactly what these base rules are. The text will give you a hard time in your search. You can’t use a quick visual inspection - the table of contents isn’t helpful here, and there are too many pages to flip through. You can’t even do a *Find* on your PDF viewer - the particular terms he uses to express this idea are not the same as the ones I have used

Side note about [search]: Of all the flaws of text mentioned, this is the closest to being solved. We now have vector databases that allow text to be *semantically* searched (search-by-meaning) instead of *syntactically* searched (search-by-exact-text). The underlying mechanism is to convert your search query to an eerie mathematically-represented understanding of the *meaning* of the query, and compare it with similarly-represented chunks that encompass the entire underlying text. It’s not mainstream yet, but I suspect that books will start including search tools to increase their interactivity soon. There’s probably profitable startup idea there - an LLM that unlocks knowledge bases when the book purchase is verified. Personally, I find this monetization to be disgusting as it is a movement towards barriers to knowledge.

This post details an experimental attempt to fix many of the problems of text, while also demonstrating the experiment. The tech is there. It’s been there for a while. But the idea and its adoption do not yet exist.

## **On the utility of rhetoric**

At its core, all of language is just gesticulating vaguely at concepts and things which are too big for us to hold losslessly in our tiny brains. The trick to good communication is thus to make pretty signposts and point them in the roughly-correct direction for the particular traveller you’re trying to orient.

Seen from this lens, rhetoric is a wonderful pathogen with which to infect readers with understanding.

- [memory] A well-turned phrase makes things memorable. Personally, it’s like the fog I’ve been wading through suddenly settles into solid ground. There is joy and relief, and a deep (though often erroneous or illusory) feeling of *knowing*.
- [non-conscious] Rhetoric speaks to the secret parts of the self in the hidden society of the mind. Perhaps more important than speaking to conscious-me, rhetoric moves the core actuators of my being. There is a difference between knowing something in the brain, knowing something in the heart, and knowing something in the bones. Rhetoric is the unifying politician that stirs them all. This is good, but unfortunately it also blurs their boundaries. A thing which should be heart-known could seep into the brain and bones.

Understanding, however, is not the same as truth-seeking. You can certainly understand things that are false, and there is often value in doing so. The problem comes from believing that false things are true.

Like a bad roommate, rhetoric gets logic drunk in the text and then leaves it alone to find its own way home. Thus our solution should preserve the *life-of-the-party*ness of rhetoric, while also keeping logic sober.

## **The solution: A logic-forward channel to complement text’s rhetoric-forward channel**

The solution is simple: let rhetoric have its stage in text. Meanwhile, we assemble a parallel area for logic to perform, and place it visibly at text’s side. These are different views on the same content, and they are synced. The reader may flit between them as they see fit. The writer may use the logic-forward channel to extend communication beyond text, by making the implicit into the explicit, and drawing links that are not easily seen through linear presentation.

Rhetoric is simple and requires little to perform. Logic, despite being the quiet one, is more of a diva. Let us investigate her needs.

### **The building blocks of logic’s stage**

To show logic is to show structure. Thus we require knowledge of what is allowable in the structure, and a way of marking up statements to fit into that structure.

The particulars of what is allowable in the structure is a work-in-progress. I welcome any ideas for improvement. For the work you are currently reading, the basics of the structure are as follows:

- Nodes, which are boxes that each represent a particular point which the content makes.
- Directed links, which are arrows that relate nodes to each other. These are the workhorse of the structure.

Links have different types. The types currently used are as follows:

- claim
- support
- extension

Thus if *Node A* points to *Node B* with the link type of *claim*, then we know that A is a premise which supports the conclusion B.

### **Marking the Main Conclusion**

I have marked the main conclusion of this essay. This serves as a focal point for all other nodes.

The advantage is that it is easy to show, from any point of the text, how this links to the overarching point-of-interest (the main conclusion).

The disadvantage is that, in fact, there may be multiple overarching points-of-interest.

A future extension should thus generalize the concept of the “main conclusion” to multiple overarching points-of-interest (main conclusion*s*).

### **Levels of detail through node groups**

For years, video games have been cheating computational demands by using [lower-resolution (computationally cheaper) elements for things that are far away](https://en.wikipedia.org/wiki/Level_of_detail_(computer_graphics)). The player won’t notice, anyway - these far things are not in their immediate vicinity.

Similarly, this text uses node groups in its High Level view in order to show how the point leads to the main conclusion.

There are interesting extensions here:

- [recursive node groups] Should we allow node groups to themselves form higher-order node groups? This would allow for multiple levels of detail.
- [multiclassing] Should a node be allowed to have >1 node group? The answer of course is yes, but in this case, how does that affect the representation?
- [redundancy] Should multiple parts of the text be associated with the same node?

Note: in practice, levels of detail techniques in video games often break down in jarring ways, e.g. distracting the player by having more details suddenly pop in. But these are, I believe, implementation issues or hardware limitations, rather than problems with the metaphor.

## **Some insights from marking up the logic in this post**

### **The process was painful, but this is likely fixable**

Here were the steps:

1. Write the post on Notion
2. Map the logical structure on [https://app.diagrams.net/](https://app.diagrams.net/)
3. See flaws in my own argumentation, and revise from Step 1
4. Convert the notion to markdown to HTML
5. Mark up the text associated with each node in <div id="node-{x}>
6. Specify the graph details in JavaScript

The visualization code was a one-time cost that is usable for any future posts, so I won’t discuss it. Feel free to check out the code on GitHub, but be warned that it’s hacky.

The pain comes from the process of marking up the text to extract the logic graph. This is fixable - I could create a custom GUI for making the graph.

### **The process helped me see my own thinking more clearly**

Writing, of course, always clarifies thought. But I find that the clarification is often an illusory sense of certainty, that when tested, falls apart. Writing too often helps me believe what I think, instead of *know* it.

In this way, the logical layer was a stress-test for those beliefs. This is the second post I have written in this format. Immediately I saw weaknesses in my own argumentation and thought.

## **Why not automatically extract the logical graph from text?**

It would be obviously-useful to have any text that you are reading represented in the format that I am proposing.

I believe that AI is advanced enough to generate knowledge maps of a given text. In fact, it might even do a better job than I can in most cases. This is highly useful for other-people’s-writing, and I might build something for it.

However, I am currently against walking the route of automatically extracting knowledge maps for my own writing. Here’s why:

There is something special about me marking up my own text. I believe this has two aspects:

1. [better self-critique] It deepens my own understanding of my text. I see flaws and blemishes that I otherwise would have missed.
2. [more interpretation control] It allows me to collapse the ambiguity of my text into what I want. The logical channel provides more firewood for the interpretation engine in the reader’s mind. This firewood decreases ambiguity, and the reader will better arrive at what I wish to deliver. In order for an automated process to extract my intent from textual ambiguities, it has to know me extremely well. I do not trust any automated process to know me well enough, particularly since I am ever-evolving (and thus a shifting target for it to reach).

## **Problems and Limitations**

### **Problems that I believe are solvable**

- [interface jankiness] The interface has issues. Sometimes, I accidentally hover over text that I don’t mean to, and the whole graph changes. Also, transitions between graphs are not fluid. Also, clicking on a node in the graph doesn’t bring me to the corresponding text section. Also, I’m not sure if these are I could go on. These are UI issues which, while decently interesting, are ultimately solvable. I will not address solutions in this post, but if you have thoughts, please do share them.

### **Problems that may not be solvable**

- [appeal] This structure appeals to me. It’s similar to how I want my brain to work when reading text. But this appeal might not generalize to other people - people are strange and have different processes for arriving at what seems like the same end result. We even see this in the procedure for counting numbers - the end result is the same, but the process is different. [Here](https://youtu.be/Cj4y0EUlU-Y?si=chbf4OMpKAHCCqw_&t=242) is Richard Feynman describing how he can’t count and speak at the same time but can count and read, whereas a friend of his, who clearly has a different internal process for counting, is the opposite.
- [adoption] The graph is new technology, and even if better, new technology has no guarantee of adoption. A friend who read an earlier draft of this idea ignored the logical channel entirely, even when specifically asked to read the post to critique the logical channel. This concerns me partially - if this works well, I’d like other people to benefit from using it too. But the most important aim of this post is to build better technology for myself.

## **Limitations**

[scope] It’s a fool who earnestly tries to build a knowledge map out of a poem. This supplement to text is not meant for every text. Some of the most perspective-shaping text I have read has had beauty as its central point. These texts gifted my with psychological imagery and feelings that became part of the inner mental language through which I think of the world. Elucidating the logical structure of such text is not only useless, but it detracts from its purpose.

## **End**

This is part of a grander project I have, to create modern tools to increase my agency in making sense of the world. Technology is evolving, and information is compounding. Fundamentally, I want to live in good company. And good company is friends with both rhetoric and logic.

## **Additional: Some nice related things**

### **Ideas**

- Hyperlinks to internal content, such as Wikipedia, or Obsidian (e.g. see [Andy Matuschak’s notes](https://notes.andymatuschak.org/About_these_notes?stackedNotes=z21cgR9K3UcQ5a7yPsj2RUim3oM2TzdBByZu) or this or [this wonderful resource on mental health](https://integralguide.com/About))
- Semantic Web - a project to make the web more computer-understandable on a granular level. This would unlock better representation of the information of the internet, possibly even in the way that I’m trying to create for myself. It’s a cool idea, but one that never really took off because getting adoption is hard

### **Readings**

- Plato’s [Gorgias](https://www.gutenberg.org/files/1672/1672-h/1672-h.htm). A very enjoyable Plato dialogue, where Socrates gets tense while debating rhetoricians who claim that rhetoric is the most important skill of all (e.g. what use is it to be a doctor, when no one believes that your cure will solve their ail?).