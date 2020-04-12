// Solution for problem: http://codeforces.com/contest/545/problem/C
// Woodcutter problem

// Copyright 2015 xsami <xsami@xsami-N102SP-N100SP-N101SP>
// 
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
// MA 02110-1301, USA.
// 
 
#include <bits/stdc++.h>
 
using namespace std;
 
long long x[100010], h[100010];
int dp[100010][3];
 
int main(int argc, char **argv)
{
    int n, ans = 0;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        cin >> x[i] >> h[i];
    }
 
    x[0] = x[1] - h[1] - 1;
    x[n+1] = x[n] + h[n] + 1;
    
    for (int i = 1; i <= n; i++)
    {
        dp[i][0] = max(dp[i-1][0], max(dp[i-1][1], dp[i-1][2]));
        dp[i][1] = dp[i][2] = -1;
        
        if (x[i] - h[i] > x[i-1])
            dp[i][1] = max(dp[i-1][0], dp[i-1][1])+1;
        if (x[i] - h[i] > x[i-1] + h[i-1])
            dp[i][1] = max(dp[i][1], dp[i-1][2]+1);
        
        if (x[i] + h[i] < x[i+1])
        {
            dp[i][2] = max(dp[i-1][0], dp[i-1][1]) + 1;
            if (x[i-1] + h[i-1] < x[i])
                dp[i][2] = max(dp[i][2], dp[i-1][2] + 1);
        }
        ans = max(ans, max(dp[i][0], max(dp[i][1], dp[i][2])));
    }
    cout << ans;
    return 0;
}