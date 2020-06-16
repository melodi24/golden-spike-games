function populateGameTable() {
    let games = [
    {
        "name":"1812",
        "cost":"130",
        "weight":"45"
    },
    {
        "name":"1826",
        "cost":"115",
        "weight":"48"
    },
    {
        "name":"1832",
        "cost":"126",
        "weight":"50"
    },
    {
        "name":"1841v2",
        "cost":"175",
        "weight":"68"
    },
    {
        "name":"1846",
        "cost":"121",
        "weight":"43"
    },
    {
        "name":"1850",
        "cost":"121",
        "weight":"47"
    },
    {
        "name":"1854",
        "cost":"128",
        "weight":"53"
    },
    {
        "name":"1889",
        "cost":"105",
        "weight":"??"
    },
    {
        "name":"18Ardennes",
        "cost":"148",
        "weight":"52"
    },
    {
        "name":"18Dixie*",
        "cost":"203",
        "weight":"70"
    },
    {
        "name":"18EU",
        "cost":"118",
        "weight":"??"
    },
    {
        "name":"18FL",
        "cost":" 99",
        "weight":"39"
    },
    {
        "name":"18GB",
        "cost":"156",
        "weight":"54"
    },
    {
        "name":"18GL",
        "cost":"125",
        "weight":"54"
    },
    {
        "name":"18NY",
        "cost":"152",
        "weight":"49"
    },
    {
        "name":"18Neb",
        "cost":"114",
        "weight":"42"
    },
    {
        "name":"18PA",
        "cost":"123",
        "weight":"43"
    },
    {
        "name":"18Scan",
        "cost":" 89",
        "weight":"??"
    },
    {
        "name":"18TN",
        "cost":"106",
        "weight":"41"
    },
    {
        "name":"18US",
        "cost":"143",
        "weight":"51"
    },
    {
        "name":"18VA",
        "cost":" 91",
        "weight":"??"
    },
    {
        "name":"18West",
        "cost":"133",
        "weight":"49"
    }
]

    let tableBody = document.getElementById("pricing-table");
    for (let game of games) {
        let row = tableBody.insertRow(-1);

        let nameCell = row.insertCell(0);
        let costCell = row.insertCell(1);
        let weightCell = row.insertCell(2);

        nameCell.classList.add("left-col");
        costCell.classList.add("left-col");

        nameCell.innerHTML = game.name;
        costCell.innerHTML = '$' + game.cost;
        weightCell.innerHTML = game.weight + ' oz';


    }
}

function changeContent(page) {
    document.getElementById("content").className = page;
    $("html, body").animate({ scrollTop: "0"}, 500);
}

function toggleShippingDetails() {
    $("#shipping-details").toggleClass("show");
    $("#caret").toggleClass("down");

}

$(window).on("load resize scroll", function() {
    $("body").each(function() {
        let windowTop = $(window).scrollTop();
        let elementTop = $(this).offset().top;
        let leftPosition = (windowTop - elementTop)/-2.8;
        $(this)
            .find("#background-scroll")
            .css({ 'background-position': leftPosition });

        //clouds
        let leftPositionSlower = leftPosition/4;
        $(this)
            .find("#background-clouds")
            .css({ 'background-position-x': leftPositionSlower });

    });
});
