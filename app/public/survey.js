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

for (let i = 1; i < 11; i++) {
    $("#questions").append("<br>" + "Question " + i + "<br>" + questionBank[i - 1]);
    // $("#questions").append(
    //     "<div class="dropdown">
    //         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Dropdown button
    //         </button>
    //         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //             <a class="dropdown-item" href="#">Action</a>
    //             <a class="dropdown-item" href="#">Another action</a>
    //             <a class="dropdown-item" href="#">Something else here</a>
    //         </div>
    //     </div>"
    // );
}