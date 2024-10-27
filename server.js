const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Menyajikan file statis

// Data contoh kapal
const vessels = [
    {
        id: 1,
        name: 'Kapal A',
        eta: '2024-10-30T10:00:00Z',
        etd: '2024-10-29T15:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '20ft'
    },
    {
        id: 2,
        name: 'Kapal B',
        eta: '2024-10-31T12:00:00Z',
        etd: '2024-10-30T16:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '40ft'
    },
    {
        id: 3,
        name: 'Kapal C',
        eta: '2024-11-01T09:00:00Z',
        etd: '2024-10-31T14:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: 'Container'
    },
    {
        id: 4,
        name: 'Kapal D',
        eta: '2024-11-02T11:00:00Z',
        etd: '2024-11-01T17:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '30ft'
    },
    {
        id: 5,
        name: 'Kapal E',
        eta: '2024-11-03T15:00:00Z',
        etd: '2024-11-02T18:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '20ft'
    },
    {
        id: 6,
        name: 'Kapal F',
        eta: '2024-11-04T08:00:00Z',
        etd: '2024-11-03T10:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: 'Container'
    },
    {
        id: 7,
        name: 'Kapal G',
        eta: '2024-11-05T14:00:00Z',
        etd: '2024-11-04T12:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '40ft'
    },
    {
        id: 8,
        name: 'Kapal H',
        eta: '2024-11-06T09:00:00Z',
        etd: '2024-11-05T15:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '20ft'
    },
    {
        id: 9,
        name: 'Kapal I',
        eta: '2024-11-07T11:00:00Z',
        etd: '2024-11-06T13:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '30ft'
    },
    {
        id: 10,
        name: 'Kapal J',
        eta: '2024-11-08T10:00:00Z',
        etd: '2024-11-07T14:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: 'Container'
    },
    {
        id: 11,
        name: 'Kapal K',
        eta: '2024-11-09T12:00:00Z',
        etd: '2024-11-08T16:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '40ft'
    },
    {
        id: 12,
        name: 'Kapal L',
        eta: '2024-11-10T09:00:00Z',
        etd: '2024-11-09T11:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '20ft'
    },
    {
        id: 13,
        name: 'Kapal M',
        eta: '2024-11-11T15:00:00Z',
        etd: '2024-11-10T18:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: 'Container'
    },
    {
        id: 14,
        name: 'Kapal N',
        eta: '2024- 11-12T08:00:00Z',
        etd: '2024-11-11T10:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '30ft'
    },
    {
        id: 15,
        name: 'Kapal O',
        eta: '2024-11-13T14:00:00Z',
        etd: '2024-11-12T12:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '40ft'
    },
    {
        id: 16,
        name: 'Kapal P',
        eta: '2024-11-14T09:00:00Z',
        etd: '2024-11-13T15:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '20ft'
    },
    {
        id: 17,
        name: 'Kapal Q',
        eta: '2024-11-15T11:00:00Z',
        etd: '2024-11-14T13:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: 'Container'
    },
    {
        id: 18,
        name: 'Kapal R',
        eta: '2024-11-16T10:00:00Z',
        etd: '2024-11-15T14:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '30ft'
    },
    {
        id: 19,
        name: 'Kapal S',
        eta: '2024-11-17T12:00:00Z',
        etd: '2024-11-16T16:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '40ft'
    },
    {
        id: 20,
        name: 'Kapal T',
        eta: '2024-11-18T09:00:00Z',
        etd: '2024-11-17T11:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '20ft'
    },
    {
        id: 21,
        name: 'Kapal U',
        eta: '2024-11-19T15:00:00Z',
        etd: '2024-11-18T18:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: 'Container'
    },
    {
        id: 22,
        name: 'Kapal V',
        eta: '2024-11-20T08:00:00Z',
        etd: '2024-11-19T10:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '30ft'
    },
    {
        id: 23,
        name: 'Kapal W',
        eta: '2024-11-21T14:00:00Z',
        etd: '2024-11-20T12:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '40ft'
    },
    {
        id: 24,
        name: 'Kapal X',
        eta: '2024-11-22T09:00:00Z',
        etd: '2024-11-21T15:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: '20ft'
    },
    {
        id: 25,
        name: 'Kapal Y',
        eta: '2024-11-23T11:00:00Z',
        etd: '2024-11-22T13:00:00Z',
        from: 'Singapore',
        to: 'Indonesia',
        cargo: 'Container'
    }
];

app.get('/api/vessels', (req, res) => {
    res.json(vessels);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});