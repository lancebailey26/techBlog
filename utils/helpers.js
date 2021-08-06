module.exports = {
    compareIds: () => {
        var session = req.session.id;
        var blogger = blogger_id;

        if (session == blogger){
        return true
        }
        
},
format_date: (datetime) => {
    // Format date as MM/DD/YYYY
    return datetime.toLocaleString();
    
}
}