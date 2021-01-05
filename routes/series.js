const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const series = require('../sample.json');


router.get('/', (req, res) =>{
   res.json(series);
});

router.post('/', (req, res) =>{
    const {title, director, year}  = req.body;
    if(title && director && year){
        const id = series.length + 1;
        const newSerie = {...req.body, id};
        series.push(newSerie);
        res.json(series);
    } else {
        res.json('Error');
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(series, (serie, i) => {
            if (serie.id == id) {
                series.splice(i, 1);
            }
        });
        res.json(series);
    }
});

router.put('/:id', (req, res) => {
    const {id}  = req.params;
    const { title, director, year}  = req.body;
    if( title && director && year ){
        if (serie.id == id) {
            serie.title = title;
            serie.director = director;
            serie.year = year;
        }
        
        res.json(series);
    } else {
        res.status(500).json({error: 'Error'})
    }
});

module.exports = router;