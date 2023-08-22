import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css'

import dataFeatures from '../Data/arrayFeatures.json'
import dataWheels from '../Data/wheels.json'

export default class BaiTapChonXeNangCao extends Component {

    state = {
        carCurrent: {
            "id": 4,
            "title": "Rallye Red",
            "type": "Metallic",
            "img": "./images/icons/icon-red.jpg",
            "srcImg": "images-red/images-red-1/",
            "color": "Red",
            "price": "22,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "images-red/images-red-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "images-red/images-red-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "images-red/images-red-3/"
                }
            ]
        }
    }

    changerCar = (newCar) => {
        this.setState({
            carCurrent: newCar,
        })
    }

    renderIcon = () => {
        return dataFeatures.map((item, index) => {
            return <div onClick={() => { this.changerCar(item) }} style={{ cursor: 'pointer' }} className='row mt-1 border m-3' key={index}>
                <div className='col-2 d-flex align-items-center'>
                    <img className='p-1' style={{ width: '100%' }} src={item.img} alt={item.price} />
                </div>
                <div className='col-10'>
                    <h3 className='p-1'>{item.title}</h3>
                    <span className='p-1'>{item.type}</span>
                </div>
            </div>

        })
    }

    changerWheels = (newWheels) => {
        let objWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheels.idWheel);
        if (objWheel !== -1) {
            this.setState({
                carCurrent: { ...this.state.carCurrent, srcImg: objWheel.srcImg }
            })
        }
    }
    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return <div onClick={() => { this.changerWheels(item) }} style={{ cursor: 'pointer' }} className='row mt-1 border m-3' key={index}>
                <div className='col-2'>
                    <img className='p-1' style={{ width: '100%' }} src={item.img} alt={item.price} />
                </div>
                <div className='col-10 d-flex align-items-center'>
                    <span className='p-1'>{item.title}</span>
                </div>
            </div>

        })
    }

    componentDidMount = () => {
        // Tự thực thi render được gọi và chạy 1 lần duy nhất
        let tagScript = document.createElement('script');
        tagScript.src = 'https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy';
        document.querySelector('#appendScrips').appendChild(tagScript);
    }

    componentDidUpdate = () => {
        // Hảm này chạy sau khi state thay đổi (Tự kích hoạt sau render)
        // Không được phép setstate

        // clear ảnh cũ 
        document.querySelector('#carCurrent').innerHTML = '';

        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';

        // clear scrips cũ trước khi append script mới
        document.querySelector('#appendScrips').innerHTML = "";
        document.querySelector('#appendScrips').appendChild(tagScript);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='carModel'>
                            <div
                                id="carCurrent"
                                style={{ minWidth: '100%' }}
                                className="cloudimage-360"
                                // id="gurkha-suv"
                                data-folder={"./images/" + this.state.carCurrent.srcImg}
                                data-filename-x="civic-{index}.jpg"
                                data-amount-x="8"></div>
                            {/* <img style={{ width: '100%' }} src={this.state.carColor.img} /> */}
                            <div id='appendScrips'></div>
                        </div>
                        <div className="card text-left mt-2">
                            <h5 className='card-header'>Exterior color</h5>
                            <table className="table border border-light">
                                <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td>Balack</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Balack</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Balack</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div class="card text-left">
                            <h5 className='card-header'>Exterior color</h5>
                            <div className='container-fluid'>
                                {this.renderIcon()}
                            </div>
                        </div>
                        <div className="card text-left">
                            <h5 className='card-header mt-1'>Wheels</h5>
                            <div className='container-fluid'>
                                {this.renderWheels()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
