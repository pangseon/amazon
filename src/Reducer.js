export const initialState={
    basket:[],
    user:null
    
};
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount,0 )


 
const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'Add_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item],
            };

            case 'REMOVE_FROM_BASKET':
                console.log(state);
                console.log(action);
    
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];
    
                if (index >= 0) {
                    newBasket.splice(index, 1);
    
                } else {
                    console.warn(
                        ' (id: ' +
                        action.id +
                        ')이 장바구니에 존재하지 않습니다 '
                    )
                }
    
                return {
                    ...state,
                    basket: newBasket
                }
                case'SET_USER':{
                    return{
                        ...state,
                        user:action.user
                    }

                }
        



            default:
                return state;
    }
}

export default reducer;