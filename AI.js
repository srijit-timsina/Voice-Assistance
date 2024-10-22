let main=document.querySelector(".container");
let btn=document.querySelector("button");


function speakNow(input){
  let speakInput= new SpeechSynthesisUtterance(input);
  speakInput.rate=1;  //It is use to control the speed of voice
  speakInput.pitch=-1; //it is use to control the pitch
  speakInput.volume=1; //it is use for volume
 // speakInput.lang="en-IN"; // it is use for language and also for voice i.e girl or boy
  window.speechSynthesis.speak(speakInput);
}
addEventListener("load",function(){
   // speakNow("Hello sir.");
   // console.log("Hello")
    greeting();
})
 

function greeting(){
    let date= new Date();
    let hour=date.getHours();
    if (hour>=0 && hour<12){
        speakNow("Activating Jarvis........................Good Morning Sir ,How can i help you today!");
    }else if(hour<=12 && hour<16){
        speakNow("Activating Jarvis..................Good Afternoon Sir ,How can i help you today!");
    }else{
        speakNow("Activating Jarvis..................Good Evening Sir ,How can i help you today!");
    }
}

function inputVoice(){
    if ('webkitSpeechRecognition' in window){
        let recog=new webkitSpeechRecognition();
        recog.lang='en-IN';
        recog.onresult = (e) =>{
            let spokenText=e.results[0][0].transcript;
            handelCommands(spokenText.toLowerCase());
        }
        recog.start();
    }else{
        alert("Sorry! Your Browser doesn't support this feature");
    }
   
}

btn.addEventListener("click",function(){
  
    inputVoice();
})


function handelCommands(command){
      console.log(command);
      if (command.includes("hello") || command.includes('hey') || command.includes('hii')|| command.includes('hey leo')|| command.includes('hii jarvis') || command.includes('jarvis') || command.includes('dear')|| command.includes('neil') ||command.includes('evening') ||command.includes('morning') || command.includes('afternoon')){
        speakNow("Hello Sir.. How can i help you!");
      } else if (command.includes("who are you") || command.includes('developer') || command.includes('developed')|| command.includes('who developed you')|| command.includes('can you say about your self') || command.includes('your self') || command.includes('made you')|| command.includes('what is your name')|| command.includes('can you tell me your name') || command.includes("can you tell me yourself")){
        speakNow("My name is jarvis.. developed by srijit timsina.. in 2024.");
      } 
      else if (command.includes("open youtube") || command.includes('youtube') ){
        speakNow("Opening...Youtube");
        window.open("https://www.youtube.com/");
      } else if (command.includes("open google") || command.includes('google') ){
        speakNow("Opening...google");
        window.open("https://www.google.com/");
      } else if (command.includes("open facebook") || command.includes('facebook') || command.includes('fb') ){
        speakNow("Opening...facebook");
        window.open("https://www.facebook.com/");
      } else if (command.includes("open instagram") || command.includes('google') || command.includes('insta') ){
        speakNow("Opening...instagram");
        window.open("https://www.instagram.com/");
      }
      else if (command.includes("time") || command.includes('today time') || command.includes('show time')) {
        let dateTime = new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true });
        speakNow(dateTime);
    }else if (command.includes("date") || command.includes('today date') || command.includes('show date')) {
        let date = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        speakNow(date);
    }else if(command.includes('what can you do for me') || command.includes('can you do')|| command.includes('help me')){
       speakNow('I can help you to search anything..')
    }
   else if(command.includes('how old are you?') || command.includes('old are you')|| command.includes('what is your age')){
    speakNow('Im a AI. i doesnot have any fixed age but i was made by shrijit Timsina sir.')
 }else if(command.includes('who is srijit timsina') ||command.includes('srijit timsina')||command.includes('tell me about your developer') || command.includes('tell me about your sir')){
  speakNow('Srijit Timsina is a class 12  student. He love to develop innovating things like me and his hobbie is to develop web app.');
 }
       else{
        speakNow(`Searching for ${command} in google`);
        window.open(`https://www.google.com/search?q=${command}`);
      }
}