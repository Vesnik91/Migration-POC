import * as React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    errorStyle: {
        color: blue500,
    },
    hintStyle: {
        borderColor: 'white',
    },
    underlineStyle: {
        borderColor: blue500,
    },
    floatingLabelStyle: {
        color: blue500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
    inputStyle: {
        color: 'white',
    },
    inputMoneyStyle: {
        color: '#999',
    },
    primaryButtonColor: {
        color: blue500
    },
    tabContent: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px'
    },
    carLines: {
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
};

export default class GLDCard extends React.Component<any, any> {


    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            expanded: false,
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        return (
            <Card expanded={this.state.expanded}
                  onExpandChange={this.handleExpandChange}
                  style={{width: "640px", margin: "20px"}}>
                <CardHeader
                    style={{backgroundColor: '#75A635', display: 'flex', justifyContent: "flex-start"}}
                    avatar="./images/goalRetirement.png"
                    actAsExpander={false}
                    title={(<div>
                        <TextField
                            hintText="Enter Job Name"
                            hintStyle={styles.hintStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            inputStyle={styles.inputStyle}
                        />
                        <span style={{color: 'white', marginLeft: '40px'}}>$8,028</span>
                    </div>)}
                />
                <CardText style={{padding: 0}}>
                    <Tabs
                        tabItemContainerStyle={{backgroundColor: '#75A635'}}
                        inkBarContainerStyle={{backgroundColor: '#75A635'}}
                        inkBarStyle={{backgroundColor: 'white', height: '4px', marginTop: '-3px'}}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="Income" value="a">
                            <div style={{padding: '48px'}}>
                                <div style={styles.tabContent}>
                                    <div style={styles.carLines}>Income Source</div>
                                    <div style={styles.carLines}>Income Amount</div>
                                </div>
                                <div style={styles.tabContent}>
                                    <div style={styles.carLines}>Salary</div>
                                    <div style={styles.carLines}>
                                        <TextField
                                            hintText="Enter Job Name"
                                            hintStyle={styles.hintStyle}
                                            underlineFocusStyle={styles.underlineStyle}
                                            floatingLabelStyle={styles.floatingLabelStyle}
                                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                            inputStyle={styles.inputMoneyStyle}
                                        />
                                    </div>
                                </div>
                                <div style={styles.tabContent}>
                                    <div style={styles.carLines}>Bonus</div>
                                    <div style={styles.carLines}>
                                        <TextField
                                            hintText="Enter Job Name"
                                            hintStyle={styles.hintStyle}
                                            underlineFocusStyle={styles.underlineStyle}
                                            floatingLabelStyle={styles.floatingLabelStyle}
                                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                            inputStyle={styles.inputMoneyStyle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="Deduction" value="b">
                            <div style={{padding: '48px'}}>
                                <h2 style={styles.headline}>Controllable Tab B</h2>
                                <p>
                                    This is another example of a controllable tab. Remember, if you
                                    use controllable Tabs, you need to give all of your tabs values or else
                                    you wont be able to select them.
                                </p>
                            </div>
                        </Tab>
                    </Tabs>
                </CardText>
                <CardActions
                    style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                    <FlatButton labelStyle={styles.primaryButtonColor} label="+ADD ITEM"/>
                    <FlatButton labelStyle={styles.primaryButtonColor} label="EDIT ASSUMPTION"/>
                    <FlatButton labelStyle={styles.primaryButtonColor} label="CLOSE"/>
                </CardActions>
            </Card>
        );
    }

}