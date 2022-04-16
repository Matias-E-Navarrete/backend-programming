import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
import FilesSystem from '../utils/filesystem/read-write.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesystem = new FilesSystem()
const productsPath = path.join(__dirname + '/products.json')


class Container {

    async save(product) {
        try {
            let productsDatabase = await filesystem.read(productsPath)
            productsDatabase.push(product)
            filesystem.write(productsPath, JSON.stringify(productsDatabase))
        } catch (error) {
            throw new Error(error)
        }
    }

    async getById(id) {
        try {
            const productsDatabase = await filesystem.read(productsPath)
            const product = productsDatabase.find(product => product.id === id)

            const result = product ? product : null

            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAll() {
        try {
            const productsDatabase = await filesystem.read(productsPath)
            return productsDatabase

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id) {
        try {
            const productsDatabase = await filesystem.read(productsPath)
            const products = productsDatabase.filter(product => product.id !== id)

            await filesystem.write(productsPath, JSON.stringify(products))

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAll() {
        try {
            const products = [];
            await filesystem.write(productsPath, JSON.stringify(products))
        } catch (error) {
            throw new Error(error)
        }
    }

}

export default Container