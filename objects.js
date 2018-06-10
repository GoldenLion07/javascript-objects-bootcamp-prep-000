var playlist = {
  Slowdive: "Alison",
  My_Bloody_Valentine: "Sometimes",
  Phil_Ochs: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = "Phil Ochs";
  return playist[songTitle] = "Here's to the State of Mississippi"
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

