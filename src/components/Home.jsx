function Home(props) {
  // List rendering: array of 5 objects, each with 5 key-value pairs
  const users = [
    { id: 1, name: "Arun", email: "arun@gmail.com", age: 22, city: "Chennai", role: "Admin" },
    { id: 2, name: "Priya", email: "priya@gmail.com", age: 24, city: "Coimbatore", role: "Developer" },
    { id: 3, name: "Kumar", email: "kumar@gmail.com", age: 23, city: "Madurai", role: "Designer" },
    { id: 4, name: "Divya", email: "divya@gmail.com", age: 21, city: "Salem", role: "Tester" },
    { id: 5, name: "Ravi", email: "ravi@gmail.com", age: 25, city: "Namakkal", role: "Admin" }
  ];

  return (
    <div className="home">
      <div className="home-header">
        <h1>Home - Welcome!</h1>
        <button className="btn btn-logout" onClick={props.onLogout}>
          Logout
        </button>
      </div>

      <div className="card-grid">
        {/* map() renders one card per user; key must be unique */}
        {users.map(function (user) {
          return (
            <div className="user-card" key={user.id}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
              <p>City: {user.city}</p>
              <p>Role: {user.role}</p>

              {/* Logical &&: badge shows only for Admin */}
              {user.role === "Admin" && <span className="badge">Admin</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
