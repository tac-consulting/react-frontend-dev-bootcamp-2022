let data = {
  location: [
    {
      lat: "18.672504",
      long: "78.334305",
      dist: "Nizamabad",
      state: "Telangana",
    },
  ],
};
//destructoring
let obj = ({
  location: [{ lat: mylat, long: mylong, dist: place }],
} = data);
console.log(mylat);
console.log(mylong);
console.log(place);
