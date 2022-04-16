import Container from "./challenge-one/database/container.js";

const productRepository = new Container();

const product = {
    id: 1,
    title: 'Producto 1',
    price: 50.6,
    thumbnail: 'www.product-url.com'
}
const product2 = {
    id: 1,
    title: 'Producto 1',
    price: 50.6,
    thumbnail: 'www.product-url.com'
}

const product3 = {
    id: 1,
    title: 'Producto 1',
    price: 50.6,
    thumbnail: 'www.product-url.com'
}

const productCreated = await productRepository.save(product)
await productRepository.save(product2)
await productRepository.save(product3)

console.log("productCreated", productCreated)


const productFound = await productRepository.getById(1)
console.table(productFound)

const productsFound = await productRepository.getAll()
console.table(productsFound)

const productDeleted = await productRepository.deleteById(2)
console.table(productDeleted)

const productsDeleted = await productRepository.deleteAll()
console.table(productsDeleted)

