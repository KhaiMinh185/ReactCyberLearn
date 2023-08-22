import React, { Component } from 'react'
import dataGlass from '../Data/dataGlasses.json'

export default class BaiTapThuKinh extends Component {

    state = {
        imgGlass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlass = () => {
        return dataGlass.map((glass, index) => {
            return <div className='col-2' key={index}>
                <img onClick={()=>{this.changeGlass(glass)}} className='mb-5 p-2' style={{ width: '100%', border: '3px solid red', cursor: 'pointer' }} src={glass.url} alt={glass.name} />
            </div>
        })
    }

    changeGlass = (newGlass)=>{
        this.setState({
            imgGlass: newGlass
        })
    }

    render() {

        const keyFrame = `@keyFrames animationChangeGlass${Date.now()}{
            from{
                width: 0;
            }
            to{
                width: 150px;
            }
        }`

        const styleGlasses = {
            width: '146px',
            top: '77px',
            left: '196px',
            opacity: '.8',
            animation: `animationChangeGlass${Date.now()} 1s`,
        }

        const infoGlasses = {
            width: '250px',
            bottom: '0',
            left: '145px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,.5)',
        }

        return (
            <div>
                <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', minHeight: '2000px', backgroundSize: '2000px', backgroundPosition: 'top' }}>
                    <style>
                        {keyFrame}
                    </style>
                    <div style={{ backgroundColor: 'rgba(0,0,0,.4)', minHeight: '2000px' }}>
                        <h3 style={{ backgroundColor: 'rgba(0,0,0,.4)', }} className='text-while text-center p-4'>glassesImage</h3>
                        <div className='container'>
                            <div className='row mt-5'>
                                <div className='col-6'>
                                    <div className='position-relative'>
                                        <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='glass' />
                                        <img className='position-absolute' style={styleGlasses} src={this.state.imgGlass.url} alt='glass' />
                                        <div style={infoGlasses} className='position-absolute'>
                                            <h4 style={{ color: '#AB82FF' }} className='text-left p-2 font-weight-bold'>{this.state.imgGlass.name}</h4>
                                            <p style={{ fontSize: '13px' }} className='text-left p-2 font-weight-bold'>
                                                {this.state.imgGlass.desc.length > 60 ?  this.state.imgGlass.desc.substring(0,60) + '...' : this.state.imgGlass.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='glass' />
                                </div>
                            </div>
                            <div className='mt-5 p-4 pt-5' style={{ backgroundColor: 'rgb(255,255,255)' }}>
                                <div className='row'>
                                    {this.renderGlass()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
