import { connect } from 'react-redux'
import Categories from './categories'

const mapStateToProps = (state) => {
  return { user: state.user }
}

const CategoriesContainer = connect(mapStateToProps)(Categories)

export default CategoriesContainer
