 
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
  ];
  
  // Get all users
  export const getUsers = (req, res) => {
    res.json(users);
  };
  
  // Get a user by ID
  export const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  };
  
  // Create a new user
  export const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // Update a user by ID
  export const updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
  
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.status(201).json(user);
  };
  
  // Delete a user by ID
  export const deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: "User not found" });
  
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
  };
  