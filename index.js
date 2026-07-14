document.addEventListener("DOMContentLoaded",() => {
    const postList = document.getElementById("post-list");
    async function displayPosts() {
        try {
            //Fetch the posts from the API
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            //convert the response to JSON
            const posts = await response.json();
            posts.forEach(post => {
                const li = document.createElement('li');
                const h1 =document.createElement('h1');
                const p = document.createElement('p');
                h1.textContent = post.title;
                p.textContent = post.body;
                li.appendChild(h1);
                li.appendChild(p);
                postList.appendChild(li); 
            });
    }catch (error) {
        console.error('Error fetching data:', error);
    }
}
displayPosts();
});
