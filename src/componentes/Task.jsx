function Task ({ name, completed }) {
  return (
    <div>
      <h2>Trabajos de la Universidad <span>{name}</span>
      <input type="checkbox" checked={completed} readOnly /></h2>  
      <h2>Trabajos ProTalento <span>{name}</span>
      <input type="checkbox" checked={completed} readOnly /></h2>  
      <h2>Pasear a mi perro <span>{name}</span>
      <input type="checkbox" checked={completed} readOnly /></h2>  
      <h2>Hacer Ejercicio<span>{name}</span>
      <input type="checkbox" checked={completed} readOnly /></h2>  
    </div>
  );
};

export default Task;

