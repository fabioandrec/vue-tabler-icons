import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ColumnsIcon',
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
      "class": "icon icon-tabler icon-tabler-columns"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "6",
        x2: "9.5",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "10",
        x2: "9.5",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "14",
        x2: "9.5",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "18",
        x2: "9.5",
        y2: "18"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14.5",
        y1: "6",
        x2: "20",
        y2: "6"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14.5",
        y1: "10",
        x2: "20",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14.5",
        y1: "14",
        x2: "20",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14.5",
        y1: "18",
        x2: "20",
        y2: "18"
      }
    }), " "]);
  }
};