//set today date
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));


//Time of day for loop
for (var i=0; i<timeOfDay.length; i++)
    car

    if (timeOfDay[i] === moment().hour()){
        console.log("Time is present")
    };
   

var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];


for (i = 0; i < timeOfDay.length; i++){

//create row
var row = $("<div>");
row.addClass("row time-block");
//create hour column
var hour = $("<div>");
$(".container").append (row);
hour.addClass("hour col-1");
hour.text(timeOfDay[i]);
row.append(hour);
//create text area column
var textArea = $("<textarea>");
textArea.addClass("past description col-10");
row.append(textArea);
//create button
var button = $("<button>");
button.addClass("saveBtn col-1");
row.append(button);

$(".container").append(row);

}

