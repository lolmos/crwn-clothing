import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const StyledCollectionItem = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
`;

export const ItemImage = styled.div`
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
      background-image: ${
            ({imageUrl})=>`url(${imageUrl})`
            };

      ${StyledCollectionItem}:hover & {
            opacity: 0.8;
        }
`;

export const ItemFooter = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
`;

export const ItemName = styled.span`
        width: 90%;
        margin-bottom: 15px;


`;

export const ItemPrice = styled.span`
        width: 10%;
`;

export const AddButton = styled(CustomButton)`
      width:80%;
      opacity: 0.7;
      position: absolute;
      top:255px;
      display: none;

      ${StyledCollectionItem}:hover & {
          opacity: 0.85;
          display: flex;
      }
`;