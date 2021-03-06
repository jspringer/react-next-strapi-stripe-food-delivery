webpackHotUpdate("static/development/pages/restaurants.js",{

/***/ "./components/Cart/Cart.js":
/*!*********************************!*\
  !*** ./components/Cart/Cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hocs/defaultPage */ "./hocs/defaultPage.js");
/* harmony import */ var _Context_AppProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Context/AppProvider */ "./components/Context/AppProvider.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");





var _jsxFileName = "/Users/j/Development/Projects/react-nextjs-strapi-stripe-food-delivery/frontend/components/Cart/Cart.js";


/* components/Cart/Cart.js */








var Cart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart, _React$Component);

  function Cart(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cart).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "addItem",
    value: function addItem(item) {
      this.props.context.addItem(item);
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this.props.context.removeItem(item);
    }
  }, {
    key: "clearItems",
    value: function clearItems(items) {
      this.props.context.clearItems(items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var items = this.props.context.items;
      var isAuthenticated = this.props.isAuthenticated;
      console.log(isAuthenticated);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        style: {
          padding: "10px 5px"
        },
        className: "cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardTitle"], {
        style: {
          margin: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Your Order:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], {
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: 6
        },
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Items:")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, items ? items.map(function (item) {
        if (item.quantity > 0) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              marginBottom: 15
            },
            key: item.id,
            className: "jsx-3176042969" + " " + "items-one",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            id: "item-price",
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "\xA0 $", item.price), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            id: "item-name",
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, "\xA0 ", item.name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 5,
              marginLeft: 10
            },
            onClick: _this.addItem.bind(_this, item),
            color: "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, "+"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 10
            },
            onClick: _this.removeItem.bind(_this, item),
            color: "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, "-"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity",
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, item.quantity, "x")));
        }
      }) : null, this.props.isAuthenticated ? items.length > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
        style: {
          width: 200,
          padding: 10
        },
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        style: {
          fontWeight: 100,
          color: "gray"
        },
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Total:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "$", this.props.context.total)), this.props.router.pathname != "/checkout" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginTop: 10,
          marginRight: 10
        },
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        style: {
          width: "100%"
        },
        outline: true,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Order"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        style: {
          width: "100%"
        },
        outline: true,
        color: "danger",
        onClick: this.clearItems.bind(this, items),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Clear Cart"))) : null) : null : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Login to Order")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3176042969",
        __self: this
      }, "#item-price.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3176042969{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHRqcy1zdHJhcGktc3RyaXBlLWZvb2QtZGVsaXZlcnkvZnJvbnRlbmQvY29tcG9uZW50cy9DYXJ0L0NhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0lvQixBQUc2QixBQUlDLEFBS0QsZ0JBUlUsQUFTQSxDQUxQLG1CQUNVLEdBSi9CLEFBU0EsdUJBSkEiLCJmaWxlIjoiL1VzZXJzL2ovRGV2ZWxvcG1lbnQvUHJvamVjdHMvcmVhY3QtbmV4dGpzLXN0cmFwaS1zdHJpcGUtZm9vZC1kZWxpdmVyeS9mcm9udGVuZC9jb21wb25lbnRzL0NhcnQvQ2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbXBvbmVudHMvQ2FydC9DYXJ0LmpzICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkZWZhdWx0UGFnZSBmcm9tIFwiLi4vLi4vaG9jcy9kZWZhdWx0UGFnZVwiO1xuaW1wb3J0IHsgd2l0aENvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC9BcHBQcm92aWRlclwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIEJhZGdlXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbSkge1xuICAgIHRoaXMucHJvcHMuY29udGV4dC5hZGRJdGVtKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtKSB7XG4gICAgdGhpcy5wcm9wcy5jb250ZXh0LnJlbW92ZUl0ZW0oaXRlbSk7XG4gIH1cblxuICBjbGVhckl0ZW1zKGl0ZW1zKSB7XG4gICAgdGhpcy5wcm9wcy5jb250ZXh0LmNsZWFySXRlbXMoaXRlbXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHMuY29udGV4dDtcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhpc0F1dGhlbnRpY2F0ZWQpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHggNXB4XCIgfX0gY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2l0ZW1zXG4gICAgICAgICAgICAgICAgPyBpdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiZuYnNwOyAke2l0ZW0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkSXRlbS5iaW5kKHRoaXMsIGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX14XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWQgPyAoXG4gICAgICAgICAgICAgICAgaXRlbXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBzdHlsZT17eyB3aWR0aDogMjAwLCBwYWRkaW5nOiAxMCB9fSBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPiR7dGhpcy5wcm9wcy5jb250ZXh0LnRvdGFsfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlci5wYXRobmFtZSAhPSBcIi9jaGVja291dFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG91dGxpbmUgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+T3JkZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG91dGxpbmUgY29sb3I9XCJkYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmNsZWFySXRlbXMuYmluZCh0aGlzLCBpdGVtcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNsZWFyIENhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDU+TG9naW4gdG8gT3JkZXI8L2g1PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2l0ZW0tcHJpY2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoQ29udGV4dCxcbiAgZGVmYXVsdFBhZ2UsXG4gIHdpdGhSb3V0ZXJcbikoQ2FydCk7XG4iXX0= */\n/*@ sourceURL=/Users/j/Development/Projects/react-nextjs-strapi-stripe-food-delivery/frontend/components/Cart/Cart.js */"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_9__["compose"])(_Context_AppProvider__WEBPACK_IMPORTED_MODULE_8__["withContext"], _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_7__["default"], next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Cart));

/***/ })

})
//# sourceMappingURL=restaurants.js.8baa4f1c0ddd20684aa5.hot-update.js.map