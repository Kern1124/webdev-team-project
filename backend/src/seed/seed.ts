import argon2 from 'argon2';

const user = {
    userName: "admin",
    email: "admin@domain.com",
    password: argon2.hash("admin"),
}

const seed = async () => {
}

seed()