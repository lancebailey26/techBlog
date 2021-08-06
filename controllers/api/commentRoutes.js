const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');
var moment = require('moment');
router.post('/newcomment', withAuth, async (req, res) => {
  try {
    
    const newComment = await Comments.create({
      author_id: req.session.user_id,
      datetime: moment().format(),
      ...req.body,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/', async (req, res) =>{
  const commentData = await Comments.findAll();
  res.status(200).json(commentData);
})

router.get('/:id', async (req, res) =>{
  const commentData = await Comments.findByPk(req.params.id);
  res.status(200).json(commentData);
})

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comments.destroy({
      where: {
        id: req.params.id,
        author_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No Comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
