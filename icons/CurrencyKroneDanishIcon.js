import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CurrencyKroneDanishIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-currency-krone-danish"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 6v12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 12c3.5 0 6 -3 6 -6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 12c3.5 0 6 3 6 6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 10v8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 10a4 4 0 0 0 -4 4"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 18.01v-.01"
      }
    }), " "]);
  }
};