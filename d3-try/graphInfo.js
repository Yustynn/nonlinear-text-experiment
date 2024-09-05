const nodes = [
    { id: 1, text: "The Button exists for rats" },
    { id: 2, text: "We should give the button to kids" },
    { id: 3, text: "Dopamine resistance training program" },
    { id: 4, text: "I continually fall into disutility loops" },
    { id: 6, text: "Being able to escape disutility loops more quickly will make me better" },
    { id: 7, text: "Others training reward resistance makes the world better for me" },
    { id: 8, text: "Personally training reward resistance builds me a better self", },
    { id: 9, text: "The idea is cool and makes me laugh" },
    { id: 10, text: "Motivation" },
    { id: 12, text: "Most people in the world currently are not compelling due to addiction" },
    { id: 13, text: "Living in a world of compelling people is better for me" },
    { id: 14, text: "I cannot think of a way to train the avoidance of addiction" },
    { id: 15, text: "Wholly removing desire might remove will" },
    { id: 16, text: "Addiction feeling is sometimes desirable" },
    { id: 17, text: "Breaking addiction is a better goal than avoiding getting addicted" },
    { id: 18, text: "Addiction resistance training is excellent for early school curriculum" },
    { id: 19, text: "Regimen works by fighting fire with fire" },
    { id: 20, text: "Target will eventually stop needing the reward" },
    { id: 21, text: "Protocol Improvements" },
    { id: 22, text: "Training reward resistance works for adults as well as children" },
    { id: 23, text: "Antirewards for button presses during the (exercise resistance) phase will improve training" },
    { id: 24, text: "No rewards for button presses during the (exercise resistance) phase will improve training" },
    { id: 25, text: "Original button's invasiveness makes it infeasible, needs to be replaced" },
    { id: 27, text: "Original button needs invasive procedure" },
    { id: 28, text: "Doing invasive procedure on children is hard to market" },
    { id: 30, text: "Soft criteria for a replacement to the button" },
    { id: 31, text: "The button should be otherwise-useless" },
    { id: 32, text: "If the button has other utility, can trick self into thinking the addiction action serves some other purpose" },
    { id: 33, text: "Training reward resistance makes the general person lead a more compelling life" },
    { id: 34, text: "Mastering not pressing the button should generalize to other contexts" },
    { id: 35, text: "Gym makes you stronger for real life tasks → Button resistance makes you addiction resistant in real life activities" },
    { id: 36, text: "If generalization doesn't happen naturally, you can manually train it to happen" },
    { id: 37, text: "Training people to resist reward will lead to them having better lives" },
    { id: 38, text: "Replacement for the original button" },
    { id: 39, text: "Invasive procedure is hard to perform" }
];

const links = [
    { source: 1, target: 2, kind: "claim"},
    { source: 2, target: 3, kind: "claim"},
    { source: 4, target: 6, kind: "claim"},
    { source: 6, target: 8, kind: "claim"},
    { source: 7, target: 10, kind: "claim"},
    { source: 8, target: 33, kind: "claim"},
    { source: 9, target: 10, kind: "claim"},
    { source: 9, target: 10, kind: "claim"},
    { source: 10, target: 37, kind: "claim"},
    { source: 12, target: 7, kind: "claim"},
    { source: 13, target: 7, kind: "claim"},
    { source: 14, target: 17, kind: "claim"},
    { source: 15, target: 17, kind: "claim"},
    { source: 16, target: 17, kind: "claim"},
    { source: 17, target: 37, kind: "analysis"},
    { source: 18, target: 2, kind: "claim"},
    { source: 19, target: 3, kind: "analysis"},
    { source: 20, target: 19, kind: "assumption"},
    { source: 20, target: 3, kind: "claim"},
    { source: 21, target: 3, kind: "extension"},
    { source: 22, target: 33, kind: "claim"},
    { source: 22, target: 8, kind: "claim"},
    { source: 23, target: 21, kind: "claim"},
    { source: 24, target: 21, kind: "claim"},
    { source: 25, target: 38, kind: "claim"},
    { source: 27, target: 25, kind: "claim"},
    { source: 28, target: 25, kind: "claim"},
    { source: 30, target: 38, kind: "claim"},
    { source: 31, target: 3, kind: "claim"},
    { source: 32, target: 31, kind: "claim"},
    { source: 33, target: 7, kind: "extension"},
    { source: 34, target: 3, kind: "claim"},
    { source: 37, target: 2, kind: "claim"},
    { source: 38, target: 3, kind: "extension"},
    { source: 39, target: 25, kind: "claim"},
];

