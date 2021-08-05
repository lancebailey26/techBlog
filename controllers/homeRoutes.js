const router = require('express').Router();
const { Blogs, User, Comments } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [{
        model: User,
        attributes: ['name']
      }]
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', {blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blogs.findByPk(req.params.id, {
      include: [{
        model: Comments,
        attributes: ['id','comment', 'posted_on', 'author_id'],
        include: {
            model: User,
            attributes: ['id','name']
        }
    },
    {
        model: User,
        attributes: ['name']
    }
]
})

    const blog = blogData.get({ plain: true });
    console.log(blog);

    res.render('blogpost', {blog, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const blogData = await Blogs.findAll({
      include: [{
        model: User,
        attributes: ['name',]
      }]
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user, blogs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// 

module.exports = router;
