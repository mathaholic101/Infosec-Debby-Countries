<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   <title>REST Countries</title>
   <link rel="icon" type="image/png" href="./images/favicon-96x96.png" sizes="96x96">
   <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
   <header id="headerBar">
      <img id="logoHeader" src="./images/infosecLogo.png" alt="InfoSec Is Awesome">
      <h1 id="titleHeader">Country Search</h1>
   </header>
   <br /><br />
      <div class="centerText">
         <div id="error" class="error"></div>
      </div>
   <br /><br />
   <form>
      <div class="centerText">
         <label for="countrySearchInput">Country</label>
         <input type="text" id="countrySearchInput" name="countrySearchInput" />
         <br />
      </div>
      <div class="centerText">
         <input type="button" class="btn btn-blue" id="getCountryData" value="Search" />
      </div>
   </form>
   <br /><br />
   <table id="resultsTable" name="resultsTable" class="centerText">
      <tr>
         <th>Country Name</th>
         <th>2-letter Code</th>
         <th>3-letter Code</th>
         <th>Flag</th>
         <th>Region</th>
         <th>Subregion</th>
         <th>Population</th>
         <th>Lanugages</th>
      </tr>
      <tr id="searchResultsDump">
         <td colspan="999"> No Results Yet!</td>
      </tr>
   </table>
   <br /><br />
   <table class="centerText">
      <tr>
         <th>Regions In Search</th>
         <th>Count</th>
      </tr>
      <tr id="resultsCountRegions">
         <td colspan="999"> No Results Yet!</td>
      </tr>
   </table>
   <br /><br />
   <table class="centerText">
      <tr>
         <th>Subregions In Search</th>
         <th>Count</th>
      </tr>
      <tr id="resultsCountSubregions">
         <td colspan="999"> No Results Yet!</td>
      </tr>
   </table>
</div>
<br /><br />
<p>This is an implementation of the<a href="https://restcountries.eu/"> REST Country API Service</a></p>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/countries_jquery.js"></script>
<script src="js/Bootstrap3_Typeahead/bootstrap3-typeahead.min.js"></script>
</body>
