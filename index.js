GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks
GET https://api.spotify.com/v1/tracks/{id}
curl --request GET \
  --url https://api.spotify.com/v1/audio-features \
  --header 'Authorization: ' \
  --header 'Content-Type: application/json'

  document.getElementById("Title").addEventListener("click", displayDate);
  document.getElementById("link"). element.addEventListener("mouseover", myFunction);
  document.getElementById("body").element.addEventListener("mouseout", myThirdFunction);

  function getSong(songs, artist) {
    const spotifyArray = songs.filter(songs => song.name === string);
    return spotifyArray;
}

function getPlaylist(playlist, artist) {
    const playlistArray = playlists.filter(playlist => playlist.startsWith(artist));
    return playlistArray;
} 

function getRadio(radio, artist) {
    const radioArray = radio.filter(radio => radio.pop() === artist.pop());
    return radioArray;
} 