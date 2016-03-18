

var interval =0;
setInterval(function(){
	interval++;
	if( interval >= 5 ){

		chrome.browserAction.setBadgeText({text: getTime()});
		interval = 0;
	}
},3000);



function getTime(){
	var ist = new Date().toString().replace(/GMT.+/,"");
	var hrs = ist.split(' ')[4].split(':')[0];
	var mins = ist.split(' ')[4].split(':')[1];
	var textField = hrs+":"+mins;
	return textField;
}