import React from 'react'


function Navbar(props) {
  return (
    <div>
      {/* "navbar navbar-expand-lg bg-body-tertiary" */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        </ul>

 <div class={`form-check form-switch me-auto text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
