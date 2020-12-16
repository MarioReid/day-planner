//set today date
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));


var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

//create an element
var row = $("<div>);
row.addClass("row time-block");
var hour = $("<div>");
$(".container").append (row);

