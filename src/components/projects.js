import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle,CardText, CardActions,CardMenu, Button, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
            <div className="projects-grid">
            {/*Project 1 */}
                <Card shadow={5} style={{minWidth: '600', margin:'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background:
                    'url(https://icon-library.net/images/react-icon/react-icon-29.jpg) center / cover'}}>
                        React Project #1
                    </CardTitle>
                    <CardText>
                        Lorem
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Project 2 */}
                <Card shadow={5} style={{minWidth: '600', margin:'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background:
                    'url(https://icon-library.net/images/react-icon/react-icon-29.jpg) center / cover'}}>
                        React Project #2
                    </CardTitle>
                    <CardText>
                        Lorem
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Project 3 */}
                <Card shadow={5} style={{minWidth: '600', margin:'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background:
                    'url(https://icon-library.net/images/react-icon/react-icon-29.jpg) center / cover'}}>
                        React Project #3
                    </CardTitle>
                    <CardText>
                        Lorem
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Project 4 */}
                
            </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is JS</h1></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Vue</h1></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h1>This is Python</h1></div>
            )
        }
    }



    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Vue</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories}</div>
                        </Cell>
                    </Grid>
                   {this.toggleCategories()} 
                
            </div>
        )
    }
}
export default Projects;