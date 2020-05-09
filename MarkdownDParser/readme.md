# Markdown DParser

*Task:* You're assigned to build a markdown deparser. `Markdown` is text format that is made to display text to HTML. As the current text if formatted to html we would like to covert this to markdown. For more reference about markdown you can check the wiki documentation: https://en.wikipedia.org/wiki/Markdown for this.

__Requirement__ 

Given a HTML string you must return the markdown equivalent for this.


### Example

Given the following HTML string:
```
exampleHTML = `
<h1>Sport News</h1>
<h4>With the current information about the sports in the world</h4>
<p>The <strong>foundation</strong> that <em>Denzel Ward</em> established after reaching the NFL as a first-round pick with his hometown Cleveland Browns is dubbed Make Them Know Your Name (MTKYN). The term is a tribute to Ward’s late father, Paul, who repeated that inspirational mantra as his son emerged as a star athlete.</p>
<p>Favorite Sports in <strong>DR</strong>:</p>
<ul>
<li>Basketball</li>
<li>Softball</li>
<li>Baseball</li>
<li>Soccer</li>
</ul>
 `;
``` 

The output for this is:
```
# Sport News
#### With the current information about the sports in the world
The **foundation** that _Denzel Ward_ established after reaching the NFL as a first-round pick th his hometown Cleveland Browns is dubbed Make Them Know Your Name (MTKYN). The term is a tribute to rd’s late father, Paul, who repeated that inspirational mantra as his son emerged as a star athlete.
Favorite Sports in **DR**:
    * Basketball
    * Softball
    * Baseball
    * Soccer
```

__Note__
We would probrably like to also implement a function that converts markdown to HTML so it would be usefull to keep this in mind for the current implementation of your solution
