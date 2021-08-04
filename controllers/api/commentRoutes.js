const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      author_id: req.session.user_id,
      
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const commentData = await Comments.destroy({
//       where: {
//         id: req.params.id,
//         author_id: req.session.user_id,
//       },
//     });

//     if (!commentData) {
//       res.status(404).json({ message: 'No Comment found with this id!' });
//       return;
//     }

//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
