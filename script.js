//set today date
var todaysDate = $("#currentDay");

//sets date
todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));

var timeOfDay = [
    {twelveHour: "9AM", twentyFourHour: "9AM", hour: 9},
    {twelveHour: "10AM", twentyFourHour: "10AM", hour: 10},
    {twelveHour: "11AM", twentyFourHour: "11AM", hour: 11},
    {twelveHour: "12PM", twentyFourHour: "12PM", hour: 12},
    {twelveHour: "1PM", twentyFourHour: "13PM", hour: 13},
    {twelveHour: "2PM", twentyFourHour: "14PM", hour: 14},
    {twelveHour: "3PM", twentyFourHour: "15PM", hour: 15},
    {twelveHour: "4PM", twentyFourHour: "16PM", hour: 16},
    {twelveHour: "5PM", twentyFourHour: "17PM", hour: 17},
    {twelveHour: "6PM", twentyFourHour: "18PM", hour: 18},
    {twelveHour: "7PM", twentyFourHour: "19PM", hour: 19}];
    
//sets time
var currentTime = moment().format("H");

console.log(currentTime);

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

if(currentTime > timeOfDay[i].hour) {
    textArea.addClass("past description col-10");
} else if(currentTime == timeOfDay[i].hour) {
    textArea.addClass("present description col-10");
} else {
    textArea.addClass("future description col-10");
}

row.append(textArea);
//create button
var button = $("<button>");
button.text
button.addClass("saveBtn col-1 far fa-save");
row.append(button);

$(".container").append(row);
}