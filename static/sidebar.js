count = 0
promised_flag_debug_sidebar = false
try {
    base_sidebarcounter = document.getElementById("sidebar-counter").innerText.length
} catch {
    base_sidebarcounter = null
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function open_sidebar() {
    if (count >= 50 && count <= 60) {
        return
    }
    if (count == 61) {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    sidebar = document.getElementById("sidebar")
    main = document.getElementById('main')
    opener = document.getElementById("sidebar-key")
    hidden = document.getElementById("mobile-bar")
    hcont = document.getElementById("mobile-bar-content")
    if (screen.availWidth < 1024) {
        if (hcont.innerHTML == "") {
            hcont.innerHTML = sidebar.innerHTML
            sidebar.innerHTML = ''
        }
        if (hidden.classList.contains("hiddenbox-0")) {
            hidden.classList.remove("hiddenbox-0")
            hidden.classList.add("hiddenbox-1")
        }
        document.getElementById("sidebar-watermark").style.display = 'none'
        await sleep(500)
        hcont.style.display = 'block'
        document.getElementById("swc").display = 'block'
        document.getElementById('swc').innerText = String(screen.availWidth)+', '+String(screen.width)
    } else {
        sidebar.style.width = "25%"
        main.style.marginLeft = '25%'
        sidebar.style.display = 'block'
    }
    opener.onclick = close_sidebar
    return opener
}

async function close_sidebar() {
    sidebar = document.getElementById("sidebar")
    main = document.getElementById('main')
    opener = document.getElementById("sidebar-key")
    hidden = document.getElementById('mobile-bar')
    hcont = document.getElementById("mobile-bar-content")
    sidebar.style.width = "0%"
    main.style.marginLeft = '0%'
    sidebar.style.display = "none"
    if (hidden.classList.contains("hiddenbox-1")) {
        hidden.classList.remove("hiddenbox-1")
        hidden.classList.add("hiddenbox-0")
    }
    await sleep(500)
    document.getElementById("swc").display = 'none'
    if (hcont.innerHTML != "") {
        sidebar.innerHTML = hcont.innerHTML
        hcont.innerHTML = ''
    }
    opener.onclick = open_sidebar
    return opener
}

async function open_wc_sidebar() {
    opener = await open_sidebar()
    count += 1
    sidecount = document.getElementById('sidebar-counter')
    if (base_sidebarcounter == null) {
        base_sidebarcounter = sidecount.innerText.length
    }
    sidecount.innerText = sidecount.innerText.slice(0, base_sidebarcounter)+' - '+String(count)
    opener.onclick = close_wc_sidebar
}

async function close_wc_sidebar() {
    opener = await close_sidebar()
    opener.onclick = open_wc_sidebar
}

async function open_debug() {
    sidebar = document.getElementById('sidebar')
    main = document.getElementById("main")
    main.classList.add("hiddenbox-0")
    if (sidebar.classList.contains("hiddenbox-0") != true){
        sidebar.classList.add("hiddenbox-0")
    }
    if (sidebar.style.display == "block") {
        sidebar.classList.remove('hiddenbox-1')
        sidebar.style.display = 'none'
        promised_flag_debug_sidebar = true
    } else {
        promised_flag_debug_sidebar = false
    }
    await sleep(1000)
    debug = document.getElementById('debugmenu')
    debug.classList.add("hiddenbox-1")
    //opener = document.getElementById("debug-open")
    //opener.onclick = close_debug
    return true
}

async function close_debug() {
    debug = document.getElementById('debugmenu')
    debug.classList.add("hiddenbox-0")
    if (debug.classList.contains("hiddenbox-1")) {
        debug.classList.remove('hiddenbox-1')
    }
    await sleep(1000)
    main = document.getElementById("main")
    sidebar = document.getElementById("sidebar")
    main.classList.remove("hiddenbox-0")
    if (sidebar.classList.contains("hiddenbox-0")) {
        sidebar.classList.remove("hiddenbox-0")
    }
    if (promised_flag_debug_sidebar == true) {
        sidebar.classList.add("hiddenbox-1")
        await sleep(200)
        sidebar.style.display = 'block'
        promised_flag_debug_sidebar = false
    }
    //opener = document.getElementById("debug-open")
    //opener.onclick = open_debug
    return true
}