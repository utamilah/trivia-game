// Creat Object that holds all questions and answers
// var musicQuestions = {
//   var question1 = {
//     question: 'Pharetra Tristique Ridiculus Mattis Ullamcorper',
//     choices: ['A','B','C'],
//     correct: musicQuestions.choices[1]
//   }
// }

// var correct1 = musicQuestions.choices[1];

// Create objects that hold questions
  var musicQues = [
    'Pharetra Tristique Ridiculus Mattis Ullamcorper',
    'Ullamcorper Cursus Fermentum Ornare Sem',
    'Donec id elit non mi porta gravida at eget metus.',
    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    'Sem Justo Vulputate Fringilla',
    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    'Aenean Euismod Sit Mattis Pellentesque',
    'Fermentum Nibh Aenean',
    'Condimentum Fringilla Risus Ornare Euismod',
    'Egestas Ridiculus Quam Pellentesque'
  ];

// Create multiple choice object
  var answers = {
     ans1: ['A','B','C'],
     ans2: ['A','B','C'],
     ans3: ['A','B','C'],
     ans4: ['A','B','C'],
     ans5: ['A','B','C'],
     ans6: ['A','B','C'],
     ans7: ['A','B','C'],
     ans8: ['A','B','C'],
     ans9: ['A','B','C'],
     ans10: ['A','B','C']
  };

// Various Variables
var allQuestions = musicQues[Math.floor(Math.random() * musicQues.length)];
var giveAnswer = function(){

}

$('.answerBtn').on('click', giveAnswer);

// Switch Case that pairs all questions to answers
switch (allQuestions) {
  case musicQues[0]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans1[i]);
  });
    break;
  case musicQues[1]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans2[i]);
  });
  var correct = answers.ans1[2];
  break;

  case musicQues[2]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans3[i]);
  });
  var correct = answers.ans1[3];
  break;

  case musicQues[3]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans4[i]);
  });
  break;

  case musicQues[4]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans5[i]);
  });
  var correct = answers.ans1[1];
  break;

  case musicQues[5]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans6[i]);
  });
  break;

  case musicQues[6]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans7[i]);
  });
  break;

  case musicQues[7]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans8[i]);
  });
  break;

  case musicQues[8]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans9[i]);
  });
  break;

  case musicQues[9]:
  musicQues.forEach(function(question, i) {
    $('.questionNum').eq(i).text(`Question ${i + 1}`);
    $('.answerBtn').eq(i).text(answers.ans10[i]);
  });

  default:

}

// Create click even that starts game at first question
$('#playBtn').on('click', function(){
  // Toggle away intro text
  $('#intro').toggle();
  // Toggle in the quiz questions
  $('#quizBox').fadeIn(500,'swing',function(){
    // Add question and answer text to the page
    $('.question').text(allQuestions);
  });
});

// Question Functions


  // Create a click event that reveals the correct answer after an answer is clicked
  // Highlight correct answer with green
  // Highlight incorrect answer with red if applicable
  // Append 'next' button after questions are answered, create click event that adds next question to the screen

  // $('body').append("<a id='playBtn' href='#'>Let's Play!</button>");
  //
  // console.log('working');
  // function addAnsrs(){
  //   $('#quizBox').append('<h1>Question</h1>')
  //   for(var i=0; i < 3; i++) {
  //     $('#quizBox').append('<a href="#" class="answerBtn">Ans 1</a>')
  //   }
  // }

  // $('#playBtn').on('click', addAnsrs);
