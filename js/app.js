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

var allQuestions = musicQues[Math.floor(Math.random() * musicQues.length)];

// Create click even that starts game at first question
$('#playBtn').on('click', function(){
  // Toggle away intro text
  $('#intro').toggle();
  // Toggle in the quiz questions
  $('#quizBox').fadeIn(500,'swing',function(){
    // Add question and answer text to the page
    $('.question').text(allQuestions);
    musicQues.forEach(function(question,i){
      $('.questionNum').eq(i).text(`Question ${i + 1}`)
      $('.answerBtn').eq(i).text(answers.ans1[i]);
      console.log(i);
    });
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
