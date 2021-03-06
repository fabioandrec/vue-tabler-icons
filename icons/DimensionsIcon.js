import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DimensionsIcon',
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
      "class": "icon icon-tabler icon-tabler-dimensions"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 5h11"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7l2 -2l-2 -2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 3l-2 2l2 2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 10v11"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 19l2 2l2 -2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M21 12l-2 -2l-2 2"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "10",
        width: "11",
        height: "11",
        rx: "2"
      }
    }), " "]);
  }
};