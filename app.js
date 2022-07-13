const express = require('express');
const app = express();
const db = require('./config/db');
const User = require('./models/User');

// app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// db.authenticate().then(() => 
//     console.log('Connection Successfully!')
// );  

app.get('/', async (req, res) => {

    var list_data = await User.findAll();

    res.render('backend/pages/index', {
        list_data: list_data
    });
});

app.create

app.get('/edit/:id', async (req, res) => {
        const id = req.params.id;

        const getUser = await User.findOne({
            where: {id: id}
        });

    res.render('backend/pages/edit', {
        value: getUser
    });
});

app.post('/update', async (req, res) => {
    const {username, email, password} = req.body;
    const id = req.params.id;

    const updateUser = await User.update({
        username, email, password
    }, { where: { id:id } });
    await updateUser;
    alert('succes');
    res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
    const id = req.params.id;

    const deleteUser = await User.destroy({
        where: {id: id}
    });
    await deleteUser;

    res.redirect('/');
});












// app.get('/y', async (req, res) => {

//     try {
//         const getAllUser = await User.findAll();

//         res.json(getAllUser);   
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error!');
//     }

// });

// app.post('/store', async (req, res) => {

//     try {
//         const { username, email, password } = req.body;

//         const newUser = new User({
//             username, email, password
//         })
//         await newUser.save();
//         // console.log('hei')
//         res.json(newUser);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error!');
//     }

// });

// app.get('/user/:id', async (req, res) => {

//     try {
//         const id = req.params.id;

//         const getUser = await User.findOne({
//             where: {id: id}
//         });

//         if (!getUser) {
//             res.json('Tidak ada user dengan id ' + id);
//         }

//         res.json(getUser);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error!');
//     }
    
// });

// app.put('/update/:id', async (req, res) => {

//     try {
//         const {username, email, password} = req.body;
//         const id = req.params.id;

//         const updateUser = await User.update({
//             username, email, password
//         }, { where: { id:id } });
//         await updateUser;

//         res.json('User has been update!');
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error!');
//     }
    
// });

// app.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;

//         const deleteUser = await User.destroy({
//             where: {id: id}
//         });
//         await deleteUser;

//         res.json('User has been delete!')
//     } catch (error) {
//         console.error(err.message);
//         res.status(500).send('Server Error!');
//     }
// });

app.listen(8000, () => console.log('Port berjalan di 8000'));