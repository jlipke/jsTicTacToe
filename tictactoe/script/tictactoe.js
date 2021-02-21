$(function(){
    var x = "<img src='img/x.png' />";
    var o = "<img src='img/o.png' />";
    var player = 1;

    var p1Arr = new Array();
    var p2Arr = new Array();
   

    $("#btnClear").click(function(){
        $("td").empty();

        $("td").bind("click", (function () {
            if(player == 1){
                
                $(this).html(x);
                $(this).unbind("click");
                p1Arr.push(this.id);
                win(p1Arr);
                player = 2;
            }
            else{
                $(this).html(o);
                $(this).unbind("click");
                p2Arr.push(this.id);
                win(p2Arr);
                player = 1;
            } 
        }));
        
        p1Arr = [];
        p2Arr = [];
        player = 1;

    });

    
    function win(currentPlayer){
        currentPlayer = currentPlayer.sort();

        // Horizontal Wins
        if(currentPlayer.includes("td0") && currentPlayer.includes("td1") && currentPlayer.includes("td2")){
            $("#td3, #td4, #td5, #td6, #td7, #td8").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");
        }else if(currentPlayer.includes("td3") && currentPlayer.includes("td4") && currentPlayer.includes("td5")){
            $("#td0, #td1, #td2, #td6, #td7, #td8").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");
        }else if(currentPlayer.includes("td6") && currentPlayer.includes("td7") && currentPlayer.includes("td8")){
            $("#td3, #td4, #td5, #td0, #td1, #td2").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");

        // Vertical Wins
        }else if(currentPlayer.includes("td0") && currentPlayer.includes("td3") && currentPlayer.includes("td6")){
            $("#td1, #td2, #td4, #td5, #td7, #td8").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");
        }else if(currentPlayer.includes("td1") && currentPlayer.includes("td4") && currentPlayer.includes("td7")){
            $("#td0, #td2, #td3, #td5, #td6, #td8").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");
        }else if(currentPlayer.includes("td2") && currentPlayer.includes("td5") && currentPlayer.includes("td8")){
            $("#td0, #td1, #td3, #td4, #td6, #td7").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");

        // Diagonal Wins
        }else if(currentPlayer.includes("td0") && currentPlayer.includes("td4") && currentPlayer.includes("td8")){
            $("#td1, #td2, #td3, #td5, #td6, #td7").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");
        }else if(currentPlayer.includes("td2") && currentPlayer.includes("td4") && currentPlayer.includes("td6")){
            $("#td0, #td1, #td3, #td5, #td7, #td8").empty();
            alert("Player " + player + " is the winner!");
            $("td").unbind("click");
        }

    }

    $("td").bind("click", (function () {
        if(player == 1){
            
            $(this).html(x);
            $(this).unbind("click");
            p1Arr.push(this.id);
            win(p1Arr);
            player = 2;
        }
        else{
            $(this).html(o);
            $(this).unbind("click");
            p2Arr.push(this.id);
            win(p2Arr);
            player = 1;
        } 
    }));

    // $("td").click(function(){
    //     if(player == 1){
            
    //         $(this).html(x);
    //         $(this).unbind("click");
    //         p1Arr.push(this.id);
    //         win(p1Arr);
    //         player = 2;
    //     }
    //     else{
    //         $(this).html(o);
    //         $(this).unbind("click");
    //         p2Arr.push(this.id);
    //         win(p2Arr);
    //         player = 1;
    //     }
        
    // })

    
    
});

