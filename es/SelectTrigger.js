import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import Trigger from 'rc-trigger';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DropdownMenu from './DropdownMenu';
import ReactDOM from 'react-dom';
import { isSingleMode } from './util';

Trigger.displayName = 'Trigger';

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger = function (_React$Component) {
  _inherits(SelectTrigger, _React$Component);

  function SelectTrigger() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectTrigger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectTrigger.__proto__ || Object.getPrototypeOf(SelectTrigger)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dropdownWidth: null
    }, _this.setDropdownWidth = function () {
      var visible = _this.props.visible;

      if (visible) {
        var width = ReactDOM.findDOMNode(_this).offsetWidth;
        if (width !== _this.state.dropdownWidth) {
          _this.setState({ dropdownWidth: width });
        }
      }
    }, _this.getInnerMenu = function () {
      return _this.popupMenu && _this.popupMenu.refs.menu;
    }, _this.getPopupDOMNode = function () {
      return _this.refs.trigger.getPopupDomNode();
    }, _this.getDropdownElement = function (newProps) {
      var props = _this.props;
      return React.createElement(DropdownMenu, _extends({
        ref: _this.saveMenu
      }, newProps, {
        prefixCls: _this.getDropdownPrefixCls(),
        onMenuSelect: props.onMenuSelect,
        onMenuDeselect: props.onMenuDeselect,
        value: props.value,
        firstActiveValue: props.firstActiveValue,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        dropdownFooter: props.dropdownFooter,
        dropdownHeader: props.dropdownHeader,
        enableHideDropdownByClick: props.enableHideDropdownByClick,
        onPopupVisibleChange: props.onDropdownVisibleChange
      }));
    }, _this.getDropdownTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = _this.getDropdownPrefixCls() + '-' + props.animation;
      }
      return transitionName;
    }, _this.getDropdownPrefixCls = function () {
      return _this.props.prefixCls + '-dropdown';
    }, _this.saveMenu = function (menu) {
      _this.popupMenu = menu;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setDropdownWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setDropdownWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _popupClassName;

      var _props = this.props,
          onPopupFocus = _props.onPopupFocus,
          props = _objectWithoutProperties(_props, ['onPopupFocus']);

      var multiple = props.multiple,
          visible = props.visible,
          inputValue = props.inputValue,
          dropdownAlign = props.dropdownAlign,
          disabled = props.disabled,
          showSearch = props.showSearch,
          dropdownClassName = props.dropdownClassName,
          dropdownStyle = props.dropdownStyle,
          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;

      var dropdownPrefixCls = this.getDropdownPrefixCls();
      var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
      var popupElement = this.getDropdownElement({
        menuItems: props.options,
        onPopupFocus: onPopupFocus,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      });
      var hideAction = void 0;
      if (disabled) {
        hideAction = [];
      } else if (isSingleMode(props) && !showSearch) {
        hideAction = ['click'];
      } else {
        hideAction = ['blur'];
      }
      var popupStyle = _extends({}, dropdownStyle);
      var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
      if (this.state.dropdownWidth) {
        popupStyle[widthProp] = this.state.dropdownWidth + 'px';
      }

      return React.createElement(
        Trigger,
        _extends({}, props, {
          showAction: disabled ? [] : ['click'],
          hideAction: hideAction,
          ref: 'trigger',
          popupPlacement: 'bottomLeft',
          builtinPlacements: BUILT_IN_PLACEMENTS,
          prefixCls: dropdownPrefixCls,
          popupTransitionName: this.getDropdownTransitionName(),
          onPopupVisibleChange: props.onDropdownVisibleChange,
          popup: popupElement,
          popupAlign: dropdownAlign,
          popupVisible: visible,
          getPopupContainer: props.getPopupContainer,
          popupClassName: classnames(popupClassName),
          popupStyle: popupStyle
        }),
        props.children
      );
    }
  }]);

  return SelectTrigger;
}(React.Component);

SelectTrigger.propTypes = {
  onPopupFocus: PropTypes.func,
  dropdownMatchSelectWidth: PropTypes.bool,
  dropdownAlign: PropTypes.object,
  visible: PropTypes.bool,
  disabled: PropTypes.bool,
  showSearch: PropTypes.bool,
  dropdownClassName: PropTypes.string,
  multiple: PropTypes.bool,
  inputValue: PropTypes.string,
  filterOption: PropTypes.any,
  options: PropTypes.any,
  prefixCls: PropTypes.string,
  popupClassName: PropTypes.string,
  children: PropTypes.any,
  dropdownFooter: PropTypes.any,
  dropdownHeader: PropTypes.any
};
export default SelectTrigger;


SelectTrigger.displayName = 'SelectTrigger';