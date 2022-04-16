
const spinner = function() {
  const characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
  let ms = 100;
  for (let char of characters) {
    setTimeout(() => {
      process.stdout.write(char);
    }, ms);
    ms += 200;
  }
};

spinner();