random = function(pow10) {
          var ran = Math.random();
          var result = Math.floor(ran*pow10);
          return result;
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

randomLiker = function(percentage_likes){
          var result=random(100);
          if (result<percentage_likes) {
            var elem = document.querySelector('[fill="url(#svg-fill-linear__like)"]').closest('button');
          } else {
            var elem = document.querySelector('[fill="url(#svg-fill-linear__nope)"]').closest('button');
          }
           elem.click();
}

var longDelay=1700;
var longlongDelay=100000;
var shortDelay=750;
var longDelayChance=10;
var longlongDelayChance=5;
var likeChance=91;
while (true) {
   var sleep=shortDelay;
   var result = random(100);
   if (result<longDelayChance) {
      sleep=longDelay;
   }
   var result = random(1000);
   if (result<longlongDelayChance) {
          sleep=longlongDelay;
   }
   sleep+=random(100);
   try {
          randomLiker(likeChance);
   } catch(err) {
          console.log(err)
          await timer(sleep);
   }
   await timer(sleep); 
}
