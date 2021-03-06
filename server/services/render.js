const axios = require('axios');



exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://shreyas-ghosalkar.github.io//api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('https://shreyas-ghosalkar.github.io//api/users', { params : { id : req.query.name }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.coin_details = (req, res) =>{
    axios.get('https://shreyas-ghosalkar.github.io//api/users', { params : { id
     : req.query.id }})
    .then(function(userdata){
        res.render("coin_details", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.search = (req, res) =>{
    axios.get('https://shreyas-ghosalkar.github.io//api/users',{ params : { name
    : req.query.name }})
        .then(function(response){
            res.render("search", { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        
    })
}

