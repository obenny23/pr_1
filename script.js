// Scroll Up button function
mybutton = document.getElementById("scrollbtn");
window.onscroll = function() {scrollFunction()};

var wheight = window.innerHeight * .25

function scrollFunction() {
   if (document.body.scrollTop > wheight || document.documentElement.scrollTop > wheight) {
        if (document.getElementById("myModal-img").style.display != "block"){
            mybutton.style.display = "block";
        }
    } else {
        mybutton.style.display = "none";
    }
}


function scrollUp() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

//Email Verification function

function verifyEmail(event){
    var corr_tag = false
    var inc_at = false
    
    var email = document.getElementById("email").value;

    console.log(email)
    //verify the end tag
    var endtag = email.slice((email.length - 4), email.length) 

    if(endtag === ".com" || endtag === ".edu"){  corr_tag = true;  }

    //check for '@' character, make sure only one is present
    if (inc_at = email.includes("@")){
        if (email.replace(/[^@]/g, "").length == 1){
            inc_at = true;
        } else {  inc_at = false;  }
    }
    


    if (corr_tag && inc_at){
        document.getElementById("verify").innerHTML = "Email succesfully recorded!";
    } else{
        document.getElementById("verify").innerHTML = "Invalid Email Address.";
    }

}

//function for overlay

function OpenImg(index){

    var id = "dImg"+ index;
    var modal = document.getElementById("myModal-img");
    var modalImg = document.getElementById("img01");
    var img = document.getElementById(id)
        
    modal.style.display = "block";
    modalImg.src = img.src;

    window.onclick = function(event) { 
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function iframeclick(index) {
    var id = "vid"+ index;
    document.getElementById(id).contentWindow.document.body.onclick = OpenVid(index);
}


function OpenVid(index){
    var id = "vid" + index;
    var modal = document.getElementById("myModal-vid");
    var modalVid = document.getElementById("vid01");
    var vid = document.getElementById(id)

    modal.style.display = "block";
    modalVid.src = vid.src;

    window.onclick = function(event) { 
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

