import React from 'react';
import './style.css';
import { DebounceInput } from 'react-debounce-input';
import products from '../../utils/products';
import { categoryIcons } from '../../utils/variables';
import ProductCategory from './ProductCategory';

class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrganicOnly: false,
      isHeirloomOnly: false,
      isNonGmoOnly: false,
    };

    this.nonGmoProducts = {};
    this.heirloomProducts = {};
    this.organicProducts = {};

    this.ngAndHProducts = {};
    this.ngAndOProducts = {};
    this.hAndOProducts = {};

    this.superProducts = {};

    Object.keys(products).forEach(key => {
      const item = products[key];
      if (item.nonGmo) {
        this.nonGmoProducts[key] = item;
      }
      if (item.organic) {
        this.organicProducts[key] = item;
      }
      if (item.heirloom) {
        this.heirloomProducts[key] = item;
      }
      if (item.nonGmo && item.organic) {
        this.organicProducts[key] = item;
      }
      if (item.nonGmo && item.heirloom) {
        this.ngAndHProducts[key] = item;
      }
      if (item.heirloom && item.organic) {
        this.hAndOProducts[key] = item;
      }
    });
  }

  render() {
    // Categorize the products
    let selectedProducts;
    if (this.state.isOrganicOnly && this.state.isHeirloomOnly && this.state.isNonGmoOnly) {
      selectedProducts = this.superProducts;
    } else if (this.state.isOrganicOnly && this.state.isHeirloomOnly) {
      selectedProducts = this.hAndOProducts;
    } else if (this.state.isHeirloomOnly && this.state.isNonGmoOnly) {
      selectedProducts = this.ngAndHProducts;
    } else if (this.state.isOrganicOnly && this.state.isNonGmoOnly) {
      selectedProducts = this.ngAndOProducts;
    } else if (this.state.isHeirloomOnly) {
      selectedProducts = this.heirloomProducts;
    } else if (this.state.isOrganicOnly) {
      selectedProducts = this.organicProducts;
    } else if (this.state.isNonGmoOnly) {
      selectedProducts = this.nonGmoProducts;
    } else {
      selectedProducts = products;
    }

    const categories = {};
    Object.keys(selectedProducts).forEach(key => {
      const item = selectedProducts[key];
      if (!item.categories) {
        return;
      }
      item.categories.split(" ").forEach(category => {
        // If item matches filter, or if no filters are applied, then show
        if (!this.state.searchText
            || item.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1
        ) {
          // Create the category if it does not exist, else add to it
          if (!!categories[category] && Object.keys(categories[category]).length > 0) {
            categories[category][key] = item;
          } else {
            categories[category] = {};
            categories[category][key] = item;
          }
        }
      });
    });

    const sortedCategories = {};
    Object.keys(categories).sort((a, b) =>
      Object.keys(categories[b]).length - Object.keys(categories[a]).length).forEach(key => {
        sortedCategories[key] = categories[key];
    });

    return (
      <div className="products container">

        {/* Header row */}
        <div className="row mb-2">
          <div className="col-lg-1 hidden-md"></div>
          <div className="col-lg-10 col-md-12 products-header">
            <h1>Available Products</h1>
            <p>Select products available from reliable suppliers</p>
          </div>
          <div className="col-lg-1 hidden-md"></div>
        </div>

        {/* Filter row */}
        <div className="row">
          <div className="col-lg-1 hidden-md"></div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img
              src={require("../../images/organic-food.png")}
              className="icon t-05"
              alt="Organic"
            />
            {"Organic: "}
            <label className="switch" name="organic">
              <input
                type="checkbox"
                onChange={e => this.setState({ isOrganicOnly: e.target.checked })}
                checked={this.state.isOrganicOnly}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img
              src={require("../../images/heirloom.png")}
              className="icon t-05"
              alt="Heirloom"
            />
            {"Heirloom: "}
            <label className="switch" name="heirloom">
              <input
                type="checkbox"
                onChange={e => this.setState({ isHeirloomOnly: e.target.checked })}
                checked={this.state.isHeirloomOnly}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img
              src={require("../../images/dna.png")}
              className="icon t-05"
              alt="Non-GMO"
            />
            {"Non-GMO: "}
            <label className="switch" name="nonGmo">
              <input
                type="checkbox"
                onChange={e => this.setState({ isNonGmoOnly: e.target.checked })}
                checked={this.state.isNonGmoOnly}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-12">
            <DebounceInput
              className="products-textSearch"
              placeholder="Search..."
              minLength={2}
              debounceTimeout={300}
              onChange={e => this.setState({ searchText: e.target.value })}
            />
          </div>
          <div className="col-lg-1 hidden-md"></div>
        </div>

        {/* Body row */}
        <div class="row">
          <div className="col-lg-1 hidden-md"></div>
          <div className="col-lg-10 col-md-12 products-body">
            <div className="products-listView">
              {Object.keys(sortedCategories).map(key =>
                <ProductCategory
                  key={key}
                  name={key}
                  items={sortedCategories[key]}
                  icon_url={categoryIcons[key]}
                />
              )}
            </div>
          </div>
          <div className="col-lg-1 hidden-md"></div>
        </div>
      </div>
    );
  }
}

export default Suppliers;
