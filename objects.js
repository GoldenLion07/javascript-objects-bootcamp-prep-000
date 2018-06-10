var playlist = {
  Slowdive: "Alison",
  artist2: "Sometimes",
  artist3: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[Phil Ochs]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

