const Blog = require('./blog');
const Comment = require('./comment');
const User = require('./user');

Blog.belongsTo(User, {
    foreignKey: "blogger_id"
});
Blog.hasMany(Comment,{
    foreignKey: "posted_on"
});

Comment.belongsTo(User, {
    foreignKey: "author_id"
});
Comment.belongsTo(Blog, {
    foreignKey:"posted_on"
});

User.hasMany(Blog, {
    foreignKey: "blogger_id"
})
User.hasMany(Comment, {
    foreignKey: "author_id"
});

module.exports = { User, Blog, Comment };
