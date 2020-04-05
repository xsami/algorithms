/**
 * Task: You're assigned to build a markdown deparser.
 * Markdown is text format that is made to display text
 * to HTML. As the current text if formatted to html we
 * would like to covert this to markdown. For more reference
 * about markdown you can check the wiki documentation: 
 * https://en.wikipedia.org/wiki/Markdown for this.
 * 
 * Requirement: given a HTML string you must return the
 * markdown equivalent for this.
 * 
 * The output for the following example input is:
 *      # Sport News
 *      #### With the current information about the sports in the world
 *      The foundation that Denzel Ward established after reaching the NFL as a first-round pick with his hometown Cleveland Browns is dubbed Make Them Know Your Name (MTKYN). The term is a tribute to Ward’s late father, Paul, who repeated that inspirational mantra as his son emerged as a star athlete.
 *      Favorite Sports in DR:
 *          * Basketball
 *          * Softball
 *          * Baseball
 *          * Soccer
 */

const exampleHTML = `
<h1>Sport News</h1>
<h4>With the current information about the sports in the world</h4>
<p>The foundation that Denzel Ward established after reaching the NFL as a first-round pick with his hometown Cleveland Browns is dubbed Make Them Know Your Name (MTKYN). The term is a tribute to Ward’s late father, Paul, who repeated that inspirational mantra as his son emerged as a star athlete.</p>
<p>Favorite Sports in DR:</p>
<ul>
<li>Basketball</li>
<li>Softball</li>
<li>Baseball</li>
<li>Soccer</li>
</ul>
 `;

// TODO: complete the deparser function
function markownDParser(htmlText) {
     return;
}

console.log(markownDParser(exampleHTML));
