const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.info(`Server berjalan pada ${server.info.uri}`);
};

init();

/*
Object:
{
 id: string,
 title: string,
 createdAt: string,
 updatedAt: string,
 tags: array of string,
 body: string,
},
{
 id: 'notes-V1StGXR8_Z5jdHi6B-myT',
 title: 'Sejarah JavaScript',
 createdAt: '2020-12-23T23:00:09.686Z',
 updatedAt: '2020-12-23T23:00:09.686Z',
 tags: ['NodeJS', 'JavaScript'],
 body: 'JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, \
 yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. \
 Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan \
 para pemrogram yang non-Java.',
},
Request:
{
 "title": "Judul Catatan",
 "tags": ["Tag 1", "Tag 2"],
 "body": "Konten catatan"
}
Response OK:
{
  "status": "success",
  "message": "Catatan berhasil ditambahkan",
  "data": {
    "noteId": "V09YExygSUYogwWJ"
  }
}
Response 500:
{
  "status": "error",
  "message": "Catatan gagal untuk ditambahkan"
}
GET Response 200:
{
  "status": "success",
  "data": {
    "notes": []
  }
}
GET :id Response 200:
{
  "status": "success",
  "data": {
    "note": {
      "id":"notes-V1StGXR8_Z5jdHi6B-myT",
      "title":"Catatan 1",
      "createdAt":"2020-12-23T23:00:09.686Z",
      "updatedAt":"2020-12-23T23:00:09.686Z",
      "tags":[
        "Tag 1",
        "Tag 2"
      ],
      "body":"Isi dari catatan 1"
    }
  }
}
Response 404:
{
  "status": "fail",
  "message": "Catatan tidak ditemukan"
}
PUT :id Response 200:
{
  "title":"Judul Catatan Revisi",
  "tags":[
    "Tag 1",
    "Tag 2"
  ],
  "body":"Konten catatan"
}
{
  "status": "success",
  "message": "Catatan berhasil diperbaharui"
}
{
  "status": "fail",
  "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
}
DELETE :id Response 200
{
  "status": "success",
  "message": "Catatan berhasil dihapus"
}
{
  "status": "fail",
  "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
}
*/
