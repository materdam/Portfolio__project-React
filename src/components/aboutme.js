import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component {
    render(){
        return(
            <Grid className="aboutme-grid" >
                <Cell col={12}>
                    <img src="https://png.pngtree.com/element_our/png_detail/20181026/avatar-vector-icon-man-vector-symbol-avatar-icon-png_219958.jpg"
                    className="avatar-img"
                    /> 
                    <div className="aboutme-text">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    
                    </p>
                    <hr style={{borderTop:'3px solid red'}} />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    
                    </p>
                    <hr style={{borderTop:'3px solid red'}} />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    
                    </p>
                    
                    <div style={{border:"solid 2px red", padding:'30px'}}>
                        <p >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        </p>
                    </div>
                    </div>
                </Cell>
     
            </Grid>
        )
    }
}
export default About;