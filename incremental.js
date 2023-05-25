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
    
    runResource2Work(){
        this.resource1 += this.resource2;
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
      io.writeValueIntoClass(this.resource3, "resource4Number")
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
      game.runResource2Work();
      game.narrativeManager.assess()
      game.updateDisplay()
  }, 500)
    
  
  })