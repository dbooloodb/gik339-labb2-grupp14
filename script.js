// Uppgift 4 ----------------------------------------------------------------------------------
const checkboxusage = document.getElementsByClassName("checkbox");
const inputfieldusage = document.querySelectorAll(".textfield");
const buttonusage = document.getElementById("removebutton");
const divelementusage = document.getElementsByTagName("div");

/*
    Alla variabler har valts att sättas som const, eftersom det inte ska gå
    att ändra på, till exempel någon gör checkboxusage till const checkboxusage = 1;.
    
    För att använda olika funktioner för alla variabler så har getElementById använts
    för knappen eftersom den enbart har ett id. getElementsByClassName användes för checkboxen
    efter som leta efter id redan var upptaget. querySelectorAll hämtar allt med klass namnet
    .textfield och getElementsByTagName för att hämta alla div:ar, både querySelectorAll och
    getElementsByTagName hämtar en lista av antigen HTMLCollection eller NodeList som vi sedan
    måste definiera vilken position (vilket element) i listan vi vill använda.
*/

// Uppgift 5 ----------------------------------------------------------------------------------
function showText(event) {
  console.log(event.target.id);
  const checkId = event.target.id;
  if (checkId === "content") {
    divelementusage[5].innerHTML = event.target.value;
  }
}

/*
    Här är en fuktion som heter showText, den har en paramet som döpts till event.
    Funktionen har en console.log som visar vilket element som används.
    checkId declareras genom parametern och får ett element id som sedan används i en if-sats.
    If-satsen kollar om checkId är === med content, om det är det så lägger den till
    parameterns värde i divelementusage[5].
*/

// Uppgift 6 ----------------------------------------------------------------------------------
checkboxusage[0].addEventListener("change", () => {
  divelementusage[5].style.backgroundColor = inputfieldusage[0].value;
});
/*
    Det står elements (alltså med s, flera) när vi hämtar elementet, 
    därför behövs vilken position eller element vi vill ha till exempel [0],
    även om det bara finns ett element.

    checkboxusage[0] ha en event listner som vid en ändring (d.v.s. någon clickar i checkboxen)
    så ändra bakgrundsfärgen för divelementusage[5] till den inmatning som gjordes
    i fältet inputfieldusage[0].
*/

inputfieldusage.forEach((text) => {
  text.addEventListener("input", showText);
});

/*
    Eftersom .textfields hämtas med en querySelectorAll så har vi tillgång 
    till en foreach loop, med hjälp av loopen kan vi gå igenom varje .textfields som finns.
    Loopen har en parameter som heter text som den kan använda till sin event listner.
    Event listnern har argumentet text som är det element som den använde för sin event,
    det reagera på någon form av input i det här fallet så körs den varje gång man 
    skriver något i content fältet, när det körs avänds funktionen showText.
*/

buttonusage.addEventListener("click", () => {
  divelementusage[5].remove();
});

/*
    Till knappen läggs också en event listner som vid click kommer
    att ta bort divelementusage[5] (hela div elementet).
*/
