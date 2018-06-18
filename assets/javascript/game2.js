$(document).ready(function(){
    var randomNum = Math.floor(Math.random() * 101) + 19;
    
    $("#number").text(randomNum);

    var sum = 0;
    var wins = 0;
    var losses = 0;

    $("#win").text(wins);
    $("#loss").text(losses);

    $("#popup").hide();

    function reset() {
        $("#number").text(randomNum);
        $("win").text(sum);
        sum = 0;
        $("#popup").hide();
    };

    function win(){
        wins++;
        $("#win").text(wins);
        reset();
        $("#popup").fadeIn(1000).text("You Sir/Ma'am are a Crystal Master");
        $("#popup").fadeIn(1000).prepend('<img id="winImg" src="assets/images/BBking.jpg" />');
    };

    function loss(){
        losses++;
        $("#loss").text(losses);
        reset();
        $("#popup").fadeIn(1000).text("RUN FOR YOUR LIFE! The Crystal Villlage associates you as a fraud!! You were supposed to be 'The Choosen One' but you have failed them and now they are coming after you with pitch-forks and knives...");
        $("#popup").fadeIn(1000).prepend('<img id="lossImg" src="assets/images/mob.jpg" />');
    };

    var crystalValues = {};
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);

    function getCrystal(key){
        return function(){
            sum = sum + crystalValues[key];
            $("#scoreNumber").text(sum);

            if(sum === randomNum){
                win();
            } else if(sum > randomNum){
                loss();
            }
        }
    }
    
    $("#blue").on("click", getCrystal(1));
    $("#green").on("click", getCrystal(2));
    $("#red").on("click", getCrystal(3));
    $("#yellow").on("click", getCrystal(4));

})