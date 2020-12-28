var shopname,address,address2,city,state,zip,mobile;
function shopdetails(){
    shopname = document.getElementById('shopname').value;
    address = document.getElementById('address').value;
     address2=document.getElementById('address2').value;
     city=document.getElementById('city').value;
      state=document.getElementById('state').value;
     zip=document.getElementById('zip').value;
     mobile=document.getElementById('mobile').value;
     document.write("ShopNmae is "+ shopname);
     
     
    
    

}


function productdetails() {
    location.replace("Confirmationpage.html")
    productwrite()
}
function productwrite(){
    document.getElementById('sn').innerHTML="Local";
        
    }