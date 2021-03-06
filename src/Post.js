import React from 'react'

const Post = ({post}) => {
    const {caption, location, photo} = post
    return (
        <div>
            {caption} {location} {photo}
            <img src={photo} alt={caption} style={{width: '100px'}}/>
        </div>
    )
}

export default Post