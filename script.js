window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
        console.log(json[0].firstName);
        let container = document.getElementById('container')
        for(var astro of json){
            
            console.log(astro.firstName)
            // container.innerHTML += `<p>${astro.firstName}</p> `
            container.innerHTML += `<div class="astronaut">
            <div class="bio">
               <h3>Name: ${astro.firstName}</h3>
               <ul>
                  <li>Hours in space: ${astro.hoursInSpace}</li>
                  <li>Active: ${astro.active}</li>
                  <li>Skills: ${astro.skills}</li>
               </ul>
            </div>
            <img class="avatar" src=${astro.picture}>
         </div> ` 
        }
        console.log(container.innerHTML)
        console.log(typeof container.innerHTML)
    });
    console.log('window loaded');
  

});
});