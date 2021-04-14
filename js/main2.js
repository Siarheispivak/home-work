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
