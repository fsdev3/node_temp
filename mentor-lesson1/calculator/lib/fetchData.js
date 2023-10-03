const [operator, ...args] = process.argv.slice(2);
const numbersArr = args.map((number) => Number(number));

module.exports = { operator, numbersArr };
