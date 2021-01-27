/*document.addEventListener("DOMContentLoaded",
    function(event) {

        function openImg (event){
            this.textContent=""
            var name = document.getElementById("name").value;
            document.getElementById("")

        }


        document.querySelector("button")
        .addEventListener("click", verifyEmail);

        document.querySelector("img")
        .addEventListener("click", openImg);

        document.
    };

} */

//Get the button:
mybutton = document.getElementById("scrollbtn");
window.onscroll = function() {scrollFunction()};

var wheight = window.innerHeight * .25

function scrollFunction() {
  if (document.body.scrollTop > wheight || document.documentElement.scrollTop > wheight) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function scrollUp() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

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
