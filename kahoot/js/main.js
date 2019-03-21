// ================USER====================

// ==============ADD USER=================
// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://127.0.0.1:5000/addUser?");
// xhr.setRequestHeader("Content-Type", "application/json")
// xhr.send(JSON.stringify({
//     "username" : "dumpak",
//     "password" : "dumpek",
//     "email" : "dumdumpak@.com"
// }));

// xhr.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         // response = JSON.parse(this.response);
//         console.log(response)
//         // alert(response.message)
//     } else if(this.readyState == 4){
//         // response = JSON.parse(this.response);
//         console.log(response)
//         // alert(response.message)
//     }
// }
// ============================================

// ==============GET ALL USER==================
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://127.0.0.1:5000/getAllUsers");
// xhr.send();
// xhr.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status < 400){
//         // console.log(this.response)
//         var resp = JSON.parse(this.response)
//         console.log(resp)
//     }else if(this.readyState == 4){
//         console.log(this.response)
//     }
// }

// ==================UPDATE=================
// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://127.0.0.1:5000/updateUser/17");
// xhr.setRequestHeader("Content-Type", "application/json")
// xhr.send(JSON.stringify({
//     "username": "update dari js",
//     "password": "jsAja",
//     "email": "ddari_JS@.com"
// }));

// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // response = JSON.parse(this.response);
//         console.log(response)
//         // alert(response.message)
//     } else if (this.readyState == 4) {
//         // response = JSON.parse(this.response);
//         console.log(response)
//         // alert(response.message)
//     }
// }

// var xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange = function (){
//     if (this.readyState == 4 && this.status == 200){
//         var username = JSON.parse(this.responseText)
//         console.table(username)
//         for (i = 0; i < username.length; i++){
            // username[i]
            // vanilla javascrip
            // var node = document.createElement('LI')
            // var textNode = document.createTextNode(username[i].name)
            // node.appendChild(textNode)
            // document.getElementById('username').appendChild(node)

            // jquery
//             $('ol#username').append('<li>' + username[i].name + '</li>')
//         }
//     }
// }

// open (method,url,asyns)
// xhttp.open('GET','http://5aa22b1915bf10001492f18c.mockapi.io/belajarxmlhttprequest', true)
// xhttp.send()


// jquery ajax
// sama seperti xmlHttpRequest
// sama seperti xmlHttpRequest
// $.ajax({
//     url: 'http://5aa22b1915bf10001492f18c.mockapi.io/belajarxmlhttprequest',
//     method: 'POST',
    // type: 'GET
    // data:[],{}, string, int, JSON, stringify,[{}] --> kalo misalnya api 
    // success: function(username){
    //     for(var i = 0; i < username.length; i++){
    //         $('ol#username').append('<li>' + username[i].name + '</li>')
    //     }
    // },
    // error: function(){
        // error handling
//         var error = "eror coeg"
//         console.log(error)
//     },
//     complete: function(){

//     }

// })

// register ====================================
// function register() {
//     var username = document.getElementById('username-form').value
//     var password = document.getElementById('password-form').value
//     var email = document.getElementById('email-form').value
//     console.log(username)
//     console.log(password)
//     console.log(email)
//     // Jquery
//     // var username = $('input#username-form').val
//     // var password = $('input#password-form').val

//     $.ajax({
//         url: 'http://127.0.0.1:5000/addUser?',
//         method: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify({
//             username: username,
//             password: password,
//             email: email
//         }),
//         success: function (response) {
//             window.location.href = 'quizlist.html'
//         },
//         error: function () {
//             alert("gagal log in")
//         },
//         complete: function () {
//             console.log("apa ini")
//         }
//     })

// }
// uregister ====================================


// function log in ======================================
function login(){
    var username = document.getElementById('username-form').value
    var password = document.getElementById('password-form').value
    console.log(username)
    console.log(password)
    // Jquery
    // var username = $('input#username-form').val
    // var password = $('input#password-form').val

    $.ajax({
        url: 'http://127.0.0.1:5000/login',
        method: 'POST',
        contentType: 'application/json',
        data:JSON.stringify({
            username: username,
            password: password
        }),
        success: function(response){
            window.location.href = 'quizlist.html'
        },
        error: function(){
            alert("gagal log in")
        },
        complete: function(){
            console.log("apa ini")
        }
    })

}
// function log in ======================================


// LOOPING QUZZES========================================
// jquery ajax
// sama seperti xmlHttpRequest
// sama seperti xmlHttpRequest
$.ajax({
    url: 'http://127.0.0.1:5000/getAllQuizzes',
    method: 'GET',
    // type: 'GET,
    // data:[],{}, string, int, JSON, stringify,[{}] --> kalo misalnya api 
    success: function(quizzes){
        for(var i = 0; i < quizzes.length; i++){
            var card =
            `
                <div class="card" style="border:0; width: 15rem">
                <img class="card-img-top" src="img/kiw.png" alt="Card image cap">
                <div class="card-body" style="padding-top: 0;">
                <p class="card-text" style="margin-bottom: 0px;">Quiestions : ${quizzes[i].question_list.length}</p>
                <a href=><h6 class="card-title" style="color: black">${quizzes[i].quiz_name}</h6></a>
                <a href="questionList.html?quiz_id=${quizzes[i].quiz_id}"><button type="button" class="btn btn-success">Play</button></a>
                </div>
                </div>
            `
            $('#quiz').append(card)
            
        }
    }
})
// LOOPING QUZZES========================================
