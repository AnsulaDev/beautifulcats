
const Scroll = (props) => {
    return(
        <div style ={{overflowY: 'scroll', border: '5px solid black',height:'900px'}}>
            {props.children}
        </div>
    )

}

export default Scroll;