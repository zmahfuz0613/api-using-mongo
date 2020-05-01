const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const db = require('./db')
const Product = require('./models/product')

const app = express()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("This is root!")
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (!product) throw Error('Product not found')
        res.json(product)
    } catch (e) {
        console.log(e)
        res.send('Product not found!')
    }
})

app.post('/products', async (req, res) => {
    try {
        const product = await new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndUpdate(id, req.body, { new: true }, (error, product) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!product) {
            return res.status(404).json({ message: 'Product not found!' })
        }
        res.status(200).json(product)
    })
})

app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Product deleted")
        }
        throw new Error("Product not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
