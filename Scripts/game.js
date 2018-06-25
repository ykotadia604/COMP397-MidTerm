//Student Name: Yash Kotadia
//Student Id: 300990284
// Date: 25th June, 2018.

let app;
(function(app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let assetManager;
  let startButton;
  let dice1;
  let dice2;
  let dice1Lbl;
  let dice2Lbl;
  let diceNumArray = ["1","2","3","4","5","6"];
  let rndm1;
  let rndm2;
    
    
  let manifest = [
      { id: "1", src: "/Assets/images/1.png" }, 
      { id: "2", src: "/Assets/images/2.png" }, 
      { id: "3", src: "/Assets/images/3.png" }, 
      { id: "4", src: "/Assets/images/4.png" },
      { id: "5", src: "/Assets/images/5.png" },
      { id: "6", src: "/Assets/images/6.png" },
      { id: "blank", src: "/Assets/images/blank.png" },
      { id: "StartButton", src: "/Assets/images/StartButton.png" }
    ];

  function Init() {
      console.log("App Initializing...");
      assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);
  }


  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {
    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    Main();
  }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
    console.log("Main Function...");

    // hello label
      
      dice1 = new createjs.Bitmap(assetManager.getResult("blank"));
      dice1.regX = dice1.getBounds().width * 0.5;
    dice1.regY = dice1.getBounds().height * 0.5;
    dice1.x = 200;
    dice1.y = 150;
    stage.addChild(dice1);
      
       dice2 = new createjs.Bitmap(assetManager.getResult("blank"));
      dice2.regX = dice2.getBounds().width * 0.5;
    dice2.regY = dice2.getBounds().height * 0.5;
    dice2.x = 450;
    dice2.y = 150;
    stage.addChild(dice2);

      
    dice1Lbl = new createjs.Text("blank", "12px Consolas", "#000000");
    dice1Lbl.regX = dice1Lbl.getBounds().width * 0.5;
    dice1Lbl.regY = dice1Lbl.getBounds().height * 0.5;
    dice1Lbl.x = 210;
    dice1Lbl.y = 260;
    stage.addChild(dice1Lbl);

         
    dice2Lbl = new createjs.Text("blank", "12px Consolas", "#000000");
    dice2Lbl.regX = dice2Lbl.getBounds().width * 0.5;
    dice2Lbl.regY = dice2Lbl.getBounds().height * 0.5;
    dice2Lbl.x = 460;
    dice2Lbl.y = 260;
    stage.addChild(dice2Lbl);

    // start button
    startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 310;
    startButton.y = 350;
    stage.addChild(startButton);

      
    // start button listener
    startButton.addEventListener("click", function() {
        console.log("Start Button Clicked");
         rndm1 = diceNumArray[Math.floor(Math.random() * diceNumArray.length)];
         rndm2 = diceNumArray[Math.floor(Math.random() * diceNumArray.length)];
        changeImage(dice1,assetManager.getResult(rndm1));
        changeImage(dice2,assetManager.getResult(rndm2));
        //changeLabels();
    });

    startButton.addEventListener("mouseover", function(event) {
        event.currentTarget.alpha = 0.7;
    });

    startButton.addEventListener("mouseout", function(event) {
        event.currentTarget.alpha = 1.0;
    });
     // var rand = myArray[Math.floor(Math.random() * myArray.length)];
      
      function changeImage(bitmap,img)
    {
        bitmap.image = img; 
        dice1Lbl.text = rndm1;
        dice2Lbl.text = rndm2;
    }
      
       
      
      
      
  }

  window.addEventListener("load", Init);
})(app | (app = {}));