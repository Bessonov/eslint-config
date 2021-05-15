/* eslint sort-keys: ["error", "asc", {natural: true}] */
module.exports = {
	rules: {
		'arrow-parens': [
			'error',
			'as-needed',
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'import/no-default-export': 'error',
		// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
		'import/prefer-default-export': 'off',
		// Tabs works great with vim and other editors.
		// You can adjust tabs to show it as 2 spaces.
		// There is no reason to use spaces. Really.
		indent: [
			'error',
			'tab',
		],
		// raise from warning
		'no-console': 'error',
		'no-shadow': 'error',
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true,
			},
		],
		// same as from airbnb,
		// but allows consistent use of backticks
		quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		// Semicolons are just a cognitive overhead.
		semi: [
			'error',
			'never',
		],
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
			},
		],
	},
}
