
document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

var job = new Array(" Web Developer.", " Web Designer.", " UI/UX Designer.");
var ind= 0;
function ChangeText(){
  document.getElementById('type1').innerHTML = job[ind];       
  if(ind < job.length - 1 ){
    ind++;
  }else{
    ind = 0;
  }
  setTimeout("ChangeText();", 1000);
}
ChangeText();



