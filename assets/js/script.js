const now  = moment().format("dddd, MMMM Do, YYYY, h:mm a");
//display current day and time at top of page
$("#currentDay").text(now)
console.log(now)
// retrieve uvIndex and display on page
var stateData = function() {
    //define uvi api
    var stateIndex = "https://covidtracking.com/api/states";
    //fetch uviIndex
    fetch(stateIndex)
    .then(function(response) {
    return response.json().then(function(data) {
        console.log(data);
    })
})
}
stateData()
// retrieve  and display on page
var pressData = function() {
    //define uvi api
    var pressIndex = "https://covidtracking.com/api/us";
    //fetch uviIndex
    fetch(pressIndex)
    .then(function(response) {
    return response.json().then(function(data) {
        console.log(data);
    })
})
}
pressData()
//we can also enter a date in for each state if we want and display covid information for that date if we want to using this API:
///api/v1/states/{state}/{date}.json
