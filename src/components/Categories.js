import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = ({ categories }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(checkStatus('status check'));
  };

  return (
    <div className="categories">
      <button type="submit" onClick={onClick}> Check status </button>
      {categories}
    </div>
  );
};

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string],
  )),
};

export default Categories;
