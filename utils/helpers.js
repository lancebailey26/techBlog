module.exports = {
    compareIds: () => {
        var session = req.session.id;
        var id= document.querySelector;

        if (session == id){
        return true
        }
        
},
format_date: (datetime) => {
    // Format date as MM/DD/YYYY
    return datetime.toLocaleString();
    
},

};