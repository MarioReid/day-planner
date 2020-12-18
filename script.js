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
    {twelveHour: "5PM", twentyFourHour: "17PM", hour: 17}]
 
    
//sets time
var currentTime = moment().format("H");

//console.log(currentTime);

// for loop for time of day
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

// setter methods
textArea.attr("id", timeOfDay[i].hour);
// add past present future

if(currentTime > timeOfDay[i].hour) {
    textArea.addClass("past description col-10");
} else if(currentTime == timeOfDay[i].hour) {
    textArea.addClass("present description col-10");
} else {
    textArea.addClass("future description col-10");
}

// getter from local storage
var valueFromStorage = window.localStorage.getItem("hour-"+timeOfDay[i].hour);

textArea.val(valueFromStorage);

row.append(textArea);
//create button
var button = $("<button>");
button.text
//added the icon to button
button.addClass("saveBtn col-1 far fa-save");
button.attr("data-hour", timeOfDay[i].hour);
row.append(button);
//Append to row
$(".container").append(row);
}
//Add event listener
$(document).on("click", function(event) {

    // if save button was clicked
    if($(event.target).hasClass("saveBtn")) {
     //target buttons with save btn class   
        var dataHour = $(event.target).attr("data-hour");
    //gets the data hour for the button clicked
        var textValue = $('#' + dataHour).val();

        // console.log(textValue);

        // setter
        window.localStorage.setItem("hour-"+dataHour, textValue);
    }
})