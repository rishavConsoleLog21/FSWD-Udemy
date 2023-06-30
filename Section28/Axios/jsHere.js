const getSWPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }
    catch (e) {
        console.log('Error', e);
    }
};

getSWPerson(1);
getSWPerson(5);
getSWPerson(21);