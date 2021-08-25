import React from 'react';
import CartItem from "./CartItem"
class Cart extends React.Component {
  constructor (){
      super();
      this.state = {
          products: [
            {
                price : 99,
                title: 'Watch',
                qty: 1,
                img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10769098/2019/10/17/4e8dc285-fce6-4d57-b058-d79d2132eb271571294516344-NOISE-Black-ColorFit-Pro-2-Active-Smartwatch-324157129451526-1.jpg',
                id:1
            },
            {
                price : 999,
                title: 'Phone',
                qty: 1,
                img:'',
                id:2
            },
            {
                price : 999,
                title: 'Laptop ',
                qty: 1,
                img:'',
                id:3
            }
          ]
      }
    }

handleIncreaseQuantity = (product) => {
  console.log('Increase the qty of', product);
  const{products} = this.state;
  const index = products.indexOf(product);
  products[index].qty += 1;
  this.setState({
    products
  })
}

handleDecreaseQuantity = (product) => {
  console.log('Decrease the qty of', product);
  const{products} = this.state;
  const index = products .indexOf(product);
  if(products[index].qty === 0){
    return;
  }
  products[index].qty -= 1;
  this.setState({
    products
  })
}

handleDeleteProduct = (id) => {
  const { products } = this.state;
  const items = products.filter((item) => item.id !== id);
  this.setState ({
    products: items
  })

}

  render() {
    const {products} = this.state;
    return (

      <div className="cart">
      {products.map((product) =>{
        return<CartItem product = {product}
        key = {product.id}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteQuantity = {this.handleDeleteProduct}
        />
      })}
      </div>
    );
  }
}


export default Cart;
