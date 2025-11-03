import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// 1️⃣ Products
 productsText = 'Top 10 Popular Products You Can Buy Online';
 products :Array<string>=  [
  'Laptop', 'Watch', 'Pen', 'Book', 'Mobile', 'Bag', 'Shoes', 'Tablet', 'Camera', 'Charger'
];

// 2️⃣ Fruits
 fruitsText = 'List of Delicious and Healthy Fruits';
 fruits:Array<string> = [
  'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Strawberry', 'Papaya', 'Watermelon', 'Kiwi'
];

// 3️⃣ Colors
 colorsText = '10 Common Colors Used in Design';
 colors:Array<string> = [
  'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Gray'
];

// 4️⃣ Cities
 citiesText = 'Top 10 Cities in India You Should Know About';
 cities:Array<string>  = [
  'Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad', 'Bangalore', 'Kolkata', 'Surat', 'Jaipur', 'Indore'
];

// 5️⃣ Subjects
 subjectsText= '10 Important School Subjects for Students';
 subjects :Array<string> = [
  'Math', 'Science', 'English', 'History', 'Geography', 'Computer', 'Economics', 'Physics', 'Chemistry', 'Biology'
];

// 6️⃣ Vehicles
 vehiclesText = 'Different Types of Vehicles We Use Every Day';
 vehicles:Array<string>  = [
  'Car', 'Bike', 'Scooter', 'Bus', 'Truck', 'Train', 'Bicycle', 'Boat', 'Helicopter', 'Airplane'
];

// 7️⃣ Animals
 animalsText = '10 Popular Animals Found Around the World';
 animals:Array<string> = [
  'Dog', 'Cat', 'Elephant', 'Tiger', 'Lion', 'Zebra', 'Horse', 'Deer', 'Monkey', 'Rabbit'
];

// 8️⃣ Sports
 sportsText = 'Most Popular Sports Played Globally';
sports:Array<string> = [
  'Cricket', 'Football', 'Tennis', 'Badminton', 'Hockey', 'Volleyball', 'Basketball', 'Baseball', 'Golf', 'Table Tennis'
];

// 9️⃣ Countries
 countriesText = '10 Famous Countries Across the World';
 countries:Array<string>  = [
  'India', 'USA', 'Canada', 'Japan', 'Germany', 'France', 'Brazil', 'Australia', 'China', 'Italy'
];

// 🔟 Languages
 languagesText = 'Major Languages Spoken Across India';
 languages:Array<string> = [
  'English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Telugu', 'Bengali', 'Kannada', 'Punjabi', 'Malayalam'
];





}
