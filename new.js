var inputs = [""];
var outputs = [""];
function show(){
    document.getElementById('area').innerHTML="";
    for(var i =0;i<inputs.length;i++){
        document.getElementById('area').innerHTML+=`<textarea class = "form-control" placeholder ="RUN cell with SHIFT ENTER " rows = "${inputs[i].split("\n").length}" id="${i}">${inputs[i]}</textarea>`;
        document.getElementById('area').innerHTML+=`<center><div class="output" id = "text${i}">${outputs[i]}</div></center>`;
        document.getElementsByClassName("form-control")[i].style.color = "#337ab7";
    }

}
function addWord(){
    inputs.push("");
    outputs.push("");
    show();
}
function removeWord(){
    inputs.length--;
    outputs.length--;
    show();
}

show();
 var data = [];
 
 var txt =document.activeElement.value;
 function run(){
     var input = "";
     
     var h = document.activeElement;
     var g = h.value;
     try{
     inputs[h.id]=g;
 }catch(err){
     console.log(err);
 }
     for(var i = 0;i<inputs.length;i++){
         input+=inputs[i]+"\n";
     }
     var myWindow = window.open("", "MsgWindow", "width=800,height=800");
         myWindow.document.write('');
        myWindow.document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
        <title>RUN</title>
        
        </head>
        <body>
<script src="plotly.js"><\/script>

        
        <center><div class="output"></div></center>
        
        <script>
        var inputs = [""];
        var outputs = [""];
         function histogram(x){
        
    outputs[0]+=\`<div class = "container"><div id="tester" style=" margin :0px; width:70%;height:50%;"></div></div>\`;
    show();
    var trace = {
        x: x,
        type: 'histogram',
      };
    var data = [trace];
    console.log(Plotly);
    console.log(Plotly.newPlot('tester', data));
    Plotly.newPlot('tester', data);
    
}
function line(x,y){
    outputs[0]+=\`<div id="tester" style="width:50%;height:300px;"></div>\`;
    show();
    var trace = {
      x: x,
      y: y,
      type: 'scatter'
    };
    var data =[trace];
    Plotly.newPlot('tester', data);
}
        function printf(string){
         outputs[0]+=string+"<br>";
         }
         
            ${input}
        
function input(prompt, callback){
    printf(prompt);
    printf(\`<input type="text" id = "\${callback}"></input>\`);
    printf(\`<button onclick = "\${callback}(document.getElementById(\'\${callback}').value)">Submit</button>\`);
}
            
    
           
        function show(){
            document.getElementsByClassName("output")[0].innerHTML=outputs[0];
        }
         
        <\/script>
        <\/body>
        <\/html>`);
        
 }
 var runNumber=0;
 var h;
 var output;
 async function runLine(){ 
     h = document.activeElement;
     output = h.id;
     outputs[output]="";
     var g = h.value;
     inputs[output]=g;
     console.log(g);
     try{
         await eval(`async function vm()
             {${g}
         }
         vm();`);

     }catch(err){
         printf(err);
     }
 
 }
 function printf(string){
     outputs[output]+=`${string}<br>`;
 }
 var onkeydown = (function (ev) {
  var key;
  var isShift;
  if (window.event) {
    key = window.event.keyCode;
    if(key==13){
         document.activeElement.rows=document.activeElement.value.split("\n").length+1;
    }
    if(key==91){
        document.activeElement.rows=document.activeElement.value.split("\n").length;
    }

    isShift = !!window.event.shiftKey; // typecast to boolean
  } else {
    key = ev.which;
    isShift = !!ev.shiftKey;
  }
  if ( isShift ) {
      console.log(key);
    switch (key) {
      case 16:
        break;
      case 13:
          runLine();
        break;
        case 38:
        removeWord();
        break;
        case 40:
        addWord();
        break;
        case 39:
        //right arrow
       run();
        break;
        default:
        // do stuff here?
        break;
    }
  }
});
 function histogram(x){
    outputs[output]+=`<div id="tester" style="width:100%;height:250px;"></div>`;
    show();
    var trace = {
        x: x,
        type: 'histogram',
      };
    var data = [trace];
    console.log(Plotly);
    Plotly.newPlot('tester', data);
}
function line(x,y){
    outputs[output]+=`<div id="tester" style="width:100%;height:250px;"></div>`;
    show();
    var trace = {
      x: x,
      y: y,
      type: 'scatter'
    };
    var data =[trace];
    Plotly.newPlot('tester', data);
}
