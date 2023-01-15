var count = 0
var promised_flag_debug_sidebar = false
const main_content = document.getElementById('main')
try {
    var base_sidebarcounter = document.getElementById("sidebar-counter").innerText.length
} catch {
    var base_sidebarcounter = null
}
default_removal = async (root, self) => {
    self.parentElement.classList.add('hiddenbox-0')
    await sleep(250)
    root.removeChild(self.parentElement)
}


function showpopup(method, title, message) {
    var class_ = new Array("w3-panel", 'w3-card', 'w3-animate-opacity', 'w3-padding', 
    'w3-border-lightblue')
    if (method == 'info') {
        class_.push('w3-green')
    } else if (method == 'warning') {
        class_.push('w3-yellow')
    } else if (method == 'error') {
        class_.push('w3-red')
    } else {
        throw new Error(`Method ${method} is undefined`)
    }
    var close_ = document.createElement('span')
    close_.id = "popupclose"
    close_.onclick = () => {
        default_removal(main_content, document.getElementById('popupclose'))
    }
    var popup = document.createElement('div')
    popup.id = "popup"
    popup.classList.add(...class_)
    close_.classList.add('w3-right', 'w3-btn')
    close_.innerHTML = "&times;"
    var header = document.createElement('h3')
    header.innerText = title
    var content = document.createElement('p')
    content.innerText = message
    popup.appendChild(close_)
    popup.appendChild(header)
    popup.appendChild(content)
    main_content.prepend(popup)
}

function showerror(title, message) {
    showpopup('error', title, message)
}

function showinfo(title, message) {
    showpopup('info', title, message)
}

function showwarning(title, message) {
    showpopup('warning', title, message)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function open_sidebar() {
    if (count >= 10 && count <= 14) {
        return
    }
    if (count == 15) {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    var sidebar = document.getElementById("sidebar")
    var main = document.getElementById('main')
    var opener = document.getElementById("sidebar-key")
    var hidden = document.getElementById("mobile-bar")
    var hcont = document.getElementById("mobile-bar-content")
    if (screen.availWidth < 1024) {
        if (document.getElementById('popup') != null) {
            throw new Error("Sidebar for mobile is now disabled.")
        }
        showerror("Finished Deprecation", "Sidebar for mobile is now disabled")
        throw new Error("Sidebar for mobile is now disabled.")
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
    var sidebar = document.getElementById("sidebar")
    var main = document.getElementById('main')
    var opener = document.getElementById("sidebar-key")
    var hidden = document.getElementById('mobile-bar')
    var hcont = document.getElementById("mobile-bar-content")
    sidebar.style.width = "0%"
    main.style.marginLeft = '0%'
    sidebar.style.display = "none"
    if (hidden.classList.contains("hiddenbox-1")) {
        hidden.classList.remove("hiddenbox-1")
        hidden.classList.add("hiddenbox-0")
    }
    await sleep(250)
    document.getElementById("swc").display = 'none'
    if (hcont.innerHTML != "") {
        sidebar.innerHTML = hcont.innerHTML
        hcont.innerHTML = ''
    }
    opener.onclick = open_sidebar
    return opener
}

async function open_wc_sidebar() {
    var opener = await open_sidebar()
    count += 1
    var sidecount = document.getElementById('sidebar-counter')
    if (base_sidebarcounter == null) {
        base_sidebarcounter = sidecount.innerText.length
    }
    sidecount.innerText = sidecount.innerText.slice(0, base_sidebarcounter)+' - '+String(count)
    opener.onclick = close_wc_sidebar
}

async function close_wc_sidebar() {
    var opener = await close_sidebar()
    opener.onclick = open_wc_sidebar
}

async function open_debug() {
    var sidebar = document.getElementById('sidebar')
    var main = main_content
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
    await sleep(250)
    debug = document.getElementById('debugmenu')
    debug.classList.add("hiddenbox-1")
    //opener = document.getElementById("debug-open")
    //opener.onclick = close_debug
    return true
}

async function close_debug() {
    var debug = document.getElementById('debugmenu')
    debug.classList.add("hiddenbox-0")
    if (debug.classList.contains("hiddenbox-1")) {
        debug.classList.remove('hiddenbox-1')
    }
    await sleep(250)
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