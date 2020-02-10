import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faChevronCircleDown, faDna } from '@fortawesome/free-solid-svg-icons';

export default class ProductCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };

    this.listRef = React.createRef();
    this.toggleRef = React.createRef();
  }

  renderProductListItem(item, key) {
    return (
      <div className="collapseList-item" key={key}>
        <img
          className="collapseList-itemIcon"
          src={item.image_url}
          alt=""
        />
        <div className="collapseList-itemName">
          {item.name}
          <a href={item.buy_url}
            className="collapseList-itemLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Link"}
            <FontAwesomeIcon
              className="products-listItemLinkIcon"
              icon={faExternalLinkAlt}
            />
          </a>
          {item.organic &&
            <img
              src="https://img.icons8.com/ios/100/000000/organic-food.png"
              className="products-listItemIcon"
              alt="Organic"
              height={32}
              width={32}
            />
          }
          {item.heirloom &&
            <img
              src={require("../../images/heirloom.png")}
              className="products-listItemIcon"
              alt="Heirloom"
              height={32}
              width={32}
            />
          }
          {item.nonGmo &&
            <FontAwesomeIcon
              className="products-listItemIcon"
              icon={faDna}
              size="lg"
            />
          }
        </div>
      </div>
    );
  }

  renderCollapseList(items) {
    return (
      <div className="collapseList" ref={this.listRef}>
        {Object.keys(items).map(key => this.renderProductListItem(items[key], key))}
      </div>
    );
  }

  toggleList() {
    const listNode = ReactDOM.findDOMNode(this.listRef.current);
    const toggleNode = ReactDOM.findDOMNode(this.toggleRef.current);
    listNode.classList.toggle('collapseList--open');
    toggleNode.classList.toggle('products-listItemExpandButton--open');
  }

  render() {
    return (
      <div className="products-listItemContainer">
        <div className="products-listItem">
          <div className="products-categoryIconContainer">
            {/*
            // TODO: Create a list of icons for categories
            <img
              className="products-listItemImage"
              src={this.props.item.image}
              alt={this.props.name}
            />


            */}
            <img
              className="products-categoryIcon"
              src={this.props.icon_url}
              alt={this.props.name}
            />
          </div>
          <div className="products-listItemLinkContainer">
            {this.props.name}
          </div>
          <div className="products-listItemSubCount">
            {"(" + Object.keys(this.props.items).length + " products)"}
          </div>
          <button
            className="products-listItemExpandButton products-listItemExpandButton--open"
            onClick={() => this.toggleList()}
            ref={this.toggleRef}
          >
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </button>
        </div>
        <div className="products-listItemSubList">
          {this.renderCollapseList(this.props.items)}
        </div>
      </div>
    );
  }
}
