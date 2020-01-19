export const suppliers = {
  testSupplierA: {
    name: "Test Supplier A",
    image: require('../images/a.png'),
    products: [
      "testProd1",
      "testProd2",
    ],
  },
  testSupplierB: {
    name: "Test Supplier B",
    image: require('../images/b.png'),
    products: [
      "testProd2",
    ],
  },
};

export const products = {
  testProd1: {
    name: "Test Product 1",
    image: require('../images/pea.png'),
    suppliers: [
      "testSupplierA",
    ],
  },
  testProd2: {
    name: "Test Product 2",
    image: require('../images/microgreen.png'),
    suppliers: [
      "testSupplierA", "testSupplierB",
    ],
  },
};
