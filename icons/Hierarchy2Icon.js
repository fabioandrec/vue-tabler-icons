import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Hierarchy2Icon',
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
      "class": "icon icon-tabler icon-tabler-hierarchy-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 3h4v4h-4z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 17h4v4h-4z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 17h4v4h-4z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 17l5 -4l5 4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "7",
        x2: "12",
        y2: "13"
      }
    }), " "]);
  }
};