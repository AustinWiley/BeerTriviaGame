var questions = [
    {
        question: "Who had established his own brewhouse on the grounds of Mount Vernon?",
        choices: ["George Washington","Jefferson", "Ben Franklin", "Hamilton"],
        answer: "George Washington"
    },

    {
        question: "What beer was the first beer to win a blue ribbon at the Chicago World's Fair in 1893?",
        choices: ["Coors","Budwieser", "Pabst", "Haams"],
        answer: "Pabst"
    },

    {
        question: "What is the oldest brewery in The United States?",
        choices: ["Samuel Adams","Anheuser-Busch", "New Belgium", "Yuengling"],
        answer: "Yuengling"
    },

    {
        question: "What state has had more breweries in its history than any other state?",
        choices: ["Colorado","California", "Pennsylvania", "Main"],
        answer: "Pennsylvania"
    },

    {
        question: "what is the name of the German Brewing Purity law?",
        choices: ["Das Boot","Schwierig", "Reinheitsgebot", "Hässlich"],
        answer: "Reinheitsgebot"
    },

    {
        question: "Which ingredient was the last to be added to theGerman Brewing Purity Law",
        choices: ["Water","Malt", "Yeast", "Hops"],
        answer: "Yeast"
    },

    {
        question: "which brewery had the first registered trade mark ever?",
        choices: ["Stella","Bass", "Guinness", "East India company"],
        answer: "Bass"
    },

    {
        question: "Which ancient type of beer was fermented with a new borns first poop?",
        choices: ["Guit","Mead", "Chicha", "Kvass"],
        answer: "Chicha"
    },

    {
        question: "What is the oldest beer brand still being produced today",
        choices: ["Augustiner","Weihenstephan", "Chimay", "Duval"],
        answer: "Weihenstephan"
    },

    {
        question: "What Denver Brewery makes the best beer?",
        choices: ["Spangalang","Denver Beer Co", "Great Divide", "Cheluna"],
        answer: "Spangalang"
    },


   
    ]

var time = 60
var interval = 0
var qNumber = 0
var gameDone = false
var correct = 0
var incorrect = 0
var unAnswered = questions.length;

// $("body").on("change", "input", function(e) {
//     console.log(e.target);
//     var questionIndex = $(this).attr("data-number")
//     console.log(questionIndex);
// })

    function startGame() {
        var newQuestion = $("<p>")
        newQuestion.text(questions[qNumber].question);
        $("#questions").append(newQuestion)
        var newForm = $("<form>")
        newForm.attr("id", "form" + qNumber);
        $("#questions").append(newForm)

        for(i = 0; i < 4; i++) {
            var newLabel = $("<label>")
            newLabel.html("     " + questions[qNumber].choices[i] + "<input type='radio' name='answere' data-number='" + qNumber + "' value='" + questions[qNumber].choices[i] +"'>")
            $("#form" + qNumber).append(newLabel)
        }

        $("#questions").append("<br><hr>")
        qNumber++;
    }

    function endGame() {
        $("#game").empty();
        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
        $("#un-answered").text("Un-Answered: " + unAnswered);
    }

    function start() {
              interval = setInterval(count, 1000);
      }


    function count() {
        time--;
        var converted = timeConverter(time);
    
        //Use the variable we just created to show the converted time in the "display" div.
        $("#display").text(converted);
        
        // checks if the time is up    
        if (time < 0) {
            clearInterval(interval)
            endGame()
          }    
      }

// this function converts the variable time in 00:00 and returns it      
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
        seconds = "0" + seconds;
        }

        if (minutes === 0) {
        minutes = "00";
        }
        else if (minutes < 10) {
        minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

// on click listener
  $(document).on("click", "#submit", function() {
    if (!gameDone) {

        for (j = 0; j < questions.length; j++) {
            startGame()
        }

        gameDone = true
        $("#submit").text("Done")
        $("#display").text("00:00");
        start()
    }
    
    else if (gameDone) {
        endGame()  
    }

});

function score(y, x) {
    
        if (x === questions[y].answer) {
            correct++;
            unAnswered--;
        }

        else {
            incorrect++;
            unAnswered--;
        }
}


$("body").on("change", "input", function(e) {

    // console.log(e.target);
    x =$(this).val();

    y = $(this).attr("data-number");
    y = parseInt(y)

    score(y, x)
})