module.exports = (
	require('./selectors')
	.map(selector => `${selector}:not([tabindex^="-"])`)
	.toString()
)
