 
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
  ];
  
  // Get all products
  export const getProducts = (req, res) => {
    res.json(products);
  };
  
  // Get a product by ID
  export const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  };
  
  // Create a new product
  export const createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  // Update a product by ID
  export const updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
  
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    res.json(product);
  };
  
  // Delete a product by ID
  export const deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).json({ message: "Product not found" });
  
    products.splice(productIndex, 1);
    res.json({ message: "Product deleted successfully" });
  };
  