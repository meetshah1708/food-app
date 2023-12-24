import chola from "../images/chola.jpg"
//const express = require('express');
const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema(
    {
        id: 1,
        name: "Chole Bature",
        img: chola,
        options: {
            half: 120,
            full:230,
        },
        description: "    it is made with authentic INDIAN masalas . The tastei too Good!! "
    },
    {
        id: 1,
        name: "Chole Bature",
        img: chola,
        options: {
            half: 120,
            full:230,
        },
        description: "    it is made with authentic INDIAN masalas . The tastei too Good!! "
    },
    {
        id: 1,
        name: "Chole Bature",
        img: chola,
        options: {
            half: 120,
            full:230,
        },
        description: "    it is made with authentic INDIAN masalas . The tastei too Good!! "
    },
    {
        id: 1,
        name: "Chole Bature",
        img: chola,
        options: {
            half: 120,
            full:230,
        },
        description: "    it is made with authentic INDIAN masalas . The tastei too Good!! "
    },
    {
        id: 1,
        name: "Chole Bature",
        img: chola,
        options: {
            half: 120,
            full:230,
        },
        description: "    it is made with authentic INDIAN masalas . The taste is too Good!! "
    }

)
const fooddata = new mongoose.model("fooddata", foodSchema);
module.exports(fooddata);