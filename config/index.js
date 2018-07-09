const   nconf = require('nconf'),
        path = require('path'),
        fs = require('fs-extra');

const configFiles = fs.readdirSync(__dirname).filter((file) =>{
    if(path.extname(file) !== '.js' || path.basename(file) === 'index.js'){
        return false;
    }
    return true;
});

nconf
    .defaults({
        'rootDir': path.resolve(__dirname, '../'),
        'tmpDir': path.resolve(__dirname, '../', 'tmp')
    })

for(let filename of configFiles){
    const configName = path.basename(filename, '.js');
    const filepath = path.resolve(__dirname, filename);
    nconf.add(configName, { type: 'literal',
        store: require(filepath)
    });
}



module.exports = nconf;