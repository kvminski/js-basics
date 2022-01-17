//console.log(`money: ${money}`);

function letsRoll() {
    //let playerRollDisplay = document.getElementById('player-roll');
    //let computerRollDisplay = document.getElementById('computer-roll');
    //let winnerDisplay = document.getElementById('winner');
    let money = document.getElementById('yourGold').value;
    
    const yourRoll = document.getElementById('options').value;
    
    console.log(`your roll: ${yourRoll}`);
    const computerRoll = Math.floor(Math.random()*6+1);
    console.log(`computer roll: ${computerRoll}`);
    
    //playerRollDisplay.placeholder=`${yourRoll}`;
    //computerRollDisplay.placeholder=`${computerRoll}`;
    document.getElementById('player-roll').textContent=`Player picked ${yourRoll}`;
    document.getElementById('computer-roll').textContent=`Computer rolled ${computerRoll}`;
    let winnerDisplay = document.getElementById('winner');
    
    if (yourRoll != computerRoll) {
        winnerDisplay.textContent="Computer won!";
      winnerDisplay.style="color: red;";
        console.log(`Computer won!`);
      playerLost();
    } else if (yourRoll == computerRoll) {
        console.log(`You won!`);
      winnerDisplay.textContent="You won!";
      winnerDisplay.style="color: green;";
      playerWon();
    } else {
      winnerDisplay.textContent="It's a draw!";
        console.log(`It's a draw!`);
      winnerDisplay.style="color: black;";
    }
    }
    
    function playerWon() {
            let playerMoneyBet = document.getElementById('money-options').value;
        let value = Number(document.getElementById('yourGold').textContent, 10);
        value = isNaN(value) ? 0 : value;
        value = value + Number(playerMoneyBet);
        document.getElementById('yourGold').textContent = value;
    }
    
    function playerLost() {
            let playerMoneyBet = document.getElementById('money-options').value;
        let value = Number(document.getElementById('yourGold').textContent, 10);
        value = isNaN(value) ? 0 : value;
        value = value - Number(playerMoneyBet);
        document.getElementById('yourGold').textContent = value;
    }
    
    function letsRollTwo() {
    //let playerRollDisplay = document.getElementById('player-roll');
    //let computerRollDisplay = document.getElementById('computer-roll');
    //let winnerDisplay = document.getElementById('winner');
    let money = document.getElementById('yourGold').value;
    
    const yourRoll = document.getElementById('options2').value;
    let roller;
    
    if (yourRoll == 1) {
        roller = '1-3';
    } else {
        roller = '4-6';
    }
    
    console.log(`your roll: ${yourRoll}`);
    const computerRoll = Math.floor(Math.random()*6+1);
    console.log(`computer roll: ${computerRoll}`);
    
    //playerRollDisplay.placeholder=`${yourRoll}`;
    //computerRollDisplay.placeholder=`${computerRoll}`;
    document.getElementById('player-roll-1').textContent=`Player picked roll set ${roller}`;
    document.getElementById('computer-roll-1').textContent=`Computer rolled ${computerRoll}`;
    let winnerDisplay = document.getElementById('winner2');
    
    if (computerRoll >= 4 && yourRoll >=4 || computerRoll <=3 && yourRoll <=3) {
        console.log(`You won!`);
      winnerDisplay.textContent="You won!";
      winnerDisplay.style="color: green;";
      playerWon();
      } else {
      winnerDisplay.textContent="Computer won!";
      winnerDisplay.style="color: red;";
        console.log(`Computer won!`);
      playerLost();
      }
      }
    
    /*if (computerRoll >= 4 && yourRoll >= 4) {
        winnerDisplay.textContent="Computer won!";
      winnerDisplay.style="color: red;";
        console.log(`Computer won!`);
      playerLost();
    } else if (computerRoll <= 3 && yourRoll <= 3) {
        console.log(`You won!`);
      winnerDisplay.textContent="You won!";
      winnerDisplay.style="color: green;";
      playerWon();
    } else {
      winnerDisplay.textContent="It's a draw!";
        console.log(`It's a draw!`);
      winnerDisplay.style="color: black;";
    }
    }*/