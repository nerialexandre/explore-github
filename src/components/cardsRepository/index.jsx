import React from 'react';
import RepositoryCard from './styles';

// import profileImg from '../../assets/img-perfil.jpg';
import arrow from '../../assets/Vector.svg';

const Card = (props) => {
  const {
    fullName, avatar, description, user,
  } = props;
  return (

    <RepositoryCard href={user}>
      <img src={avatar} alt="img do perfil" className="profile-picture" />
      <div className="card">
        <div className="text">
          <h3>{fullName}</h3>
          <p>
            {description}
          </p>
        </div>
        <img src={arrow} alt="seta" />
      </div>
    </RepositoryCard>
  );
};

export default Card;
