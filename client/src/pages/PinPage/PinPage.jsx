import './PinPage.css'

const PinPage = () => {
    return (
        <>

            <div className="container">

                <div className="pin-page">
                    <div className="pin-image">
                        <img src="https://i.pinimg.com/736x/51/81/e2/5181e204f321a9ff66bc8ce79fd8476e.jpg" alt="" />
                    </div>


                    <div className="pin-info">
                        <div className="user-info">
                            <img src="https://i.pinimg.com/736x/bf/1c/bb/bf1cbb9a00723bfe5e0a13ba021e8902.jpg" alt="" />
                            <p>
                                Sarcastic Firoz
                            </p>
                        </div>

                        <h3>
                        Best in the business 😎
                        </h3>
                        <p className='description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatem natus laudantium dolor tempore, nesciunt harum nostrum iste repudiandae laboriosam.
                        </p>

<div className="post-action">

        <button className='like'>
            <i className="bi bi-heart"></i>
        </button>

        <button className='save'>
            <i className="bi bi-bookmark"></i>
        </button>

        <button className='download'>
            <i className="bi bi-download"></i>
        </button>

</div>


                    </div>


                </div>


            </div>

        </>
    )
}

export default PinPage