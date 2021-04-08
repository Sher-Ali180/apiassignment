$(function(){
    loadRecipies(); 
});
function loadRecipies(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method: "GET",
        success: function(response){
            console.log(response);
            var recipes = $("#recipes"); 
            recipes.empty();
            for (i=0;i<response.length;i++){
                var rec = response[i]
                recipes.append('<div> <h3> ${rec.title}</h3><h6>${rec.body}</h6><button class="btn btn-danger" type="button">Delete</button> </div>');
            }
        }
    
       }
    );
    
    }
