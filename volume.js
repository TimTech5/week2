'use strict'

function calculateVolume(radius) {
  return (4/3) * Math.PI * Math.pow(radius, 3);
}

module.exports = calculateVolume;
