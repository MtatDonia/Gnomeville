import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

const ListInhabitants = () => {
    const [gnomes, setGnomes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const navigation = useNavigation();


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            .then(response => response.json())
            .then(data => setGnomes(data.Brastlewark));
    }, []);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = gnomes.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(gnomes.length / itemsPerPage);

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const navigateToDetail = (id) => {
        const selectedGnome = gnomes.find(gnome => gnome.id === id); 
        navigation.navigate('DetailInhabitant', selectedGnome );
    };

    return (
        <Router>
            <div style={{ textAlign: 'center' }}>
                <h1>Population de Brastlewark</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {currentItems.map(gnome => (
                        <div key={gnome.id} style={{ margin: '20px', maxWidth: '300px' }}>
                            <TouchableOpacity onPress={() => navigateToDetail(gnome.id)}>
                                <img src={gnome.thumbnail} alt={gnome.name} />
                            </TouchableOpacity>
                            <h2 style={{ marginTop: '10px' }}>{gnome.name}</h2>
                        </div>
                    ))}
                </div>

                <div style={{ margin: '20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button disabled={currentPage === 1} onClick={goToPreviousPage}>
                        Previous
                    </button>
                    <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={goToNextPage}>
                        Next
                    </button>
                </div>
            </div>
        </Router>
    );
};

export default ListInhabitants;