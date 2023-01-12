const library = [
    {
      name: "rohim",
      id: 105,
    },
    { name: "korim", id: 104 },
    { name: "Aynal", id: 106 },
  ];
  function by(prop) {
    return function (a, b) {
      const x = typeof a[prop] === "string" ? a[prop].toLowerCase() : a[prop];
      const y = typeof b[prop] === "string" ? b[prop].toLowerCase() : b[prop];
  
      const [e1, e2] = [x, y];
      return e1 === e2 ? 0 : e1 < e2 ? -1 : 1;
    };
  }
  console.log(library.sort(by("id")));
  console.log(library.sort(by("name")));
  
  
  
  