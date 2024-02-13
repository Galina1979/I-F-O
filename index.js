const dateStyle = {
    fontSize: '20pt', // Размер шрифта даты
};
const Movie = function(){
    return React.createElement('div', {}, [
        React.createElement("h1", {}, 'Плешкова Галина Владимировна'),
        React.createElement("div", {style: dateStyle}, '14.09.1979'),
        React.createElement("div", {style: dateStyle}, 'ribka.14@mail.ru'),
    ])
}
const App = function(){
    return React.createElement('div', {}, [
        React.createElement(Movie)
    ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'));
