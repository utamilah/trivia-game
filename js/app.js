$(document).ready(function(){
  $('body').append("<a id='playBtn' href='#'>Let's Play!</button>");

  console.log('working');
  function addAnsrs(){
    for(var i=0; i < 3; i++) {
      $('#quizBox').append('<a href="#" class="answerBtn">Ans 1</a>')
    }
  }

  $('#playBtn').on('click', addAnsrs);
});
