firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log(user);
      // User is signed in.
      
      document.getElementById("activeUser").style.display="block";
      
      
    } else {
      // No user is signed in.
    } 
  });

  function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
    }



var TotalAmount = 0;

var database = firebase.database();





function cod(){

    
var myForm = document.getElementById("DetailsForm");
var myname = myForm.nm1.value;
var myMobile = myForm.ph1.value;
var myAddress = myForm.ad1.value;
var myState = myForm.st1.value;
var myCity = myForm.city1.value;
var myPincode = myForm.pincode1.value;


        var Myorder = database.ref(`ORDERS/`).push();
        Myorder.set({
            name: myname,
            mobileNumber: myMobile,
            Address : myAddress,
            State : myState,
            City : myCity,
            Pincode : myPincode,
            PaymentMethod : "COD",
            
        })

        .catch(console.error).then( 
            ()=>{
        
        document.getElementById("submitOrderSuccessfull").style.display = "block";
        document.getElementById("submitOrderSuccessfull").innerHTML = "Succesfully Posted";
                                
                }
            ).then( 
                ()=>{
                    
                    setTimeout(function(){
                        var user = firebase.auth().currentUser;
                        if(user !== null){
                            window.location.href = "OrderPlaced.html";    
                                        } 
                                        }, 900);
                                    })


       }
                    
                    
