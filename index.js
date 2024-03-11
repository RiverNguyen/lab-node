const express = require("express");
const engine = require("consolidate");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

// app.set("views", __dirname + "/views");
// app.engine("html", engine.mustache);
// app.set("view engine", "html");

app.get("/", (req, res) => {
  var today = new Date();
  const currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ Nhật";
      break;
    case 1:
      day = "Thứ 2";
      break;
    case 2:
      day = "Thứ 3";
      break;
    case 3:
      day = "Thứ 4";
      break;
    case 4:
      day = "Thứ 5";
      break;
    case 5:
      day = "Thứ 6";
      break;
    case 6:
      day = "Thứ 7";
      break;
    default:
      console.log(`Lỗi : ${currentDay}`);
  }
  res.render("home", {
    day: day,
  });
});

app.get("/shop", (req, res) => {
  const listProducts = [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
      image:
        "https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85",
      description: "Đây là chiếc điện thoại Iphone 12",
    },
    {
      id: 2,
      name: "Iphone 12 Pro",
      price: 1200,
      image:
        "https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85",
      description: "Đây là chiếc điện thoại Iphone 12 Pro",
    },
    {
      id: 3,
      name: "Iphone 12 Pro Max",
      price: 1500,
      image:
        "https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85",
      description: "Đây là chiếc điện thoại Iphone 12 Pro Max ",
    },
  ];
  res.render("shop", {
    listProducts: listProducts,
  });
});

app.get("/add-product", (req, res) => {
  res.render("add-product");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const http = require("http");
// let server = http.createServer((req, res) => {
//     console.log("Khởi tạo server thành công");
// });

// server.listen(3000);
