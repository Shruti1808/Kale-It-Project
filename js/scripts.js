//Define global variables
var score = 0;

//Business logic
//For Breakfast
var breakfastMenu = ["Whole-wheat bread with ", "quinoa with ", " oatmeals with ", "broccoli ", "berries ", "eggs ", "and greek yogurt", "and smoothie ", "and roasted nuts"];

var breakfastMeal = [];

//Printing combination for breakfast
function printBreakfastMenu() {
	for (var i = 0; i < 3; i++) {
		for (var j = 3; j < 6; j++) {
			for (var k = 6; k < breakfastMenu.length; k++) {
				breakfastMeal.push(breakfastMenu[i] + breakfastMenu[j] + breakfastMenu[k]);
      }
    }
  }
}
printBreakfastMenu();

//Shuffle the breakfastMenuArray
function shuffle(breakfastMeal) {
  var count = breakfastMeal.length;
  var number = 0;
  var temp = 0;

  while (0!== count) {
    number = Math.floor(Math.random() * count);
    count--;

    temp = breakfastMeal[count];
    breakfastMeal[count] = breakfastMeal[number];
    breakfastMeal[number] = temp;
  }
  return breakfastMeal;
}
shuffle(breakfastMeal);

//For lunch
var lunchMenu = ["wheat sandwich with ","organic wraps with ", "brown rice with ", "chicken breasts ", "kale " , "organic avocado dressing ","and fruit salad" , "and greek yoghurt",
"and lentil soups"]

var lunchMeal = [];

//Printing combination for lunch
function printLunchMenu() {
	for (var i = 0; i < 3; i++) {
		for (var j = 3; j < 6; j++) {
			for (var k = 6; k < lunchMenu.length; k++) {
				lunchMeal.push(lunchMenu[i] + lunchMenu[j] + lunchMenu[k]);
      }
    }
  }
}
printLunchMenu();

//Shuffle the lunchMenuArray
function shuffle(lunchMeal) {
  var count = lunchMeal.length;
  var number = 0;
  var temp = 0;

  while (0!== count) {
    number = Math.floor(Math.random() * count);
    count--;

    temp = lunchMeal[count];
    lunchMeal[count] = lunchMeal[number];
    lunchMeal[number] = temp;
  }
  return lunchMeal;
}
shuffle(lunchMeal);

//For dinner
var dinnerMenu = ["seasoned chicken with ","veggie burger with ", "gluten-free spaghetti with ", "mashed potato ", "brussels sprouts " , "pesto sauce ","and fruit salad" , "and veggie salad", "and corn salad"];

var dinnerMeal = [];

//Printing combination for dinner
function printDinnerMenu() {
	for (var i = 0; i < 3; i++) {
		for (var j = 3; j < 6; j++) {
			for (var k = 6; k < dinnerMenu.length; k++) {
				dinnerMeal.push(dinnerMenu[i] + dinnerMenu[j] + dinnerMenu[k]);
      }
    }
  }
}
printDinnerMenu();

//Shuffle the dinnerMenuArray
function shuffle(dinnerMeal) {
  var count = dinnerMeal.length;
  var number = 0;
  var temp = 0;

  while (0!== count) {
    number = Math.floor(Math.random() * count);
    count--;

    temp = dinnerMeal[count];
    dinnerMeal[count] = dinnerMeal[number];
    dinnerMeal[number] = temp;
  }
  return dinnerMeal;
}
shuffle(dinnerMeal);

//Make original constructor
function Choice(habit,goals,number){
  this.habit = habit;
  this.goals = goals;
  this.number = number;
}
//Make prototype for radio question score
Choice.prototype.scoreHabit = function () {
  score = 0;
  for (var i = 0; i < this.habit.length; i++) {
    if(this.habit[i] === "1") {
      score+=1
    } else if (this.habit[i] === "3") {
      score+=3
    } else if (this.habit[i] === "5") {
      score+=5
    } else if (this.habit[i] === "7") {
      score+=5
    } else if (this.habit[i] === "2") {
      score+=2
    } else if (this.habit[i] === "4") {
      score+=4
    } else {
      score+=6
    }
  };
};
//Make prototype for checkbox questions:
Choice.prototype.scoreGoal = function () {
  for (var i = 0; i < this.goals.length; i++) {
    if(this.goals[i] === "9") {
      score+=9
    } else if (this.goals[i] === "7") {
      score+=7
    } else if (this.goals[i] === "5") {
      score+=5
    } else if (this.goals[i] === "3") {
      score+=3
    } else if (this.goals[i] === "1") {
      score+=1
    }
  }
};
//Make prototype for input field
Choice.prototype.scoreNumber= function () {
  if (this.number[0] === "1") {
    score -= (this.number[1]/2)
  } else { score += (this.number[1]/2)}
};






// Business Logic
var tableExercise = "";
var newExercise = [];
var n = 0;
var p = 0;
var limit = 0;

//Create function to make combination of exercises
var exerciseTypes = ["15 min ", "20 min ", "30 min ", "foam roll stretching ", "jogging ", "biking ", "and circuit training ", "and weight lifting", "and rock climbing"]

function printExercise() {
  for(i = 0; i<3; i ++) {
    for(j=3; j <6; j++) {
      for (k=6; k < exerciseTypes.length; k++) {
        newExercise.push(exerciseTypes[i] + exerciseTypes[j] + exerciseTypes[k])
      }
    }
  }
}
printExercise();

//Create functions to shuffle the combinations
var e = newExercise.length;

function exerciseShuffle() {
  while(0 !== e) {

    n = Math.floor(Math.random() * e);
    e--;

    p = newExercise[e];
    newExercise[e] = newExercise[n];
    newExercise[n] = p;
  }
  return newExercise;
}
exerciseShuffle(newExercise);


// user logic goes here
$(document).ready(function(){
  $(".diet, .exercise").unslider();

  $("form").submit(function(event){
    event.preventDefault();

    //Make radio input into variable
     var inputBreakfast = $("input:radio[name=breakfast]:checked").val();
     var inputLunch = $("input:radio[name=lunch]:checked").val();
     var inputDinner = $("input:radio[name=dinner]:checked").val();
     var inputStatus = $("input:radio[name=status]:checked").val();
     var inputSavvy= $("input:radio[name=savvy]:checked").val();
     var inputFiber = $("input:radio[name=fiber]:checked").val();
     var inputCondition = $(".conditionMed option:selected").val();
    // Push checkbox input into an array
     var inputGoals = [];
     $("input:checkbox[name=eatMore]:checked").each(function() {
       inputGoals.push($(this).val());
     });
     $("input:checkbox[name=eatLess]:checked").each(function() {
       inputGoals.push($(this).val());
     });
     // Get dropdown menu input
     var inputWeight = $(".weightQn option:selected").val();
     var inputNumber= parseInt($("input#weightQn").val());

    $(".gainAndLose").text(inputNumber); // Pounds the user wants to gain or lose
    if (inputWeight === "2") { // Gain Weight
      $("input:checkbox[name=eatMore]:checked").each(function() {
        $("#gainParagraph").show();
        if ($(this).val() === "1") {
          $("#vegetableGain").show();
        } else if ($(this).val() === "3") {
          $("#fruitGain").show();
        } else if ($(this).val() === "5") {
          $("#cerealGain").show();
        } else if ($(this).val() === "7") {
          $("#meatGain").show();
        } else { // value = "9"
          $("#sweetsGain").show();
        }
      });
    } else if (inputWeight === "1") { // Lose Weight
      $("input:checkbox[name=eatLess]:checked").each(function() {
        $("#loseParagraph").show();
        if ($(this).val() === "9") {
          $("#vegetableLoss").show();
        } else if ($(this).val() === "7") {
          $("#fruitLoss").show();
        } else if ($(this).val() === "5") {
          $("#cerealLoss").show();
        } else if ($(this).val() === "3") {
          $("#meatLoss").show();
        } else { // value = "1"
          $("#sweetsLoss").show();
        }
      });
    }
    $("#foodInfo").show();
    $("input#weightQn").val(""); // Clears number value for weight

    //Create new object using constructor
     var userChoice = new Choice([inputBreakfast,inputLunch,inputDinner,inputStatus,inputSavvy,inputFiber,inputCondition],inputGoals,[inputWeight,inputNumber])

    //Apply prototypes to new object
    userChoice.scoreHabit();
    userChoice.scoreGoal();
    userChoice.scoreNumber();
    var tableMeal = "";
    //Table for 7 day meal plan (breakfast, lunch, and dinner)
    function makeWeekMeal() {
      for(i = 0; i < 2; i+=2) {
        tableMeal += "<tr>" + "<td>" + breakfastMeal[i] + "</td>" + "<td>" +
				 breakfastMeal[i+1] + "<td>" + breakfastMeal[i+2] +"</td>" + "<td>" +
				 breakfastMeal[i+3] + "</td>" + "<td>" + breakfastMeal[i+4] + "</td>" +
				 "<td>" + breakfastMeal[i+5] + "</td>" + "<td>" + breakfastMeal[i+6] +
				 "</td>" + "</tr>" + "<tr>" + "<td>" + lunchMeal[i] + "</td>" + "<td>" +
				 lunchMeal[i+1] + "</td>" + "<td>" + lunchMeal[i+2] + "<td>" +
				 lunchMeal[i+3] + "<td>" + lunchMeal[i+4] + "<td>" + lunchMeal[i+5] +
				 "<td>" + lunchMeal[i+6] + "</td>" + "</tr>" + "<tr>" + "<td>" +
				 dinnerMeal[i] + "</td>"+ "<td>" + dinnerMeal[i+1] + "</td>" + "<td>" +
				 dinnerMeal[i+2] + "</td>"+ "<td>" + dinnerMeal[i+3] + "</td>"+ "<td>" +
				 dinnerMeal[i+4] + "</td>"+ "<td>" + dinnerMeal[i+5] + "</td>"+ "<td>" +
				 dinnerMeal[i+6] + "</td>" +"</tr>";
      }
    }

		//Output meal plan to page
    function outputResults() {
    tableMeal = "";
    makeWeekMeal(breakfastMeal);
    $("#mealResults").append("<table>" + "<tr>" + "<th>Day One</th>" + "<th>Day Two</th>" + "<th>Day Three</th>" + "<th>Day Four</th>" + "<th>Day Five</th>" + "<th>Day Six</th>" + "<th>Day Seven</th>" + "</tr>" + tableMeal + "</table>");
    }
    outputResults();

    $("#mealTable").append(tableMeal);

    $("#mealPlan").show();





    var limit = 0;
    var tableExercise = "";
//Get user input and retrieve value into variables
    var inputLifestyle = parseInt($("input:radio[name=lifestyle]:checked").val());
    var inputCurrentExercise = parseInt($("input:radio[name=currentExercise]:checked").val());
    var inputPriorityExercise = parseInt($("input:radio[name=priorityExercise]:checked").val());
    var inputWeeklyExercise = parseInt($("input:radio[name=weeklyExercise]:checked").val());
    var totalScore = 0; var result = "";
    var totalScore = inputLifestyle+inputCurrentExercise+inputPriorityExercise+inputWeeklyExercise;
//Assess User's Answer
    function makeResult() {
      if(totalScore >=16 && totalScore <= 24) {
        result = "high intensity";
      } else if(totalScore >= 8 && totalScore <= 15) {
        result = "medium";
      } else {
        result = "low";
      }
      return result;
    }
    makeResult();

    //Create a table for suggestion for 2 day routine REFACTORING with nested for loops
    function findLimit2 () {
      if(result === "low") {
        limit += 5
      } else if (result === "medium") {
        limit += 7
      } else { limit += 10 }; return limit;
    }
    function makeTable2() {
      var maxLimit = findLimit2()
      for( index = 0; index < maxLimit ; index+=2) {
    tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "</tr>" }
    }

    //Create table for suggestion for 4 day routine
    function findLimit4 () {
      if(result === "low") {
        limit += 5
      } else if (result === "medium") {
        limit += 9
      } else {
        limit += 14
      };return limit;
    }
    function makeTable4() {
      var maxLimit = findLimit4();
        for( index = 0; index < maxLimit; index+=4) {
      tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" + "</tr>" }
    }

    //Create table for suggestion for 6 day routine
    function findLimit6 () {
      if(result === "low") {
        limit += 11
      } else if (result === "medium") {
        limit += 18
      } else { limit += 23 }; return limit;
    }
    function makeTable6() {
      var maxLimit = findLimit6();
      for( index = 0; index < maxLimit; index+=6) {
    tableExercise += "<tr>" + "<td>" + newExercise[index] + "</td>" + "<td>" + newExercise[index+1] + "</td>" + "<td>" + newExercise[index+2] + "</td>" + "<td>" + newExercise[index+3] + "</td>" +  "<td>" + newExercise[index+4] + "</td>" + "<td>" + newExercise[index+5] + "</td>" +"</tr>" }
    }


    function outputResults2() {
      tableExercise = "";
      $("#weeklyRoutine").text("")
      if (inputWeeklyExercise === 1) {
        makeTable2(newExercise);
        console.log(tableExercise);
         $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"</tr>"+tableExercise+"</table>")
      } else if (inputWeeklyExercise === 2) {
        makeTable4(newExercise);
        $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"<th>Day Three</th>"+"<th>Day Four</th>"+"</tr>"+tableExercise+"</table>")
      } else {
        makeTable6(newExercise);
        $("#weeklyRoutine").append("<table>"+"<tr>"+"<th>Day One</th>"+"<th>Day Two</th>"+"<th>Day Three</th>"+"<th>Day Four</th>"+"<th>Day Five</th>"+"<th>Day Six</th>"+"</tr>"+tableExercise+"</table>")
      }
    }
    outputResults2();

    $("#weeklyRoutine").append(tableExercise);
    $("#suggestionParagraph").show();
  });
});
