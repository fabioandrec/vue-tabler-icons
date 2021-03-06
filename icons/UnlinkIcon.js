import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'UnlinkIcon',
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
      "class": "icon icon-tabler icon-tabler-unlink"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "21",
        x2: "16",
        y2: "19"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19",
        y1: "16",
        x2: "21",
        y2: "16"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "8",
        x2: "5",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "3",
        x2: "8",
        y2: "5"
      }
    }), " "]);
  }
};