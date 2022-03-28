const user = {
  id: {
    Min: 1,
  },
  firstName: {
    MinLength: 2,
    MaxLength: 20,
  },
  salary: {
    Min: 0,
    Max: 1_000_000,
  },
}

export default user;