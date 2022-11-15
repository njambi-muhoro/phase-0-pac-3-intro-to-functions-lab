function shout (string){
  return string.toUpperCase();
}
shout("hello");

function whisper(string){
  return string.toLowerCase();
}
whisper("HELLO");

function logShout (aWord) {
  console.log(aWord.toUpperCase( ));
}
logShout("aWord");

function logWhisper (aWord) {
  console.log(aWord.toLowerCase( ));
}
logWhisper("aWord");

function sayHiToHeadphonedRoommate(aWord){
const cantAnswer =  "I can't hear you!";
const yesUnswer = "YES INDEED!";
 const lovUnswer = "I would love to!";
 if (aWord.toLowerCase(aWord) === aWord) {
  return cantAnswer;
}
else if (aWord.toUpperCase(aWord) === aWord) {
  return yesUnswer;
}
else if ("Let's have dinner together!" === aWord) {
  return lovUnswer
}

}



