

var tbody = d3.select("#End-table-result");

var datebutton = d3.select("#filter-by-date");
var dateinput = d3.select("#datetime");

var citybutton = d3.select("#filter-by-city");
var cityinput = d3.select("#cities");

var statebutton = d3.select("#filter-by-state");
var stateinput = d3.select("#states");

var countrybutton = d3.select("#filter-by-country");
var countryinput = d3.select("#countries");

var shapebutton = d3.select("#filter-by-shape");
var shapeinput = d3.select("#shapes");



data.forEach(unidentified => {
    
    var tablerow = tbody.append("tr");
    Object.entries(unidentified).forEach(([key,value]) => {
        var tabledata = tablerow.append("td");
        tabledata.text(value);
    });
});


datebutton.on("click", function() {
        
    tbody.html("");
    d3.event.preventDefault();
    console.log("You clicked the ' Date Button'.");
    var dateinput = d3.select("#datetime");
    var dateelement = dateinput.property("value");
    console.log(dateelement);
    var datearray = data.filter(ufo => ufo.datetime === dateelement);
    console.log(datearray)

    datearray.forEach((ufosighting) => {
        var row = tbody.append("tr");
        Object.entries(ufosighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });      
});


citybutton.on("click", function() {
  
    tbody.html("");
    d3.event.preventDefault();
    console.log("You clicked the 'City Button'.");
    var cityelement = cityinput.property("value");
    console.log(cityelement);
    var cityarray = data.filter(ufo2 => ufo2.city === cityelement);
    console.log(cityarray)

    cityarray.forEach((ufosighting2) => {
        var row2 = tbody.append("tr");
        Object.entries(ufosighting2).forEach(([key,value]) => {
            var cell2 = row2.append("td");
            cell2.text(value);
        });
    });      
});


statebutton.on("click", function() {
      
    tbody.html("");
    d3.event.preventDefault();
    console.log("You clicked the 'State Button'.");
    var stateelement = stateinput.property("value");
    console.log(stateelement);
    var statearray = data.filter(ufo3 => ufo3.state === stateelement);
    console.log(statearray)

    statearray.forEach((ufosighting3) => {
        var row3 = tbody.append("tr");
        Object.entries(ufosighting3).forEach(([key,value]) => {
            var cell3 = row3.append("td");
            cell3.text(value);
        });
    });      
});


countrybutton.on("click", function() {
           
    tbody.html("");
    d3.event.preventDefault();
    console.log("You clicked the 'Country Button'.");
    var countryelement = countryinput.property("value");
    console.log(countryelement);
    var countryarray = data.filter(ufo4 => ufo4.country === countryelement);
    console.log(countryarray)

    countryarray.forEach((ufosighting4) => {
        var row4 = tbody.append("tr");
        Object.entries(ufosighting4).forEach(([key,value]) => {
            var cell4 = row4.append("td");
            cell4.text(value);
        });
    });      
});


shapebutton.on("click", function() {
            
    tbody.html("");
    d3.event.preventDefault();
    console.log("You clicked the 'Shape Button'.");
    var shapeelement = shapeinput.property("value");
    console.log(shapeelement);
    var shapearray = data.filter(ufo5 => ufo5.shape === shapeelement);
    console.log(shapearray)

    shapearray.forEach((ufosighting5) => {
        var row5 = tbody.append("tr");
        Object.entries(ufosighting5).forEach(([key,value]) => {
            var cell5 = row5.append("td");
            cell5.text(value);
        });
    });      
});