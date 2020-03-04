
module.exports = (options)=>(`<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title></title>
	<style>
		html, body { margin: 0; padding: 0; background-color: ${options.backgroundColor || 'transparent'}; }
		body { padding: ${ options.padding > 0 ? padding + 'px' : '0'} }
		svg { display: block; position: relative; top: 0; left: 0; }
	</style>
</head>
<body>
	${options.svg}
</body>
</html>`);