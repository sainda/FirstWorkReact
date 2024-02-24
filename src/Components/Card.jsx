import image from '../Assets/Image.png'
import './Card.css'


function Card({title='Sinda',subTitle,bgColor}) {
    return (
          <div className="card" style={{backgroundColor:bgColor}}>
          <img src={image} alt="image" />
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <div className='buttons'>
               <input type="button" value="Cancel" id="cancel" />
               <input type="button" value="Confirm" id="confirm" />
          </div>
          </div>

  
    );
  }
  
  export default Card;