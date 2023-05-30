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
        
      
    }
    
    
  
    
    // the following functions are to be called from buttons in the index.html
    gainResource1(){ this.resource1 +=1; this.updateDisplay();}
    gainResource2(){ this.resource2 +=1; this.resource1 -=5;this.updateDisplay();}
    gainResource3(){ this.resource3 +=1; this.resource1 -=3; this.resource2 -=1; this.updateDisplay()}
    
    runResource3Work(){
      this.resource1 += this.resource3;
    }
    
      
    // this function takes in a panel 
    swichPanels(panel) {
      game.currentPanel = panel;
      io.showPanel(game.currentPanel);    
    }
    
    updateDisplay(){
      io.writeValueIntoClass(this.resource1, "resource1Number")
      io.writeValueIntoClass(this.resource2, "resource2Number")
      io.writeValueIntoClass(this.resource3, "resource3Number")
      io.writeValueIntoClass(this.resource4, "resource4Number")
    }

    expand(amount) {
      //check if they have enough
      if (amount !=-1) {
        if (resource2 < amount) {
          io.appendIntoElement("You do not have enough to execute the action.","reports")
          return;
        }
      }
      //do a coin flip (and store the result)

      //if the coin flip is successful, add the value wagered
      
      //if the coin flip is unsuccessful, subtract the value wagered

      //(You need a special check for if amount == -1 and do all in if so)

      //log whether the coin flip was successful with io.appendIntoElement("[My Message]", "reports");
    }
    
  };
  
  
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
      game.narrativeManager.assess()
      game.updateDisplay()
  }, 500)
    
  
  })