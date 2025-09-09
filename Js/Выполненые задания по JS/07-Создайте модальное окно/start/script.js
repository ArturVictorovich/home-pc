"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/
const modalBtn = document.querySelectorAll(".show-modal")
modalBtn.forEach (item =>{
    item.addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("hidden");
        document.querySelector(".overlay").classList.toggle("hidden");
        
    })
    
})
document.querySelector(".close-modal").addEventListener("click", function() {
    document.querySelector(".modal").classList.toggle("hidden");
    document.querySelector(".overlay").classList.toggle("hidden");
    
})

document.querySelector(".overlay").addEventListener("click", function() {
    document.querySelector(".modal").classList.toggle("hidden");
    document.querySelector(".overlay").classList.toggle("hidden");
})

document.addEventListener("keydown", function(event) {
    if (event.key == "Escape" && !(document.querySelector(".modal").classList.contains("hidden"))) {
        document.querySelector(".modal").classList.toggle("hidden");
        document.querySelector(".overlay").classList.toggle("hidden"); 
    }
})