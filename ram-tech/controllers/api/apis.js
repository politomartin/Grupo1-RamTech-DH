const db = require("../../database/models")

const controller = {
    allProducts: async (req, res) => {
        let products = await db.Product.findAll({
            include: ["categories", "brands", "product_images"],
            order: [["id","ASC"]]
        })

        let categories = await db.Category.findAll({ include: ["products"] })

        let allCategories = categories.map(category => ({
            name: category.name,
            total: category.products.length
        }))

        let allProducts = products.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            discount: product.discount,
            description: product.description,
            images: product.product_images,
            brands_id: product.brands,
            categories_id: product.categories,
            detail: `/api/product/${product.id}`
        }))

        return res.status(200).json({
            count: allProducts.length,
            dataProducts: allProducts,
            dataCategories: allCategories,
            status: 200
        })
    },

    productById: async (req, res) => {
        let products = await db.Product.findByPk(req.params.id, {
            include: ["categories", "product_images"]
        })
        return res.status(200).json({
            data: products,
            status: 200
        })
    },

    allUsers: async (req, res) => {
        let users = await db.User.findAll()

        let allUsers = users.map(user => ({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            image: `/images/images-users/${user.image}`,
            detail: `/api/user/${user.id}`
        }))

        return res.status(200).json({
            count: allUsers.length,
            data: allUsers,
            status: 200
        })
    },

    userById: async (req, res) => {
        let user = await db.User.findByPk(req.params.id)

        return res.status(200).json({
            data: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                image: `/images/images-users/${user.image}`,
                detail: `/api/user/${user.id}`
            },
            status: 200
        })
    },
    

}

module.exports = controller;