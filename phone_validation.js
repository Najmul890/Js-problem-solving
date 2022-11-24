// //test hex color
// const text='#2A2A2A';
// const regX=/#?([\da-f]{2})([\da-f]{2})([\da-f]{2})/gi;

// const matches= text.match(regX);
// const index= text.search(regX);
// const replaced= text.replace(regX, '#0000000');
// const testing= regX.test(text);

// console.log(matches, index, replaced, testing);



//test bd phone number
const phone= "+8801888888888";
const pRegX=/(\+88)?(-)?(01)([3-9]{1})(\d{8})/g;
//const pRegX= /(\+88-)?01[3-9]\d{8}/

const pMatches=phone.match(pRegX);
//console.log(pMatches[0].length);
const pIndex= phone.search(pRegX);
const pReplaced= phone.replace(phone,"*".repeat(phone.length));
const pTesting= pRegX.test(phone);

console.log(pMatches, pIndex, pReplaced, pTesting);