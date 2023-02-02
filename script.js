var player0="O";
var playerx="X";
var flag=true;
var count=0;
var winnerConition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
$(".player1").addClass("active");
$(".cells").click(function(){
    count++;
    if(flag){
        var audio=new Audio("blue.mp3");
        audio.play();
    }
    else{
        
        var audio=new Audio("green.mp3");
        audio.play();
    }
    var currentplayer=(flag)?player0:playerx;
    $(this).addClass("disabled");
    addCellText(this,currentplayer);
    if(winner(currentplayer)){
         $(".result h1").text(currentplayer+" Won The Game!");
         $(".result").removeClass("inactive");
         var audio=new Audio("wrong.mp3");
         audio.play();
    }
    else if(count===9){
        $(".result h1").text("Draw");
        $(".result").removeClass("inactive");
        var audio=new Audio("wrong.mp3");
        audio.play();

    }
    else
        swap(this);
});
$(".result button").click(function(){
    window.location.reload();
})

function winner(player){
    console.log(typeof(player));
    for(var i=0;i<8;i++){
        for(var j=0;j<3;j++){
            console.log(($($(".cells")[winnerConition[i][j]]).hasClass(player)));
            if(!($($(".cells")[winnerConition[i][j]]).hasClass(player)))
                break;
            if(j===2){
                for(var k=0;k<3;k++)
                    $($(".cells")[winnerConition[i][k]]).addClass("highlight");
                return true;
            }
              

        }
    }
    return false;
}
function swap(cell){
    flag=!flag;
    if(flag){
        $(".player2").removeClass("active");
        $(".player1").addClass("active");
    }
    else{
        $(".player1").removeClass("active");
        $(".player2").addClass("active");
     }
}

function addCellText(cell,currentplayer){
    $(cell).text(currentplayer);
    $(cell).addClass(currentplayer);

}