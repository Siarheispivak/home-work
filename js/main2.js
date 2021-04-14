let styles = ["джаз", "бдюз"];
styles.push("рок-н-ролл");           //Джаз, Блюз, Рок-н-Ролл
styles.splice(-2, 1, "классика");    //Джаз, Классика, Рок-н-Ролл
alert(styles);
let removed = styles.shift();        //Классика, Рок-н-Ролл
console.log(removed);
styles.unshift("рэп", "регги");      //Рэп, Регги, Классика, Рок-н-Ролл
alert(styles);









let styles2 = ["джаз", "бдюз", "Рэп", "Регги", "Классика", "Рок-н-Ролл"];


alert(styles2.slice(-1));





let colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];



// alert(index);
let s = '#';

for (i = 1; i <= 6; i++) {

   let index = Math.floor(Math.random() * colors.length);

   s += colors[index];
}


// alert(s);
document.body.style.background = s;
colorise.innerHTML = `Цвет: ${s}`;
