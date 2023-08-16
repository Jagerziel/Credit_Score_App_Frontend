import React from 'react';
import { login, logout } from '../../services/firebase.js';

function NavTest(props) {
  console.log(props);
  return (
    <div
      style={{
        padding: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ul
        style={{
          padding: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.user ? (
          <li>
            <button
              style={{
                cursor: 'pointer',
                fontSize: '2rem',
                border: '1px black solid',
                borderRadius: '5px',
                padding: '10px',
                margin: '10px',
              }}
              onClick={logout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <button
              style={{
                cursor: 'pointer',
                fontSize: '2rem',
                border: '1px black solid',
                borderRadius: '5px',
                padding: '10px',
                margin: '10px',
              }}
              onClick={login}
            >
              Login
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavTest;
