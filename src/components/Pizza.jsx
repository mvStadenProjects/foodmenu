import pizzaData from "../data";
function Pizza() {
  return (
    <div>
      <ul>
        {pizzaData.map((pizza) => (
          <li key={pizza.name}>
            <img
              src={pizza.photoName}
              alt={pizza.name}
              height={100}
              width={100}
            />
            <h3>{pizza.name}</h3>
            <p>{pizza.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;
