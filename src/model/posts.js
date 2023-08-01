const { Model } = require('objection');
const knex = require('../../config/config');
const Users = require('./user');
Model.knex(knex);


class Posts extends Model {
    static get tableName() {
        return 'posts';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                content: { type: 'string' },
                user_id: { type: 'integer' }

            }
        }
    }

    static relationMappings = {
        Users: {
            relation: Model.BelongsToOneRelation,
            modelClass: Users,
            join: {
                from: 'posts.user_id',
                to: 'users.id'
            }
        }
    };
}
module.exports = Posts;