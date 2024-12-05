const ImageContainer = ({ imageSource, description }) => {
    return (
        <div className="image-container">
            <img src={imageSource} className='image' />
            <p className='date'>{description}</p>
        </div>
    );
};

export default ImageContainer;