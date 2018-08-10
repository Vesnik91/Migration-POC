import * as React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/svg-icons/maps/local-car-wash';
import DragIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Card } from '../beans/Card';
import { connect } from 'react-redux'

interface MangeYourGoalsState {
  open: boolean,
  goals: Card[]
}

interface MangeYourGoalsProps {
  cards: Card[]
}

const leftIconStyle = {
  backgroundColor: '#F9A94B',
  borderRadius: '50%',
  margin: 0,
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const listItemTextStyle = {
  color: '#6A5F4D',
  fontSize: '14px'
};

const listStyle = {
  border: '1px solid #CCCCCC',
  padding: 0,
  marginTop: '24px'
};

class ManageYourGoals extends React.Component<MangeYourGoalsProps, MangeYourGoalsState> {

  constructor(props: any) {
    super(props);
  }

  state: MangeYourGoalsState = {
    open: false,
    goals: this.props.cards
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  getDivider_tpl = () => {
    const backgroundColor = '#CCCCCC';
    return <Divider style={{backgroundColor}}/>;
  };

  getIcon_tpl = () => {
    return (
      <div style={leftIconStyle}>
        <Icon color={'white'}/>
      </div>
    )
  };

  getRightIcon_tpl = () => {
    return <DragIcon/>
  };

  generateList = () => {
    return this.state.goals.map((goal: any, index: number) => {

      const isLastItem = index === this.state.goals.length - 1;
      const padding = '4px';

      return (
        <div key={'list-item-' + goal.id}>
          <ListItem
            primaryText={<span style={listItemTextStyle}>{goal.name}</span>}
            leftIcon={this.getIcon_tpl()}
            rightIcon={this.getRightIcon_tpl()}
            style={{padding}}
          />
          {!isLastItem ? this.getDivider_tpl() : null}
        </div>
      )
    })
  };

  render() {
    const actions = [
      <FlatButton
        style={{marginRight: '8px'}}
        label="Cancel"
        rippleColor={'rgba(0, 0, 0, 0.1)'}
        hoverColor={'rgba(74, 136, 181, 0.15)'}
        labelStyle={{color: '#4A88B5'}}
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Update"
        backgroundColor={'rgba(110,160,196,0.85)'}
        rippleColor={'rgba(0, 0, 0, 0.1)'}
        hoverColor={'rgba(110,160,196,1)'}
        labelStyle={{color: 'white'}}
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const width = '480px';

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Set your goals priority"
          titleStyle={{color: '#6A5F4D'}}
          contentStyle={{width}}
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Please drag and drop your goals in order of importance with the highest priority goal at the top
            <List style={listStyle}>
              {this.generateList()}
            </List>
        </Dialog>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageYourGoals);