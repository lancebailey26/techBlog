const router = require('express').Router();
const { Blogs } = require('../../models');
const withAuth = require('../../utils/auth');
var moment = require('moment');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blogs.create({
      ...req.body,
      blogger_id: req.session.user_id,
      datetime: moment().format()
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.update(req.body, {
      where: {
        id: req.params.id,
        blogger_id: req.session.user_id,
        // title: req.body.title,
        // body: req.body.body
      },
    });
    if (!blogData[0]) {
      res.status(404).json({ message: 'No blog with this id!' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.destroy({
      where: {
        id: req.params.id,
        blogger_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/', async (req, res) => {
  const blogData = await Blogs.findAll();
  res.status(200).json(blogData)
})

module.exports = router;
