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
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
cars=[car1,car2,car3,car4]
  }
  play(){
    form.hide();
    textSize(20);
    text("Game Start",120,100);
    player.getPlayerInfo();
    if(allplayers!=undefined){
      var index=0;
      var x=0;
      var y;
      var displayposition=130;
      for(var plr in allplayers){
        index=index+1;
        x=x+200;
        y=displayHeight-allplayers[plr].distance;
        //start from here
      }
      displayposition=displayposition+20;
      textSize(15);
      text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition);
    }
  }

if(keyIsDown(UP_ARROW)){
  player.distance=player.distance+10;
  player.update();
}
}}