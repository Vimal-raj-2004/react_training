import UserCard from "./components/UserCard";

function App() {
  // User data sets (Parent component owns the data)
  const user1 = { name: "Arun", city: "Chennai", age: 22, email: "arun@gmail.com", phone: "9876543210" };
  const user2 = { name: "Priya", city: "Coimbatore", age: 24, email: "priya@gmail.com", phone: "9876501234" };
  const user3 = { name: "Kumar", city: "Madurai", age: 23, email: "kumar@gmail.com", phone: "9123456780" };
  const user4 = { name: "Divya", city: "Salem", age: 21, email: "divya@gmail.com", phone: "9988776655" };
  const user5 = { name: "Ravi", city: "Namakkal", age: 25, email: "ravi@gmail.com", phone: "9090909090" };

  return (
    <div className="user-list">
      <h1>User Details</h1>

      {/* Same child component, 5 times, different data through props */}
      <UserCard name={user1.name} city={user1.city} age={user1.age} email={user1.email} phone={user1.phone} />
      <UserCard name={user2.name} city={user2.city} age={user2.age} email={user2.email} phone={user2.phone} />
      <UserCard name={user3.name} city={user3.city} age={user3.age} email={user3.email} phone={user3.phone} />
      <UserCard name={user4.name} city={user4.city} age={user4.age} email={user4.email} phone={user4.phone} />
      <UserCard name={user5.name} city={user5.city} age={user5.age} email={user5.email} phone={user5.phone} />
    </div>
  );
}

export default App;
