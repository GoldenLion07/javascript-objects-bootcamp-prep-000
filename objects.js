var playlist = {
  Slowdive: "Alison",
  My_Bloody_Valentine: "Sometimes",
  Phil_Ochs: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  Object.assign({}, playlist, { [artistName]: songTitle});
  delete playlist[artistName];
  return playlist
}

