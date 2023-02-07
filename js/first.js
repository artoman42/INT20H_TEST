class Product{
    #Count = 1;
    constructor(Name, Category){
        this.Name = Name;
        this.Category = Category;
        
    }
    set Count(value){
        if(value>0) this.#Count = value;
    }
    get Count(){
        return this.#Count;
    }
}

class Dish{
    
    constructor(Name, Products, Recipe){
        this.Name = Name;
        this.Products = Products;   
        this.Recipe = Recipe;
    }
}

let product1 = new Product("Картопля", "Овоч");
let product6 = new Product("Капуста", "Овоч");
let product2 = new Product("Вишня", "Ягода");
let product3 = new Product("Борошно", "Допоможні продукти");
let product4 = new Product("Молоко", "Молочні продукти");
let product5 = new Product("Вівсянка", "Каші");
let product7 = new Product("Рис", "Каші");
let product8 = new Product("Курка", "М'ясо");
product3.Count = 3;
product5.Count = 2;
product8.Count = 5;


let dish1 = new Dish("Вареники з вишнею", [product2, product3], "У воду кімнатної температури вбити яйце. Добре розмішати, щоб жовток розчинився у воді. Додати у борошно сіль і перемішати. Зробити в борошні лунку і частинами влити туди рідину, поступово замішуючи тісто. Тісто викласти на стіл і потроху вмішувати решту борошна, близько 15 хвилин. Тісто має бути настільки щільним, що вимішувати його буде досить важко. Надаємо тісту форму кулі, збираючи його зі всіх боків усередину, і запечатати в харчову плівку або у пакетик. " );
let dish2 = new Dish("Вареники з картоплею",[ product1, product3], "Просіюємо 400 грам борошна. Додаємо пів чайної ложки солі. Сіль добре вмішуємо в борошно. ");
let dish3 = new Dish("Вівсянка з молоком", [product4, product5], "Доведіть воду до кипіння та додайте вівсяні пластівці в киплячу воду. Варіть вівсянку приблизно 10 хвилин на повільному вогні, постійно помішуючи. Додайте молоко, продовжуйте помішувати ще кілька хвилин (не більше 5). Додайте сіль, цукор за смаком. Каша готова!");
let dish4 = new Dish("Голубці", [product6, product7], "Капусту розібрати на листя, помістити в миску та посолити. Закип'ятити чайник, залити окропом листя, накрити кришкою і залишити на 15-20 хвилин. Рис добре промити й варити у великій кількості підсоленої води до напівготовності, 10-12 хвилин. Потім відкинути його на друшляк і промити холодною водою. Моркву очистити й натерти на великій тертці. Цибулю почистити, нарізати кубиками. Розігріти сковороду, налити рослинну олію. Обсмажити на середньому вогні цибулю та моркву, помішуючи, 1-2 хвилини.");
let dish5 = new Dish("Котлета по-київськи", [product8, product3], "Курку без шкіри обробити на два шматки філе грудки разом з плечовою кісткою на ніжці. Філе покласти внутрішньою стороною вгору, надрізати від середини уздовж в обидві сторони, покласти половинки так, щоб помістилася начинка, відбити молотком. Акуратно видалити білі сухожилля. У мисці змішати нарізану петрушку, розтоплене вершкове масло і сіль до однорідної маси. Розділити суміш на дві частини і поставити в морозилку на 5 хвилин. Потім покласти начинку в філе, щільно загорнути і знову прибрати на 5 хвилин в морозилку.");

var dishList = [dish1, dish2, dish3, dish4, dish5];
let presentProductList = [product1, product2, product3, product6, product8, product5];
let categoryList = ["Овоч", "Ягода", "Допоможні продукти", "Молочні продукти",  "Каші", "М'ясо" ];

let dishSel = document.getElementById("SelectDish");
let productTbl = document.getElementById("productTbl");
let recipeTxt = document.getElementById("recipeTxt");


window.onload = function (){
  
    dishList.forEach(x=>{
        dishSel.options[dishSel.options.length] = new Option(x.Name,x.Name);
      //  console.log(x.Name);
   });
   dishSel.onchange = function(){
   
    productTbl.innerHTML = "<tr> <th>Назва</th> <th>Кількість</th> </tr>";

    dishList.find(x => x.Name === this.value).Products.forEach(y => {
  
        productTbl.innerHTML += `<tr><td>${y.Name}</td><td>${y.Count}</td></tr>`;
     
    })

 
   recipeTxt.value = dishList.find(x =>x.Name === this.value).Recipe;
}

   
}
