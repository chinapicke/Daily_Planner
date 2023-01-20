// Date display
// Create variable to hold the current day into
var todayDate = moment().format('dddd, MMMM Do');
// Get element to put the current day into from the HTML 
$('#currentDay').text(todayDate);

