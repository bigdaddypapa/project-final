const express = require ('express') 

const { getPosts, createPost} = require ('../controllers/posts')

const router = express.Router();

router.get ('/', getPosts )
router.post('/', createPost);

// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

module.exports = router