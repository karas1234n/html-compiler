// Import
let html_editor = document.getElementById('html-editor');
let css_editor = document.getElementById('css-editor');
let js_editor = document.getElementById('js-editor');
let css_output = document.getElementById('css-output');
let show_html_editor = document.getElementById('show_html_editor');
let show_css_editor = document.getElementById('show_css_editor');
let show_js_editor = document.getElementById('show_js_editor');
css_editor.style.display = 'none';
js_editor.style.display = 'none';
let output = document.getElementById('output');
let run = document.getElementById('run');
let auto_save = document.getElementById('auto_save');
let run_turn = true;
let css_code;
show_html_editor.onclick = () => {
    css_editor.style.display = 'none';
    js_editor.style.display = 'none';
    html_editor.style.display = 'block';
    show_css_editor.style.backgroundColor = '#333';
    show_js_editor.style.backgroundColor = '#333';
    show_html_editor.style.backgroundColor = '#000';
};
show_css_editor.onclick = () => {
    html_editor.style.display = 'none';
    js_editor.style.display = 'none';
    css_editor.style.display = 'block';
    show_html_editor.style.backgroundColor = '#333';
    show_js_editor.style.backgroundColor = '#333';
    show_css_editor.style.backgroundColor = '#000';
};
show_js_editor.onclick = () => {
    html_editor.style.display = 'none';
    css_editor.style.display = 'none';
    js_editor.style.display = 'block';
    show_html_editor.style.backgroundColor = '#333';
    show_css_editor.style.backgroundColor = '#333';
    show_js_editor.style.backgroundColor = '#000';
};
// Run Code True & False Functions
function run_code_true()
{
    css_code = css_editor.innerText;
    output.innerHTML =  html_editor.innerText;
    css_output.innerHTML = css_code.split('<br>');
    run_turn = 0;
}
function run_code_false()
{
    output.innerHTML != html_editor.innerText; 
    css_output.innerText != css_editor.innerText;
    html_editor.onkeydown = function(){
            run_code_false();
            run_turn = true;                 
        } 
    run_turn = false; 
}
// Run Button & Auto Save Button

// Run Button
run.onclick = run_code_true;
// Auto Save Button
auto_save.onclick = function(){
    // On
    if(run_turn)
    {
        html_editor.onkeydown = function(){
            run_code_true();
            run_turn = false;
        }
    }
    // Off
    else{
        html_editor.onkeydown = function(){
            run_code_false();
            run_turn = true;                 
        }
    }
}

