var coordinates = {}
$(document).ready(function(){
    getCoordinates ()
})
function getCoordinates(){
    var searchParameter = new URLSearchParams(window.location.search)
    if (searchParameter.has("source")&& searchParameter.has("destination")){
        var source = searchParameter.get("source")
    var destination = searchParameter.get("destination")
    coordinates.source_lat=source.split(";")[0]
    coordinates.source_lon=source.split(";")[1]
    coordinates.destination_lat=destination.split(";")[0]
    coordinates.destination_lon=destination.split(";")[1]                                                                             

    }
    else{
        alert("Co-ordinates Not Selected")
        window.history.back()
    }

}