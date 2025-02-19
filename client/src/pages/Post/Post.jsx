import './Post.css';

const Post = () => {
  return (
    <>

    <div className="postContainer">

    <div className="backBtn">
        <i className="fi fi-rr-arrow-left"></i>
    </div>

        <div className="post">

            <div className="post-image">
                <img src="https://i.pinimg.com/736x/ac/60/fc/ac60fc3e54dc83b997578ebc709ecf34.jpg" alt="" />
            </div>
            <div className="post-info">

                <div className="post-action">

                    <div>
                    <button className='like'>
                        <i className="fi fi-rr-heart"></i> 109
                    </button>

                    <button className='download'>
                        <i className="fi fi-rr-download"></i> Download
                    </button>
                    </div>

                    <button className='save'>
                        Save
                    </button>

                </div>


                <div className="author">
                <img src="https://i.pinimg.com/236x/58/60/35/5860357e4239442e8ba61cd8cccb7b28.jpg" alt="" />
                <p>
                    Deela Folsom
                </p>
            </div>

            <h5>
                    10 Comments
                </h5>

                <div className="comment-box">

                    <div className="comment">
                            <img src="https://i.pinimg.com/75x75_RS/b2/5a/af/b25aaf1e000388007fd4b3bfc00623bb.jpg" alt="" />
                            <div className="comment-info">
                                <p>
                                    <b>magic </b> is he looking at mega gardevoir with veil?
                                </p>

                                <div className="comment-meta">
                                   <small>
                                    1 Year Ago
                                   </small>
                                </div>

                            </div>
                    </div>

                    <div className="comment">
                            <img src="https://i.pinimg.com/236x/ac/21/a4/ac21a4e9f488487567b0b05204ae1351.jpg" alt="" />
                            <div className="comment-info">
                                <p>
                                    <b>Sunnythesillygoose </b> temos que concordar que os melhores ash são o alola ash e o primeiro
                                </p>

                                <div className="comment-meta">
                                   <small>
                                    3 Year Ago
                                   </small>
                                </div>

                            </div>
                    </div>

                    <div className="comment">
                            <img src="https://i.pinimg.com/236x/ac/21/a4/ac21a4e9f488487567b0b05204ae1351.jpg" alt="" />
                            <div className="comment-info">
                                <p>
                                    <b>Sunnythesillygoose </b> temos que concordar que os melhores ash são o alola ash e o primeiro
                                </p>

                                <div className="comment-meta">
                                   <small>
                                    3 Year Ago
                                   </small>
                                </div>

                            </div>
                    </div>


                    <div className="comment">
                            <img src="https://i.pinimg.com/236x/ac/21/a4/ac21a4e9f488487567b0b05204ae1351.jpg" alt="" />
                            <div className="comment-info">
                                <p>
                                    <b>Sunnythesillygoose </b> temos que concordar que os melhores ash são o alola ash e o primeiro
                                </p>

                                <div className="comment-meta">
                                   <small>
                                    3 Year Ago
                                   </small>
                                </div>

                            </div>
                    </div>

                    <div className="comment">
                            <img src="https://i.pinimg.com/236x/ac/21/a4/ac21a4e9f488487567b0b05204ae1351.jpg" alt="" />
                            <div className="comment-info">
                                <p>
                                    <b>Sunnythesillygoose </b> temos que concordar que os melhores ash são o alola ash e o primeiro
                                </p>

                                <div className="comment-meta">
                                   <small>
                                    3 Year Ago
                                   </small>
                                </div>

                            </div>
                    </div>

                    <div className="comment">
                            <img src="https://i.pinimg.com/236x/ac/21/a4/ac21a4e9f488487567b0b05204ae1351.jpg" alt="" />
                            <div className="comment-info">
                                <p>
                                    <b>Sunnythesillygoose </b> temos que concordar que os melhores ash são o alola ash e o primeiro
                                </p>

                                <div className="comment-meta">
                                   <small>
                                    3 Year Ago
                                   </small>
                                </div>

                            </div>
                    </div>  

                </div>

                <div className="post-comment">

                <input type="text" placeholder='Add a comment' />
                <button><i className="fi fi-rr-paper-plane"></i></button>
                </div>

            </div>

            


        </div>

    </div>

    </>
  )
}

export default Post