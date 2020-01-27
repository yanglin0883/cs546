let person = { fname: 'John', lname: 'Doe', age: 25 };
for (let x in person) {
//	console.log(person[x]);
//	console.log(x);
}

let str = "abcdefg";
console.log(str[str.length]+" "+ str.length);

var mycars=new Array()
mycars[0]="Saab"
mycars[1]=45
//mycars[2]=undefined
//mycars[4]="abc"
//mycars[4]=null
//console.log(mycars);

const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};
const wed = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos111',
      facebook: 'https://facebook.com/wesbos.developer111',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};
let { twitter, facebook } = wes.links.social;
console.log(twitter, facebook); // logs the 2 variables 

// { twitter, facebook } = wed.links.social;
//console.log(twitter, facebook); // logs the 2 variables 
//console.log(wes);