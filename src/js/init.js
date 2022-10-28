var title = document.getElementById('title').innerHTML;
document.getElementById('showTitle').innerHTML = title;
// package = require('./package.json');

// var theme = package.Theme;

const settings = require(`./src/themes/dark.json`);

var body = document.body.style;
var nav = document.getElementById('nav-0').style;
var toggler = document.getElementById('togglers').style;
var Minimize = document.getElementById('minimizeBtn').style;
var Maximize = document.getElementById('maximizeBtn').style;
var Close = document.getElementById('closeBtn').style;
var title = document.getElementById('showTitle').style;

var styles = `
<style>
    #togglers>#minimizeBtn:hover{
        background-color: ${settings.Toggler.Minimize.Background.Hover};
        color: ${settings.Toggler.Minimize.Color.Hover}
    }
    #togglers>#maximizeBtn:hover{
        background-color: ${settings.Toggler.Maximize.Background.Hover};
        color: ${settings.Toggler.Maximize.Color.Hover}
    }
    #togglers>#closeBtn:hover{
        background-color: ${settings.Toggler.Close.Background.Hover};
        color: ${settings.Toggler.Close.Color.Hover};
    }
    #togglers>#maximizeBtn>span::before,#togglers>#maximize>span::after{
        border: 2px solid ${settings.Toggler.Maximize.Color.Static};
    }
    #togglers>#maximizeBtn>span::before{
        background-color: ${settings.Toggler.Maximize.Background.Static};
    }
    #togglers>#maximizeBtn:hover>span::before{
        background-color: ${settings.Toggler.Maximize.Background.Hover};
    }
    </style>
`;

document.getElementById('head').innerHTML += styles;

// body.backgroundColor = settings.Background;
body.color = settings.TextColor;

nav.backgroundColor = settings.navBackground;

toggler.backgroundColor = settings.Toggler.Background;

Minimize.BackgroundColor = settings.Toggler.Minimize.Background.Static;
Minimize.Color = settings.Toggler.Minimize.Color.Static;

Maximize.BackgroundColor = settings.Toggler.Maximize.Background.Static;
Maximize.Color = settings.Toggler.Maximize.Color.Static;

Close.BackgroundColor = settings.Toggler.Close.Background.Static;
Close.Color = settings.Toggler.Close.Color.Static;

title.fontWeight = settings.Title.FontWeight;
title.fontFamily = settings.Title.FontFamily;