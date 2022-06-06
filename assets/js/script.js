function toggleTheme() {

    const body = document.querySelector("body");

    const icon = document.getElementById("icon");

    if (body.className === 'dark') {

        body.className = 'light'

        icon.className = 'fa fa-moon-o'

    }

    else {

        body.className = 'dark'

        icon.className = 'fa fa-sun-o'

    }

}
