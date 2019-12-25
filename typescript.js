module.exports = {
	rules: {
		// seems to be broken with typescript
		'import/no-unresolved': 'off',
		// raise from warning
		'@typescript-eslint/no-unused-vars': 'error',
		// even ts-ignore is discouraged, it's enough to have it as a red flag
		'@typescript-eslint/ban-ts-ignore': 'off',
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
