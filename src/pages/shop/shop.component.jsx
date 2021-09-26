import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {
            collection: SHOP_DATA
        }
    }

    render(){
        const {collection} = this.state;
        return(
            <div className="shop-page">
                {collection.map(({id, ...items}) => <CollectionPreview key={id} {...items} />)}
            </div>
        )
    }
}

export default ShopPage;