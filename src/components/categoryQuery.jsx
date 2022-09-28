import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const categoryList = () => {
    const [category, setCategory] = useState('');

    useEffect(()) => {
        axios
        .get("https://be-games-project-tm.herokuapp.com/api/categories")
        .then(() => {
            
        })
    }
}