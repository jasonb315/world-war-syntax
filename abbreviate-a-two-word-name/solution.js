function abbrevName(name){
let nameArray = name.split(" ");
for (let i = 0 ; i < nameArray.length ; i++ ){
let firstInitial = nameArray[0].charAt(0).toUpperCase();
let secondInitial = nameArray[1].charAt(0).toUpperCase();
let initials = `${firstInitial}.${secondInitial}`;
return initials;
}
}