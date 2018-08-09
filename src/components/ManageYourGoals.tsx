import * as React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export class ManageYourGoals extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  state = {
    open: false,
    goals: [
      1,2,3,4,5,6,7,8,9,10
    ]
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

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Set your goals priority"
          contentStyle={{
            width: '480px',
            padding: '0 20px'
          }}
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Please drag and drop your goals in order of importance with the highest priority goal at the top
          {
            this.state.goals.map((goal: any, index: number) => {
              return <div style={{
                width: '100%',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                border: 'solid black',
                borderWidth: '1px 1px 0 1px',
                borderBottom: index === this.state.goals.length - 1 ? '1px solid black' : 'none'
              }}
              key={index + 1}>
                  {'goal ' + index}
              </div>
            })
          }
        </Dialog>
      </div>
    );
  }

}