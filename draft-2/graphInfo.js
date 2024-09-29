const MAIN_CONCLUSION = "main conclusion"
const KEYPOINT = "keypoint"

const nodes = [
    { id: 1, text: "Text contains many things-worth-knowing"},
    { id: 2, text: "Retrieving information from text is hard"},
    { id: 3, text: "Problems with getting information out of pure text"},
    { id: 4, text: "Seeing the structure of an argument in pure text is difficult"},
    { id: 5, text: "Rhetoric has too much impact on the believability of information in pure text"},
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
    { id: 41, text: "Showing the path from the current point in content to the main conclusion makes text more understandable." },
    { id: 42, text: "Limitation: there may be multiple relevant focal points, not just the main conclusion" },
    { id: 43, text: "A future extension should allow for multiple focal points" },

    { id: 44, text: "Switching between levels of detail is desirable for the reader" },
    { id: 45, text: "Levels of detail is a common optimization used in video games to reduce graphics rendering cost" },
    { id: 52, text: "Levels of detail work in video games because the player doesn't care about non-local elements" },
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
];

const CLAIM = "claim"
const ANALYSIS = "analysis"
const ARTEFACT = "artefact"
const CONSTRAINT = "constraint"
const EXAMPLE = "example"


const links = [
    { source: 1, target: 3, kind: CLAIM },
    { source: 3, target: 2, kind: ANALYSIS },
    { source: 4, target: 3, kind: CLAIM },
    { source: 5, target: 3, kind: CLAIM },
    { source: 6, target: 3, kind: CLAIM },
    { source: 7, target: 3, kind: CLAIM },
    { source: 8, target: 3, kind: CLAIM },
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
];