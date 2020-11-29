/* 
File:   script.js
Name:   Austin Snodgrass
Date:   25 November 2020
Desc:   
*/

function showHiking() {
    document.getElementById("hiking").style.display = "block";
    document.getElementById("birdwatching").style.display = "none";
    document.getElementById("interpretive").style.display = "none";
    document.getElementById("iddings").style.display = "none";
}
function showBirdwatching() {
    document.getElementById("hiking").style.display = "none";
    document.getElementById("birdwatching").style.display = "block";
    document.getElementById("interpretive").style.display = "none";
    document.getElementById("iddings").style.display = "none";
}
function showInterpretive() {
    document.getElementById("hiking").style.display = "none";
    document.getElementById("birdwatching").style.display = "none";
    document.getElementById("interpretive").style.display = "block";
    document.getElementById("iddings").style.display = "none";
}
function showIddings() {
    document.getElementById("hiking").style.display = "none";
    document.getElementById("birdwatching").style.display = "none";
    document.getElementById("interpretive").style.display = "none";
    document.getElementById("iddings").style.display = "block";
}


/* Trying to add function to iterate through array of ids that match the visitInfo divs.
    ID will be passed to this function when this button is clicked and that id will be
    set to display and remove that ID from the array. For loop is then triggered which
    iterates through the remaining IDs in the array and sets each one to no longer be
    displayed. Function will hopefully assist with eliminating the large blocks of code
    above and below that are currently doinmg this job */
/*function showVisitInfo(id) {
    var showID = id;
    var idArray = ['hiking', 'birdwatching', 'interpretive', 'iddings'];

    document.getElementById(showID).style.display = "block";
    idArray.splice(showID)

    for (i = 0; i < idArray.length; i++) {
        var idChange = idArray[i];
        document.getElementById(idChange).style.display = "none";
    }
}*/

function showBirdOutOfNest() {
    document.getElementById("birdOutOfNest").style.display = "block";
    document.getElementById("bunniesFound").style.display = "none";
    document.getElementById("squirrelOutOfNest").style.display = "none";
    document.getElementById("birdNoFly").style.display = "none";
    document.getElementById("raccoonsFound").style.display = "none";
}
function showBunniesFound() {
    document.getElementById("birdOutOfNest").style.display = "none";
    document.getElementById("bunniesFound").style.display = "block";
    document.getElementById("squirrelOutOfNest").style.display = "none";
    document.getElementById("birdNoFly").style.display = "none";
    document.getElementById("raccoonsFound").style.display = "none";
}
function showSquirrelOutOfNest() {
    document.getElementById("birdOutOfNest").style.display = "none";
    document.getElementById("bunniesFound").style.display = "none";
    document.getElementById("squirrelOutOfNest").style.display = "block";
    document.getElementById("birdNoFly").style.display = "none";
    document.getElementById("raccoonsFound").style.display = "none";
}
function showBirdNoFly() {
    document.getElementById("birdOutOfNest").style.display = "none";
    document.getElementById("bunniesFound").style.display = "none";
    document.getElementById("squirrelOutOfNest").style.display = "none";
    document.getElementById("birdNoFly").style.display = "block";
    document.getElementById("raccoonsFound").style.display = "none";
}
function showRaccoonsFound() {
    document.getElementById("birdOutOfNest").style.display = "none";
    document.getElementById("bunniesFound").style.display = "none";
    document.getElementById("squirrelOutOfNest").style.display = "none";
    document.getElementById("birdNoFly").style.display = "none";
    document.getElementById("raccoonsFound").style.display = "block";
}



function showBirthday() {
    document.getElementById("birthday").style.display = "block";
    document.getElementById("wildArt").style.display = "none";
    document.getElementById("artOfNature").style.display = "none";
    document.getElementById("hauntedWoods").style.display = "none";
    document.getElementById("artsAndCrafts").style.display = "none";
    document.getElementById("5K").style.display = "none";
    document.getElementById("photoContest").style.display = "none";
}
function showWildArt() {
    document.getElementById("birthday").style.display = "none";
    document.getElementById("wildArt").style.display = "block";
    document.getElementById("artOfNature").style.display = "none";
    document.getElementById("hauntedWoods").style.display = "none";
    document.getElementById("artsAndCrafts").style.display = "none";
    document.getElementById("5K").style.display = "none";
    document.getElementById("photoContest").style.display = "none";
}
function showArtOfNature() {
    document.getElementById("birthday").style.display = "none";
    document.getElementById("wildArt").style.display = "none";
    document.getElementById("artOfNature").style.display = "block";
    document.getElementById("hauntedWoods").style.display = "none";
    document.getElementById("artsAndCrafts").style.display = "none";
    document.getElementById("5K").style.display = "none";
    document.getElementById("photoContest").style.display = "none";
}
function showHauntedWoods() {
    document.getElementById("birthday").style.display = "none";
    document.getElementById("wildArt").style.display = "none";
    document.getElementById("artOfNature").style.display = "none";
    document.getElementById("hauntedWoods").style.display = "block";
    document.getElementById("artsAndCrafts").style.display = "none";
    document.getElementById("5K").style.display = "none";
    document.getElementById("photoContest").style.display = "none";
}
function showArtsAndCrafts() {
    document.getElementById("birthday").style.display = "none";
    document.getElementById("wildArt").style.display = "none";
    document.getElementById("artOfNature").style.display = "none";
    document.getElementById("hauntedWoods").style.display = "none";
    document.getElementById("artsAndCrafts").style.display = "block";
    document.getElementById("5K").style.display = "none";
    document.getElementById("photoContest").style.display = "none";
}
function show5K() {
    document.getElementById("birthday").style.display = "none";
    document.getElementById("wildArt").style.display = "none";
    document.getElementById("artOfNature").style.display = "none";
    document.getElementById("hauntedWoods").style.display = "none";
    document.getElementById("artsAndCrafts").style.display = "none";
    document.getElementById("5K").style.display = "block";
    document.getElementById("photoContest").style.display = "none";
}
function showPhotoContest() {
    document.getElementById("birthday").style.display = "none";
    document.getElementById("wildArt").style.display = "none";
    document.getElementById("artOfNature").style.display = "none";
    document.getElementById("hauntedWoods").style.display = "none";
    document.getElementById("artsAndCrafts").style.display = "none";
    document.getElementById("5K").style.display = "none";
    document.getElementById("photoContest").style.display = "block";
}

function showPEEP() {
    document.getElementById("peep").style.display = "block";
    document.getElementById("summerCamp").style.display = "none";
    document.getElementById("winterCamp").style.display = "none";
    document.getElementById("birders").style.display = "none";
}
function showSummer() {
    document.getElementById("peep").style.display = "none";
    document.getElementById("summerCamp").style.display = "block";
    document.getElementById("winterCamp").style.display = "none";
    document.getElementById("birders").style.display = "none";
}
function showWinter() {
    document.getElementById("peep").style.display = "none";
    document.getElementById("summerCamp").style.display = "none";
    document.getElementById("winterCamp").style.display = "block";
    document.getElementById("birders").style.display = "none";
}
function showBirders() {
    document.getElementById("peep").style.display = "none";
    document.getElementById("summerCamp").style.display = "none";
    document.getElementById("winterCamp").style.display = "none";
    document.getElementById("birders").style.display = "block";
}



function showVolunteer() {
    document.getElementById("volunteer").style.display = "block";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "none";
}
function showDine() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "block";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "none";
}
function showShop() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "block";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "none";
}
function showAdopt() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "block";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "none";
}
function showWish() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "block";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "none";
}
function showAmazon() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "block";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "none";
}
function showPledge() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "block";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "none";
}
function showCampaign() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "block";
    document.getElementById("kroger").style.display = "none";
}
function showKroger() {
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("dine").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("adopt").style.display = "none";
    document.getElementById("wish").style.display = "none";
    document.getElementById("amazon").style.display = "none";
    document.getElementById("pledge").style.display = "none";
    document.getElementById("campaign").style.display = "none";
    document.getElementById("kroger").style.display = "block";
}