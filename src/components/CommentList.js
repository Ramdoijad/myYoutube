import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  return  comments.map((comment,index)=>
<div>
  <Comment key={index} data={comment}/>
<div className='pl-8 mt-2 border border-l-black'>
<Comment key={index} data={comment}/>
<CommentList comments={comment.replies}/>
</div>
</div>
)

}

export default CommentList