// Problem solution: http://codeforces.com/contest/540/problem/A

// Copyright xsami <xsami@xsami-N102SP-N100SP-N101SP>
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
// 
#include "bits/stdc++.h"
using namespace std;
int main(int argc, char const *argv[])
{
    int n, result = 0;
    string a, b;
    cin >> n;
    cin >> a >> b;
 
    for (int i = 0; i < n; ++i)
    {
        if ( a[i] == b[i] ) continue;
 
        int diga = (a[i] - '0'), digb = (b[i] - '0');
        
        int c1 = 0, c2 = 0;
 
        int h = diga;
        while ( diga != digb ) {
            diga = (diga + 1)%10;
            c1++;
        }
        diga = h;
        while ( diga != digb) {
            diga = (diga - 1);
            diga = diga < 0 ? 9 : diga;
            c2++;
        }
        result += ((c1 < c2) ? c1 : c2);
    }
    cout << result;
    return 0;
}
