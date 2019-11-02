import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';

class Resume extends Component {
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img 
                            src='https://png.pngtree.com/element_our/png_detail/20181026/avatar-vector-icon-man-vector-symbol-avatar-icon-png_219958.jpg'
                            alt='avatar'
                            style={{height:'200px'}}
                        />
                    </div>
                    <h2 style={{paddingTop: '40px'}}>Mateusz Powierża</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid red', width:'50%'}}/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <hr style={{borderTop:'3px solid red', width:'50%'}}/>
                    <h5>Address</h5>
                    <p>Warszawa</p>

                    <h5>Telephon</h5>
                    <p>501-295-189</p>

                    <h5>E-mail</h5>
                    <p>szalik3@onet.eu</p>
                    <hr style={{borderTop:'3px solid red', width:'50%'}}/>

                </Cell>
                <Cell className='resume-right-col' col={8}>
                    <h2>Education</h2>

                    <Education 
                        startYear={2018}
                        endYear={2022}
                        schoolName="My University"
                        schoolDescription="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    />
                    <Education 
                        startYear={2018}
                        endYear={2022}
                        schoolName="My University"
                        schoolDescription="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    />
                    <Education 
                        startYear={2018}
                        endYear={2022}
                        schoolName="My University"
                        schoolDescription="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    />
                    <Education 
                        startYear={2018}
                        endYear={2022}
                        schoolName="My University"
                        schoolDescription="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    />
                    <Education 
                        startYear={2018}
                        endYear={2022}
                        schoolName="My University"
                        schoolDescription="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    />
                    <Education 
                        startYear={2018}
                        endYear={2022}
                        schoolName="My University"
                        schoolDescription="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    />
                    <Education 
                        startYear={2018}
                        endYear={2022}
                        schoolName="My University"
                        schoolDescription="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book."                        
                    />
                   
                </Cell>
            </Grid>
        )
    }
}
export default Resume;
