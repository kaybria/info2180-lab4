window. onload= function(){
    let theRequest= new  XMLHttpRequest();
    let superherofile = "http://localhost/info2180-lab4/superheroes.php"
    const load= document.querySelector("#search")
    let search = document.querySelector("input");
    let result = document.querySelector("#result");
    let input = search.value;
    input = input.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
    let cleaninput = input.trim();
    
         
    load.addEventListener("click", function (e){        
        e.preventDefault();
        theRequest. onreadystatechange = function(){
            if (theRequest.status==200){
                var heroes = theRequest.responseText;
                if(cleaninput != ""){
                    console.log(cleaninput)
                    result.innerHTML = heroes
                }else{
                    console.log("Search")
                    var heroes = theRequest.responseText;
                    result.innerHTML = this.responseText;
                }

            }
        }    
        theRequest.open ("GET", "http://localhost/info2180-lab4/superheroes.php?q="+cleaninput);
        theRequest.send();        
            
    })
}