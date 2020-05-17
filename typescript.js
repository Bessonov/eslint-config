module.exports = {
	rules: {
		// seems to be broken with typescript
		'import/no-unresolved': 'off',
		// raise from warning
		'@typescript-eslint/no-unused-vars': 'error',
		// even ts-ignore is discouraged, it's enough to have it as a red flag
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-angle-bracket-type-assertion': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-extra-parens': 'error',
		// no semicolons
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
				},
			},
		],
	},
}
