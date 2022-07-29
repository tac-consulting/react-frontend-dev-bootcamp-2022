let users = [
    {firstName : "Soujanya", empid: "12"},
    {firstName : "Pallavi", empid: "10"},
    {firstName : "Shirisha", empid: "14"}
  ];
  
  let fullnames = users.map(function(element){
      return `Name:${element.firstName} Empid:${element.empid}`;
  })
  
  console.log(fullnames);