var playlist = {
  artist1: 'Slowdive',
  artist2: 'My Bloody Valentine',
  Phil Ochs: 'Phil Ochs'
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: 'Phil Ochs'})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}