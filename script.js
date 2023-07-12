function calcular(
  billete500,
  billete1,
  billete5,
  billete10,
  billete20,
  billete50,
  billete100
) {
  return (
    billete500 * 0.5 +
    billete1 +
    billete5 * 5 +
    billete10 * 10 +
    billete20 * 20 +
    billete50 * 50 +
    billete100 * 100
  );
}

console.log(calcular(0, 87, 25, 61, 16, 1, 0));

/*
50 + 50 + 43
*/

console.log(1192 - 87);
