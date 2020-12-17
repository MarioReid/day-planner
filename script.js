//set today date
var todaysDate = $("#currentDay");

//sets date
todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));

var timeOfDay = [
    {twelveHour: "9AM", twentyFourHour: "9AM"},
    {twelveHour: "10AM", twentyFourHour: "10AM"},
    {twelveHour: "11AM", twentyFourHour: "11AM"},
    {twelveHour: "12PM", twentyFourHour: "12PM"},
    {twelveHour: "1PM", twentyFourHour: "13PM"},
    {twelveHour: "2PM", twentyFourHour: "14PM"},
    {twelveHour: "3PM", twentyFourHour: "15PM"},
    {twelveHour: "4PM", twentyFourHour: "16PM"},
    {twelveHour: "5PM", twentyFourHour: "17PM"}];
    

   //if (timeOfDay[i] === moment().hour()){
    //    console.log("Time is present")
    //};
   

//sets time
var currentTime = moment().format("H");

for (i = 0; i < timeOfDay.length; i++){
    console.log("The row is being created.")
//create row
var row = $("<div>");
row.addClass("row time-block");
//create hour column
var hour = $("<div>");
$(".container").append (row);
hour.addClass("hour col-1");
hour.text(timeOfDay[i].twelveHour);
row.append(hour);
//create text area column
var textArea = $("<textarea>");
textArea.addClass("past description col-10");
row.append(textArea);
//create button
var button = $("<button>");
button.text
button.addClass("saveBtn col-1 fal fa-save");
row.append(button);

$(".container").append(row);
}