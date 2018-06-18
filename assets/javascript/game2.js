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
        $("#popup").fadeIn(1000);
        $("#popup").text("You Sir/Ma'am are a Crystal Guru!!" + "<br>" + "The Crystal Village has heard of your legendary skills and are rushing down to make you their King/Queen!!")
    };

    function loss(){
        losses++;
        $("#loss").text(losses);
        reset();
        $("#popup").fadeIn(1000);
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

    // function winPopUp(){
    //     $("#popup")
    // }

    // function losePopUp(){

    // }

})