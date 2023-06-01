const GameInstance = class {
    constructor() {
      this.narrativeManager = new narrativeManager(this)
      
      this.stages = ["stage1"];
      this.currentStage = "stage1"; 
      this.panels = {
        "stage1": ["panel1", "panel2"],
      }
      this.currentPanel = "panel1";
  
  
  
      this.resource1 = 0;
      this.resource2 = 0;
      this.resource3 = 0;
      this.resource4 = 0;
      this.resource5 = 0;
        
    }
    
    
  
    
    // the following functions are to be called from buttons in the index.html
    gainResource1(){ this.resource1 +=1; this.updateDisplay();}
  
    // auto runners
    runResource3Work(){
      this.resource1 += this.resource3;
    }
    runResource5Work(){
      if (this.resource1 < this.resource5){
        return;
      }
      this.resource2 += this.resource5;
      this.resource1 -= this.resource5;
    }
    
      
    // this function takes in a panel 
    swichPanels(panel) {
      game.currentPanel = panel;
      io.showPanel(game);    
    }
    
    updateDisplay(){
      io.writeValueIntoClass(this.resource1, "resource1Number")
      io.writeValueIntoClass(this.resource2, "resource2Number")
      io.writeValueIntoClass(this.resource3, "resource3Number")
      io.writeValueIntoClass(this.resource4, "resource4Number")
      io.writeValueIntoClass(this.resource5, "resource5Number")
    }

    //Check if they have enough food to get seagulls
    gainResource2() {
      if (this.resource1 < 5) {
        io.appendIntoElement("You don't have enough food for that!","reports")
        return;
      }
      this.resource2 +=1; this.resource1 -=5;this.updateDisplay();
    }

    //Check if they have enough seagulls to assign gatherer
    gainResource3() {
      if (this.resource2 < 1) {
        io.appendIntoElement("You don't have enough seagulls for that!","reports")
        return;
      }
      else if (this.resource1 < 3) {
        io.appendIntoElement("You don't have enough food for that!","reports")
        return;
      }
      this.resource3 +=1; this.resource1 -=3; this.resource2 -=1; this.updateDisplay();
    }

    //Check if they have enough seagulls to assign ad
    gainResource5() {
      if (this.resource2 < 1) {
        io.appendIntoElement("You don't have enough seagulls for that!","reports")
        return;
      }
      else if (this.resource1 < 5) {
        io.appendIntoElement("You don't have enough food for that!","reports")
        return;
      }
      this.resource5 +=1; this.reource1 -=5; this.resource2 -=1; this.updateDisplay();
    }

    expand(amount) {
      //check if they have enough
      if (this.resource2 < amount) {
        io.appendIntoElement("You do not have enough seagulls to deploy!","reports")
        return;
      }
      //do a coin flip (and store the result)
      let coinFlip = (Math.floor(Math.random()*2)==0);
      //if the coin flip is successful, add the value wagered
      if (coinFlip == 1){
        this.resource4 += amount;
        io.appendIntoElement("Your seagulls conquered land!","reports")
      }
      //if the coin flip is unsuccessful, subtract the value wagered
      else if (coinFlip ==0){
        this.resource2 -= amount;
        io.appendIntoElement("Your seagulls flew away...","reports")
      }
    }
    
  }; //End of GameInstance
  
  
  // this function from JQuery waits until the web page is fully loaded before triggering the start of the game
  $( document ).ready(function() {
    game = new GameInstance();
    game.narrativeManager.setup();
    
    io.showStage(game); 
    game.updateDisplay()
  
    startRecording(game);
  
    // Run the Loop
    gameTimer = setInterval(function(){
      game.runResource3Work();
      game.runResource5Work();
      game.narrativeManager.assess()
      game.updateDisplay()
  }, 500)
    
  
  })