const Blogs = require('./blogs');
const Comments = require('./comments');
const Users = require('./users');

Blogs.belongsTo(Users, {
    foreignKey: "blogger_id"
});
Blogs.hasMany(Comments,{
    foreignKey: "posted_on"
});

Comments.belongsTo(Users, {
    foreignKey: "author_id"
});
Comments.belongsTo(Blogs, {
    foreignKey:"posted_on"
});

Users.hasMany(Blogs, {
    foreignKey: "blogger_id"
})
Users.hasMany(Comments, {
    foreignKey: "author_id"
});

module.exports = { Users, Blogs, Comments };
