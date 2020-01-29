const glob = require('glob-all');

describe('checking generated css js files', () => {
    it('should generate css js files', (done) => {
        const files = glob.sync([
            './dist/index-*.js',
            './dist/index-*.css',
            './dist/search-*.js',
            './dist/search-*.css'
        ]);

        if (files.length > 0) {
            done('')
        } else {
            throw Error('')
        }
    });
})