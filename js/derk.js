const options = {
    bottom: "3px", // default: '32px'
    right: "17px", // default: '32px'
    left: "unset", // default: 'unset'
    time: "0.9s", // default: '0.3s'
    mixColor: "#fff", // default: '#fff'
    backgroundColor: "#fff", // default: '#fff'
    buttonColorDark: "#100f2c", // default: '#100f2c'
    buttonColorLight: "#fff", // default: '#fff'
    saveInCookies: true, // default: true,
    label: "🌓", // default: ''
    autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(options);

darkmode.showWidget();