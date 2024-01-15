import './index.css';
import EmojiImage1 from '../../assets/images/emoji1.gif'
import EmojiImage2 from '../../assets/images/emoji2.gif'
import EmojiImage3 from '../../assets/images/emoji3.gif'
import EmojiImage4 from '../../assets/images/emoji4.gif'
import EmojiImage5 from '../../assets/images/emoji5.gif'
import EmojiImage6 from '../../assets/images/emoji6.gif'

function LikeShareBtns(){
    return (
        <div className="mainContainer">            
            <div className="buttonDiv">
                <div className='likeBtnDiv' >
                  <div className='emoji-div'>
                      <img width={50} src={EmojiImage1}/>
                      <img width={25} src={EmojiImage2}/>
                      <img width={30} src={EmojiImage3}/>
                      <img width={40} src={EmojiImage4}/>
                      <img width={40} src={EmojiImage5}/>
                     
                  </div>  
                  <button><img width={40} src="https://logowik.com/content/uploads/images/940_like_icon.jpg" /><span>Like</span></button>
                </div>
               <button><img width={30} src="https://static.thenounproject.com/png/1314304-200.png" /><span>Comment</span></button>
               <button><img width={30} src="https://cdn3.iconfinder.com/data/icons/for-facebook-web/32/Ikon_FB-09-512.png" /><span>Share</span></button>
            </div>
        </div>
    )
}

export default LikeShareBtns;