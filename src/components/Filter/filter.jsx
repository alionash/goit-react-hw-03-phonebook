import PropTypes from 'prop-types';
import { Div, FilterLabel, Input } from './filter.styled';

const Filter = ({ filter, onChange }) => 
    <Div>
        <FilterLabel>Enter name:</FilterLabel>
        <Input type="text" value={filter} onChange={onChange} />
    </Div>

export default Filter;

Filter.propTyres = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}