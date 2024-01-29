module.exports = {
  extends: ['./typescript.js', 'airbnb', 'airbnb-typescript'],
  rules: {
    'react/require-default-props': 'off',
    'jsx-quotes': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'object-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
};
