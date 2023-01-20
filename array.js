// Standard Library JavaScript Array.

{
  // Array Loop (forEach).
  const array = ["Kadek", "Frama", "Danamastyana"];

  array.forEach((value, index) => {
    console.info(`${index} : ${value}`);
  });

  console.info(``);
}

{
  // Array Queue (push(), shift()).
  // Queue (antrian).
  const queue = [];

  queue.push("Kadek"); // push(): menambahkan nilai ke dalam array.
  queue.push("Frama");
  queue.push("Danamastyana");

  console.info(queue.shift()); // shift(): menghilangkan nilai index array paling depan.
  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
  console.info("");
}

{
  // Array Stack (pop(), unshift()).
  // Stack (tumpukan).
  const stack = [];

  stack.push("Terus"); // push(): menambahkan nilai ke dalam array.
  stack.push("Tetap");
  stack.push("Semangat");
  let join = stack.join(" ");

  console.info(join);
  console.info(join.split(" "));

  console.info(stack.pop()); // pop(): menghilangkan nilai index array paling belakang.
  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
  console.info("");

  let stack2 = [];
  stack2.unshift("Saya"); // unshift(): menambahkan nilai index array ke paling depan.
  stack2.unshift("Belajar");
  stack2.unshift("JavaScript");

  console.info(stack2.join(" "));
  console.info(stack2.pop()); // pop(): menghilangkan nilai index array paling di paling belakang.
  console.info(stack2.pop());
  console.info(stack2.pop());
  console.info(stack2.pop());
  console.info("");
}

{
  // Array Search.
  /**
   * find(value => boolean): value        |     Mencari data sesuai dengan kondisi.
   * findIndex(value => boolean): number  |     Mencari data index sesuai dengan kondisi.
   * includes(value): boolean             |     Mengecek apakah terdapat data.
   * indexOf(value): number               |     Mengecek posisi index data.
   * lastIndexOf(value): number           |     Mengecek posisi index data terakhir.
   */

  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.info(source.find((value) => value > 3)); // 4.
  console.info(source.findIndex((value) => value > 3)); // 3.
  console.info(source.includes(7)); // false.
  console.info(source.indexOf(5)); // 4.
  console.info(source.lastIndexOf(5)); // 9.
  console.info("");
}

{
  // Array Filter.
  /**
   * filter(value => boolean): Array      |     Melakukan filter data yang kondisinya bernilai true.
   */

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.info(numbers);
  console.info(`Ganjil: ${numbers.filter((value) => value % 2 === 1)}`);
  console.info(`Genap: ${numbers.filter((value) => value % 2 === 0)}`);
  console.info("");
}

{
  // Array Transform.
  /**
   * map(value => result): Array<result>                  |   Melakukan transform tiap value dan menghasilkan array result.
   * reduce(resultBefore, value => result): result        |   Melakukan transform dengan menggunakan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya.
   * reduceRight(resultBefore, value => result): result   |   Sama seperti reduce(), namun dilakukan dari belakang.
   */

  const name = "Kadek Frama Danamastyana".split(" ");
  const nameUpper = name.map((value) => value.toUpperCase()); // map().
  console.info(nameUpper);
  console.info(name);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const total = numbers.reduce((before, value) => before + value); // reduce().
  console.info(total);

  const namaSaya = "Kadek Frama Danamastyana".split(" ");
  let reduceNamaSaya = namaSaya.reduce((before, value) => before + " " + value); // reduce().
  // reduceRight().
  let reduceRightNamaSaya = namaSaya.reduceRight(
    (before, value) => before + " " + value
  );
  console.info(namaSaya);
  console.info(reduceNamaSaya);
  console.info(reduceRightNamaSaya);
}
