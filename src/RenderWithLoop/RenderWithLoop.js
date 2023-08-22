import React, { Component } from 'react'

export default class RenderWithLoop extends Component {
    productList = [
        { id: 1, name: 'black car', price: 3000, img: './carbasic/products/black-car.jpg' },
        { id: 2, name: 'red car', price: 3000, img: './carbasic/products/red-car.jpg' },
        { id: 3, name: 'silver car', price: 3000, img: './carbasic/products/silver-car.jpg' },
        { id: 4, name: 'steel car', price: 3000, img: './carbasic/products/steel-car.jpg' },
    ]

    renderTable = () => {
        // Cách 1: sử dụng for để lặp và đưa vào mảng mới
        // let mangTrComponent = [];
        // for (let index = 0; index < this.productList.length; index++) {
        //     let products = this.productList[index];
        //     let trJSX = <tr key={index}>
        //         <td>{products.id}</td>
        //         <td>{products.name}</td>
        //         <td>{products.price}</td>
        //         <td>
        //             <img style={{ width: "100px" }} src={products.img} />
        //         </td>
        //         <td></td>
        //     </tr>
        //     mangTrComponent.push(trJSX);
        // }
        // return mangTrComponent;

        // Cách 2: Dùng map
        return this.productList.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <img style={{ width: "100px" }} src={product.img} />
                </td>
                <td></td>
            </tr>
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
