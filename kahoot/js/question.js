// LOOPING ANSWER========================================
// jquery ajax
// sama seperti xmlHttpRequest
// sama seperti xmlHttpRequest
var url_string = window.location.href
var url = new URL(url_string);
var quiz_id = Number(url.searchParams.get("quiz_id"));


$.ajax({
    url: `http://127.0.0.1:5000/getQuizBy/${quiz_id}`,
    method: 'GET',
    // type: 'GET,
    // data:[],{}, string, int, JSON, stringify,[{}] --> kalo misalnya api 
    success: function (quizzes) {
        for (var i = 0; i < quizzes['question_list'].length; i++) {
            var card =
                `
                    <div class="card bg-light mb-3">
                        <div class="card-body" style="padding: 1rem; margin-bottom: 10px;">
                            <p class="card-text">${quizzes['question_list'][i]['question']}</p>
                        </div>
                    </div>
            `
            $('#question').append(card)

        }
    }
})
// LOOPING ANSWER========================================