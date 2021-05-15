module.exports = {
	rules: {
		// https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		// seems to be broken with typescript
		'import/no-unresolved': 'off',
		// raise from warning
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/ban-ts-comment': [
			'off',
			{
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': 'allow-with-description',
				'ts-nocheck': 'allow-with-description',
				'ts-check': 'allow-with-description',
				minimumDescriptionLength: 3,
			},
		],
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/no-angle-bracket-type-assertion': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-extra-parens': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
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
