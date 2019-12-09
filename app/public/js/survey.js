let questionBank = [
    "I see myself as extraverted, enthusiastic.",
    "I see myself as critical, quarrelsome.",
    "I see myself as dependable, self-disciplined.",
    "I see myself as anxious, easily upset.",
    "I see myself as open to new experiences, complex.",
    "I see myself as reserved, quiet.",
    "I see myself as sympathetic, warm.",
    "I see myself as disorganized, careless.",
    "I see myself as calm, emotionally stable.",
    "I see myself as conventional, uncreative."
];

// display questions from questionBank
for (let i = 1; i < questionBank.length + 1; i++) {
    $('#questions').append('<hr>')
    $("#questions").append("Question " + i + "<br>" + questionBank[i - 1]).append('<br>');
    $("#questions").append([
        $('<select/>', { 'class': 'selectpicker', 'id': 'q' + i }).append([
            $('<option/>', { 'text': ' ' }),
            $('<option/>', { 'text': 'Strongly Agree', 'id': '5' }),
            $('<option/>', { 'text': 'Agree', 'id': '4' }),
            $('<option/>', { 'text': 'Neutral', 'id': '3' }),
            $('<option/>', { 'text': 'Disagree', 'id': '2' }),
            $('<option/>', { 'text': 'Strongly Disagree', 'id': '1' }),
        ])
    ])
}

// when survey submit button is clicked validate entries and transfer data to friends list
$(document).ready(function () {
    $("#submitSurvey").on("click", function (event) {
        event.preventDefault();
        function validateForm() {
            let isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            $(".selectpicker").each(function () {
                if (parseInt($(this).val() === "")) {
                    isValid = false;
                }
            });
            return isValid;
        }
        if (validateForm()) {
            let userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };
            $.post("/api/friends", userData, function (data) {
                $("#match-name").text(data.name);
                $("#match-img").attr("src", data.photo);
                $("#results-modal").modal("toggle");
            });

        }
        else {
            alert("Please fill out all fields.");
        }
    });
});
