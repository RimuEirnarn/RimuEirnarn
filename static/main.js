// lmao, pythonic
var __version__ = "0.0.2"

/**
 * show current project version or atleast the new version/rework version.
 */
function show_version() {
    console.log(__version__)
}

function __redir_anime() {
    // do i look like care about this?
    var target = `target-${Math.round(Math.random() * 100)}`
    var data = `<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Anime Redirection</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Proceed?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn btn-primary" id="${target}">Yes</button>
      </div>
    </div>
  </div>
</div>`
    var body = document.querySelector("body")
    body.innerHTML += data
    var target_element = document.querySelector(target)
    target_element.onclick = () => {
        document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
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
