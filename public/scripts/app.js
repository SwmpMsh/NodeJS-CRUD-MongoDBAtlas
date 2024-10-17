(() => {
    const btn = document.querySelector('[rel=js-delete]');

    btn?.addEventListener('click', event => {
        const bookId = event.target.dataset.id;
        const bookTitle = event.target.dataset.title;
        const isConfirmed = confirm(`Confirm the book deletion (${bookTitle}) ?`);

        if (isConfirmed) {

            console.log("execute la suppression "+ bookId);

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `/book/${bookId}/delete`; 

            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = '_method';
            input.value = 'DELETE';

            form.appendChild(input);

            document.body.appendChild(form);
            form.submit();
        }
        
    })
    
})();