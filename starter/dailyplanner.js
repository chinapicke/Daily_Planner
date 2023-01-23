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
$.each(hourRow, function () {
    // I put the below storage information into this function, as this functions loops through each hour row in the planner 
    // Assign the variable hour to hold wha the user has input into the text box
    var hour = $(this).text()
    // used the same line as in line 71, even though local storage is saved in a different function, local storage input is globally avaiable to use in other functions and even on different HTML pages
    // put the variable hour into getItem, as we are getting the text of what the user has inputted 
    var storage = localStorage.getItem(hour)
    // console to check that it is working
    console.log(hour)
    console.log(storage)
    // Using "#"+hour, means that it can look through each id with a differnet number assigned to it 
    // Find out the value of storage to then display it onto the page when it is refreshed
    $("#"+hour).val(storage)
    // set id number to variable and convert the string into int so that it can be compared agains the current time
    // 'this' selects the attributes named if within hourRow variable 
    var hourId = parseInt($(this).attr("id"))
    // let userInput = $(this).siblings('.user-input')
    // var getStorage = localStorage.getItem($(this).text())
    // // console.log(getStorage)
    // userInput.val(getStorage)
    // console.log(hourId), to check that it is correctly prinitng out the number of the id
    if (hourId === currentTime) {
        // Used next() as it selects elements with the matching element, in this case the hour class and adds it to the specific class
        // Different classes have the formatting for the row colour in the CSS
        $(this).next().addClass('present')
    }

    else if (hourId < currentTime) {
        $(this).next().addClass('past')
    }
    else if (hourId > currentTime) {
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


saveBtn.on('click', function (e) {
    e.preventDefault();
    // assigned rowHour to represent hour with the userinput to show as an object in local storage
    // siblings() selects all the elements that have the same class as hour
    // Use text() to get the written input that the user has put in, without text() it will show as undefined
    // Used this instead of e.target, as e.target selects the div class and i class (the icon) which takes the page longer to save 
    var rowHour = $(this).siblings('.hour').text()
    // Use val() instead of value(value used for vanilla HTML), to get the written content by the user
    let userInput = $(this).siblings('.user-input').val()
    // Console log to check that it is not showing undefined
    console.log(rowHour)
    console.log(userInput)
    // set the item as rowHour (e.g. 9am, 10am) and then the corresponding input from the user
    localStorage.setItem(rowHour, userInput)
    // get the stored item and put it into a variable 
    let savedInput = localStorage.getItem(rowHour)
})
