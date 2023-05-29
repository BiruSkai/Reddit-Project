import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsLoading, selectIsError, selectSearchItem } from '../search/SearchSlice';
import Post from './Post';

export const Posts = () => {
  const posts = useSelector(selectSearchItem);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div id="post-container" >
      {isLoading && <p>Loading data...</p>}
      {isError && <p>Error...</p>}
      {!isLoading && !isError && (
        posts.map( post => (
          <Post post={post.data} key={post.id} />
        ))
      )}
    </div>
  )
}