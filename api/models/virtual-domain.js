const SEQ = require('./db-model');

const VirtualDomain = SEQ.SEQUELIZE.define('virtual_domains', {
    id: {
        type: SEQ.DATA_TYPES.INTEGER,
        primaryKey: true
    },
    name: {
        type: SEQ.DATA_TYPES.STRING
    }
},{
    timestamps: false
});


module.exports = VirtualDomain;