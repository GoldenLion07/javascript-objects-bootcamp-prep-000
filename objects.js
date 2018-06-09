var playlist = {
  Phil Ochs: 'Slowdive',
  My Bloody Valentine: 'My Bloody Valentine',
  Alison: 'Phil Ochs'
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: 'Phil Ochs'})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}