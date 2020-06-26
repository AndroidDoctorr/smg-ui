export const suppliers = {
  trueleaf: {
    name: "True Leaf Market",
    image: require('../images/trueleaf.jpg'),
  },
  bootstrap: {
    name: "Bootstrap Farmer",
    image: require('../images/bootstrap.jpg'),
  },
  smg: {
    name: "Super Micro Greens",
    image: require('../images/smg.jpg'),
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

export const categoryIcons = {
  "Microgreens": "https://cdn.trueleafmarket.com/products/seeds/cilantro-slow-bolt-seed/cilantro-slow-bolt-seed.jpg",
  "Seeds": "https://cdn.trueleafmarket.com/products/seeds/cilantro-leisure-split/cilantro-leisure-split-seeds.jpg",
  "Kits": "https://cdn.trueleafmarket.com/products/basic-sprouting-kit-tray/basic-sprouting-kit.jpg",
  "Mats": "https://cdn.trueleafmarket.com/products/micro-mats-small-hydroponic-pads/5-by-5-micro-mats.jpg",
  "Supplies": "https://cdn.trueleafmarket.com/products/planter-box/planter-box-assembled.jpg",
  "Trays": "https://cdn.trueleafmarket.com/products/growing-trays-10-by-20-holes/large-trays-with-holes.jpg",
  "Nutrients": "https://cdn.trueleafmarket.com/products/azomite-trace-mineral-fertilizer/azomite-2-lb-bag.jpg",
  "Mushrooms": "https://cdn.trueleafmarket.com/products/dehydrated-mushrooms-morel/4-oz-dried-morel.jpg",
  "Equipment": "https://cdn.shopify.com/s/files/1/1338/7937/products/1020_Drop_Seeder_2000x.jpeg",
}
