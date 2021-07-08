// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
describe("String.filter", () => {
    it("The function returns the string after removing all the banned words. It removes banned word 'not' from '\"This house is not nice!' and returning '\"This house is nice!'", () => {
      assert.strictEqual(
        '"This house is nice!',
        '"This house is not nice!'.filter("not")
      );
    });
    it("It removes banned word 'and' from '\"Bold and Amy took the bus' and returning '\"Bold Amy took the bus'", () => {
      assert.strictEqual(
        '"Bold Amy took the bus.',
        '"Bold and Amy took the bus.'.filter("and")
      );
    });
  });
  
  // Exercise 2:
  // Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
  // that works by repeatedly stepping through the list to be sorted
  describe("Array.bubbleSort", () => {
    it("Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted. [6, 4, 0, 3, -2, 1] => [-2, 0, 1, 3, 4, 6]", () => {
      it("[6, 4, 0, 3, -2, 1] => [-2, 0, 1, 3, 4, 6]", () => {
        expect([6, 4, 0, 3, -2, 1].bubbleSort()).to.have.same.members([
          -2, 0, 1, 3, 4, 6,
        ]);
      });
    });
  
    it("[4, 0, -12, 8] => [-12, 0, 4, 8]", () => {
      it("[4, 0, -12, 8] => [-12, 0, 4, 8]", () => {
        expect([4, 0, -12, 8].bubbleSort()).to.have.same.members([-12, 0, 4, 8]);
      });
    });
  });
  
  // Exercise 3
  describe("Teacher.prototype.teach", () => {
    it("Khulan is now teaching WAP", () => {
      const charles = new Teacher();
      charles.initialize("Khulan", 36);
      assert.strictEqual(charles.teach("WAP"), "Khulan is now teaching WAP");
    });
  
    it("John is now teaching Math", () => {
      const charles = new Teacher();
      charles.initialize("John", 40);
      assert.strictEqual(charles.teach("Math"), "John is now teaching Math");
    });
  });
  