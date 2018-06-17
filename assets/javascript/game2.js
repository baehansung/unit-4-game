$(document).ready(function(){
    var randomNum = Math.floor(Math.random() * 101) + 19;
    
    $("#number").text(randomNum);

    var crystalVal1 = Math.floor(Math.random() * 11) + 1;
    var crystalVal2 = Math.floor(Math.random() * 11) + 1;
    var crystalVal3 = Math.floor(Math.random() * 11) + 1;
    var crystalVal4 = Math.floor(Math.random() * 11) + 1;

    var sum = 0;
    var wins = 0;
    var losses = 0;

    $("#win").text(wins);
    $("#loss").text(losses);

    function reset() {
        $("#number").text(randomNum);
        $("win").text(sum);
    };

    function win(){
        wins++
        $("#number").text(wins);
    }
})