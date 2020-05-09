# Anagram Finder

Given a string and an array of string, make a function that return an array with the words that form an anagram from the given string.

### Definition

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram, or the word binary into brainy or the word adobe into abode. For more resource about this: https://en.wikipedia.org/wiki/Anagram

### Examples

```
1. getAnagram('horse', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']) => ["shore", "esrho", "roseh"]
2.  getAnagram('podab', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']) => ["abdop"]
3. getAnagram('bitch', ['shore', 'esrho', 'dinner', 'abdop', 'roseh']) => []
```
For the first example there are only 3 words that reorderd can form the word "horse"

For the second example there's only 1 word that reorderd can form the word "podab"

For the third example there are no words that can be reorderd to form the word "podab"
