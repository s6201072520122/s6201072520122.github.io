/*------------------------เมนู------------------------------------------------*/
// java แบบ Colors-dropdown 
document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('select').onchange = function() {
        document.querySelector('#record  h1').style.color = this.value;
        document.querySelector('#gallary  h4').style.color = this.value;
        document.querySelector('#gallary2  h2').style.color = this.value;
        document.querySelector('#skill  h2').style.color = this.value;
    }
});

/*-----------------------sec gallary------------------------------------------------*/

// java แบบ querySelector + condition เงื่อนไข 217           
function hellooo(){
    const heading = document.querySelector('aa');
        if(heading.innerHTML === 'Read more'){
            heading.innerHTML = "<--retrospective I'm an Instrument Engineer student from King Mongkut's University Of Technology North Bangkok.  Looking for an Instrument Engineer position to improve my measurement technique skills.";
        }
        else {
            heading.innerHTML = 'Read more';
        }
}
/*-----------------------sec gallary2 follow------------------------------------------*/
function hello() {
    alert("เบอร์โทร 096-75X-XXXX email: kritsada25582014@gmail.com");
}
// java DOM Manipulation-Repeated tsg querySelector Form input 311
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('form').onsubmit = function () {
        const task =  document.querySelector('#task').value;
        console.log(task);
        alert(`ส่งความคิดเห็นแล้ว, ${name}!`);
    };
    return false;
});