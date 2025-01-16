// Import
let polygons = document.getElementById('polygons');
let new_polygon = document.getElementById('new_polygon');
let chat = document.getElementById('chat');
let download_file_option = document.getElementById('download_file');
let polygon_turn = true;

// New Polygon Button
new_polygon.onclick = () =>
{
    // On(Show)
    if(polygon_turn)
    {
        polygons.style.display = 'inline-block';
        polygon_turn = false;
    }
    // Off(Hide)
    else{
        polygons.style.display = 'none'; 
        polygon_turn == true;    
    }
}

// Frist: Chat

chat.onclick = () =>
{
    document.body.innerHTML = 
    `
    <textarea id="chatInput" style="border-redius:100px;resize:none; width:250px; height:75px;position:fixed;left:40%;top:70%;background:#111;border:none;border-radius:15px;"></textarea>
    `;
    document.body.style.cssText = 
    `
    margin:0%;
    `;
    let chatInput = document.getElementById('chatInput');
}


// Eighth : Download Files

download_file_option.onclick = () => {
    let download_file = new Blob([editor.innerText], {type:'text/html'});
    let download_file_url = URL.createObjectURL(download_file);
    let download_file_link = document.getElementById('download_file_link');
    download_file_link.href = download_file_url;
    download_file_link.download = 'html file.html';
}