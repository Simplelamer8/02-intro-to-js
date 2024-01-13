// 1st exercise: 
let restaurant = {};
restaurant.name = "brrr.... Shkibidi-dob-dob yes... yes...";
restaurant.averageVisitorsNumber = 1000;
restaurant.isTasty = true;
restaurant.asdf = null;

// 2nd exercise: 1st point
let vehicle = {};

// 2nd point
vehicle.brandName = "BMW";

// 3rd point 
vehicle.model = "X5";

// 4th point 
vehicle.model = "M1";

// 5h point
delete vehicle.model;


// 3rd exercise: 1st point
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

// 2nd point

let ans = 0;

for (let property in salaries)
{
    ans += salaries[property];
}

console.log(ans);