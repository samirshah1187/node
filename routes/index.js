exports.index = function (req, res) {
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Samir', 'Ashit', 'Vaibhav', 'Viral']
    });
};

exports.about = function (req, res) {
    res.render('about', {
        title: 'About us',
        classname: 'about'
    });
};