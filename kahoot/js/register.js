
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    
})(jQuery);

// REGISTER ========
function register(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    console.log(username);
    console.log(email);
    console.log(password);

    $.ajax({
        url: 'http://127.0.0.1:5000/addUser?',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            username: username,
            email: email,
            password: password
        }),
        success: function(){
            alert("anda berhasil bergabung")
            window.location.href = 'quizlist.html'
        },
        error: function(){
            alert("andah gagal bergabung")
        },
        complete: function(){
            console.log("mantul")
        }
    })
}   
// REGISTER ========

// ADD QUIZ ========
function createQuiz() {
  var creator = document.getElementById("creator_id").value;
  var name = document.getElementById("quiz_name").value;
  var category = document.getElementById("quiz_category").value;
  console.log(creator);
  console.log(name);
  console.log(category);

  $.ajax({
    url: "http://127.0.0.1:5000/addQuiz",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      creator_id: creator,
      quiz_name: name,
      quiz_category: category
    }),
    success: function() {
      alert("quiz telah siap");
        window.location.href = "createQuestion.html";
    },
    error: function() {
      alert("andah gagal bergabung");
    },
    complete: function() {
      console.log("mantul");
    }
  });
}   
// ADD QUIZ ========


// ADD QUESTION
function createQuestion() {
    var quiz_id = document.getElementById("quiz").value;
    var question_number = document.getElementById("number").value;
    var question = document.getElementById("question").value;
    var answer = document.getElementById("answer").value
    var answerA = document.getElementById("answerA").value
    var answerB = document.getElementById("answerB").value
    var answerC = document.getElementById("answerC").value
    var answerD = document.getElementById("answerD").value
    console.log(quiz_id);
    console.log(question_number);
    console.log(question);
    console.log(answer);
    console.log(answerA);
    console.log(answerB);
    console.log(answerC);
    console.log(answerD);




    $.ajax({
        url: "http://127.0.0.1:5000/addQuestion",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            quiz_id: quiz_id,
            question_number: question_number,
            question: question,
            answer: answer,
            option_list:{
            a: answerA,
            b: answerB,
            c: answerC,
            d: answerD
            }
        }),
        success: function () {
            alert("anda berhasil menambahkan question");
        },
        error: function () {
            alert("andah gagal membuat question");
        },
        complete: function () {
            console.log("mantul");
        }
    });
} 
// ADD QUESTION
