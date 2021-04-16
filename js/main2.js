// let styles = ["джаз", "бдюз"];
// styles.push("рок-н-ролл");           //Джаз, Блюз, Рок-н-Ролл
// styles.splice(-2, 1, "классика");    //Джаз, Классика, Рок-н-Ролл
// alert(styles);
// let removed = styles.shift();        //Классика, Рок-н-Ролл
// console.log(removed);
// styles.unshift("рэп", "регги");      //Рэп, Регги, Классика, Рок-н-Ролл
// alert(styles);









// let styles2 = ["джаз", "бдюз", "Рэп", "Регги", "Классика", "Рок-н-Ролл"];


// alert(styles2.slice(-1));







let colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

let s = '#';

for (i = 1; i <= 6; i++) {

   let index = Math.floor(Math.random() * colors.length);

   s += colors[index];
}

// alert(s);
// document.body.style.background = s;
// colorise.innerHTML = `Цвет: ${s}`;

let n = prompt('Сколько блоков и картинок?');
let r = prompt('Каков размер?');

newDiv(n, r);

function newDiv(x, y) {

   let res = '';

   for (i = 1; i <= x && i <= 11; i++) {
      pic = `<img src="images/${i}.jpg" style="width: ${y}px; height: ${y}px; border: 1px solid red">`
      res += `<div class="new" style="background: ${s}"width: ${y}px; height: ${y}px; border: 1px solid red">${pic}</div>`;

   }

   blocks.innerHTML = res;

}












