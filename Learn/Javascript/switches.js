var grade = "B";
switch (grade) { //switch case takes a variable
  case "A": //checks against each case
    console.log("Great job"); //outputs accordingly
    break; //break leaves the switch case
  case "B":
    console.log("Ok job");
    break;
  case "C":
    console.log("Bad job");
    break;
  default: //If none of them, then this
    console.log("Very bad job");
    break;
}
