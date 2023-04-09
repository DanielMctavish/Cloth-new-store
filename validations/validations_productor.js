     
const validation_productor = (req, res, next) => {
    const {
        shop_name,
        shop_description,
        productor_name,
        productor_email,
        productor_password,
        productor_confirm_password
    } = req.body

    if (typeof shop_name !== "string" || !shop_name) return res.status(500).send('o nome da loja é inválido')
    if (typeof shop_description !== "string" || !shop_description) return res.status(500).send('a descrição é inválida')
    if (typeof productor_name !== "string" || !productor_name) return res.status(500).send('o nome do produtor é inválido')
    if (typeof productor_email !== "string" || !productor_email) return res.status(500).send('o email do produtor é inválido')
    if (typeof productor_password !== "string" || !productor_password) return res.status(500).send('a senha do produtor é inválida')
    if (productor_password != productor_confirm_password) return res.status(500)
        .send('as senhas não correspondem')

    next()
}

module.exports = validation_productor;