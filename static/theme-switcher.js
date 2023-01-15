function Switch() {
    element = document.getElementById("main")
    header_elem = document.getElementById("box-heading")
    btn = document.getElementById("theme_switcher")
    //teller = document.getElementById("teller")
    hrs = document.getElementsByTagName("HR")
    dark_theme = "default-background-color"
    white_theme = "default-background-color-white"
    if (element.classList.value == dark_theme) {
        element.classList.value = white_theme
        header_elem.classList.value = "w3-teal"
        for (i = 0; i < hrs.length; i++) {
            hr_elem = hrs[i]
            hr_elem.classList.value = 'light_mode'
        }
        btn.classList.value = 'w3-btn w3-right w3-teal'
        btn.innerHTML = "&#9790;"
    }
    else {
        element.classList.value = dark_theme
        header_elem.classList.value = 'w3-dark-teal'
        for (i = 0; i < hrs.length; i++) {
            hr_elem = hrs[i]
            hr_elem.classList.value = 'dark_mode'
        }
        btn.classList.value = 'w3-btn w3-right w3-dark-teal'
        btn.innerHTML = "&#9788;"
    }
}
