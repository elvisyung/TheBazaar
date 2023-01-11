import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Noah Smith',
    email: 'noah@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Olivia Brown',
    email: 'olivia@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
