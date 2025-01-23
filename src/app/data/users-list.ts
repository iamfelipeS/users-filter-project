import { IUser } from "../interfaces/user.interface";

export const UserList: IUser[] = [
    {
        name: "Felipe Silva",
        email: "felipes@example.com",
        password: "password123",
        age: 30,
        address: {
            "street": "Rua das Flores",
            "number": undefined,
            "city": "São Paulo",
            "state": "SP",
            "country": "BRA"
        },
        phone: "11 9 6412 3345",
        active: true,
        role: "admin",
        createdAt: "2024-10-08T23:59:59Z",
        status: {
            online: true,
            verified: true,
            lastAccess: "2024-10-12T10:59:59Z"
        }
    },
    {
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "password456",
        age: 25,
        address: {
            "street": "456 Elm St",
            "number": 789,
            "city": "Anothertown",
            "state": "NY",
            "country": "USA"
        },
        phone: "33 9 1234 5678",
        active: true,
        role: "user",
        createdAt: "2023-12-31T23:59:59Z",
        status: {
            online: false,
            verified: true,
            lastAccess: "2023-12-31T23:59:59Z"
        }
    },
    {
        name: "Bob Johnson",
        email: "bobjohnson@examplecom",
        password: "password789",
        age: 35,
        address: {
            "street": "789 Oak St",
            "number": 1011,
            "city": "",
            "state": "TX",
            "country": "USA"
        },
        phone: "  ",
        active: false,
        role: "user",
        createdAt: "2023-12-31T23:59:59Z",
        status: {
            online: false,
            verified: false,
            lastAccess: "2023-12-31T23:59:59Z"
        }
    },
    {
        name: "Alice Lee",
        email: "alicelee@examplecom",
        password: "password123",
        age: 28,
        address: {
            "street": "789 Elm St",
            "number": 2345,
            "city": "Somewhere",
            "state": "TX",
            "country": "USA"
        },
        phone: "33 1233 4567",
        active: true,
        role: "user",
        createdAt: "2023-12-31T23:59:59Z",
        status: {
            online: false,
            verified: true,
            lastAccess: "2023-10-31T23:59:59Z"
        }
    }
]