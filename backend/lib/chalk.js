import chalk from "chalk";
// export default (color, message) => console.log(chalk[color](message));
export default (color, message, bg) => {

  console.log(chalk[color](message));
}
