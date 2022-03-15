var realAnswer = 15

function checkAnswer(answer){
    if(answer === realAnswer){
        console.log('სწორია')
        return true
    }else {
        console.log('არასწორია')
        return false
    }
}

var cases = 0;

var studentsAnswers = [12, 25, 15, 820, 15, 12, 15];

for(var i =0; i < studentsAnswers.length; i++){
    if(checkAnswer(studentsAnswers[i])){
        cases ++
    }
}

