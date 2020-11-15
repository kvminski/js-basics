//Teams

var teamJohn = (89 + 120 + 103) / 3;
var teamMike = (116 + 94 + 123) / 3;
var teamMary = (97 + 134 + 105) / 3;

console.log('Team John: ' + teamJohn + ', Team Mike: ' + teamMike + ' and Team Mary: ' + teamMary)

/*var winner = teamJohn > teamMike ? 'Team John: ' + teamJohn : 'Team Mike: ' + teamMike;
console.log(winner);

if (teamJohn > teamMike) {
  console.log('Team John: ' + teamJohn);
} else if (teamJohn < teamMike) {
  console.log('Team Mike: ' + teamMike);
} else {
  console.log('It\'s a draw!');
}*/


switch (true) {
  case teamJohn > teamMike && teamJohn > teamMary:
  console.log('Winner is teamJohn: ' + teamJohn);
  break;
  case teamMike > teamJohn && teamMike > teamMary:
  console.log('Winner is teamMike: ' + teamMike);
  break;
  case teamMary > teamMike && teamMary > teamJohn:
  console.log('Winner is teamMary: ' + teamMary);
  break;
  default:
  console.log('It\'s a draw!: ' + 'Team John: ' + teamJohn + ', Team Mike: ' + teamMike + ' and Team Mary: ' + teamMary)
}
