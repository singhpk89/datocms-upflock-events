import React, { useState } from 'react'
import { ChatMsg } from '@lib/types';

type Props = {
    post: ChatMsg;
  };

function PostItem( {post}: Props ) {

    const [name, setName] = useState(post.name);
    const [message, setMessage] = useState(post.message);

return (
    <div className="media p-3 border-bottom mb-2" key={new Date().getTime()}>
        <img src="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s48-c-k-c0x00ffffff-no-rj"
            className="mr-3 w-10 rounded-circle" alt="..." />
        <div className="media-body">
            <p className="mt-0 font-weight-bold mb-1 text-left">{'@'} {name} </p>
            <p className="text-left">
                {message}
            </p>
        </div>
    </div>
)
}

export default PostItem;
