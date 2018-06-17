var randomNum = Math.floor(Math.random() * 101) + 19;

$("#number").append(randomNum);


var wins = 0;
var losses = 0;

// var crystalVal = Math.floor(Math.random() * 11) + 1;

var crystalVal1 = Math.floor(Math.random() * 11) + 1;
var crystalVal2 = Math.floor(Math.random() * 11) + 1;
var crystalVal3 = Math.floor(Math.random() * 11) + 1;
var crystalVal4 = Math.floor(Math.random() * 11) + 1;

console.log(crystalVal1);
console.log(crystalVal2);
console.log(crystalVal3);
console.log(crystalVal4);

var result = 0;

$("#blue").on('click', function(){
    var blue = $("#blue").val(crystalVal1);
    console.log(blue);
    result += parseInt(blue.value)
    console.log(result);
});

$("#green").on('click', function(){
    var green = $("#green").val(crystalVal2);
    console.log(green.val());
});

$("#red").on('click', function(){
    var red = $("#red").val(crystalVal3);
    console.log(red.val());
});

$("#yellow").on('click', function(){
    var yellow = $("#yellow").val(crystalVal4);
    console.log(yellow.val());
});


if(result > randomNum){
    var lossCount = losses++;
} else if(result === randomNum){
    var winCount = wins++;
}

$("#win").html(winCount);
$("#loss").html(lossCount);

// for(var i = 0; i < 4; i++){
//     var crystalVal = Math.floor(Math.random() * 11) + 1;
//     console.log(crystalVal);

//     var crystal = $("<div>");
//     crystal.attr({
//         "class": 'crystal',
//         "data": crystalVal
//     });

//     $(".btn").append(crystal);
// }

// $(document).ready(function(){
//     $(".btn").click(function(){
//         $("#blue").val(crystalVal);
//         console.log(crystalVal);
//     });

//     $(".btn").click(function(){
//         $("#green").val(crystalVal);
//         console.log(crystalVal);
//     });

//     $(".btn").click(function(){
//         $("#red").val(crystalVal);
//         console.log(crystalVal);
//     });

//     $(".btn").click(function(){
//         $("#yellow").val(crystalVal);
//         console.log(crystalVal);
//     });
// });