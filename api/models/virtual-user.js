var SEQ = require('./db-model');

const VirtualUser = SEQ.SEQUELIZE.define('virtual_users', {
    id: {
        type: SEQ.DATA_TYPES.INTEGER,
        primaryKey: true
    },
    domain_id: {
        type: SEQ.DATA_TYPES.INTEGER,
        references: {
            model: 'virtual_domains',
            key: 'id'
        }
    },
    password: {
        type: SEQ.DATA_TYPES.STRING
    },
    email: {
        type: SEQ.DATA_TYPES.STRING
    }
},{
    timestamps: false
});


module.exports = VirtualUser;