export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 45,
    difficulty: "Medium",
    description: "Blistered crust, crushed tomato, fresh mozzarella and basil.",
  },
  {
    id: "chicken-tikka-masala",
    title: "Chicken Tikka Masala",
    cuisine: "Indian",
    minutes: 60,
    difficulty: "Medium",
    description: "Charred marinated chicken in a creamy, spiced tomato sauce.",
  },
  {
    id: "veggie-tacos",
    title: "Smoky Veggie Tacos",
    cuisine: "Mexican",
    minutes: 25,
    difficulty: "Easy",
    description: "Roasted peppers and black beans with lime crema and cilantro.",
  },
  {
    id: "pad-thai",
    title: "Shrimp Pad Thai",
    cuisine: "Thai",
    minutes: 30,
    difficulty: "Easy",
    description: "Rice noodles tossed with tamarind, peanuts and bean sprouts.",
  },
  {
    id: "beef-bourguignon",
    title: "Beef Bourguignon",
    cuisine: "French",
    minutes: 180,
    difficulty: "Hard",
    description: "Slow-braised beef in red wine with pearl onions and mushrooms.",
  },
  {
    id: "miso-ramen",
    title: "Miso Ramen",
    cuisine: "Japanese",
    minutes: 50,
    difficulty: "Medium",
    description: "Rich miso broth, springy noodles, soft egg and scallions.",
  },
];
