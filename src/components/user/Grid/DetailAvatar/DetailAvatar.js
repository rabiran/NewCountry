import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../../styledComponents/avatar';
// default Icons
import DefaultUserIcon from '../../styledComponents/icons/defaultUserIcon';
import { getUserBadgeIcon } from '../../helpers';
// styled components
import { Primary as PrimaryTitle, Secondary as SecondaryTitle } from './styled/Title';

/**
 * user: {
 *  id,
 *  name,
 *  role,
 *  avatar?,
 *  isGroupAdmin?,
 *  isAdmin?
 * }
 */

class UserAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { user, onClick } = this.props;
    if(onClick) {
      onClick(user);// maybe user.id??
    }
  }

  render() {
    const { user } = this.props;
    const Badge = getUserBadgeIcon(user);
    const bContent = Badge ? <Badge /> : null;
    return (
      <div>
        <Avatar badgeContent={bContent} size={100} onClick={this.onClick}>
          {<DefaultUserIcon />}
        </Avatar >
        <PrimaryTitle>{user.name}</PrimaryTitle>
        <SecondaryTitle>{user.role}</SecondaryTitle>
      </div>
    );
  }
}
UserAvatar.defaultProps = {
  onClick: null,
};

UserAvatar.propTypes = {
  user: PropTypes.shape.isRequired,
  onClick: PropTypes.func,
};

export default UserAvatar;
