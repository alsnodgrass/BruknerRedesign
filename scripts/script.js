/* 
File:   script.js
Name:   Austin Snodgrass
Date:   09 December 2020
Desc:   File creates out functions that will impact the the information shown in their respective pages. Functions are changing
    the disaply value for each of the IDs provided
*/

/* Functions that impact information shown in Visit page */
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

/* Functions that impact information shown in Wildlife Rehab page */
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

/* Functions that impact information shown in Events page */
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

/* Functions that impact information shown in Programs page */
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

/* Functions that impact information shown in Support page */
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