const MAIN_CONCLUSION = "main conclusion"
const KEYPOINT = "keypoint"

const nodes = [
    { id: 1, text: "Text contains many things-worth-knowing"},
    { id: 2, text: "Retrieving information from text is hard"},
    { id: 3, text: "Problems with getting information out of pure text"},

    { id: 909, text: "Text is hard to analyze due to structure being unclear"},
    { id: 4, text: "Seeing the structure of an argument in pure text is difficult"},
    { id: 148, text: "An argument's structure is important to analyzing it" },
    { id: 149, text: "Due to text's linearity" },
    { id: 150, text: "Example of obfuscation through linearity" },
    { id: 151, text: "First and second sentences are not marked as premises" },
    { id: 152, text: "Third sentence not marked as conclusion" },
    { id: 907, text: "Premises and conclusions are not obvious" },
    { id: 909, text: "Links are not clearly marked" },
    { id: 153, text: "Link between first premise and conclusion is not marked" },
    { id: 154, text: "Link between second premise and conclusion is not marked" },
    { id: 908, text: "Counterargument against lack of link clarity in text" },
    { id: 910, text: "Links are implied by sentence adjacency" },
    { id: 155, text: "Second premise <-> conclusion link is implied by sentences being adjacent" },
    { id: 156, text: "Link implication by sentence adjacency is not reliable" },
    

    { id: 5, text: "Both rhetoric and logic influence our belief of text greatly"},
    { id: 6, text: "The reader must follow the author's train of thought in pure text"},
    { id: 7, text: "It's difficult to get an understanding of high-level points in pure text"},
    { id: 8, text: "Searching for specific information is difficult in pure text"},
    { id: 9, text: "Search might be solved through LLMs and RAG"},
    { id: 10, text: "This post is an experimental attempt to fix many problems with pure text", kind: KEYPOINT },
    { id: 11, text: "Rhetoric is useful" },
    { id: 12, text: "Language is necessarily imprecise" },
    { id: 13, text: "Good communication helps orientate the reader in the direction of the intended meaning" },
    { id: 14, text: "Rhetoric helps to orientate the reader in the approximate direction of the intended meaning" },
    { id: 15, text: "Rhetoric enhances the reader's understanding" },
    { id: 16, text: "Rhetoric enhances memorability" },
    { id: 17, text: "Rhetoric speaks to non-conscious parts of the mind" },
    { id: 18, text: "Understanding something does not make it true" },
    { id: 19, text: "Rhetoric makes logic harder to understand" },
    { id: 20, text: "The solution should preserve both rhetoric and logic" },
    { id: 21, text: "Proposal for a logic-forward channel" },
    { id: 22, text: "Text should be preserved for rhetoric" },

    { id: 23, text: "The logical channel should be visually adjacent to text" },
    { id: 24, text: "Text and the logical channel are synced to the same content" },
    { id: 25, text: "The reader can switch between text and logical views as they desire" },
    { id: 26, text: "The logical channel enables a further degree of communication" },
    { id: 27, text: "The logical channel can make explicit the elements that are textually implicit" },
    { id: 28, text: "The logical channel allows for links within content to be clearer" },
    { id: 29, text: "Logic needs a more complex channel than rhetoric" },
    { id: 30, text: "Requirements for the logical channel" },
    { id: 31, text: "A predefined structure" },
    { id: 32, text: "Nodes represent a single point in the content" },
    { id: 33, text: "Links have direction and establish relationships between nodes" },
    { id: 34, text: "Different types of links" },
    { id: 35, text: "Link type: claim" },
    { id: 36, text: "Link type: analysis" },
    { id: 37, text: "Link type: artefact" },
    { id: 38, text: "Link type: constraint" },
    { id: 39, text: "Example of reading the 'claim' link type" },

    { id: 40, text: "Marking the main conclusion as a focal point helps to orient the reader" },
    { id: 41, text: "Showing path to main conclusion increases understandability" },
    { id: 42, text: "Limitation: there may be multiple relevant focal points, not just the main conclusion" },
    { id: 43, text: "A future extension should allow for multiple focal points" },

    { id: 44, text: "Switching between levels of detail is desirable for the reader" },
    { id: 45, text: "Levels of detail is a common optimization used in video games to reduce graphics rendering cost" },
    { id: 52, text: "This works because the player doesn't care about non-local elements" },
    { id: 54, text: "The reader is similar to the player in not caring about non-local elements" },
    { id: 46, text: "This experiment uses nodes marked as keypoints to enable its High Level view" },
    { id: 47, text: "Possible future extensions to the levels of detail system" },
    { id: 48, text: "Recursive node groups" },
    { id: 49, text: "Allowing a single node to belong to multiple node groups" },
    { id: 50, text: "Allowing a multiple parts of the text to belong to the same node" },
    { id: 51, text: "Levels of detail in video games have issues in practice" },
    { id: 53, text: "Implementation issues do not detract from the overall metaphor" },

    { id: 54, text: "Some insights from marking up the logic in this post" },
    { id: 55, text: "The process was painful, but likely fixable" },
    { id: 56, text: "The steps I underwent to markup the logic in this post" },
    { id: 57, text: "The visualization code does not count as pain as it was a one-time cost" },
    { id: 58, text: "The largest source of pain is from marking up the text to extract the logic graph" },
    { id: 59, text: "Making a GUI should solve the pain of marking up the text to extract the logic graph" },
    { id: 60, text: "The largest source of pain is likely fixable" },

    { id: 61, text: "Logically marking up this text helped me clarify my thoughts" },
    { id: 62, text: "Writing clarifies thought" },
    { id: 63, text: "Writing leads me to increased strength of belief" },
    { id: 64, text: "Writing increases the strength of my beliefs without adequately testing them" },
    { id: 65, text: "Logically marking-up my beliefs helped me test them" },
    { id: 66, text: "Logically marking-up my beliefs was a needed complement to writing them down" },

    { id: 67, text: "The logical markup is still subjective" },
    { id: 68, text: "The logical markup is not formal and not fully unambiguous" },
    { id: 69, text: "Node text choice is subjective" },
    { id: 70, text: "Link type choice is subjective" },
    { id: 71, text: "Neither channel purely presents logic xor rhetoric" },

    { id: 72, text: "Additional thoughts" },

    { id: 73, text: "Structural comments are promising" },
    { id: 74, text: "Logical channel enables greater specificity in comments" },
    { id: 75, text: "This is a future extension" },
    { id: 76, text: "Specifying content or structure when commenting is useful" },
    { id: 77, text: "Writers generate better comments" },
    { id: 78, text: "Readers understand comments better" },
    { id: 79, text: "New way of discovering relevant comments" },
    { id: 80, text: "YouTube replays comments made at particular timestamps" },
    { id: 81, text: "Can show comments related to particular node" },
    { id: 82, text: "Timestamp-based comment discovery is analogous to node-based comment discovery" },

    { id: 906, text: "Argument in favor of automated logical graph extraction" },
    { id: 83, text: "Automated logical graph extraction should sometimes not be done, depsite being possible" },
    { id: 84, text: "Automatic extraction for arbitrary text can only be useful" },
    { id: 85, text: "At worst, automatic extraction is not harmful" },
    { id: 86, text: "AI is advanced enough to do automatic extraction" },
    { id: 87, text: "AI might be better than me at extraction" },
    { id: 901, text: "Automatic extraction is possible with modern technology" },
    { id: 88, text: "Automatic extraction is useful for others' texts" },
    { id: 89, text: "Automatic extraction should not be done for my own texts" },
    { id: 90, text: "Manually marking up my own texts has benefits" },
    { id: 91, text: "Process of manual markup helps me see flaws" },
    { id: 92, text: "Deciding the markup helps me determine the reader's interpretation" },
    { id: 93, text: "The particular markup gives particular information to the reader" },
    { id: 902, text: "I can markup my text better than automated processes" },
    { id: 94, text: "Automated processes would need to know me well to markup according to my intention" },
    { id: 95, text: "Automated process does not know me well enough" },
    { id: 96, text: "I am always changing and cannot be fully inferred from past data" },
    { id: 97, text: "I haven't yet given automated processes enough past data to infer me from" },

    { id: 98, text: "Problems and limitations" },

    { id: 99, text: "Problems that I believe are solvable" },
    { id: 100, text: "There are many interface issues" },
    { id: 101, text: "Hovering over text can unintentionally change the graph" },
    { id: 102, text: "Transitions between graph displays are not fluid" },
    { id: 103, text: "Clicking on graph nodes does not sync the text position to it" },
    { id: 104, text: "There are other issues" },
    { id: 105, text: "These issues should be solvable" },
    { id: 106, text: "I will not address solutions in this post" },

    { id: 107, text: "Potentially unsolvable problems" },
    { id: 903, text: "Having a logic graph might not appeal to most people" },
    { id: 108, text: "The logic graph appeals to me" },
    { id: 109, text: "The logic graph is similar to how I want to see text as I read it" },
    { id: 110, text: "Me liking the logic graph does not mean that other people like it" },
    { id: 143, text: "People have diverse processes for arriving at the same external result" },
    { id: 111, text: "Even in counting numbers, people internally use different procedures" },
    { id: 112, text: "Evidence for difference in procedures for counting numbers" },

    { id: 904, text: "The logical graph may not be adopted due to unfamiliarity" },
    { id: 113, text: "New technology is often not adopted" },
    { id: 114, text: "Example of a reader failing to adopt the graph" },
    { id: 115, text: "Failure to get mainstream adoption would be sad" },
    { id: 116, text: "I benefit from this, so I think others would too" },
    { id: 117, text: "Main aim is to build better tech for myself" },
    { id: 905, text: "Main aim is ultimately unaffected by lack of adoption" },

    { id: 118, text: "Limitations" },
    { id: 119, text: "Example of poetry" },
    { id: 120, text: "Logical graph is not applicable to all texts" },
    { id: 121, text: "Some important text has non-logical primary value" },
    { id: 122, text: "Increasing role of logic for some texts makes value extraction harder" },
    { id: 144, text: "Value in psychological imagery and feelings, not logic" },
    { id: 145, text: "Value of some text is in the reader's journey to disambiguate it" },
    { id: 146, text: "Example of zen koans" },
    { id: 147, text: "Increasing clarity for some texts destroys their value" },

    { id: 123, text: "Overall project: create modern tools to increase individual agency" },
    { id: 124, text: "Technology scope evolves faster than information scope" },
    { id: 125, text: "Previously hard-to-access information can be found with modern tools" },
    { id: 126, text: "I want my mind to be a beautiful place" },
    { id: 127, text: "Beautiful minds have both rhetoric and logic maximized" },

    { id: 128, text: "Additional related items" },

    { id: 129, text: "Relevant ideas" },
    { id: 130, text: "Links to internal content" },
    { id: 131, text: "Wikipedia" },
    { id: 132, text: "Obsidian" },
    { id: 133, text: "Andy Matuschak's notes" },
    { id: 134, text: "Integral Guide" },
    { id: 135, text: "Semantic Web" },
    { id: 136, text: "Semantic Web unlocks better representation of information" },
    { id: 137, text: "Semantic Web never happened" },
    { id: 139, text: "LLMs make the Semantic Web redundant" },

    { id: 140, text: "Relevant readings" },
    { id: 141, text: "Plato's Gorgias" },
    { id: 142, text: "Debate about whether rhetoric is the greatest skill of all" },
];

const CLAIM = "claim"
const ANALYSIS = "analysis"
const ARTEFACT = "artefact"
const CONSTRAINT = "constraint"
const EXAMPLE = "example"
const PART = "part"


const links = [
    { source: 1, target: 3, kind: CLAIM },
    { source: 3, target: 2, kind: ANALYSIS },
    { source: 909, target: 3, kind: PART },
    { source: 4, target: 909, kind: CLAIM },
    { source: 148, target: 909, kind: CLAIM },
    { source: 149, target: 4, kind: CLAIM },
    { source: 150, target: 149, kind: EXAMPLE },
    { source: 151, target: 907, kind: EXAMPLE },
    { source: 152, target: 907, kind: EXAMPLE },
    { source: 907, target: 149, kind: ANALYSIS },
    { source: 907, target: 150, kind: ANALYSIS },
    { source: 909, target: 149, kind: ANALYSIS },
    { source: 909, target: 150, kind: ANALYSIS },
    { source: 153, target: 909, kind: EXAMPLE },
    { source: 154, target: 909, kind: EXAMPLE },
    { source: 908, target: 909, kind: ANALYSIS },
    { source: 910, target: 908, kind: CLAIM },
    { source: 155, target: 910, kind: EXAMPLE },
    { source: 155, target: 154, kind: ANALYSIS },
    { source: 156, target: 910, kind: ANALYSIS },


    { source: 5, target: 3, kind: PART },
    { source: 6, target: 3, kind: PART },
    { source: 7, target: 3, kind: PART },
    { source: 8, target: 3, kind: PART },
    { source: 9, target: 8, kind: ANALYSIS },
    { source: 1, target: 10, kind: CLAIM },
    { source: 2, target: 10, kind: CLAIM },
    { source: 11, target: 10, kind: CLAIM },
    { source: 12, target: 13, kind: CLAIM },
    { source: 13, target: 15, kind: CLAIM },
    { source: 14, target: 15, kind: CLAIM },
    { source: 15, target: 11, kind: CLAIM },
    { source: 16, target: 11, kind: CLAIM },
    { source: 17, target: 15, kind: CLAIM },
    { source: 18, target: 15, kind: ANALYSIS },
    { source: 19, target: 20, kind: ANALYSIS },
    { source: 15, target: 20, kind: ANALYSIS },
    { source: 16, target: 20, kind: ANALYSIS },
    { source: 21, target: 10, kind: ARTEFACT },
    { source: 20, target: 22, kind: CLAIM },

    { source: 23, target: 21, kind: CONSTRAINT },
    { source: 24, target: 25, kind: CLAIM },
    { source: 25, target: 23, kind: CLAIM },
    { source: 26, target: 21, kind: ANALYSIS },
    { source: 27, target: 26, kind: CLAIM },
    { source: 28, target: 26, kind: CLAIM },

    { source: 29, target: 21, kind: ANALYSIS },
    { source: 30, target: 29, kind: ARTEFACT },
    { source: 31, target: 30, kind: CONSTRAINT },
    { source: 32, target: 31, kind: CONSTRAINT },
    { source: 33, target: 31, kind: CONSTRAINT },
    { source: 34, target: 33, kind: ARTEFACT },
    { source: 35, target: 34, kind: CLAIM },
    { source: 36, target: 34, kind: CLAIM },
    { source: 37, target: 34, kind: CLAIM },
    { source: 38, target: 34, kind: CLAIM },
    { source: 39, target: 34, kind: EXAMPLE },
    { source: 39, target: 35, kind: EXAMPLE },

    { source: 40, target: 21, kind: CLAIM },
    { source: 41, target: 40, kind: CLAIM },
    { source: 42, target: 40, kind: ANALYSIS },
    { source: 42, target: 43, kind: CLAIM },

    { source: 44, target: 21, kind: CLAIM },
    { source: 52, target: 45, kind: ANALYSIS },
    { source: 46, target: 44, kind: CLAIM },
    { source: 54, target: 52, kind: ANALYSIS },
    { source: 54, target: 46, kind: CLAIM },
    { source: 47, target: 44, kind: ARTEFACT },
    { source: 48, target: 47, kind: CLAIM },
    { source: 49, target: 47, kind: CLAIM },
    { source: 50, target: 47, kind: CLAIM },
    { source: 51, target: 45, kind: CLAIM },
    { source: 53, target: 51, kind: ANALYSIS },
    { source: 53, target: 54, kind: ANALYSIS },

    { source: 54, target: 21, kind: ANALYSIS },
    { source: 55, target: 54, kind: CLAIM },
    { source: 56, target: 54, kind: ARTEFACT },
    { source: 57, target: 55, kind: CLAIM },
    { source: 58, target: 60, kind: CLAIM },
    { source: 59, target: 60, kind: CLAIM },
    { source: 60, target: 55, kind: CLAIM },

    { source: 61, target: 54, kind: CLAIM },
    { source: 62, target: 63, kind: CLAIM },
    { source: 63, target: 64, kind: CLAIM },
    { source: 65, target: 66, kind: CLAIM },
    { source: 64, target: 66, kind: CLAIM },
    { source: 66, target: 61, kind: CLAIM },

    { source: 66, target: 61, kind: CLAIM },

    { source: 67, target: 54, kind: CLAIM },
    { source: 68, target: 67, kind: CLAIM },
    { source: 69, target: 68, kind: CLAIM },
    { source: 70, target: 68, kind: CLAIM },
    { source: 67, target: 71, kind: CLAIM },

    { source: 72, target: 10, kind: CLAIM },

    { source: 73, target: 72, kind: CLAIM },
    { source: 74, target: 73, kind: CLAIM },
    { source: 75, target: 73, kind: CONSTRAINT },
    { source: 76, target: 73, kind: CLAIM },
    { source: 77, target: 76, kind: CLAIM },
    { source: 78, target: 76, kind: CLAIM },
    { source: 79, target: 74, kind: CLAIM },
    { source: 80, target: 82, kind: CLAIM },
    { source: 81, target: 79, kind: CLAIM },
    { source: 81, target: 82, kind: CLAIM },

    { source: 83, target: 906, kind: ANALYSIS },
    { source: 83, target: 72, kind: CLAIM },
    { source: 84, target: 88, kind: CLAIM },
    { source: 84, target: 906, kind: CLAIM },
    { source: 85, target: 84, kind: CLAIM },
    { source: 86, target: 901, kind: CLAIM },
    { source: 901, target: 83, kind: CLAIM },
    { source: 87, target: 86, kind: CLAIM },
    { source: 89, target: 83, kind: CLAIM },
    { source: 90, target: 89, kind: CLAIM },
    { source: 91, target: 90, kind: CLAIM },
    { source: 92, target: 90, kind: CLAIM },
    { source: 93, target: 92, kind: CLAIM },
    { source: 93, target: 902, kind: CLAIM },
    { source: 94, target: 902, kind: CLAIM },
    { source: 95, target: 902, kind: CLAIM },
    { source: 96, target: 95, kind: CLAIM },
    { source: 97, target: 95, kind: CLAIM },

    { source: 98, target: 10, kind: ANALYSIS },

    { source: 99, target: 98, kind: CLAIM },
    { source: 100, target: 99, kind: CLAIM },
    { source: 101, target: 100, kind: CLAIM },
    { source: 102, target: 100, kind: CLAIM },
    { source: 103, target: 100, kind: CLAIM },
    { source: 104, target: 100, kind: CLAIM },
    { source: 100, target: 105, kind: CLAIM },
    { source: 105, target: 99, kind: CLAIM },
    { source: 99, target: 106, kind: CLAIM },

    { source: 107, target: 98, kind: CLAIM },
    { source: 108, target: 110, kind: CLAIM },
    { source: 903, target: 107, kind: CLAIM },
    { source: 109, target: 108, kind: CLAIM },
    { source: 143, target: 110, kind: CLAIM },
    { source: 111, target: 110, kind: CLAIM },
    { source: 112, target: 111, kind: CLAIM },

    { source: 904, target: 107, kind: CLAIM },
    { source: 113, target: 904, kind: CLAIM },
    { source: 114, target: 113, kind: CLAIM },
    { source: 115, target: 904, kind: ANALYSIS },
    { source: 116, target: 115, kind: CLAIM },
    { source: 905, target: 115, kind: ANALYSIS },
    { source: 117, target: 905, kind: CLAIM },

    { source: 118, target: 10, kind: ANALYSIS },
    { source: 119, target: 121, kind: CLAIM },
    { source: 120, target: 118, kind: CLAIM },
    { source: 121, target: 122, kind: CLAIM },
    { source: 122, target: 120, kind: CLAIM },
    { source: 144, target: 121, kind: CLAIM },

    { source: 145, target: 147, kind: CLAIM },
    { source: 146, target: 145, kind: CLAIM },
    { source: 147, target: 120, kind: CLAIM },

    { source: 10, target: 123, kind: CLAIM },
    { source: 124, target: 125, kind: CLAIM },
    { source: 125, target: 123, kind: CLAIM },
    { source: 127, target: 126, kind: CLAIM },
    { source: 123, target: 126, kind: CLAIM },

    { source: 128, target: 10, kind: CLAIM },
    { source: 129, target: 128, kind: PART },
    { source: 130, target: 129, kind: PART },
    { source: 131, target: 130, kind: EXAMPLE },
    { source: 132, target: 130, kind: EXAMPLE },
    { source: 133, target: 132, kind: EXAMPLE },
    { source: 134, target: 132, kind: EXAMPLE },
    { source: 135, target: 129, kind: PART },
    { source: 136, target: 135, kind: CLAIM },
    { source: 137, target: 135, kind: CLAIM },
    { source: 139, target: 135, kind: ANALYSIS },

    { source: 140, target: 128, kind: PART },
    { source: 141, target: 140, kind: PART },
    { source: 141, target: 142, kind: CLAIM },
];