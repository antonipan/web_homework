const cels = parseInt(prompt ('Введите температуру по Цельсию: '));
let far = (9/5)*cels + 32;
far = far.toFixed(1);
alert("Градусы Цельсия: " + cels + " C\n"
+ "Градусы Фаренгейта: " + far + " F");