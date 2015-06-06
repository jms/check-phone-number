var CountryDropdown = React.createClass({displayName: "CountryDropdown",
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
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