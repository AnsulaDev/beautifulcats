import './card.styles.scss'

const Card = ({ name,  email , id}) =>{
    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set4&200x200`} alt="jane"/>
            <div>
                <h2>{name} </h2> 
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;