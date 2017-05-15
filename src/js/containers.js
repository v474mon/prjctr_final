import { connect } from 'react-redux';
import FoodList   from './components/FoodList';
import FoodItem   from './components/FoodItem';
import ProfileAdd from './components/ProfileAdd';
import FoodAdd from './components/FoodAdd';
import { List, Map } from 'immutable';

import { onAddProfile, onAddFood } from './actions';


export const FoodListContainer = connect(
	function mapStateToProps(state) {
		return { foodList: state };
	},
	function mapDispatchToProps(dispatch) {
		return {
		};
	}
)(FoodList);


export const FoodItemContainer = connect(
	function mapStateToProps(state, ownProps) {
		const food_list = state.foodList;
		const supplier = state.profile;
		const id = Number(ownProps.params.id);
		const item = {};
		let food_item = {};
		 food_list.map(t => {
				if(t.get('id') === id) {
					item.name = t.get('name');
					food_item = {
						id: t.get('id'),
						name: t.get('name'),
						img: t.get('img'),
						ingredient: t.get('ingredient'),
						price: t.get('price'),
						perPerson: t.get('perPerson'),
						supplierName: t.get('supplierName'),
						supplierPhone: t.get('supplierPhone'),
						supplierLocation: t.get('supplierLocation'),
						sales: t.get('sales'),
						views: t.get('views')
					};
				}
			})
		return{
			foodItem: food_item,
			supplier: supplier
		} ;
	},

	function mapDispatchToProps(dispatch) {
		return {
			onOrderFood: (id) => {
				console.log('id', id);
				//dispatch({ type: 'FIND_TRACK', payload: id})
			},
			onViewFood: (id) => {
				console.log('id', id);
			}
		};
	}
)(FoodItem);


export const ProfileAddContainer = connect(
	function mapStateToProps(state) {
		return { profile: state.profile };
	},
	function mapDispatchToProps(dispatch) {
		return {
			onAddProfile: obj => dispatch(onAddProfile(obj))
		};
	}
)(ProfileAdd);



export const FoodAddContainer = connect(
	function mapStateToProps(state, ownProps) {
		return { ownProps };
	},
	function mapDispatchToProps(dispatch) {
		return {
			onAddFood: obj => dispatch(onAddFood(obj))
		};
	}
)(FoodAdd);
