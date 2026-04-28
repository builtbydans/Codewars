// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

const removeUrlAnchor = url => url.includes("#") ? url.substring(0, url.indexOf('#')) : url

// CONDENSED WAY
// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))
