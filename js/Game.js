class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){

  form.hide();
  textSize(30);
  text("Game Start",120,100);

  Player.getplayerinfo();
  if(allPlayers!==undefined){

   var display_position = 130;
   display_position+=20;
   textSize(20);
   text(allPlayers[plr1].Name+":"+allPlayers[plr].distance,120,display_position);
     
   if(plr === "player"){

     fill("red");

   }

   else{

    fill("black");
   }

  }

    if(keyIsDown(up_arrow)&& player.index!==null){

     player.distance+=50;
     player.update();


    }





  }


}
