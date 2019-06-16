$( document ).ready(function() {
    //set wins, losses, and users total score to 0
    var wins;
    var losses;
    var userScore;
    var message;
    var winningNumber;
    var gemstoneValues;
    
    function init(){
        wins = 0;
        losses = 0;
        userScore = 0;
        message = "";
        winningNumber = Math.floor( (Math.random()*120) + 1);
        $("#game-winning-number").append(winningNumber);
        $("#wins").text(message);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#user-score").text(userScore);
        $(".gemstone").each(function setgemstonepointvalues(){
            gemstoneValues = Math.floor( (Math.random()*12) + 1);
            $(this).attr('pointValue', gemstoneValues);
        });
    }
    init();

    //START THE GAME BY CLICKING ON A GEMSTONE
    $(".gemstone").click(function game(){
        userScore = parseInt(userScore);
        userScore = userScore + parseInt(($(this).attr("pointValue")));
        $("#user-score").text(userScore);
        



    });
    //END OF GEMSTONE CLICK EVENT










});