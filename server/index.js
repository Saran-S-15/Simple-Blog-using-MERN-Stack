const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/connectDB");
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5001;
const jwt = require('jsonwebtoken');
const SECRET_KEY = "puorwehfasjdkxbcnv";
const { BlogModel } = require("./models/Blog");
const { UserRegisterModel } = require("./models/UserRegister");


const app = express();
app.use(cors({ origin: "https://blog-deployment-client.onrender.com" }));
app.use(express.json());

function authenticate(req, res, next) {
    try {
        if (req.headers.authorization) {
            let payload = jwt.verify(req.headers.authorization, SECRET_KEY);
            if (payload) {
                next();
            }
            else {
                res.status(401).json({ message: "Unauthorized" })
            }
        }
        else {
            res.status(401).json({ message: "Unauthorized" })
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Unauthorized" })
    }

}

app.post("/register", async function (req, res) {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.Password, salt);
        req.body.Password = hash;
        const user = new UserRegisterModel(req.body);
        await user.save();
        res.json({ message: "User Registration Successfull" });
    } catch (error) {
        console.error("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

app.post("/login", async function (req, res) {
    const { Email, Password } = req.body;
    let user = await UserRegisterModel.findOne({ Email: Email });
    if (user) {
        const isPassword = bcrypt.compareSync(Password, user.Password);
        if (isPassword) {
            const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "10d" });
            res.json({ token });
        }
        else {
            res.status(401).json({ message: "Incorrect Password" })
        }
    }
    else {
        res.status(401).json({ message: "User not found" })
    }
})

app.post("/blog", authenticate, async function (req, res) {
    try {
        const blog = BlogModel(req.body);
        await blog.save();
        res.json({ message: "Blog created successfully", blog });
    } catch (error) {
        console.error("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

app.get("/blogs", authenticate, async function (req, res) {
    try {
        const blogs = await BlogModel.find({});
        res.json(blogs);
    } catch (error) {
        console.error("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

app.get("/blogId/:id", authenticate, async function (req, res) {
    try {
        const blog = await BlogModel.findOne({ _id: req.params.id })
        res.json(blog);
    } catch (error) {
        console.error("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

app.delete("/deleteBlog/:id", authenticate, async function (req, res) {
    try {
        const blog = await BlogModel.deleteOne({ _id: req.params.id })
        res.json(blog);
    } catch (error) {
        console.error("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

app.put("/editBlog/:id", authenticate, async function (req, res) {
    try {
        const blog = await BlogModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
        res.json(blog)
    } catch (error) {
        console.error("Something went wrong", error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

app.listen(PORT, () => {
    console.log(`Server is Running Succesfully on Port ${PORT}`);
    connectDB();
})
