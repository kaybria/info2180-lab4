window. onload= function(){
    let theRequest= new XMLHttpRequest () ;
    let file = "http://localhost/info2180-lab4/superheroes.php"
    const load= document.querySelector("#search")

    load.addEventListener("click", function (e){
        theRequest.open ("GET", file) ;
        theRequest.send();   
        e.preventDefault();
        theRequest. onreadystatechange = function(){
            if (theRequest.status==200){
                var response = theRequest.response;
                alert(response);
            }else{
            alert("Cant process request.")
            }
        }         
            
    })
}