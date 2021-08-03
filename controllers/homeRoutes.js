const router = require('express').Router();
const { Blogs, Users, Comments } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogData = await Blogs.findAll({
      include: [{
        model: Users,
        attributes: ['username']
      }]
    });
    
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render('homepage', {blogs});


  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
