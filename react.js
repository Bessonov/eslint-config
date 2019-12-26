module.exports = {
	env: {
		browser: true,
	},
	rules: {
		// like in main config use tabs
		'react/jsx-indent': [
			'error',
			'tab',
		],
		// like in main config use tabs
		'react/jsx-indent-props': [
			'error',
			'tab',
		],
		// allows more freedom...
		'react/jsx-one-expression-per-line': 'off',
	},
}
