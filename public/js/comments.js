const commentHandler = async (event) => {
    event.preventDefault();
  
    
    const comment = document.querySelector('#comment-comment').value.trim();
    const posted_on = document.querySelector('#blog-id').textContent;
  
    if (comment && posted_on) {
      const response = await fetch(`/api/comments/newcomment`, {
        method: 'POST',
        body: JSON.stringify({ comment, posted_on }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };

  const deleteCommentButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete comment');
      }
    
  };
};
  
  document
  .querySelector('.comment-form')
  .addEventListener('click', commentHandler);

  document
  .querySelector('.comment-section')
  .addEventListener('click', deleteCommentButtonHandler);
