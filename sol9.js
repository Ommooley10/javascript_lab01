const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];
const userInput = prompt("Enter a city name:");
const index = cities.indexOf(userInput);

if (index !== -1) {
    console.log(`Index of ${userInput}: ${index}`);
} else {
    console.log("Not Found");
}