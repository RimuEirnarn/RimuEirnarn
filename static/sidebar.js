count = 0
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