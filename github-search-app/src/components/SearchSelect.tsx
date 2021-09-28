import SearchSelectItem from './SearchSelectItem';

const SearchSelect = props => {
   let allSelectOptions = props.selectValues.map((item, index) => (
      <SearchSelectItem
         key={`select-item-${index}`}
         selectValue={item} />
   ));
   return (
      <select className="git-search__type" onChange={props.handleSelect}>{allSelectOptions}</select>
   )
}

export default SearchSelect;