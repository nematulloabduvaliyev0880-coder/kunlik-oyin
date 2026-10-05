let challenge = document.getElementById("challenge");
let result = document.getElementById("result");

let done = document.getElementById("done");
let newChallenge = document.getElementById("newChallenge");


done.onclick = function() {

    result.innerHTML = "🔥 Zo‘r! Challenge bajarildi!";

};


newChallenge.onclick = function() {

    challenge.innerHTML = "20 daqiqa kitob o‘qi";

    result.innerHTML = "";

};