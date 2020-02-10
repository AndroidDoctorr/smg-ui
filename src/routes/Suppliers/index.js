import React from 'react';
import './style.css';
import { DebounceInput } from 'react-debounce-input';
import products from '../../utils/products';
import { categoryIcons } from '../../utils/variables';
import ProductCategory from './ProductCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna } from '@fortawesome/free-solid-svg-icons';


class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrganicOnly: false,
      isHeirloomOnly: false,
      isNonGmoOnly: false,
    };
  }

  render() {
    // Categorize the products

    // id: {
    //   buy_url
    //   description_long
    //   program_name // True Leaf is the only one for now
    // }

    const categories = {};
    Object.keys(products).forEach(key => {
      const item = products[key];
      if (!item.categories) {
        return;
      }
      item.categories.split(" ").forEach(category => {
        // If item matches filter, or if no filters are applied, then show
        if (
          ((this.state.isOrganicOnly && item.organic) || !this.state.isOrganicOnly)
          && ((this.state.isHeirloomOnly && item.heirloom) || !this.state.isHeirloomOnly)
          && ((this.state.isNonGmoOnly && item.nonGmo) || !this.state.isNonGmoOnly)
          && (!this.state.searchText
            || item.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1)
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
      <div className="products">
        <div className="products-header">
          <h1>Available Products</h1>
          <p>Select products available from reliable suppliers</p>
        </div>
        <div className="products-body">
          <div className="products-listView">
            <div className="products-filterContainer">
              <div className="products-filterToggle">
                <img
                  src="https://img.icons8.com/ios/100/000000/organic-food.png"
                  className="mr-1 t-05"
                  alt="Organic"
                  height={32}
                  width={32}
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
              <div className="products-filterToggle">
                <img
                  src={require("../../images/heirloom.png")}
                  className="mr-1 t-05"
                  alt="Heirloom"
                  height={32}
                  width={32}
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
              <div className="products-filterToggle">
                <FontAwesomeIcon
                  className="mr-1"
                  icon={faDna}
                  size="lg"
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
              {"Search: "}
              <DebounceInput
                className="products-textSearch"
                minLength={2}
                debounceTimeout={300}
                onChange={e => this.setState({ searchText: e.target.value })}
              />
            </div>
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
      </div>
    );
  }
}

export default Suppliers;
