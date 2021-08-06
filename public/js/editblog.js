

const editHandler = async (event) => {
    event.preventDefault();
    
      const title = document.querySelector('#edit-blog-title').value.trim();
      const body = document.querySelector('#edit-blog-body').value.trim();
      
     
      
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
    
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ "title":title,"body":body  }),
        headers: {
            'Content-Type': 'application/json',
          },
       
        
      });
  
      if (response.ok) {
        alert('blog updated');
window.location = '/dashboard';
      } else {
        alert('Failed to edit blog, you can only edit blogs that belong to you.');
      }
    }
  };
    document
    .querySelector('#subedit')
    .addEventListener('click', editHandler);