import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
<<<<<<< HEAD
        selectedPostId: null
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
=======
        selectedPostId: null,
        error: false
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/postssss')
>>>>>>> Initial commit
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post, 
                    author: 'Wycliff'
                }
            })
            this.setState({posts: updatedPosts})}
<<<<<<< HEAD
        );
=======
        )
        .catch(error => this.setState({error: true}));
>>>>>>> Initial commit
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    
    render () {
<<<<<<< HEAD
        const posts = this.state.posts.map(post => (
            <Post  clicked={() => this.postSelectedHandler(post.id)} key={post.id} title={post.title} author={post.author}/>
        ))

=======
        let posts = <p style={{textAlign: "center"}}>Something wrong has happened!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => (
                <Post  clicked={() => this.postSelectedHandler(post.id)} key={post.id} title={post.title} author={post.author}/>
            ))
        }
>>>>>>> Initial commit
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;