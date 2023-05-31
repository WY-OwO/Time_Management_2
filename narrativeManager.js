// this object is to keep track of narrative beats and unlocks

// each "beat" has a test function, a function which unlocks elements, and a report function

const narrativeManager = class {
    constructor(parentObject) {
    this.data = parentObject;
      console.log(parentObject, this.data)
      
    this.beats = [
      {
        triggered: false,
        test: function(data){return data.resource1 >= 10}, 
        unlock:function(){io.showElement("resource2Row")}, 
        report: function(){
          io.appendIntoElement("You can bribe seagulls now.", "reports");
          }
      },
      {
          triggered: false,
          test: function(data){return data.resource2 >= 10}, 
          unlock:function(){io.showElement("resource3Row")}, 
          report: function(){
            io.appendIntoElement("Assign seagulls to gather food.", "reports");
            }
        },
      {
        triggered: false,
        test: function(data){return data.resource2 >= 30}, 
        unlock:function(){io.showElement("showPanel2")},  
        report: function(){io.appendIntoElement("Your seagulls are ready to conquer! Or run away. Take a bet.", "reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >= 50}, 
        unlock:function(){io.showElement("resource5Row")},  
        report: function(){io.appendIntoElement("You have enough conquered land to spread the word of the new seagull lord.", "reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=120},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to San Francisco!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=160},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to the Easter Island!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=240},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Kuala Lumpur, capital of Malaysia!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=350},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Las Vegas!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=450},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Oslo, capital of Norway!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=500},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered over 500 kilometer squared land. All hail the seagull lord!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=690},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Nuuk, capital of Greenland!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=780},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to New York City!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=810},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Canberra, capital of Australia!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=1000},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered over 1000 kilometer squared land. All hail the seagull lord!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=960},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to San Diego!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=1180},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Rio de Janeiro, a well-known city in Brazil!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=1570},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to London, capital of England!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=2000},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered over 2000 kilometer squared land. The seagull lord is unstoppable!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=2190},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Tokyo, capital of Japan!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=2450},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Cape Town, capital of South Africa!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=2510},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Moscow, capital of Russia!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=3000},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered over 3000 kilometer squared land. The seagull lord is irreplacable!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=5000},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered over 5000 kilometer squared land. The seagull lord is godlike!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=16410},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to Beijing, capital of China! This is serious dedication to an idle game assignment...","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=20780},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to New York City!","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=348700},
        unlock: function(){},
        report: function(){io.appendIntoElement("You have conquered the amount of land equivilant to the Great Barrier Reef! I hope you love the reef.","reports");}
      },
      {
        triggered: false,
        test: function(data){return data.resource4 >=10000000},
        unlock: function(){},
        report: function(){io.appendIntoElement("You're scaring me...","reports");}
      }
    ]
    }
    
    setup(){
      io.hideElement("resource2Row")
      io.hideElement("resource3Row")
      io.hideElement("showPanel2")
      io.hideElement("resource5Row")
    }
  
  
  // goes through all narrative events, checks if they activate, runs activation code, and runs code that delivers a message about the story event
    assess(){
      for (let b = 0; b < this.beats.length; b++){
        let beat = this.beats[b]
        if (!beat.triggered){
          if (beat.test(this.data)){
            beat.triggered = true;
            beat.unlock();
            beat.report();
          }
        }
      }
    }
  
  }