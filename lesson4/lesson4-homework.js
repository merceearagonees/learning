const names = [1,5,2,7,6,10,45,33,66,52,98,102];
const newList = [];

for(let i = 0; i < names.length; i = i + 1) {
    const even = names[i];
    if(even % 2 === 0) {
        console.log(even);
        newList.push(even);
      } 
}
console.log(newList);