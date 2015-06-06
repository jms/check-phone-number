var CountryDropdown = React.createClass({displayName: "CountryDropdown",
  getInitialState: function(){
    return {data: []};
  },
  render: function () {
    return (
      React.createElement("div", {className: "ui basic dropdown labeled search icon button"}, 
        React.createElement("input", {name: "country", type: "hidden"}), 
        React.createElement("i", {className: "world icon"}), 
        React.createElement("span", {className: "text"}, "Select Country"), 

        React.createElement("div", {className: "menu"}, 
          React.createElement("div", {className: "item", "data-value": "ax"}, React.createElement("i", {className: "ax flag"}), "Aland Islands")

        )
      )
    );
  }
});

React.render(
  React.createElement(CountryDropdown, null),
  document.getElementById('country'),
  function(){
    $('.ui.dropdown').dropdown();
  }
);