import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DatabaseIcon',
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
      "class": "icon icon-tabler icon-tabler-database"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("ellipse", {
      attrs: {
        cx: "12",
        cy: "6",
        rx: "8",
        ry: "3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 6v6a8 3 0 0 0 16 0v-6"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 12v6a8 3 0 0 0 16 0v-6"
      }
    }), " "]);
  }
};