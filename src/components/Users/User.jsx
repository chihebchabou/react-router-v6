import React from 'react';
import { users } from '../../userData';

import { useParams, useNavigate } from 'react-router-dom';

const User = () => {
  const { login } = useParams();
  const navigate = useNavigate();

  const user = users.find(user => user.login === login);

  console.log(user);

  const onClick = () => {
    navigate('/users');
  };

  return (
    <div className="container">
      <img src={user.avatar_url} className="img-fluid" alt="..." />
      <a href={user.html_url} target="_blank">
        github
      </a>
      <div className="mt-5">
        <button className="btn btn-secondary" onClick={onClick}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default User;
