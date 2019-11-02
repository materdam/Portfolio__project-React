import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="https://png.pngtree.com/element_our/png_detail/20181026/avatar-vector-icon-man-vector-symbol-avatar-icon-png_219958.jpg"
                    className="avatar-img"
                    />  
                    <div className="banner-text">
                        <h1>Front-End Developer</h1>
                        <hr />
                        <p> HTML/CSS | Bootstrap | JavaScript | React | JQuary</p>
                    
                    <div className="social-links">

                        {/*LinkedIN */}
                        <a href="" target="_blanks" rel="noopener noreferrer">
                           <i className="fa fa-linkedin-square"  aria-hidden="true"></i> 
                        </a>
                        {/*Github */}
                        <a href="" target="_blanks" rel="noopener noreferrer">
                           <i className="fa fa-github-square"  aria-hidden="true"></i> 
                        </a>
                        {/*Facebook */}
                        <a href="" target="_blanks" rel="noopener noreferrer">
                           <i className="fa fa-facebook-square"  aria-hidden="true"></i> 
                        </a>
                        {/*Youtube */}
                        <a href="" target="_blanks" rel="noopener noreferrer">
                           <i className="fa fa-youtube-square"  aria-hidden="true"></i> 
                        </a>

                    </div>
                    </div>
                    </Cell>                   
                </Grid>
            </div>
        )
    }
}
export default Landing;