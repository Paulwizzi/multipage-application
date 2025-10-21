const timeElement = document.getElementById('current-time');
function updateTime() {
    timeElement.textContent = `Current time: ${Date.now()}`;
  }
updateTime();
setInterval(updateTime, 1000);

const avatarUpload = document.getElementById('avatar-upload');
const avatarImg = document.getElementById('avatar-img');

  avatarUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      avatarImg.src = imageURL;
    }
  });

