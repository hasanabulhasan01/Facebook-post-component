import './index.css'
import LikeShareBtns from '../../components/LikeShareButtons'
// import CurrentDate from '../../components/CurrentDate'
import FbImageLibrary from 'react-fb-image-grid'

function FacebookPost(props){
    
    return (
        <div className='mainDiv' >
            <div className='header'>
                <div>
                  <img className='profilePic' src={props.thumbnail}/>
                </div>
                
                <div className='title'>
                  <p className='title'>{props.title}</p>
                  <p className='date'>Jan 03, 2024 </p>
                </div>
            </div>
            <div className='description'>
                <p className='key'>Brand: <span className='value'>{props.brand}</span></p>
                <p className='key'>Category: <span className='value'>{props.category}</span></p>
                <p className='key'>Price: <span className='value'>{props.price}$</span></p>
                <p className='key'>Available Stock: <span className='value'>{props.stock}pcs</span></p>
                <p className='key'>Discount: <span className='value'>{props.discount}%</span></p>
                <p className='key'>Description: <span className='value'>{props.description}.</span></p>
            </div>
            <div className='images-Library'>
                <FbImageLibrary images={props.images[0]}/>
            </div>
            <div className='likeBtns'>
                <LikeShareBtns/>
            </div>
        </div>
    )
}

export default FacebookPost