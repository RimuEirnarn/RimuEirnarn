count = 0
try {
    base_sidebarcounter = document.getElementById("sidebar-counter").innerText.length
} catch {
    base_sidebarcounter = null
}

function open_sidebar() {
    sidebar = document.getElementById("sidebar")
    main = document.getElementById('main')
    opener = document.getElementById("sidebar-key")
    if (screen.availWidth < 1024) {
        sidebar.style.width = "40%"
        main.style.marginLeft = '40%'
    } else {
        sidebar.style.width = "25%"
        main.style.marginLeft = '25%'
    }
    sidebar.style.display = "block"
    opener.onclick = close_sidebar
    return opener
}

function close_sidebar() {
    sidebar = document.getElementById("sidebar")
    main = document.getElementById('main')
    opener = document.getElementById("sidebar-key")
    sidebar.style.width = "0%"
    main.style.marginLeft = '0%'
    sidebar.style.display = "none"
    opener.onclick = open_sidebar
    return opener
}

function open_wc_sidebar() {
    opener = open_sidebar()
    count += 1
    sidecount = document.getElementById('sidebar-counter')
    if (base_sidebarcounter == null) {
        base_sidebarcounter = sidecount.innerText.length
    }
    sidecount.innerText = sidecount.innerText.slice(0, base_sidebarcounter)+' - '+String(count)
    opener.onclick = close_wc_sidebar
}

function close_wc_sidebar() {
    opener = close_sidebar()
    opener.onclick = open_wc_sidebar
}