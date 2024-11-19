window.onload = function() {
    // array with the words to use / array de palabras que se usan para el trabajador:__________________ 
    let first = "A ";
    let adj = ["3 headed ", "nuclear ", "angry ", "lonely ", "crazy ", "glowing ", "smelly ", "slow ", "old "];
    let noun = ["jogger ", "racoon ", "dog ", "merchant ", "driver ", "comedian ", "pinecone "];
    let action = ["took my ", "threw my ", "yelled at my ", "kicked my ", "stole my ", "burned my ", "bit my ", "hit my "];
    let possetion = ["toe ", "car ", "watch ", "shoe ", "wallet ", "shirt ", "keys ", "computer ", "phone ", "sandwich "];
    let where = ["on the street", "in my house", "in my driveway", "in front of the office", "near the mall", "near the toilet", "at the bus station"];
  
   // array with the words to use forthe boss / array de palabras que se usan para el jefe:__________________ 
    let BossReply1 = ["WOW! ", "Seriously? ", "Poor guy! ", "I can't believe it! ", "How? / What?", "I see... "];
    let BossReply2 = ["The same thing happened to my wife! Don’t worry!!", "You are fired!!", "Take some days off, I understand the situation.", "Excuses! Go to work right now!", "The worst situation I have ever heard!", "Get out of here!"];
   // declaring random variables-declarando las variables aleatorias========================================================
    let rdm1 = Math.floor(Math.random() * adj.length);//worker
    let rdm2 = Math.floor(Math.random() * noun.length);//worker
    let rdm3 = Math.floor(Math.random() * action.length);//worker
    let rdm4 = Math.floor(Math.random() * possetion.length);//worker
    let rdm5 = Math.floor(Math.random() * where.length);//worker
    let rdm6 = Math.floor(Math.random() * BossReply1.length)//boss
    let rdm7 = Math.floor(Math.random() * BossReply2.length)//boss

  //==================================================================================
    // creating a sentence (the excuse)
      document.querySelector("#excuseWorker").innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];//worker 

      document.querySelector("#ReplyBoss1").innerHTML = BossReply1[rdm6] ;//boss
      document.querySelector("#ReplyBoss2").innerHTML = BossReply2[rdm7] ;//boss
    

    }