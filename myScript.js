function screenChange(color) {
    const screen2 = document.getElementById("screenTwo");
    const screen3 = document.getElementById("screenThree");
    const off = document.getElementById("offScreen");

    if (color == 'red') {
        screen2.style.display = 'none';
        screen3.style.display = 'none';
        if (off.style.display == 'block') {
            off.style.display = 'none';
        } else {
            off.style.display = 'block';
        }
    }
    
    if (color == 'blue') {
        screen3.style.display = 'none';
        screen2.style.display = 'block';
    }

    if (color == 'green') {
        screen3.style.display = 'block';
    }

}

function switchCSS() {
    console.log('button pressed', )
    if (localStorage.currentTheme == null) {
        localStorage.currentTheme = "styles2.css";
        console.log('currentTheme is null', );
    } else if (localStorage.currentTheme == "styles2.css") {
        localStorage.currentTheme = "styles.css";
    } else {
        localStorage.currentTheme = "styles2.css";
    }

    updateTheme();
}

updateTheme();

function updateTheme() {
    var theme = document.getElementById("CSSLink");
        if (localStorage.currentTheme == "styles.css") {
            theme.setAttribute("href", "styles.css");
        } 

        if (localStorage.currentTheme == "styles2.css") {
            theme.setAttribute("href", "styles2.css");
        } 
}