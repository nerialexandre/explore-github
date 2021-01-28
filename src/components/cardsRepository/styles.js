import styled from 'styled-components';

const RepositoryCard = styled.a`
    background-color: #ffffff;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    margin-right: 0px;
    max-height: 170px;
    max-width: 100%;
    min-width: 425px;
    padding: 10px;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    img.profile-picture {
      border-radius: 50%;
      margin: 10px;
      max-height:90px;
      max-width:90px;
    }

    div.card {
      align-items: center;
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-space-around;
      padding: 10px;
    }

    .text {
      flex: 1;
      max-width: 100%;
    }

    div.text h3 {
      color: #3d3d4d;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: bold;
      margin-bottom: 0px;

      /* Textos Light / Títulos */

      /* line-height: 28px; */
    }

    div.text p {
      margin-top: 2px;
      color: #a8a8b3;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: normal;
      /* identical to box height */

      /* Textos Dark / Textos */

      line-height: 21px;
    }

    div.card img {
      align-items: center;
      height: 20px;
      margin-left: 10px;
      text-align: center;
    }
`;

export default RepositoryCard;
