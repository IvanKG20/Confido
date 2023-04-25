document.getElementById('start-looking').onclick = function() {
  document.getElementById("start-logo").style.backgroundImage =
    "url('/img/elipse-confido-green.svg')";
  document.getElementById("start-image").style.backgroundImage = "url('/img/login-image.png')"
  document.getElementById("start-image").style.backgroundSize = "contain"
  document.getElementById("start-text").innerHTML = `
        <h2>Login into your account</h2>
        <form class="start-form" id="login">
          <input id="email" type="text" placeholder="Email" name="username" required>
          <input id="password" type="password" placeholder="Password" name="password" required>
          <p class="start-error" id="message">Wrong Email and/or Password!</p>
          <button type="submit" class="start-login">Login</button>
        </form>
        <a href="/employee/">Do not have an account?</a>
  `;

  const loginScript = document.createElement('script');
  loginScript.setAttribute('src','/scripts/login.js');
  loginScript.setAttribute('type','module');
  document.head.appendChild(loginScript);
}

document.getElementById("start-offering").onclick = function () {
  document.getElementById("start-logo").style.backgroundImage =
    "url('/img/elipse-confido-green.svg')";
  document.getElementById("start-image").style.backgroundImage =
    "url('/img/login-image.png')";
  document.getElementById("start-image").style.backgroundSize = "contain";
  document.getElementById("start-text").innerHTML = `
        <h2>Login into your account</h2>
        <form class="start-form" id="login">
          <input id="email" type="text" placeholder="Email" name="username" required>
          <input id="password" type="password" placeholder="Password" name="password" required>
          <p class="start-error" id="message">Wrong Email and/or Password!</p>
          <button type="submit" class="start-login">Login</button>
        </form>
        <a href="/business/businessAccount.html">Do not have an account?</a>
  `;

  const loginScript = document.createElement('script');
  loginScript.setAttribute('src','/scripts/login.js');
  loginScript.setAttribute('type','module');
  document.head.appendChild(loginScript);
};