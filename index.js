module.exports = {
	rules: {
		// Semicolons are just a cognitive overhead.
		semi: [
			'error',
			'never',
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		// Tabs works great with vim and other editors.
		// You can adjust tabs to show it as 2 spaces.
		// There is no reason to use spaces. Really.
		indent: [
			'error',
			'tab',
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		// same as from airbnb,
		// but allows consistent use of backticks
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		// raise from warning
		'no-console': 'error',
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
			},
		],
		// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
	},
}
