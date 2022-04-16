import fs from 'fs'



class FilesSystem {

    constructor() { }

    async read(path) {
        try {
            const data = JSON.parse(await fs.readFileSync(path))
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    async write(path, data) {
        try {
            await fs.writeFileSync(path, data, 'utf-8')
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default FilesSystem