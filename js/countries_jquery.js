/**
* Created by Debby Lo
* April 15 2018
*/



$(document).ready(function(){
   // Get the list of countries to use for typeahead input box
   var listCountries = [];

   $.ajax({
          type: 'GET',
          url: "https://restcountries.eu/rest/v2/all"
          }).done(function(response) {
             $.each(response, function(index, item ) {
                listCountries.push(item.name);
             })
    });

   // Make the textbox a typeahead box to suggest countries
   $('#countrySearchInput').typeahead({
       source:  function (query, process) {
                process(listCountries);
                }
   });

   // When hit "Search" button, get the country data
   $('#getCountryData').on('click', function() {
      $('#error').empty();
      $('#searchResultsDump').empty();
      $('#resultsCountRegions').empty();
      $('#resultsCountSubregions').empty();
      getCountryData($('#countrySearchInput').val());
   });
})

/**
* Get country data from API
* 
* @param string countryName - valid country name (if invalid, we'll throw error)
*/
function getCountryData(countryName) {
  $.ajax({
    type: 'GET',
    url: 'https://restcountries.eu/rest/v2/name/' + countryName + '?fullText=true'
  }).done(function(results) {
    var regionsLists = [];
    var subregionsLists = [];
    var regionsCounts = {};
    var subregionsCounts = {};
    $.each(results, function(index, countryValues) {
       // results of search
       $('#searchResultsDump').append("<td>" + countryName + "</td>");
       $('#searchResultsDump').append("<td>" + countryValues.alpha2Code + "</td>");
       $('#searchResultsDump').append("<td>" + countryValues.alpha3Code + "</td>");
       $('#searchResultsDump').append("<td><img height='80' width='80' src=" + countryValues.flag + " alt='Country flag'/></td>");
       $('#searchResultsDump').append("<td>" + countryValues.region + "</td>");
       $('#searchResultsDump').append("<td>" + countryValues.subregion + "</td>");
       $('#searchResultsDump').append("<td>" + countryValues.population + "</td>");
       // Make bulleted list of all the languages
       var languageHTML = "";
       $.each(countryValues.languages, function(key, languageDataArray) {
          languageHTML += "<li>" + languageDataArray.name + "</li>";
       });
       $('#searchResultsDump').append("<td><ul>" + languageHTML + "</ul></td>");

       regionsLists.push(countryValues.region);
       subregionsLists.push(countryValues.subregion);
    }); // end each - was looping over search results

    // unique counts of regions and subregions
    regionsCounts = countDuplicates(regionsLists);
    subregionsCounts = countDuplicates(subregionsLists);
    $.each(regionsCounts, function(regionName, count) {
       $('#resultsCountRegions').append("<td>" + regionName + "</td><td>" + count + "</td>");
    });
    $.each(subregionsCounts, function(subregionName, count) {
       $('#resultsCountSubregions').append("<td>" + subregionName + "</td><td>" + count + "</td>");
    });    
  }).fail(function() {
     $('#error').append('No countries returned!');
     $('#searchResultsDump').html('<td colspan="999"> No Results Yet!</td>');
     $('#resultsCountRegions').html('<td colspan="999"> No Results Yet!</td>');
     $('#resultsCountSubregions').html('<td colspan="999"> No Results Yet!</td>');
  })
}


/**
* Count duplicate strings in an array
* 
* @param Array arrayInput - the array to loop over
* @return Object countsObject - collection of strings and their number of occurances
*/
function countDuplicates(arrayInput) {
   var countsObject = {};
   var current = null;
   var count = 0;

   arrayInput.sort();
   for (var index = 0; index < arrayInput.length; index++) {
      if (arrayInput[index] != current) {
        // This array value is different from last
        if (count > 0) {
          countsObject[current] = count;
        }
        current = arrayInput[index];
        count = 1;
      } else {
        // This array value is same as last
        count++;
      }
   }
   // Catch the last element in our array as well
   if (count > 0) {
      countsObject[current] = count;
    }

    return countsObject;
}
