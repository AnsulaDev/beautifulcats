import Card from "../cards/card.component";
import './card-list.styles.scss';
const Cardlist = ({cats}) => {
    return(

        <div className='card-list'>
            {cats.map((user, i) =>  {
                return(
                    <Card key={i} 
                    id={cats[i].id}
                    name={cats[i].name} 
                    email={cats[i].email}/>

                )
            })
            }
        </div>

    );
};

export default Cardlist;