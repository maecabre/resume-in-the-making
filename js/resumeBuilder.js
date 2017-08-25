//-------------------------------------------------------------------------------------------------
// work
// work contains an array of jobs. Each object in the jobs array should contain an employer,
// title, location, dates worked and description strings.
var work = {

	"jobs" : [
		{
			"employer" : "Mark Choi",
			"title" : "Warehouse Inventory Assistant",
			"location" : "Arcadia, USA",
			"dates" : ["Summer 2015"],
			"description" : "The position included loading and unloading products\
			from containers packaging and wrapping goods for shipment, and transferring\
			and arranging merchandise."
		},
		{
			"employer" : "Jose Salgado",
			"title" : "Cashier",
			"location" : "Alhambra, USA",
			"dates" : ["Summer 2011"],
			"description" : "I sold fireworks to people that wanted to buy fireworks."
		}
	]
}

//-------------------------------------------------------------------------------------------------
// projects
// projects contains an array of projects. Each object in the projects array should contain
// title, dates and description strings, and an images array with URL strings for project images.
var projects = {

	"schoolWork" : [
		{
			"title" : "Android Game",
			"dates" : "2016",
			"description" : "A failed attempt at creating an Android app at a Hackathon. Woops.",
			"images" : ["images/fry.jpg", "images/fry.jpg"]
		},
		{
			"title" : "Android App",
			"dates" : "2017",
			"description" : "Made an app that creates study groups for other classmates on campus.",
			"images" : ["images/fry.jpg"]
		}
	]
}


//-------------------------------------------------------------------------------------------------
// bio
// bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array
// of skill strings. The contacts object should contain a mobile number, email address, github username,
// twitter handle and location. The twitter property is optional.
var bio = {

	"name" : "Mario Cabrera",
	"role" : "Robotics Engineer",
	"welcomeMessage" : "Welcome to my resume!",
	"biopic" : "images/fry.jpg",
	"contacts" : [{
		"mobile" : "323-496-0583",
		"email" : "maecabre.ucsc.edu",
		"github" : "maecabre",
		"twitter" : "@marioislife",
		"location" : "Los Angeles"
	}],
	"skills" : ["C", "Java", "Python", "HTML", "JavaScript", "CSS", "Verilog"]
}

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

}


//-------------------------------------------------------------------------------------------------
// education
// education contains an array of schools. Each object in the schools array contains name,
// location, degree dates and url strings, and a majors array of major strings. 
// education also contains an onlineCourses array. Each object in the onlineCourses array should
// contain a title, school, dates and url strings.
var education = {

	"name" : "University of California, Santa Cruz",
	"location" : "Santa Cruz",
	"date" : "2018",
	"degree" : "BS",
	"major" : "Robotics Engineering"
}


//-------------------------------------------------------------------------------------------------
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

//-------------------------------------------------------------------------------------------------
// Skills
if(bio.skills.length > 0){

	    $("#header").append(HTMLskillsStart);

	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	    $("#skills").append(formattedSkill);
	}


//-------------------------------------------------------------------------------------------------
// $(document).click(function(loc){
// 	// console.log("x location: " + event.pageX + "px; y location: " + event.pageY + "px;");

// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x,y);
// });

//-------------------------------------------------------------------------------------------------
// Returns array of work locations

// var obj = {

//   "jobs": [
//     {
//       "employer": "Udacity",
//       "title": "Course Developer",
//       "location": "Mountain View, CA",
//       "dates": "Feb 2014 - Current",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese.\
//       Queso taleggio when the cheese comes out everybody's happy airedale\
//       ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella\
//       cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese\
//       blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "LearnBIG",
//       "title": "Software Engineer",
//       "location": "Seattle, WA",
//       "dates": "May 2013 - Jan 2014",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese.\
//       Queso taleggio when the cheese comes out everybody's happy airedale\
//       ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella\
//       cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese\
//       blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//   	},
//     {
//       "employer": "LEAD Academy Charter High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jul 2012 - May 2013",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese.\
//       Queso taleggio when the cheese comes out everybody's happy airedale\
//       ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella\
//       cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese\
//       blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//   	},
//     {
//       "employer": "Stratford High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jun 2009 - Jun 2012",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese.\
//       Queso taleggio when the cheese comes out everybody's happy airedale\
//       ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella\
//       cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese\
//       blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//   	}
//   ]
// }

// // Your code goes here! Let me help you get started
// function locationizer(work_obj) {

// 	var locationArray = [];
// 	for(job in work_obj.jobs){
// 		locationArray.push(work_obj.jobs[job].location);
// 	}

// 	return locationArray;
// }


// // Did locationizer() work? This line will tell you!
// console.log(locationizer(obj));


//-------------------------------------------------------------------------------------------------
function inName(oldName) {
    var stringArray = oldName.split(" ");
    var firstName = stringArray[0].toLowerCase();
    var lastname = stringArray[1].toUpperCase();
    var firstLetter = firstName.slice(0,1).toUpperCase();
    firstName = firstLetter + firstName.slice(1);

    var finalName = firstName + " " + lastname;

    // Don't delete this line!
    return finalName;
};

//-------------------------------------------------------------------------------------------------
// Projects Display function
projects.display = function(){

	for(project in projects.schoolWork){

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.schoolWork[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.schoolWork[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.
			schoolWork[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.schoolWork[project].images.length > 0){
			for(image in projects.schoolWork[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%",
					projects.schoolWork[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

//-------------------------------------------------------------------------------------------------
// Work display function
work.display = function(){

	for(job in work.jobs){

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		$(".work-entry:last").append(formattedEmployer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formmattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formmattedEmployerTitle)
	}

}


// console.log(projects.schoolWork[0].title);

//-------------------------------------------------------------------------------------------------
// Display functions
projects.display();
work.display();


//-------------------------------------------------------------------------------------------------
// This prints the mouse location everytime something is clicked
$(document).click(function(loc){
	console.log(loc.pageX, loc.pageY);
});


//-------------------------------------------------------------------------------------------------
// Append stuff to the HTML file
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

