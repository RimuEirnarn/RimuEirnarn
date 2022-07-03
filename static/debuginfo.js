function detect_screen(){
    s01 = document.getElementById("debug_screen-wh")
    avails = [screen.availWidth,screen.availHeight]
    vals = [screen.width,screen.height]
    s01.innerText = String(avails[0])+"x"+String(avails[1])+" ("+String(vals[0])+'x'+String(vals[1])+")"
}

function parse_to_li(data) {
    dt = ""
    for (inner of data) {
        dt += "<li>"+String(inner)+"</li>"
    }
    return dt
}

async function detect_deviceinfo(){
    s01 = document.getElementById("debug_device-ddt")
    s02 = document.getElementById("debug_device-ua")
    s03 = document.getElementById("debug_device-os")
    s04 = document.getElementById("debug_device-lang")
    s04_1 =document.getElementById("debug_device-langs")
    s05 = document.getElementById("debug_device-cookie")
    s06 = document.getElementById("debug_device-java")
    s07 = document.getElementById("debug_device-online")
    s08 = document.getElementById("debug_device-mem")
    s01.innerText = navigator.doNotTrack
    s02.innerText = navigator.userAgent
    s03.innerText = navigator.platform
    s04.innerText = navigator.language
    s04_1.innerHTML = parse_to_li(navigator.languages)
    s05.innerText = navigator.cookieEnabled
    s06.innerText = navigator.javaEnabled()
    s07.innerText = navigator.onLine
    s08.innerText = navigator.deviceMemory
    // Battery invocation
    batteryinfo = await navigator.getBattery()
    s09 = document.getElementById("debug_battery-charge")
    s10 = document.getElementById("debug_battery-ctime")
    s11 = document.getElementById("debug_battery-distime")
    s12 = document.getElementById("debug_battery-level")
    s09.innerText = batteryinfo.charging
    s10.innerText = batteryinfo.chargingTime
    s11.innerText = batteryinfo.dischargingTime
    s12.innerText = batteryinfo.level
}

function alertf(){
    s01 = document.getElementById("alert-textbox")
    alert(s01.value)
}