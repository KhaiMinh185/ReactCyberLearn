import React, { Component } from 'react'
import BannerBTTH from './BannerBTTH'
import ItemBTTH from './ItemBTTH'

export default class BodyBTTH extends Component {
    render() {
        return (
            <div>
                <BannerBTTH />

                <div className='container'>
                    <div className='row'>
                        <div className='col-6 mb-5'>
                            <ItemBTTH />
                        </div>
                        <div className='col-6 mb-5'>
                            <ItemBTTH />
                        </div>
                        <div className='col-6 mb-5'>
                            <ItemBTTH />
                        </div>
                        <div className='col-6 mb-5'>
                            <ItemBTTH />
                        </div>
                        <div className='col-6 mb-5'>
                            <ItemBTTH />
                        </div>
                        <div className='col-6 mb-5'>
                            <ItemBTTH />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
