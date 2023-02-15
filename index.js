// 1. Напишите функцию, которая выводит ваше имя и фамилию.
// // functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov

// 2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// // functionName(height, radius) // Объем конуса равен ...

// 3. Напишите функцию, которая принимает строку и возвращает ее длину.
// // functionName(" ... ") // Длина строки равна ...

// 4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// // functionName(num) // Число - четное || Число - нечетное

// 5. Напишите функцию, которая возвращает квадрат числа.
// // functionName(num) // Квадрат этого числа равен

// 6. Напишите функцию, которая возвращает корень числа.
// // functionName(num) // Корень этого числа равен

// 7. Напишите функцию, которая возвращает периметр пятиугольника.
// // functionName(a, b, c, d, e) // Периметр - ...

// 8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// // 0 3 6 9 ...

// 9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// // ...

// 10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// // 1 4 9 ...

// 11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// // ...

// 12. Напишите цикл, который печатает четные числа от 0 до 20.
// // 0 2 4

// 13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// // 1 3 ...

// 14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.

// 15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.

// 17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]

// 18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]

// 19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// // Hello Erjan Hello Ermek ...

// 20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// // 4 9 16 25

// 21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"]
// // cat - true
// // parrot - false

//  1
function sayMyName(name, surname) {
  let result = `my name is ${name}${surname}`;
  console.log(result);
}
sayMyName("aidin ", "almanbetov");

//  2
function printVolume(height, radius) {
  let result = `обьем радиуса равен ` + height * radius;
  console.log(result);
}
printVolume(5, 5);

//  3
function getLength(str) {
  console.log(`длинна строки равна ${str.length}`);
}
getLength("rgtere");

//  4
function evenOrNot(number) {
  if (number % 2 === 0) {
    console.log(`число ${number} четное`);
  } else {
    console.log(`число ${number} не четное`);
  }
}
evenOrNot(5);

//  5
function getSquareNumber(number) {
  return `квадратом числа ${number} является число ${number * number}`;
}
let result = getSquareNumber(5);
console.log(result);

//  6
function getRoot(a) {
  return `корнем числа ${a} является ` + Math.sqrt(a);
}
let squareResult = getRoot(5);
console.log(squareResult);
