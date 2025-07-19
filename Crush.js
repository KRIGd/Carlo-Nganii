document.getElementById('yesBtn').onclick = function() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <div class="loading">
      <span class="loading-heart">❤️‍🔥</span>
      <p style="margin-top:10px;">Loading...</p>
    </div>
  `;
  setTimeout(() => {
    container.innerHTML = `
      <img src="gif/love.gif" alt="Love GIF" class="cute-img">
      <h2>Sabi na eh💖, tara sleep call tayo?</h2>
      <button id="goBtn" class="btn yes" style="margin-top:20px;">G! tara</button>
    `;
    document.getElementById('goBtn').onclick = function() {
      window.open("https://discord.com/users/437163712126779393", "_blank");
    };
  }, 1200);
};

document.getElementById('noBtn').onclick = function(e) {
  const btn = e.target;
  // Move relative to the whole window
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;
  const padding = 10;
  const maxLeft = window.innerWidth - btnWidth - padding;
  const maxTop = window.innerHeight - btnHeight - padding;
  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  btn.style.position = 'fixed';
  btn.style.left = left + 'px';
  btn.style.top = top + 'px';
  btn.style.transition = 'left 0.2s, top 0.2s';
};