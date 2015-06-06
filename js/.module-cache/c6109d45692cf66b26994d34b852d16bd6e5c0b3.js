var CountryDropdown = React.createClass({displayName: "CountryDropdown",
  render: function () {
    return (
      React.createElement("div", {className: "ui basic dropdown labeled search icon button"}, 
        React.createElement("input", {name: "country", type: "hidden"}), 
        React.createElement("i", {className: "world icon"}), 
        React.createElement("span", {className: "text"}, "Select Country"), 

        React.createElement("div", {className: "menu"}, 
          React.createElement("div", {className: "item", "data-value": "ax"}, React.createElement("i", {className: "ax flag"}), "Aland Islands"), 
          React.createElement("div", {className: "item", "data-value": "az"}, React.createElement("i", {className: "az flag"}), "Azerbaijan"), 
          React.createElement("div", {className: "item", "data-value": "ba"}, React.createElement("i", {className: "ba flag"}), "Bosnia"), 
          React.createElement("div", {className: "item", "data-value": "bb"}, React.createElement("i", {className: "bb flag"}), "Barbados"), 
          React.createElement("div", {className: "item", "data-value": "bd"}, React.createElement("i", {className: "bd flag"}), "Bangladesh"), 
          React.createElement("div", {className: "item", "data-value": "be"}, React.createElement("i", {className: "be flag"}), "Belgium"), 
          React.createElement("div", {className: "item", "data-value": "bf"}, React.createElement("i", {className: "bf flag"}), "Burkina Faso"), 
          React.createElement("div", {className: "item", "data-value": "bg"}, React.createElement("i", {className: "bg flag"}), "Bulgaria"), 
          React.createElement("div", {className: "item", "data-value": "bh"}, React.createElement("i", {className: "bh flag"}), "Bahrain"), 
          React.createElement("div", {className: "item", "data-value": "bi"}, React.createElement("i", {className: "bi flag"}), "Burundi"), 
          React.createElement("div", {className: "item", "data-value": "bj"}, React.createElement("i", {className: "bj flag"}), "Benin"), 
          React.createElement("div", {className: "item", "data-value": "bm"}, React.createElement("i", {className: "bm flag"}), "Bermuda"), 
          React.createElement("div", {className: "item", "data-value": "bn"}, React.createElement("i", {className: "bn flag"}), "Brunei"), 
          React.createElement("div", {className: "item", "data-value": "bo"}, React.createElement("i", {className: "bo flag"}), "Bolivia")
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