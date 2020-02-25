import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
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
      <a href={item.buy_url}
        className="collapseList-item"
        target="_blank"
        rel="noopener noreferrer"
        key={key}
      >
        <img
          className="collapseList-itemIcon"
          src={item.image_url}
          alt=""
        />
        <div className="collapseList-itemName">
          {item.name}
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
      </a>
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
        <div
          className="products-listItem"
          onClick={() => this.toggleList()}
        >
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
          <div
            className="products-listItemExpandButton products-listItemExpandButton--open"
            ref={this.toggleRef}
          >
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </div>
        </div>
        <div className="products-listItemSubList">
          {this.renderCollapseList(this.props.items)}
        </div>
      </div>
    );
  }
}
