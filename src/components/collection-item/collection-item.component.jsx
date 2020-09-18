import React from "react";
import { connect } from "react-redux";
import { addItem } from '../../redux/cart/cart.actions';

import { StyledCollectionItem, ItemImage, ItemFooter, ItemName, ItemPrice, AddButton} from './collection-item.styles';
// import CollectionPreview from "../collection-preview/collection-preview.component";
// import { matchPath } from "react-router-dom";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <StyledCollectionItem>
      <ItemImage imageUrl={imageUrl} />
      <ItemFooter className="collection-footer">
        <ItemName className="name">{name}</ItemName>
        <ItemPrice className="price">{price}</ItemPrice>
      </ItemFooter>
      <AddButton onClick={()=> addItem(item)} inverted>
        ADD TO CART
      </AddButton>
    </StyledCollectionItem>
  );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect(
    null, 
    mapDispatchToProps)
    (CollectionItem);