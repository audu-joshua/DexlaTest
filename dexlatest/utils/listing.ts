export interface Item {
    image: string;
    category: string;
    name: string;
    price: number;
  }
  
  const categories = ['Clothing', 'Accessories'];
  
  const clothingItems = [
    "Stylish Shirt",
    "Trendy Jacket",
    "Elegant Dress",
    "Comfortable Pants",
    "Casual T-Shirt",
    "Cozy Sweater",
    "Sporty Hoodie",
    "Classic Jeans",
    "Chic Skirt",
    "Stylish Blazer"
  ];
  
  const accessoryItems = [
    "Luxury Watch",
    "Stylish Handbag",
    "Chic Sunglasses",
    "Leather Belt",
    "Fashion Hat",
    "Elegant Necklace",
    "Classic Wallet",
    "Trendy Earrings",
    "Fashionable Scarf",
    "Sporty Backpack"
  ];
  
  const generateRandomPrice = (min: number, max: number) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };
  
  const generateItems = (): Item[] => {
    const items: Item[] = [];
  
    // Generate clothing items
    for (let i = 0; i < 25; i++) {
      const randomIndex = Math.floor(Math.random() * clothingItems.length);
      items.push({
        image: `https://picsum.photos/300/300?random=${i}`, // Random placeholder image for clothing
        category: 'Clothing',
        name: clothingItems[randomIndex],
        price: generateRandomPrice(19.99, 199.99),
      });
    }
  
    // Generate accessory items
    for (let i = 0; i < 25; i++) {
      const randomIndex = Math.floor(Math.random() * accessoryItems.length);
      items.push({
        image: `https://picsum.photos/300/300?random=${25 + i}`, // Random placeholder image for accessories
        category: 'Accessories',
        name: accessoryItems[randomIndex],
        price: generateRandomPrice(9.99, 299.99),
      });
    }
  
    return items;
  };
  
  export const dummyItems = generateItems();
  