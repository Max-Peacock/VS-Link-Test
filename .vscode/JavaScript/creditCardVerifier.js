
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const valid2 = [4,1,6,5,4,9,0,0,3,8,4,8,1,2,7,7];


/* This creates a function (validateCard) that takes in an array as a parameter. It uses a for loop which starts on the second to last index of the array.
(arr.length - 2), it then iterates through the array in reverse until the .length of the array is zero. because (i -= 2) the loop will iterate through every other element and apply the set code.
arr[i] *= 2; makes sure that every other element is * 2. If the amount of arr[i] is higher than 9 after *2 multiplication, it will then subtract 9 from this amount.
*/
const validateCard = arr => {
    for (let i = arr.length - 2
        ; i >= 0; i -= 2) {
       arr[i] *= 2;
     if (arr[i] > 9) {
        arr[i] -=9;
    }
}
/* This creates a new function (findInvalidCards) that has a parameter of an array (credCards), inside this function is an empty variable (invalidCards).
Next, there is a for loop that iterates through the array starting on the first index, through the whole length of the array, with the incrementor set to increase by one after each iteration.
Inside the for loop, the validateCard function is called on each element of the array credCards[i] and checks whether the result is false (!validateCard).
If the result is false, it indicates an invalid credit card, and the element is pushed into the empty invalidCards array using the .push method.
After iterating through the given array, a return statement shows the invalidCards array containing all invalid credit card numbers. 
*/
let total =0;
for (var i=arr.length-1; i>=0; i--) {
    total = total + arr[i];
} 
return total % 10 === 0;
};




/* this creates a new function (findInvalidCards) that has a parameter of an array (credCards), inside this function is an empty variable (invalidCards).
next, is a for loop; this loop will iterate through the array starting on the first index, through the whole length of the array, the incrementor is set ++ so it will increase by one after each iteration.
Next is an if statement, this if statement uses the validateCard function on the array and checks for items that are not true (!validateCard) and then pushes these items
into the empty invalidCards variable using the .push method. a return statement will then show the variable invalidCards after the loop has iterated through the given array!
*/
const findInvalidCards = credCards => {
    const invalidCards = [];
for (let i = 0; i < credCards.length; i++) {
    if(!validateCard(credCards[i])) {
        invalidCards.push(credCards[i]);
   
         }
    }
    return invalidCards; 
}

/*
Breaking down the code:
creates a function (idInvalidCardCompanies) that takes an array in as a parameter.
Underneath are two variables (invalid and cardCompanies), invalid is an empty array, cardCompany is an empty array.
we then have a for loop, which starts on index 0, iterates through the length of the array parameter, and after each iteration increments by 1.
we then have an if else statement that checks the first index of the array parameter is equal to certain numbers, certain numebers will have specific
card companies linked to them, and if the index matches the number, it will push that specific card company onto the cardCompanies variable!
the if statement will also check that the array already includes that specific card company, and if so, it will not duplicate the card company.
Finally, it returns the variables cardCompanies and invalid!
*/
const idInvalidCardCompanies = nArray => {
    const invalid = [];
    const cardCompanies = [];
    for (let i = 0; i < nArray.length; i++) {
      if (nArray[i][0] === 3 && !cardCompanies.includes('Amex (American Express)')) {
        cardCompanies.push('Amex (American Express)');
        invalid.push(nArray[i]);
      } else if (nArray[i][0] === 4 && !cardCompanies.includes('Visa')) {
        cardCompanies.push('Visa');
        invalid.push(nArray[i]);
      } else if (nArray[i][0] === 5 && !cardCompanies.includes('Mastercard')) {
        cardCompanies.push('Mastercard');
        invalid.push(nArray[i]);
      } else if (nArray[i][0] === 6 && !cardCompanies.includes('Discover')) {
        cardCompanies.push('Discover');
        invalid.push(nArray[i]);
      } else {
        !cardCompanies.includes('Company not found') &&cardCompanies.push('Company not found');
      }
    }
    return [cardCompanies, invalid];
  }
  
  console.log(idInvalidCardCompanies(batch));
