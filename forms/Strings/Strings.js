/a
var quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
alert(quoteString);
//b
var upperCaseString = quoteString.toUpperCase();
alert(`Upper case string is: ${upperCaseString}`); 
//c
var authorString = "- Henry Ford"
//d
var completeString = quoteString.concat(" ", authorString)
alert(`Added - Henry Ford to end of quote: ${completeString}`);
//e
var secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
//f
var lowerCaseString = secondQuote.toLowerCase();
alert(`Lower case string is: ${lowerCaseString}`);
//g
var findChar = secondQuote.charAt(3)
alert(`Character in quote at location 3: ${findChar}`);
//h
var findString = secondQuote.slice(35,120)
alert(`Part of the quote that has been removed: ${findString}`);