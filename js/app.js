


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var i;


/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
  
});

}



window.onclick = function (event) {

  const notifyIcon = document.querySelector('.notif-icon');
  const closeIcons = document.querySelectorAll('span.close');

  if (event.target.tagName === 'SPAN') {
    event.target.classList.remove('close');
    if (closeIcons.length === 1) {
      notifyIcon.style.visibility = "hidden";
    }
  }
};




// Add active class to the current button (highlight it)


function active() {

var header = document.getElementById("traffic-nav");
var btns = document.getElementsByClassName("traffic-nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
};















const alertBanner = document.getElementById("alert");


// create the html for the banner
alertBanner.innerHTML =
`

		<div class="alert-banner">
			<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
				to complete</p>
				<p class="alert-banner-close">x</p>
		</div>
`

;

alertBanner.addEventListener('click', e => {
const element = e.target;

	if (element.classList.contains("alert-banner-close")) {
	alertBanner.style.display = "none";
	
		}
	});

/* chart widgets */

const monthlyData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weeklyData = ["Week1", "Week2", "Week3", "Week4", "Week5"];
const dayData = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hourData = ["0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800" ];
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {


				/* data at bottom of chart  */
		labels: hourData,

		datasets: [{
						/* data on side of chart */
				data: [10000, 8750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500
					],
					backgroundColor: 'rgba(116, 119, 191, .3)',
						borderWidth: 1,
				}]


			};


function updateHour() {
					//trafficChart.data.datasets[0].data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

					trafficChart.data.labels = hourData;
					trafficChart.update();
					active();

			};

function updateDaily() {
					trafficChart.data.labels = dayData;

					trafficChart.update();
					active();
			};


function updateWeekly() {
					trafficChart.data.labels = weeklyData;

					trafficChart.update();
					active();
			};

function updateMonthly() {
					trafficChart.data.labels = monthlyData;

					trafficChart.update();
					active();
			};





let trafficOptions = {
		aspectRatio: 3.5,
		animation: {
		duration: 1000
			},

		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		legend : {
			display:false
		}
	};


let trafficChart = new Chart(trafficCanvas, {
		type: 'line', //bar, pie, line doughnut, radar, 
		data: trafficData,
		options: trafficOptions
	});










const dailyCanvas = document.getElementById("daily-chart");


// data for daily traffic bar chart
const dailyData = {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
		}]
	};
const dailyOptions = {
		scales: {
		yAxes: [{
		ticks: {
		beginAtZero:true
		}
	}]
},

legend : {
display: false
	}
}


let dailyChart = new Chart(dailyCanvas, {
type: 'bar',
data: dailyData,
options: dailyOptions
});


const mobileCanvas = document.getElementById("mobile-chart");


const mobileData = {
		labels: ["Desktop", "Tablet", "Phones"],
		datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: [
		'#7477BF',
		'#78CF82',
		'#51B6C8'
		]
	}]
};


const mobileOptions = {
		legend: {
		position: 'right',
		labels: {
		boxWidth: 20,
		fontStyle: 'bold'
		}
	}
}

/* let mobileChart = new bar(daily, */


let mobileChart = new Chart(mobileCanvas, {
type: 'doughnut',
data: mobileData,
options: mobileOptions
});



/* Messaging Section */



const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


send.addEventListener('click', () => {

		if (user.value === "" && message.value === "") {
			alert("Please fill out user and message fields before sending");
		}	else if (user.value === "" ) {
				alert("Please fill out user field before sending");
				}	else if (message.value === "" ) { 
						alert("Please fill out message field before sending");
					}		else { 
								alert('Message successfully sent to: ${user.value}');
							}		

});




function testStorage() {
 const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
  }
}

if(testStorage() === true){ 


document.getElementById("save").addEventListener("click", function(){

			localStorage.setItem('email', '');
			localStorage.setItem('notify', '');
			localStorage.setItem('timezone', 'selectTimeZone');
			alert("Settings successfully saved");

})
}

document.getElementById("save").addEventListener("click", function(){

	const emailCheckbox = document.getElementById('email');
	const notifyCheckbox = document.getElementById('notify');

	if (emailCheckbox.checked) {
		localStorage.setItem('email', 'on');
	}
	else {
		localStorage.setItem('email', 'off');
		
	}



	 if (notifyCheckbox.checked) {
		localStorage.setItem('notify', 'on');
	 }
	 else {
	 	localStorage.setItem('notify', 'off');
	 }
	
		


	const selectTimeZone = document.getElementById('timezone').value;
			//localStorage.setItem('notify', '');
			localStorage.setItem('timezone', selectTimeZone);
			//alert("Settings successfully saved");
});









const loadSettings = function() {

	const emailCheckBox = document.getElementById('email');
	const emailSetting = localStorage.getItem('email');

	

	if (emailSetting === 'on') {
		emailCheckBox.checked = true;
	}
	else {
		emailCheckBox.checked = false;
	}
	
	const notifyCheckbox = document.getElementById('notify');
	const notifySetting = localStorage.getItem('notify');

	if (notifySetting === 'on') {
		notifyCheckbox.checked = true;
		}
		else {
			notifyCheckbox.checked = false;
		}
	

	document.getElementById('timezone').value = localStorage.getItem('timezone');
}

loadSettings();
















