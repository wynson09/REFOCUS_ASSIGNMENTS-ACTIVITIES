let albumStore = [
    {
        Name: 'MJ Music Store',
        Location: 'Pagdian City',
        albumList:[
            {
                albumName: 'KZ Tandingan Play list',
                bandName: 'KZ Banda Banda',
            },
            {
                albumName: 'Moira Dela Tore Play List',
                bandName: 'Heart Broken Band',
            }
        ]
    }
];

function addAlbum(name,band){
    albumStore[0].albumList.push({albumName: name, bandName: band}); // I can't add on the album list
}
function displayAlbums(){
    albumStore.forEach((value) => {
        console.log('Store Name: '+ value.Name + '\nLocation: ' + value.Location);
        console.log('Album List:');
        value.albumList.map((album) =>{
            console.log(`Album name: ${album.albumName}\nBand name: ${album.bandName}\n`);
        });
    });
}
addAlbum('Andrew E','Salbakuta');
displayAlbums();