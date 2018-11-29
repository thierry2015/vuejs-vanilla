const mix = require('laravel-mix');
const fs = require('fs');

mix.setPublicPath('public')
	.js('src/index.js', 'public/build/app.js')
	.then(() => {
		const manifestPath = path.resolve(__dirname, 'public', 'mix-manifest.json');
		if (fs.existsSync(manifestPath)) {
			fs.unlink(manifestPath, () => {});
		}
	});