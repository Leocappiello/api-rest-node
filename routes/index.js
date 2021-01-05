const { Router } = require('express');
const router = Router();

//routes
router.get('/', (req,res) =>{
    res.json({"nombre": "Hola"});
});

router.get('/test', (req,res) =>{
    const data = {
        "name": "Leo",
        "surname": "Cappiello"
    };
    res.json(data);
});

module.exports = router;