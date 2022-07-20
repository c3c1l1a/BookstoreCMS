const CHECK_STATUS = 'categories/CHECK_STATUS';

export default function categoryReducer(categories = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return [...categories, action.category];
    default:
      return categories;
  }
}

export function checkStatus(category) {
  return {
    type: CHECK_STATUS,
    category,
  };
}
