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
]

for (let i = 1; i < questionBank.length + 1; i++) {
    $('#questions').append('<hr>')
    $("#questions").append("Question " + i + "<br>" + questionBank[i - 1]);
    $("#questions").append([
        $('<div/>', { 'class': 'dropdown' }),
        $('<button/>', { 'class': 'btn btn-secondary dropdown-toggle', 'type': 'button', 'id': 'dropdownMenuButton', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', 'text': '       ' }).append([
            $('<div/>', { 'class': 'dropdown-menu', 'area-labelledby': 'dropdownMenuButton' }).append([
                $('<a/>', { 'class': 'dropdown-item', 'href': '#', 'text': 'Strongly Agree', 'id': 'answer1', }),
                $('<a/>', { 'class': 'dropdown-item', 'href': '#', 'text': 'Agree', 'id': 'answer2', }),
                $('<a/>', { 'class': 'dropdown-item', 'href': '#', 'text': 'Meh', 'id': 'answer3', }),
                $('<a/>', { 'class': 'dropdown-item', 'href': '#', 'text': 'Disagree', 'id': 'answer4', }),
                $('<a/>', { 'class': 'dropdown-item', 'href': '#', 'text': 'Stronly Disagree', 'id': 'answer5', }),
            ])
        ])
    ])
}