var noc = 0;


function teeth(){
    var audio = new Audio('index_files/teeth.mp3');
    cc();
    audio.play();
};

function shake(){
    var audio = new Audio('index_files/shake.mp3');
    cc();
    audio.play();
};

function yawn(){
    var audio = new Audio('index_files/yawn.mp3');
    cc();
    audio.play();
};

function sidekiss(){
    var audio = new Audio('index_files/sidekiss.mp3');
    cc();
    audio.play();
};

function drool(){
    var audio = new Audio('index_files/drool.mp3');
    
    cc();
    audio.play();
};

function sad(){
    var audio = new Audio('index_files/sad.mp3');
    
    cc();
    audio.play();
};

function nomouth(){
    var audio = new Audio('index_files/nomouth.mp3');
    cc();
    audio.play();
};

function hehe(){
    var audio = new Audio('index_files/hehe.mp3');
    cc();
    
    audio.play();
};

function detective(){
    var audio = new Audio('index_files/detective.mp3');
    cc();
    
    audio.play();
};

function cool(){
    var audio = new Audio('index_files/cool.mp3');
    cc();
    
    audio.play();
//smiling-face-with-sunglasses_1f60e.png
};


function cc(){
    noc = noc + 1;
    console.log(noc);

    if (noc == 5){
        sendMessage("someone has clicked 5 times");
        noc = 0;
    };
};

function sendMessage(con) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1233528241441079408/oGQngHNOr4LAdieqpmQFKiO5NO1_lvaqBwCEL64RLIivfJSG4IrS_1JpZiM1c6UWa3SI"); //ADD WEBHOOK HERE!!!
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
      username: "Emoji Watcher",
      avatar_url: "",
      content: con
    }
  
    request.send(JSON.stringify(params));
  }

  sendMessage(`someone is on the website 👀`);


