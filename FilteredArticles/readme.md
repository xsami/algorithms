
# Filter Articles

Task: We would like to be able to filter specific words from a list of articles returned by the PinkPosting API. You're just its to make a function that given a list of articles and a list of words to filter return an object with a detailed information of each article.


### Example

Given the following articles:
```
exampleArticles = [
    {
        name: "sports",
        content: "Every day thounds of people loves to play Baseball with it favorite team cause this game is nuts and everyone loves baseball"
    },
    {
        name: "cooking",
        content: "When we talking about cooking some people think this is a game but is real life, and nobody should play with it's food"
    }
];
```

And `filterdWords = ["baseball", "play", "team", "fantasy", "game"];`

You must return the following:
```
[
  {
     name: "sports",
     words_cnt: 22,
     filtered: [
         { word: "baseball", amount: 2 },
         { word: "play", amount: 1 },
         { word: "team", amount: 1 },
         { word: "fantasy", amount: 0 },
         { word: "game", amount: 1 }
     ]
  },
  {
     name: "cooking",
     words_cnt: 23,
     filtered: [
         { word: "baseball", amount: 0 },
         { word: "play", amount: 1 },
         { word: "team", amount: 0 },
         { word: "fantasy", amount: 0 },
         { word: "game", amount: 1 }
     ]
  },
]
```
