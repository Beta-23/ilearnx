'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IlearnxApp = function (_React$Component) {
    _inherits(IlearnxApp, _React$Component);

    function IlearnxApp(props) {
        _classCallCheck(this, IlearnxApp);

        var _this = _possibleConstructorReturn(this, (IlearnxApp.__proto__ || Object.getPrototypeOf(IlearnxApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePickOptions = _this.handlePickOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }
    // Event handler


    _createClass(IlearnxApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
        // Event handler

    }, {
        key: 'handlePickOptions',
        value: function handlePickOptions() {
            var _this2 = this;

            this.setState(function () {
                var randomNum = Math.floor(Math.random() * _this2.state.options.length);
                var option = _this2.state.options[randomNum];
                return alert('Our pick is: ' + option);
            });
        }
        // Event handler from child

    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid value for language choice!';
            } else if (this.state.options.indexOf(option) > -1) {
                return alert('This language is already in you choices!');
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'iLearnx App';
            var subtitle = 'Let an al·go·rithm show your learning path!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePickOptions: this.handlePickOptions
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement('br', null),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IlearnxApp;
}(React.Component);

// stateless functional component for User


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// stateless functional component for User
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePickOptions,
                disabled: !props.hasOptions
            },
            'What langueage should I learn?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(Option, null),
        React.createElement(
            'p',
            null,
            props.options.length > 0 ? 'Here Are Your Options:' : 'No Options!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement('br', null),
        React.createElement(
            'button',
            {
                disabled: props.options.length === 0,
                onClick: props.handleDeleteOptions
            },
            'Remove All'
        )
    );
};

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <Option />
//                 <p>{this.props.options.length > 0 ? 'Here Are Your Options:' : 'No Options!'}</p>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 } 
//                 <br />
//                 <button 
//                     disabled={this.props.options.length === 0} 
//                     onClick={this.props.handleDeleteOptions}
//                     >
//                     Remove All
//                 </button>
//             </div>
//         );
//     }
// }

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Your Langueage Choice'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// stateless functional component for User
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(IlearnxApp, null), document.getElementById('app'));
