import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Atom2Icon',
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
      "class": "icon icon-tabler icon-tabler-atom-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "21.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "9",
        x2: "3",
        y2: "9.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "21",
        y1: "9",
        x2: "21",
        y2: "9.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 20.1a9 9 0 0 1 -5 -7.1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M16 20.1a9 9 0 0 0 5 -7.1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6.2 5a9 9 0 0 1 11.4 0"
      }
    }), " "]);
  }
};