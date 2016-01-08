var url = "http://api.openweathermap.org/data/2.5/forecast/city?id=4684888&APPID=70ce0c9419771e70b99f32bb1ad519fd"
$.getJSON(url).then(function(data) {
    console.log(data);
    // alert("City: "+data.city.name);
     $( "body" ).append( document.createTextNode( "City: "+data.list.object0) );

});