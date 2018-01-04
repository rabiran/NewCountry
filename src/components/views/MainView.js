import React from 'react';
import styled from 'styled-components';
import { UsersGrid, UsersTable, Profile, SearchBar } from '../user';
import TreeList from '../group/treeList/treeList.container';
import { tableData } from './mock';
import Divider from 'material-ui/Divider';

const TABLE = 1
const GRID = 2

const InlineDiv = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${props => (props.width ? props.width : '')}
`;

const ScreenDiv = styled.div`
  height: calc(100vh - 64px);
`;

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: TABLE
    }
    this.changeViewType = this.changeViewType.bind(this);
  };

  changeViewType (viewType) {
    return () => this.setState({viewType})  
  }

  render() { 
    const childToRender = this.state.viewType == TABLE ? <UsersTable headerCols = {tableData.headerCols} dataFields={tableData.dataFields} users={tableData.users} /> : <UsersGrid/>
    return (
      <ScreenDiv>
        <div>
          <Profile />
        </div>

        <InlineDiv width="16%"> <TreeList /> </InlineDiv>
        <InlineDiv width="80%">
          <SearchBar onChangeViewType = {this.changeViewType} />
          <Divider />
          {childToRender}
          {/* <UsersGrid onAvatarClick={(u) => console.log(u)} /> */}
        </InlineDiv>

      </ScreenDiv>
    );
  }
}

export default MainView;

// export default connect(mapStateToProps)(MainView);
