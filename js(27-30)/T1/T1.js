let userName = "Elzero";
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.slice(0,1).toLocaleLowerCase()); // e
console.log(userName.slice(0,true).toLocaleLowerCase()); // e
console.log(userName.slice(-(userName.length),1).toLocaleLowerCase()); // e
console.log(userName.substring(0,1).toLocaleLowerCase()); // e
console.log(userName.substring(-1,1).toLocaleLowerCase()); // e
console.log(userName.substr(0,1).toLocaleLowerCase().repeat(3)); // eee