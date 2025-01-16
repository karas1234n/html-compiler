function SaveCode()
{
    localStorage.setItem('Code',html_editor.innerText);
}
html_editor.innerText = localStorage.Code;
function showCodeData()
{
    return localStorage.Code;
}
function refreshCodeData()
{
    localStorage.Code = html_editor.innerText;
    html_editor.innerText = showCodeData();
}
html_editor.onkeydown = () => {
    SaveCode();
}
if(localStorage.Code == html_editor.innerText)
{
    refreshCodeData();
}