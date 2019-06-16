$( document ).ready(function() {
    //set wins, losses, and users total score to 0
    var wins = 0;
    var losses = 0;
    var userScore;
    var message;
    var winningNumber;
    var gemstoneValues;
    
    function init(){
        userScore = 0;
        winningNumber = Math.floor( (Math.random()*120) + 1);
        $("#game-winning-number").text(winningNumber);
        $("#game-message").text(message);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#user-score").text(userScore);
        $(".gemstone").each(function setgemstonepointvalues(){
            gemstoneValues = Math.floor( (Math.random()*12) + 1);
            $(this).attr('pointValue', gemstoneValues);
        });
    }

    //INIT ON DOC READY
    init();

    //START THE GAME BY CLICKING ON A GEMSTONE
    $(".gemstone").click(function game(){
        userScore = parseInt(userScore);
        userScore = userScore + parseInt(($(this).attr("pointValue")));
        $("#user-score").text(userScore);
        
        //WIN SCENARIO
        if (userScore === winningNumber) {
            message = "You won!";
            wins = ++wins;
            console.log(wins);
            init();
        }
        if (userScore > winningNumber) {
            message = "You lost";
            losses = ++losses;
            init();
        }



        //LOSS SCENARIO



    });
    //END OF GEMSTONE CLICK EVENT










});