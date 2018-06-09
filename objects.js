var playlist = {
  Slowdive: "Alison",
  MyBloodyValentine: "Sometimes",
  PhilOchs: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
  playlist.PhilOchs
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}