var songTitle ={
  song1:"Alison",
  song2:"Sometimes",
  song3:"Here's to the State of Mississippi"
}
var artistName = {
  artistName1: "Slowdive",
  artistName2: "My Bloody Valentine",
  artistName3: "Phil Ochs"
}
var playlist = {
  Slowdive: "Alison",
  MyBloodyValentine: "Sometimes",
  PhilOchs: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

