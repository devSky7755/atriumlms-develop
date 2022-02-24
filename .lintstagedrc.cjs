const listPaths = (paths) => paths.map((v) => `'${v}'`).join(' ');

module.exports = {
  '*': (paths) => {
    const commands = [];

    commands.push(
      // Execute prettier against changes files
      `prettier --check --ignore-unknown --write ${listPaths(paths)}`,
      // Add staged files back to git after linter & prettier fixes
      `git add ${listPaths(paths)}`,
    );

    return commands;
  },
  '**/*.ts?(x)': 'bash -c tsc --noEmit --skipLibCheck',
  '.eslintrc.js|**/*.((c|m)js|(j|t)s?(x)|mdx)': (paths) => {
    const commands = [];

    // if eslintrc.js was changed, execute it globally
    if (paths.includes(`${__dirname}/.eslintrc.js`)) {
      commands.push('yarn eslint:fix');
    } else {
      // Execute lint only against changed files
      commands.push(`eslint --max-warnings 0 --fix ${listPaths(paths)}`);
    }

    commands.push(`prettier --write ${listPaths(paths)}`, `git add ${listPaths(paths)}`);

    return commands;
  },
  '.stylelintrc.js|**/*.(css|scss)': (paths) => {
    const commands = [];
    if (paths.includes(`${__dirname}/.stylelintrc.js`)) {
      commands.push('yarn stylelint:fix');
    } else {
      // Execute lint only against changed files
      commands.push(`stylelint --max-warnings 0 --fix ${listPaths(paths)}`);
    }

    commands.push(`git add ${listPaths(paths)}`);

    return commands;
  },
};
