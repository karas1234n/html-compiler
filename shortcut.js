// Events
// Turn Show Double To Double The Charter
let Turn_Show_Double = true;
// Command Prameter To Know Charcter
html_editor.addEventListener('keydown',function(command){
if(command.ctrlKey &&  command.key === '/')
    {
        html_editor.innerText += '<!---->';
}
});

html_editor.addEventListener('keydown',function(new_html){
    if(new_html.ctrlKey && new_html.shiftKey && new_html.key === '!')
    {
        new_html.preventDefault();
        html_editor.innerText += 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        
        </body>
        </html>`;
}
});
window.addEventListener('keydown',function(Double){
    if(Double.ctrlKey && Double.shiftKey && Double.key === '*')
        {
            let Double_div = null;
            if(Turn_Show_Double)
                {
                    document.body.innerHTML += 
                    `<div id="Double">
                    <input type="text" id="Code_Category_To_Double" placeholder="code"/>
                    <br/>
                    <input type="number" id="Double_The_Code_From_Code_Category_To_Double" placeholder="count"/>
                    <br/>
                    <input type="text" id="The_Text_That_Inside_Double_The_Code_From_Code_Category_To_Double" placeholder="Text"/>
                    <br>
                    <input type="text" id="The_Attributes_That_Inside_Double_The_Code_From_Code_Category_To_Double" placeholder="Atrributes"/>
                    <br/>
                    <button id="DoubleElementButton">New Elements</button>
                    </div>`;
                    Turn_Show_Double = false;
                }
                else
                {
                    Double_div = document.getElementById('Double');
                    Double_div.style.display = 'none';
            Turn_Show_Double--; 
        }
        let DoubleElementButton = document.getElementById('DoubleElementButton');
        DoubleElementButton.onclick = () =>{
        Double_div  = document.getElementById('Double');
    let Code_Category_To_Double = document.getElementById('Code_Category_To_Double');
    let Double_The_Code_From_Code_Category_To_Double = document.getElementById('Double_The_Code_From_Code_Category_To_Double');
    let The_Text_That_Inside_Double_The_Code_From_Code_Category_To_Double = document.getElementById('The_Text_That_Inside_Double_The_Code_From_Code_Category_To_Double');
    let The_Attributes_That_Inside_Double_The_Code_From_Code_Category_To_Double = document.getElementById('The_Attributes_That_Inside_Double_The_Code_From_Code_Category_To_Double');
    for(let DoubleConut = 1;DoubleConut < +Double_The_Code_From_Code_Category_To_Double.value;DoubleConut++)
    {
        html_editor.innerText += `<${Code_Category_To_Double.value} ${The_Attributes_That_Inside_Double_The_Code_From_Code_Category_To_Double.value}>${The_Text_That_Inside_Double_The_Code_From_Code_Category_To_Double.value}</${Code_Category_To_Double.value}>`;
        refreshCodeData();
        html_editor.innerText = showCodeData();
    }
    Double_div.style.display = 'none';
        }
    }
});
