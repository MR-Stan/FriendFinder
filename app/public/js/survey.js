console.log("bag of dicks");

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

for (let i = 1; i < questionBank.length + 1; i++) {
    $('#questions').append('<hr>')
    $("#questions").append("Question " + i + "<br>" + questionBank[i - 1]).append('<br>');
    $("#questions").append([
        $('<select/>', { 'class': 'selectpicker' }).append([
            $('<option/>', { 'text': ' ' }),
            $('<option/>', { 'text': 'Strongly Agree', 'id': '5' }),
            $('<option/>', { 'text': 'Agree', 'id': '4' }),
            $('<option/>', { 'text': 'Neutral', 'id': '3' }),
            $('<option/>', { 'text': 'Disagree', 'id': '2' }),
            $('<option/>', { 'text': 'Strongly Disagree', 'id': '1' }),
        ])
    ])
}