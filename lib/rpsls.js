// main file with rps and rpsls functions

const rpsChoices = ["rock", "paper", "scissors"];
const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"]; 

const outcomes = {
    "rock" : {
        "rock": "tie",
        "paper": "lose",
        "scissors": "win",
        "lizard": "win",
        "spock":"lose"
    },
    "paper" : {
        "rock": "win",
        "paper": "tie",
        "scissors": "lose",
        "lizard": "lose",
        "spock":"win"
    },
    "scissors" : {
        "rock": "lose",
        "paper": "win",
        "scissors": "tie",
        "lizard": "win",
        "spock":"lose"
    },
    "lizard" : {
        "rock": "lose",
        "paper": "win",
        "scissors": "lose",
        "lizard": "tie",
        "spock":"win"
    },
    "spock" : {
        "rock": "win",
        "paper": "lose",
        "scissors": "win",
        "lizard": "lose",
        "spock":"tie"
    }
};

export default{
    rpsChoices: rpsChoices,
    rpslsChoices: rpslsChoices,

    rpsNoArg: function(){
        return(
            {player: rpsChoices[Math.floor(Math.random()*3)]}
        );
    },

    rpsArg: function(move){

        const opponentMove = rpsChoices[Math.floor(Math.random()*3)];

        return (
            {
                player: move,
                opponent: opponentMove,
                result: outcomes[move][opponentMove]
            }
        );
    },

     rpslsNoArg: function(){
        return(
            {player: rpslsChoices[Math.floor(Math.random()*3)]}
        );
    },

    rpslsArg: function(move){

        const opponentMove = rpslsChoices[Math.floor(Math.random()*3)];

        return (
            {
                player: move,
                opponent: opponentMove,
                result: outcomes[move][opponentMove]
            }
        );
    },
 
}











