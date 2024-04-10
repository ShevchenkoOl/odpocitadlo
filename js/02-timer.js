/*Pomocí knihovny flatpickr umožníte uživateli vybrat koncové datum a čas v jednom prvku rozhraní v různých prohlížečích. Tato knihovna je již zahrnuta, nemusíte nic dělat, stačí si přečíst dokumentaci (https://flatpickr.js.org/) a pokusit se na to přijít.*/

flatpickr(selector, options);
/*Knihovna očekává, že bude inicializována na prvku input[type="text"], proto jsme do dokumentu HTML přidali pole input#datetime-picker.

<input type="text" id="datetime-picker" />

Druhým argumentem flatpickr(selector, options) může být volitelný objekt options. Připravili jsme pro vás předmět, který ke splnění úkolu potřebujete. Pochopte, co každá vlastnost dělá v dokumentaci „Options“ a použijte ji ve svém kódu. */
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(), //jak přistupovat ke dni, měsíci, času atd. z funkce new Date() najdete na internetu
  minuteIncrement: 1,
  onClose(selectedDates) {
    /*Metoda onClose() z objektu parametrů je volána pokaždé, když je zavřen prvek rozhraní, který vytváří flatpickr. Právě v něm by mělo být zpracováno uživatelem zvolené datum. Parametr selectedDates je pole vybraných dat, takže vezmeme první prvek. */
/*Zde byste měli napsat následující podmínky:
- Pokud uživatel zvolil datum v minulosti, zobrazte window.alert() s textem "Vyberte prosím datum v budoucnosti".
- Pokud uživatel zvolil platné datum (v budoucnosti), aktivuje se tlačítko „Start“. (atribut disabled)
- Tlačítko Start by nemělo být aktivní, dokud uživatel nevybere datum v budoucnosti.
- Když kliknete na tlačítko „Start“, začne odpočítávání do zvoleného data od okamžiku, kdy jej stisknete.*/
    console.log(selectedDates[0]);
  },
};

//Pro výpočet hodnot použijte připravenou funkci convertMs, kde ms je rozdíl mezi koncovým datem a aktuálním datem v milisekundách.
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

/*Funkce convertMs() vrací objekt s vypočteným časem zbývajícím do data ukončení. Všimněte si, že neformátuje výsledek. To znamená, že pokud zbývají 4 minuty nebo jakákoli jiná časová složka, pak funkce vrátí 4, nikoli 04. V rozhraní časovače musíte přidat 0, pokud má číslo méně než dva znaky. Napište funkci addLeadingZero(value), která používá metodu padStart() a před kreslením rozhraní naformátujte hodnotu. */

