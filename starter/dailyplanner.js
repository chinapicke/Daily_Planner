// Date display
// Create variable to hold the current day into
var todayDate = moment().format('dddd, MMMM Do');
// Get element to put the current day into from the HTML 
$('#currentDay').text(todayDate);

// Colour blocks to represent if it is past, present or future
// Get elements by ID for each hour and add attribute of the hour format using moment 
$('9AM').moment('09:00').format('HHA')
$('10AM').moment('10:00').format('HHA')
$('11AM').moment('11:00').format('HHA')
$('12PM').moment('12:00').format('HHA')
$('1PM').moment('13:00').format('HHA')
$('2PM').moment('14:00').format('HHA')
$('3PM').moment('15:00').format('HHA')
$('4PM').moment('16:00').format('HHA')
$('5PM').moment('17:00').format('HHA')

