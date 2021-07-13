const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your name? ", (name) => {
  console.log(`Welcome ${name}`);

  readline.question("What is your age? ", (age) => {
    console.log(
      `You're ${age < 16
        ? "not allowed to drive in Iowa"
        : "allowed to get a drivers license in Iowa"
      }`
    );
    readline.close();
  });
});
const counterModule = (function () {
  let counter = 0;

  const getNumber = function () {
    readline.question("Enter number: ", (number) => {
      if (number === "stop") {
        console.log("Sum: " + counter);
        readline.close();
      } else {
        counter += parseInt(number);
        getNumber();
      }
    });
  };

  return { getNumber: getNumber };
})();

counterModule.getNumber();