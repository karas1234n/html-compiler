// Import
let html_editor = document.getElementById('html_editor');
let output = document.getElementById('output');
let run = document.getElementById('run');
let auto_save = document.getElementById('auto_save');
let run_turn = true;
// Run Code True & False Functions
function run_code_true()
{
    output.innerHTML =  html_editor.innerText;
    run_turn = 0;
}
function run_code_false()
{
    output.innerHTML != html_editor.innerText; 
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

