// $(document).ready(function(){
// })
function addBand(){
    $.post('https://protected-gorge-89882.herokuapp.com/addBand',{ bName: "knld",   state : "missouri",city : "askdl" }, function(data){
        console.log(data)
    })
}