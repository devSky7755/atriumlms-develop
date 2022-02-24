const plugins = [
  '@next/eslint-plugin-next',
  '@typescript-eslint',
  'eslint-comments',
  'import',
  'jsx-a11y',
  'prettier',
  'promise',
  'react',
  'react-hooks',
  'simple-import-sort',
  'tailwindcss',
  'unicorn',
];

const settings = {
  react: {
    version: 'detect',
  },
  tailwindcss: {
    config: 'tailwind.config.js',
  },
};

const javascriptConfig = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  rules: {
    'unicorn/prefer-module': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'simple-import-sort/imports': ['error'],
    'simple-import-sort/exports': ['error'],
  },
};

const typescriptConfig = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-empty-interface': ['off'],
    'simple-import-sort/imports': ['error'],
    'simple-import-sort/exports': ['error'],
  },
};

const reactConfig = {
  rules: {
    'func-names': ['off'],
    // No longer needed as of React v17
    'react/jsx-uses-react': ['off'],
    // No longer needed as of React v17
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.mdx'] }],
    'unicorn/filename-case': ['off'],
    'unicorn/prevent-abbreviations': ['off'],
    "@typescript-eslint/no-explicit-any": ["error", { "ignoreGenericConstraints": true }]
  },
};

const mdxConfig = {
  parser: 'eslint-mdx',
  extends: ['plugin:mdx/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
  },
  rules: {},
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins,
  settings,
  ignorePatterns: [
    '!/.eslintrc.js',
    '!/.lintstagedrc.cjs',
    '!/.stylelintrc.js',
    '/**/node_modules',
    '/.git',
    '/.husky',
    '/.next',
    '/.yarn',
    '/generated/',
  ],
  overrides: [
    {
      files: ['*.?(c|m)js'],
      ...javascriptConfig,
      rules: {
        ...javascriptConfig.rules,
      },
    },
    {
      files: ['next.config.js'],
      ...javascriptConfig,
      rules: {
        ...javascriptConfig.rules,
        'global-require': ['off'],
      },
    },
    {
      files: ['src/**/*.js?(x)'],
      ...javascriptConfig,
      ...reactConfig,
      rules: {
        ...javascriptConfig.rules,
        ...reactConfig.rules,
      },
    },
    {
      files: ['next-env.d.ts'],
      ...typescriptConfig,
      rules: {
        ...typescriptConfig.rules,
        'unicorn/prevent-abbreviations': ['off'],
      },
    },
    {
      files: ['src/**/*.ts?(x)'],
      ...typescriptConfig,
      ...reactConfig,
      rules: {
        ...typescriptConfig.rules,
        ...reactConfig.rules,
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.stories.ts?(x)'],
          },
        ],
        'no-param-reassign': [
          'error',
          {
            props: false,
          },
        ],
        'react/require-default-props': ['off'],
      },
    },
    {
      files: ['src/**/*.mdx'],
      ...mdxConfig,
      rules: {
        ...mdxConfig.rules,
      },
    },
  ],
};
