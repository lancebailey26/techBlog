const newFormHandler = async (event) => {
    event.preventDefault();
  
    
    const comment = document.querySelector('#comment-comment').value.trim();
    const posted_on = document.querySelector('#blog-id').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, posted_on}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create comment');
      }
    }
  };