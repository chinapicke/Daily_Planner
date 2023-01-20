// Date display
// Create variable to hold the current day into
var todayDate = moment().format('dddd, MMMM Do');
// Get element to put the current day into from the HTML 
$('#currentDay').text(todayDate);

// Date Displaty Blocks
// Need to create ul with li elements inside 

// Format with using class for the grid system, approx date will take up 1/5 row, input 3/5 and save button 1/5
// Use current hour using moment