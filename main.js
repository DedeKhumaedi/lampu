const endpoint = 'http://192.168.0.104';

function getDapurLed() {
  fetch(endpoint + '/dapur', {
    method: 'GET',
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == 'ON') {
        ledDapur.style.backgroundColor = 'blue';
        dapurLedImage.src = './assets/on.png';
      } else {
        ledDapur.style.backgroundColor = '#579fff';
        dapurLedImage.src = './assets/off.png';
      }
    });
}

function getTamuLed() {
  fetch(endpoint + '/tamu', {
    method: 'GET',
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == 'ON') {
        ledTamu.style.backgroundColor = 'blue';
        tamuLedImage.src = './assets/on.png';
      } else {
        ledTamu.style.backgroundColor = '#579fff';
        tamuLedImage.src = './assets/off.png';
      }
    });
}

function getMakanLed() {
  fetch(endpoint + '/makan', {
    method: 'GET',
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == 'ON') {
        ledMakan.style.backgroundColor = 'blue';
        makanLedImage.src = './assets/on.png';
      } else {
        ledMakan.style.backgroundColor = '#579fff';
        makanLedImage.src = './assets/off.png';
      }
    });
}

// SET
function setDapurLed() {
  fetch(endpoint + '/dapur', {
    method: 'POST',
  })
    .then((response) => response.text())
    .then(() => location.reload());
}
function setTamuLed() {
  fetch(endpoint + '/tamu', {
    method: 'POST',
  })
    .then((response) => response.text())
    .then(() => location.reload());
}
function setMakanLed() {
  fetch(endpoint + '/makan', {
    method: 'POST',
  })
    .then((response) => response.text())
    .then(() => location.reload());
}
function setToiletLed() {
  fetch(endpoint + '/toilet', {
    method: 'POST',
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

getDapurLed();
getTamuLed();
getMakanLed();
