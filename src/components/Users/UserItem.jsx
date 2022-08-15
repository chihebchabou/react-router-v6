import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  console.log(user);
  const { id, login, html_url, avatar_url } = user;
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={avatar_url} className="card-img-top" alt="avatar" />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a
            href={html_url}
            className="card-link"
            style={{ display: 'block' }}
            target="_blank"
          >
            Card link
          </a>
          <Link to={`/users/${login}`} className="btn btn-primary">
            More info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
