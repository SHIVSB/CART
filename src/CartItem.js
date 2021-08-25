import React from 'react';

class CartItem extends React.Component{
    constructor (){
        super();
        this.state = {
            price : 999,
            title: 'Phone',
            qty: 1,
            img:''
        }

        // this.testing();
    }

    // testing(){
    //   const promise = new Promise((resolve,reject) => {
    //     setTimeout(() =>{
    //       resolve('done');
    //     },5000);
    //   })
    // }
    // promise.then(() =>{
    //   this.setState({qty : this.state.qty + 10});
    //   this.setState({qty : this.state.qty + 10});
    // })
    increaseQuantity = () =>{
        //this.state.qty += 1;
        console.log('this',this.state);
        //set form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });

        //set form 2
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state',this.state);
        })
    }
    decreaseQuantity = () => {
         console.log('this', this.state);
        const { qty } = this.state;
        if(qty === 0){
            return
        }
        //set form 1
        // this.setState({

        //     qty: this.state.qty -1
        // });

        //set form 2

        this.setState((prevState) => {
            return{
                qty: prevState.qty -1
            }
            },() => {
                console.log('this.state',this.state);
        });
    }

    testing(){
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('done');
            },5000);
        })

        promise.then(()=> {
            this.setState({qty: 100});
            console.log('state',this.state);
        });
    }
    render(){
      console.log('this.props',this.props);
        const {price, title, qty} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: 'grey'}}>Rs {price}</div>
                    <div style={{color: 'grey'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* */}
                        <img alt="increase"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/128/992/992651.png"
                        onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img alt="decrease"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/128/992/992683.png"
                        onClick ={() => this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img alt="delete"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/128/3096/3096687.png"
                        onClick = {() => this.props.onDeleteQuantity(this.props.product.id)}
                        />

                    </div>
                </div>
            </div>

        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'grey'
    }
}

export default CartItem;
