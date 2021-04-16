$(()=>{
    var data = httpGet("http://localhost/dist/ajax.php"); 
    var s_p,l_p,t_p;
    $.each(JSON.parse(data), function( index, value ) {
        
        s_p =( value.qty * value.price).toFixed(4);
        l_p = (value.qty * value.s_price).toFixed(4);

        if(value.type == 0) {
            var e = "SELL";
            t_p = "--";
        }
        else {
            var e = "BUY";
            t_p = (((l_p-s_p)/s_p)*100).toFixed(2)
        }

        var j = e.toLowerCase();
        

        var list = '<tr><th class="tth" scope="row"><img src="'+value.coins.img+'" style="max-height:50px">'+value.symbol+'</th><td class="ttd '+j+'">'+e+'</td> <td class="ttd">'+value.time+'</td> <td class="ttd">'+value.qty+'</td><td class="ttd">'+s_p+'</td> <td class="ttd">'+l_p+'</td> <td class="ttd">##</td> <td class="ttd">'+t_p+'</td></tr>';

        $("#table_trade").append(list)
    });

    function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
    
})