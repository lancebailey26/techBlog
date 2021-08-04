const Blogs = require('./blogs');
const Comments = require('./comments');
const User = require('./User');

Blogs.belongsTo(User, {
    foreignKey: "blogger_id"
});
Blogs.hasMany(Comments,{
    foreignKey: "posted_on"
});

Comments.belongsTo(User, {
    foreignKey: "author_id",
});
Comments.belongsTo(Blogs, {
    foreignKey:"posted_on"
});

User.hasMany(Blogs, {
    foreignKey: "blogger_id"
})
User.hasMany(Comments, {
    foreignKey: "author_id"
});

module.exports = { User, Blogs, Comments };
