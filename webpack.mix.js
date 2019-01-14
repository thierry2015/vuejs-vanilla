const mix = require('laravel-mix');
const fs = require('fs');

mix.setPublicPath('public')
	.js('src/index.js', 'public/build/app.js')
	.copyDirectory('src/api', 'public/api')
	.then(() => {
		const manifestPath = path.resolve(__dirname, 'public', 'mix-manifest.json');
		if (fs.existsSync(manifestPath)) {
			fs.unlink(manifestPath, () => {});
		}
	});