import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { FormTitle, SeacrhInput } from "./Filter.styled";

export const Filter = () => {
    const value = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <FormTitle> Find contacts by name
            <SeacrhInput 
                type="text"
                name="filter"
                value={value}
                onChange={ev => dispatch(filterChange(ev.currentTarget.value))}
            />
        </FormTitle>
    )
};