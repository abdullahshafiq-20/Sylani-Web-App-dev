

function month21()
{
    const month = document.getElementById("month").value;
    const display = document.getElementById("display21");
    const result = document.getElementById("result21");
    const body = document.body;
    body.classList.remove("winter", "spring", "summer", "autumn");

    switch(month)
    {
        case"nov":
        case"dec":
        case"jan":
        {
            display.innerHTML = "Winter";
            body.classList.add("winter");
        }
        break;
        case"feb":
        case"mar":
        case"apr":
        {
            display.innerHTML = "Spring";
            body.classList.add("spring");
        }
        break;
        case"may":
        case"jun":
        case"jul":
        {
            display.innerHTML = "Summer";
            body.classList.add("summer");
        }
        break;
        case"aug":
        case"sep":
        case"oct":
        {
            display.innerHTML = "Autumn";
            body.classList.add("autumn");
        }
        break;
        default:
            {
                display.innerHTML = "Please select a month.";
            }
    }

}