import { propertyForSaleArr } from '/properties/propertyForSaleArr.js';
import { placeholderPropertyObj } from '/properties/placeholderPropertyObj.js';

/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). 
Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres 
(each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj 
(in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 


THIS IS HOW I DID THE CODE, I GOT AN ERROR BECAUSE I FORGOT TO ADD .JS TO THE IMPORT
function getPropertyHtml() {
    return propertyForSaleArr.map(function (listing) {
      return `
      <section class="card">
      <img src="/images/${listing.image}">
      <div class="card-right">
          <h2>${listing.propertyLocation}</h2>
          <h3>${listing.priceGBP}</h3>
          <p>${listing.comment}</p>
          <h3>${listing.roomsM2} m&sup2;</h3>
      </div>
  </section> 
      `;
    });
  }
  

  document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr);

*/

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
  return propertyArr
    .map((listing) => {
      const { image, propertyLocation, priceGBP, comment, roomsM2 } = listing;

      const totalArea = roomsM2.reduce((total, currentArea) => total + currentArea);
      return `
<section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${totalArea} m&sup2;</h3>
    </div>
</section> 
    `;
    })
    .join('');
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr);
