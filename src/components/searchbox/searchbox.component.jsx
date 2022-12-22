import './search-box.styles.scss';
const SearchBox= ({searchfield, searchChange}) => {
    return(
    
            <input className='search-box' type="search" name="search"
                onChange={searchChange}
                placeholder='search cats'
            />


    );
};

export default SearchBox;
