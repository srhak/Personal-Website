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