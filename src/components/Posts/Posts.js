/** @format */

import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);// useSelector takes  state as parameter and gives us access to redux store and return posts from reducer(index.js)
  const classes = useStyles();
  console.log(posts)
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
