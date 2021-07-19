const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
const { Client } = require('pg');
const { response } = require('express');
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "gabut",
    password: "Fatma123",
    port: "5432",
});

client.connect((err) =>{
    if (err) {
        console.error(err);
        return;
    }
    console.log('Database Connected');
});

app.get('/todolist',(req, res) => {
    const query = "SELECT * FROM todolist";
    client.query(query , (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(results.rows);
    });
});

app.post('/todolist', function(req, res) {
    const query = `INSERT INTO todolist VALUES (DEFAULT, '${req.body.task}')`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.send(res);
            return;
        }
        console.log(`Data "${req.body.task}" berhasil dimasukkan`);
        res.send(`Data "${req.body.task}" berhasil dimasukkan`);
    });
});

// app.put('/update/:id', function(req, res) {
//     const query = `UPDATE skincare SET product_name = '${req.body.product_name}', brand = '${req.body.brand}', description = '${req.body.description}', skintype = '${req.body.skintype}', price = '${req.body.price}', rating = '${req.body.rating}' WHERE id = '${req.params.id}'`;
//     client.query(query, (err, results) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log(`Data berhasil diubah`);
//         res.send(`Data berhasil diubah`);
//     });
// });

app.delete('/todolist/:id', function(req, res) {
    const query = `DELETE FROM todolist WHERE id = '${parseInt (req.params.id)}'`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data berhasil dihapus`);
        res.send(`Data berhasil dihapus`);
    });
})

app.get('/homework',(req, res) => {
    const query = "SELECT * FROM homework order by duedate asc";
    client.query(query , (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(results.rows);
    });
});

app.post('/homework', function(req, res) {
    const query = `INSERT INTO homework VALUES (DEFAULT, '${req.body.hwclass}', '${req.body.hwtask}', '${req.body.duedate}')`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.send(res);
            return;
        }
        console.log(`Data "${req.body.hwtask}" berhasil dimasukkan`);
        res.send(`Data "${req.body.hwtask}" berhasil dimasukkan`);
    });
});

app.delete('/homework/:id', function(req, res) {
    const query = `DELETE FROM homework WHERE id = '${parseInt (req.params.id)}'`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data berhasil dihapus`);
        res.send(`Data berhasil dihapus`);
    });
})

app.get('/focus',(req, res) => {
    const query = "SELECT * FROM focus order by id asc";
    client.query(query , (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(results.rows);
    });
});

app.get('/exam',(req, res) => {
    const query = "SELECT * FROM exam order by examdate asc";
    client.query(query , (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(results.rows);
    });
});

app.post('/exam', function(req, res) {
    const query = `INSERT INTO exam VALUES (DEFAULT, '${req.body.examclass}', '${req.body.examdate}')`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.send(res);
            return;
        }
        console.log(`Data "${req.body.examclass}" berhasil dimasukkan`);
        res.send(`Data "${req.body.examclass}" berhasil dimasukkan`);
    });
});

app.delete('/exam/:id', function(req, res) {
    const query = `DELETE FROM exam WHERE id = '${parseInt (req.params.id)}'`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data berhasil dihapus`);
        res.send(`Data berhasil dihapus`);
    });
})

app.put('/focus/:id', function(req, res) {
    const query = `UPDATE focus SET focus = '${req.body.focus}' WHERE id = '${req.params.id}'`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data berhasil diubah`);
        res.send(`Data berhasil diubah`);
    });
});

app.get('/playlist',(req, res) => {
    const query = "SELECT * FROM playlist order by id asc";
    client.query(query , (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(results.rows);
    });
});

app.put('/playlist/:id', function(req, res) {
    const query = `UPDATE playlist SET song = '${req.body.song}' WHERE id = '${req.params.id}'`;
    client.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data berhasil diubah`);
        res.send(`Data berhasil diubah`);
    });
});

//server listening
app.listen(5000, () => {
    console.log(`Program dijalankan di port 5000`);
});