<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# Catcafe

Catcafe is an API built using the Nest.js framework. It is designed to serve as an interface for managing customer orders at a cat-themed cafe.

## Installation

To run the Catcafe API locally, follow these steps:

1. Clone the repository: `git clone https://github.com/realtirtha/catcafe-NestJS.git`
2. Navigate to the project directory: `cd catcafe-NestJS`
3. Install the dependencies: `npm install`

## Usage

### List all customer orders

Endpoint: GET /catcafe

This endpoint returns a list of all customer orders, including their names, IDs, orders, and order quantities.

### Get a specific customer order

Endpoint: GET /catcafe/:id

Replace `:id` with the ID of the customer order you want to retrieve. This endpoint returns the details of the specified customer order.

### Create a new customer order

Endpoint: POST /catcafe

To create a new customer order, send a POST request to this endpoint with the following parameters in the request body:

- `customer_name`: The name of the customer.
- `customer_id`: The ID of the customer.
- `customer_order`: The order placed by the customer.
- `customer_orderQ`: The quantity of the order.

Example request body:
```
{
    "customer_name": "Tirtha",
    "customer_id": "38",
    "customer_order": "Iced cafe Latte",
    "customer_orderQ": 2
}
```

## Contributing

Contributions to Catcafe are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/realtirtha/catcafe-NestJS).

## Credits

Catcafe is built using the [Nest.js](https://nestjs.com) framework, created by [Kamil Myśliwiec](https://kamilmysliwiec.com). I would like to express my gratitude to Kamil and the Nest.js community for developing such a powerful and flexible framework.

- Author of Nest.js: Kamil Myśliwiec
- Website: [https://nestjs.com](https://nestjs.com/)
- Twitter: [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
