class Player {
  constructor(){

 this.index = null;
 this.distance = 0;
 this.Name = null;


  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){

   var playerIndex = "players/player"+this.index;
   database.ref(playerIndex).set({
     Name:this.Name, 
     distance:this.distance
   })

  }

  static getplayerinfo(){

    var playerinforef = database.ref("players");
    playerinforef.on("value",(data)=>{

    allPlayers=data.val();

    })

  }
  
}
