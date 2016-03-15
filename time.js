var ist = new Date();
var ist_formatted = ist.toString().replace(/GMT.+/,"");
var utc = ist.toUTCString();
utc_formatted = utc.replace(/GMT/,"");

   document.addEventListener('DOMContentLoaded', function () {
  	var istDiv = document.getElementById('ist_time');
  	var utcDiv = document.getElementById('utc_time');
  	var istP = document.createElement('p');
  	var utcP = document.createElement('p');
  	istP.appendChild(document.createTextNode(ist_formatted));
  	utcP.appendChild(document.createTextNode(utc_formatted));
  	istDiv.appendChild(istP);
  	utcDiv.appendChild(utcP);
});