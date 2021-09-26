import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
import SECTIONS_DATA from './sections.data';

class Directory extends React.Component{
    constructor(){
        super()
        
        this.state = {
            section: SECTIONS_DATA
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {/* {console.log(this.state.section)} */}
                {this.state.section.map(({id, ...otherStateProps}) => <MenuItem key={id} {...otherStateProps} />)}
            </div>
        );
    }
}

export default Directory;