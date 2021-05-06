const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

const router = express.Router()
const saltRounds = process.env.SALT_ROUNDS || 10

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    })

    if (!user) {
      res.status(404).send('usuário não existe')
    }

    const verifyPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    )

    if (verifyPassword) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email
      })
    } else {
      res.status(403).send('senha incorreta')
    }
  } catch (error) {
    console.error(error.stack, error.message)
    res.status(500).json(error)
  }
}

router.post('/login', login)

module.exports = router
