const Discord = require('discord.js');


/**
 * Create a progression bar made of ascii characters.
 * @param  {Number} elapsedTime The elapsed time since the start. Should never be more than totalTime. If it is the progress bar will be stuck at totalTime. 
 * @param  {Number} totalTime The total time towards which the progress bar is progressing.
 * @param  {Number} length The length of the progress bar. That number needs not be of the size of totalTime.
 * @return {String} A string representing the progress bar in ascii characters.
 */
exports.progressBar = function(elapsedTime, totalTime, length) {
  let bar = '';
  const darkArea = '▓';
  const lightArea = '░';
  const chunk = totalTime / length; // Reprensents the number of little chucks the progress bar is divided into.
  const chunksInElapsedTime = Math.round(elapsedTime / chunk);
  
  for (let i = 0; i < length; i++) {
    if (i < chunksInElapsedTime) {
      bar += darkArea;
    } else {
      bar += lightArea;
    }
  }
  return bar;
}