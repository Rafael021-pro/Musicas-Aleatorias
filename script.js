var playlistId = 'PLJKGsLV6NngX7FyUPNOrCv3YNawUmQGxu'; // ID da sua playlist
var apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
var apiKey = 'YOUR_YOUTUBE_API_KEY'; // Substitua pela sua YouTube API Key

// Função para carregar e reproduzir vídeo da playlist
function loadPlaylistVideo() {
    var requestUrl = apiUrl + '?part=snippet&maxResults=50&playlistId=' + playlistId + '&key=' + apiKey;

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            var items = data.items;
            var randomIndex = Math.floor(Math.random() * items.length);
            var videoId = items[randomIndex].snippet.resourceId.videoId;
            var embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

            document.getElementById('player').src = embedUrl;
        })
        .catch(error => console.error('Erro ao carregar a playlist:', error));
}

// Função para verificar e atualizar a playlist automaticamente a cada 5 minutos
function autoUpdatePlaylist() {
    setInterval(loadPlaylistVideo, 300000); // 300000 ms = 5 minutos
}

// Chamar a função para carregar e iniciar a reprodução do vídeo da playlist
loadPlaylistVideo();

// Chamar a função para iniciar a verificação automática da playlist
autoUpdatePlaylist();
