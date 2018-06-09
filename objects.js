var playlist = {
  PhilOchs: 'Slowdive',
  MyBloodyValentine: 'My Bloody Valentine',
  PhilOchs: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}