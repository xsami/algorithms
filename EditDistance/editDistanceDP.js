// Given two strings s1 and s2 of lengths m and n respectively and below operations that can 
// be performed on s1. Find the minimum number of edits (operations) to convert ‘s1‘ into ‘s2‘.  

// Insert: Insert any character before or after any index of s1
// Remove: Remove a character of s1
// Replace: Replace a character at any index of s1 with some other character.

// Input:   s1 = “geek”, s2 = “gesek”
// Output:  1
// Explanation: We can convert s1 into s2 by inserting a ‘s’ between two consecutive ‘e’ in s2.


// Input:   s1 = “cat”, s2 = “cut”
// Output:  1
// Explanation: We can convert s1 into s2 by replacing ‘a’ with ‘u’.


// Input:   s1 = “sunday”, s2 = “saturday”
// Output:  3
// Explanation: Last three and first characters are same.  We basically need to convert “un” to “atur”.  This can be done using below three operations. Replace ‘n’ with ‘r’, insert t, insert a

// https://leetcode.com/problems/edit-distance/description/

let dp = [];

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(s1, s2, i1 = 0, i2 = 0) {

    if (s1 == s2) return 0;
    if (i1 == s1.length) return s2.length - i2;
    if (i2 == s2.length) return s1.length - i1;

    if(i1 == 0 && i2 == 0) {
        dp = []; // reset the DP. first iteration
    }

    if (!dp[i1]) {
        dp[i1] = [];
    }

    if (dp[i1][i2] !== undefined) {
        return dp[i1][i2];
    }

    // move forward with the string if char equals
    if (s1[i1] == s2[i2]) {
        dp[i1][i2] = minDistance(s1, s2, i1 + 1, i2 + 1);
        return dp[i1][i2];
    }

    const removing = minDistance(s1, s2, i1, i2 + 1);
    const inserting =  minDistance(s1, s2, i1 + 1, i2);
    const replacing =  minDistance(s1, s2, i1 + 1, i2 + 1);

    dp[i1][i2] = 1 + Math.min(removing, inserting, replacing);
    return dp[i1][i2];
}
