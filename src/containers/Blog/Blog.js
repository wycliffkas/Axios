import React, { Component, Suspense } from "react";
// import axios from 'axios';
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const Post = React.lazy(() => import("./Posts/Posts"));

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          {/* {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null} */}
          <Route path="/new-post" component={NewPost} />
          <Route path="/new-post" component={Posts} />
          {/* <Route
            path="/posts"
            render={() => (
              <Suspense fallback={<div>Loading</div>}>
                <Post />
              </Suspense>
            )}
          /> */}
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
