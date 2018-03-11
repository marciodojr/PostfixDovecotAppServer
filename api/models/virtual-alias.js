const SEQ = require('./db-model');

const VirtualAlias = SEQ.SEQUELIZE.define('virtual_aliases', {
    id: {
        type: SEQ.DATA_TYPES.INTEGER,
        primaryKey: true
    },
    domain_id: {
        type: SEQ.DATA_TYPES.INTEGER,
        references: {
            model: "virtual_domains",
            key: "id"
        }
    },
    source: {
        type: SEQ.DATA_TYPES.STRING
    },
    destination: {
        type: SEQ.DATA_TYPES.STRING
    }
},{
    timestamps: false
});


module.exports = VirtualAlias;