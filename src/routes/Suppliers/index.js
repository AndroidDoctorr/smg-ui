import React from 'react';
import classNames from 'classnames';
import './style.css';
import { suppliers, products } from '../../utils/variables.js';
import SupplyItem from './SupplyItem';

class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuppliers: true,
    };
  }

  render() {
    const items = this.state.showSuppliers ? suppliers : products;
    return (
      <div className="suppliers">
        <h2>Reliable Suppliers</h2>
        <div className="suppliers-body">
          <div className="suppliers-tabBar">
            <button
              className={classNames(
                "suppliers-tab",
                { "suppliers-tab--active": this.state.showSuppliers, }
              )}
              onClick={() => this.setState({ showSuppliers: true })}
            >
              {"Reliable Suppliers"}
            </button>
            <button
              className={classNames(
                "suppliers-tab",
                { "suppliers-tab--active": !this.state.showSuppliers, }
              )}
              onClick={() => this.setState({ showSuppliers: false })}
            >
              {"Available Products"}
            </button>
          </div>
          <div className="suppliers-listView">
            <div className="suppliers-orderContainer">
              {"Order by: "}
            </div>
            {Object.keys(items).map(key =>
              <SupplyItem key={key} item={items[key]} showSuppliers={this.state.showSuppliers} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Suppliers;
