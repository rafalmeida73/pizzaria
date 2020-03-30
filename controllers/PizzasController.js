const pizzas = require('../database/Pizzas.json');

module.exports = {
    index: (req, res) => {
        res.render('index', { pizzas });
    },
    show: (req, res) => {
        let pizza = pizzas.find(pizza => pizza.id == req.params.id);

        if (pizza) {
            res.render("pizza", { pizza });
        } else {
            res.render("erros/pizzaNaoEncontrada", { id: req.params.id });
        }
    }

}