// // console.log("Sikeres összekötés ✅");

// // // alapvető operátorok
// // const now = 2026;
// // const eletkorDavid = now - 2009
// // const eletkorTalaber =now - 2009

// // console.log(eletkorDavid)
// // console.log(eletkorTalaber)
// // console.log(eletkorDavid * 2, eletkorTalaber / 10, 2**3)

// // const vezeteknev = "Bellai"
// // const keresztnev = "Talabér"
// // console.log(vezeteknev + keresztnev)
// // console.log(vezeteknev + " " + keresztnev)

// // let x = 10 + 5;

// // // x = x + 10

// // x += 10;
// // x*=4

// // x++;
// // x--;
// // console.log(x)

// // console.log(eletkorDavid >= eletkorTalaber)

// // const keresztnev = "Balázs";
// // const foglalkozásSzeretne = "Kezdő programozó";

// // const foglalkozasjelenleg = "Kezdő kábeldugdosó";
// // const SzuletesiEv = 2009;
// // const ev = 2026;

// // const balazs =
// //   keresztnev +
// //   " Vagyok, " +
// //   (ev - SzuletesiEv) +
// //   " éves " +
// //   foglalkozásSzeretne +
// //   " szeretnek lenni!";
// // console.log(balazs)

// // const bekertev = "1991";
// // console.log(bekertev + 18);

// // const SzuletesiEv = Number(bekertev);
// // console.log(SzuletesiEv + 18);

// // console.log(Number("Talabér"));
// // console.log(typeof SzuletesiEv);

// // console.log("Én " + 23 + " éves vagyok");

// // console.log("23" - "10" - 3);
// // console.log("Talabér"-"Olivér")

// // console.log("23" * "2");
// // console.log("24" / "2");

// // console.log(Boolean(1));
// // console.log(Boolean(undefined));
// // console.log(Boolean({}));
// // console.log(Boolean(""));
// // console.log(Boolean(Number("Talabér")));

// // const kor = 18;

// // if (kor === 18) {
// //   console.log("Most lettél nagykorú");
// // }

// // console.log(18===18)
// // console.log(18==18)
// // console.log(18==="18")
// // console.log(18=="18")

// const kedvenc = prompt("Mi a kedvenc számod?");
// console.log(kedvenc, typeof kedvenc);

//     if (kedvenc ===23) {
//     console.log("A 23 egy nagyszerű szám!")
//     };

//     else if (kedvenc === 7) {
//     console.log("A 7 is egy nagyszerű szám!")
//     };
//     else if (kedvenc === 9) {
//     console.log("A 9 is egy nagyszerű szám!")
//     };

// const age = 16;
// const a = age >= 20;
// const b = age < 30;

// console.log(a);
// console.log(b);

// logikai operátorok :)

// console.log(!a);
// console.log(a && b );
// console.log(a || b );
// console.log(!a && b );
// console.log(a && !b );

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = false;
// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//   console.log("A sofőr képes vezetni");
// } else {
//   console.log("nem vezethet");
// }

// const day = "hétfő";

// switch (day) {
//   case "hétfő":
//     console.log("kezdődik a hét dupla tj óra");
//     break;
//   case "kedd":
//     console.log("dupla adatbázis óra");
//     break;
//   case "szerda":
//     console.log("dupla magyar óra");
//     break;
//   case "csütörtök":
//     console.log("dupla back-end óra");
//     break;
//   case "péntek":
//     console.log("dupla tesztelés óra");
//     break;
//   case "szombat":
//     console.log("dupla pihenés óra");
//     break;
//   case "vasárnap":
//     console.log("dupla tervezés óra");
//     break;
//   default:
//     console.log("Érvénytelen nap");
// }


const age = 23;

age >= 18 ? console.log("Nagykorú vagy") : console.log("Kiskorú vagy");
const drink = age >= 18 ? "sör" : "üdítő";

console.log(drink);