//variable

var noofstaff = 14;
let staff = noofstaff;
var str="string1"
var str1=str
str1="string2"
console.log(`No of staff:${staff}`);
console.log(staff,noofstaff)
console.log(str,str1)

// reference
let staffdata = {
  branch: "CSE",
  staff: "20",
};
let newstaff=staffdata;
newstaff.branch="ece";
console.log("staff details..")
console.log(`Name:${staffdata.branch} staff:${staffdata.staff}`);
console.log(staffdata,newstaff)
