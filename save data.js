function SaveCode()
{
    localStorage.setItem('Code',editor.innerText);
}
editor.innerText = localStorage.Code;
function showCodeData()
{
    return localStorage.Code;
}
function refreshCodeData()
{
    localStorage.Code = editor.innerText;
    editor.innerText = showCodeData();
}
editor.onkeydown = () => {
    SaveCode();
}
if(localStorage.Code == editor.innerText)
{
    refreshCodeData();
}