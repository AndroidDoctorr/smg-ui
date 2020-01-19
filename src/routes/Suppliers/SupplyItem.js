import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { suppliers, products } from '../../utils/variables.js';

export default class SupplyItem extends React.Component {
  constructor(props) {
    super(props);

    this.listRef = React.createRef();
    this.toggleRef = React.createRef();
  }

  renderCollapseList(item) {
    const subItems = this.props.showSuppliers ? item.products : item.suppliers;
    return (
      <div className="collapseList" ref={this.listRef}>
        {subItems.map(subItemKey => {
          const subItem = this.props.showSuppliers ? products[subItemKey] : suppliers[subItemKey]
          return (
            <div className="collapseList-item">
              <img
                className="collapseList-itemIcon"
                src={subItem.image}
                alt=""
              />
              <div className="collapseList-itemName">
                {subItem.name}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  toggleList() {
    const listNode = ReactDOM.findDOMNode(this.listRef.current);
    const toggleNode = ReactDOM.findDOMNode(this.toggleRef.current);
    listNode.classList.toggle('collapseList--open');
    toggleNode.classList.toggle('suppliers-listItemExpandButton--open');
  }

  render() {
    return (
      <div className="suppliers-listItemContainer">
        <div className="suppliers-listItem">
          <div className="suppliers-listItemImageContainer">
            <img
              className="suppliers-listItemImage"
              src={this.props.item.image}
              alt={this.props.item.name}
            />
          </div>
          <div className="suppliers-listItemLinkContainer">
            <a
              className="suppliers-listItemLink"
              href="."
            >
              {this.props.item.name}
            </a>
            <FontAwesomeIcon
              className="suppliers-listItemLinkIcon"
              icon={faExternalLinkAlt}
            />
          </div>
          <div className="suppliers-listItemSubCount">
            {this.props.showSuppliers ? "(n products)" : "(n suppliers)"}
          </div>
          <button
            className="suppliers-listItemExpandButton suppliers-listItemExpandButton--open"
            onClick={() => this.toggleList()}
            ref={this.toggleRef}
          >
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </button>
        </div>
        <div className="suppliers-listItemSubList">
          {this.renderCollapseList(this.props.item)}
        </div>
      </div>
    );
  }
}
