const { join } = require("pash");
module.exports={
    entry:'./src/main/js',
    output:{
        pash:join(__dirname,'dist')
    }
}