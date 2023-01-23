//-------------Date display-----------------
// Create variable to hold the current day into
var todayDate = moment().format('dddd, MMMM Do');
// Get element to put the current day into from the HTML 
$('#currentDay').text(todayDate);


//---------Colour blocks to represent past, present or future---------------
// Set variable for the current time using moment 
// console.log(typeof.currentTime), shows that it is a string, therefore need to convert string into integer
var currentTime = parseInt(moment().format('HH'))
// Select the class hour so that the id of each numer row can be selected for the if statement to show whether it is past, present or future var timeRows = $('.hour')
let hourRow = $('.hour')

// .each method to loop through each id hour and set it to a variable, instead of using for loop 
$.each(hourRow, function(){
    // set id number to variable and convert the string into int so that it can be compared agains the current time
    // 'this' selects the attributes named if within hourRow variable 
    var hourId = parseInt($(this).attr("id"))
    // console.log(hourId), to check that it is correctly prinitng out the number of the id
    if (hourId === currentTime){
        // Used next() as it selects elements with the matching element, in this case the hour class and adds it to the specific class
        // Different classes have the formatting for the row colour in the CSS
        $(this).next().addClass('present')
    }
    else if (hourId < currentTime){
        $(this).next().addClass('past')
    }
    else if (hourId > currentTime){
        $(this).next().addClass('future')
    }
})

// -----Saving input with clicking lock symbol------
// DOM manipulation of the user input row
let saveBtn = $('.saveBtn')
// This is currently working
// saveBtn.on('click', function(){
//     console.log('Button clicked')
// })

saveBtn.on('click', function(e){
    e.preventDefault();
    // assigned rowHour to represent hour with the userinput to shwo as an object in local storage
    var rowHour = $(this).attr('#id')
    let userInput = $('.user-input').value
    // Only saves as undefined
    localStorage.setItem(rowHour, userInput)
    let savedInput = localStorage.getItem(rowHour)
    alert(savedInput)
})

