// lmao, pythonic
var __version__ = "0.0.2"

/**
 * show current project version or atleast the new version/rework version.
 */
function show_version() {
    console.log(__version__)
}

function refresh_modal(){
    var container = document.querySelector(".container-0")
    var x = document.querySelector(".container-0 > .modal")
    if (x) {
        x.classList.add("fade")
        x.style = ""
        sleep(0.3).then(() => {})
    }
    while (container.firstChild) {
          container.removeChild(container.firstChild);
    }
}

function __redir_anime() {
    // do i look like care about this?
    var target = `target-${Math.round(Math.random() * 100)}`
    var container = document.querySelector(".container-0")
    var data = `<div class="modal fade" tabindex="-1" id="modal-${target}">
  <div class="modal-dialog">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h5 class="modal-title">Anime Redirection</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="refresh_modal()"></button>
      </div>
      <div class="modal-body">
        <p>Proceed?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="refresh_modal()">No</button>
        <button type="button" class="btn btn-primary" id="${target}">Yes</button>
      </div>
    </div>
  </div>
</div>`
    var fragment = document.createDocumentFragment()
    var inside_container = document.createElement('div')
    inside_container.innerHTML = data
    fragment.appendChild(inside_container)
    container.appendChild(fragment)
    var target_element = document.querySelector(`#${target}`)
    target_element.onclick = () => {
        document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    sleep(0.1).then(() => {})

    var modal = new bootstrap.Modal(document.querySelector(`#modal-${target}`), {
        focus: true
    })
    modal.show()
}

/**
 * sleep
 * @param time time as second
 */
async function sleep(time) {
    await new Promise(resolve => setTimeout(resolve, time * 1000))
}

async function __beta_popup() {
    await sleep(0.2)
}

// To Be Added

document.addEventListener("DOMContentLoaded", function(event) { 
  console.info(`Loaded ${window.location.host}/main.js [${__version__}]`)
});
